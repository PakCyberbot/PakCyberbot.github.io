import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getLocalPosts } from '../lib/posts';
import { site } from '../data/site';

export async function GET(context: APIContext) {
  const posts = await getLocalPosts();
  return rss({
    title: `${site.name} — Blog`,
    description: 'Write-ups, OSCP notes and security articles by PakCyberbot.',
    site: context.site ?? site.url,
    items: posts.map((p) => ({
      title: p.title,
      link: p.href,
      pubDate: p.date,
      description: p.summary,
      categories: [p.category, ...p.tags],
    })),
    customData: `<language>en-us</language>`,
  });
}
