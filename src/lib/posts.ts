import { getCollection } from 'astro:content';
import { XMLParser } from 'fast-xml-parser';
import { site } from '../data/site';

export type UnifiedPost = {
  source: 'local' | 'others' | 'medium';
  title: string;
  href: string; // internal slug for local, external url otherwise
  date: Date;
  category: string;
  tags: string[];
  summary: string;
  thumbnail?: string; // image url (medium remote / others local path)
  readingTime?: number;
};

// Blog ordering: local first, then others, then medium.
const SOURCE_RANK: Record<UnifiedPost['source'], number> = { local: 0, others: 1, medium: 2 };

const WORDS_PER_MIN = 220;

export function readingTime(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MIN));
}

function stripHtml(html: string): string {
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

function firstImage(html: string): string | undefined {
  const m = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return m?.[1];
}

/** Local Markdown posts (excludes drafts in production). */
export async function getLocalPosts(): Promise<UnifiedPost[]> {
  const entries = await getCollection('writeups', ({ data }) =>
    import.meta.env.PROD ? data.draft !== true : true
  );
  return entries.map((e) => ({
    source: 'local' as const,
    title: e.data.title,
    href: `/blog/${e.id}`,
    date: e.data.date,
    category: e.data.category,
    tags: e.data.tags,
    summary: e.data.summary,
    readingTime: readingTime(e.body ?? ''),
  }));
}

/** External write-up collections / sites (the "Others" source). */
export async function getExternalPosts(): Promise<UnifiedPost[]> {
  const entries = await getCollection('external');
  return entries.map((e) => ({
    source: 'others' as const,
    title: e.data.title,
    href: e.data.url,
    date: e.data.date ?? new Date(0),
    category: e.data.category,
    tags: e.data.tags,
    summary: e.data.summary,
    thumbnail: e.data.image,
  }));
}

/**
 * Medium posts fetched at BUILD time. Any failure (network, parse, timeout)
 * returns an empty array so the build never breaks.
 */
export async function getMediumPosts(): Promise<UnifiedPost[]> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    const res = await fetch(site.mediumFeed, {
      signal: controller.signal,
      headers: { 'User-Agent': 'pakcyberbot-portfolio-build' },
    });
    clearTimeout(timeout);
    if (!res.ok) throw new Error(`Medium feed HTTP ${res.status}`);
    const xml = await res.text();

    const parser = new XMLParser({ ignoreAttributes: false, cdataPropName: '__cdata' });
    const feed = parser.parse(xml);
    const rawItems = feed?.rss?.channel?.item ?? [];
    const items = Array.isArray(rawItems) ? rawItems : [rawItems];

    return items
      .map((item: any): UnifiedPost | null => {
        const title = unwrap(item?.title);
        const link = unwrap(item?.link);
        if (!title || !link) return null;
        const content = unwrap(item?.['content:encoded']) ?? unwrap(item?.description) ?? '';
        const cats = item?.category
          ? (Array.isArray(item.category) ? item.category : [item.category]).map(unwrap).filter(Boolean)
          : [];
        const text = stripHtml(content);
        return {
          source: 'medium' as const,
          title,
          href: cleanUrl(link),
          date: item?.pubDate ? new Date(item.pubDate) : new Date(),
          category: 'Medium',
          tags: cats.slice(0, 4) as string[],
          summary: text.slice(0, 180).trim() + (text.length > 180 ? '…' : ''),
          thumbnail: firstImage(content),
        };
      })
      .filter((x): x is UnifiedPost => x !== null);
  } catch (err) {
    console.warn('[medium] feed fetch failed, continuing without it:', (err as Error).message);
    return [];
  }
}

function unwrap(v: any): string | undefined {
  if (v == null) return undefined;
  if (typeof v === 'string') return v;
  if (typeof v === 'object' && '__cdata' in v) return String(v.__cdata);
  if (typeof v === 'object' && '#text' in v) return String(v['#text']);
  return String(v);
}

function cleanUrl(u: string): string {
  return u.split('?')[0];
}

export async function getAllPosts(): Promise<UnifiedPost[]> {
  const [local, others, medium] = await Promise.all([
    getLocalPosts(),
    getExternalPosts(),
    getMediumPosts(),
  ]);
  // Order by source (local -> others -> medium), then newest first within each.
  return [...local, ...others, ...medium].sort((a, b) => {
    const r = SOURCE_RANK[a.source] - SOURCE_RANK[b.source];
    return r !== 0 ? r : b.date.getTime() - a.date.getTime();
  });
}
