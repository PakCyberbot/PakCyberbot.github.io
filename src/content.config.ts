import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

/**
 * Local blog posts / writeups.
 * Add a new post by dropping a Markdown file into src/content/writeups/.
 * Categories are free-form strings so new ones are trivial to add; the three
 * used today are "OSCP Notes", "CTF Writeups", and "Notes".
 */
const writeups = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writeups' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      category: z.string(),
      tags: z.array(z.string()).default([]),
      summary: z.string(),
      cover: image().optional(),
      draft: z.boolean().default(false),
    }),
});

/**
 * Achievements & recognition (CTFs, bug bounty / CVEs, community).
 * Edit src/content/achievements.yaml — no component changes needed.
 */
const achievements = defineCollection({
  loader: file('./src/content/achievements.yaml'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    category: z.enum(['ctf', 'bugbounty', 'cve', 'community']),
    issuer: z.string().optional(),
    event: z.string().optional(),
    placement: z.string().optional(),
    team: z.string().optional(),
    year: z.union([z.number(), z.string()]),
    description: z.string().optional(),
    url: z.string().optional(),
    icon: z.string().default('trophy'),
    featured: z.boolean().default(false),
    rank: z.number().default(99),
  }),
});

/**
 * Significant certifications only (badge cards).
 * Minor / course-completion certs are NOT listed here — they live in the
 * repo's /certificates directory linked from the "View all certificates" button.
 */
const certifications = defineCollection({
  loader: file('./src/content/certifications.yaml'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    abbr: z.string(),
    issuer: z.string(),
    year: z.number(),
    credentialUrl: z.string().optional(),
    description: z.string(),
    // Badge image to render. Drop a PNG in public/badges/ and set its path here.
    logo: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

/**
 * WORK — Projects. `image` is a path to a file in public/work/ (editable in YAML).
 */
const projects = defineCollection({
  loader: file('./src/content/projects.yaml'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    github: z.string().optional(),
    demo: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

/**
 * WORK — Challenges & labs I authored or contributed (HackTheBox, TryHackMe, ...).
 * `platform` drives the icon. Edit src/content/challenges.yaml.
 */
const challenges = defineCollection({
  loader: file('./src/content/challenges.yaml'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    platform: z.enum(['hackthebox', 'tryhackme', 'other']).default('other'),
    kind: z.string().optional(), // e.g. "Challenge", "Sherlock", "Room", "Lab"
    difficulty: z.string().optional(),
    url: z.string(),
    description: z.string().optional(),
  }),
});

/**
 * WORK — Research / talks / notable posts, rendered as rich preview cards.
 * `image` (optional) is a path in public/work/. `source` is a free label
 * (LinkedIn, YouTube, Conference, ...). Edit src/content/research.yaml.
 */
const research = defineCollection({
  loader: file('./src/content/research.yaml'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    source: z.string().default('Link'),
    url: z.string(),
    image: z.string().optional(),
    date: z.union([z.number(), z.string()]).optional(),
    description: z.string().optional(),
  }),
});

/**
 * BLOG — "Others": external write-up collections / sites shown in the blog index
 * alongside local posts and Medium. Edit src/content/external.yaml.
 */
const external = defineCollection({
  loader: file('./src/content/external.yaml'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    url: z.string(),
    category: z.string().default('Others'),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    date: z.coerce.date().optional(),
    image: z.string().optional(),
  }),
});

/**
 * "What I do" verification cards. Each Markdown file is one expertise area whose
 * body opens in a popup so anyone can read what I do and check the proof links.
 * Add a file to src/content/expertise/ (see _template.md). Frontmatter:
 *   title, icon (lucide name), summary, order (sort).
 */
const expertise = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/_*.md'], base: './src/content/expertise' }),
  schema: z.object({
    title: z.string(),
    icon: z.string().default('shield'),
    summary: z.string(),
    order: z.number().default(50),
  }),
});

/**
 * CVEs I discovered/disclosed. Each opens a popup with the number, a short
 * description and a link. Add entries over time in src/content/cves.yaml.
 */
const cves = defineCollection({
  loader: file('./src/content/cves.yaml'),
  schema: z.object({
    id: z.string(),
    cve: z.string(),          // e.g. CVE-2026-21640
    year: z.number(),
    summary: z.string(),      // short description shown in the popup
    url: z.string().optional(), // disclosure / NVD / post link
  }),
});

/**
 * Bug bounty Hall of Fame — programs that recognized my reports. Leave `url`
 * empty ("") until you have the acknowledgment/profile link, then fill it in.
 * Add more entries in src/content/halloffame.yaml.
 */
const halloffame = defineCollection({
  loader: file('./src/content/halloffame.yaml'),
  schema: z.object({
    id: z.string(),
    program: z.string(),      // e.g. Meta
    year: z.number().optional(),
    summary: z.string(),
    url: z.string().optional(), // profile / acknowledgment link ("" = not yet added)
    icon: z.string().default('lucide:shield-check'),
  }),
});

export const collections = {
  writeups,
  achievements,
  certifications,
  projects,
  challenges,
  research,
  external,
  expertise,
  cves,
  halloffame,
};
