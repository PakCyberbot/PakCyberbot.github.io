import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import { remarkAlert } from 'remark-github-blockquote-alert';

// Canonical production URL (custom domain served by GitHub Pages).
const SITE = 'https://pakcyberbot.com';

export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  integrations: [
    mdx(),
    icon({
      include: {
        'simple-icons': [
          'github', 'linkedin', 'medium', 'youtube', 'x', 'instagram',
          'facebook', 'hackthebox', 'tryhackme', 'hackerrank', 'googlecloud',
          'meta',
        ],
        lucide: [
          'terminal', 'shield', 'shield-check', 'bug', 'search', 'code',
          'network', 'award', 'trophy', 'external-link', 'arrow-right',
          'arrow-up-right', 'arrow-left', 'flag', 'file-code-2', 'graduation-cap', 'mail',
          'menu', 'x', 'calendar', 'clock', 'tag', 'chevron-right',
          'chevron-up', 'rss', 'folder-git-2', 'star', 'crosshair',
          'fingerprint', 'lock', 'radar', 'book-open', 'list', 'copy',
          'check', 'circle-user', 'globe', 'hash', 'mic', 'briefcase', 'youtube', 'users',
        ],
      },
    }),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [remarkAlert],
    shikiConfig: {
      theme: 'github-dark-default',
      wrap: false,
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
