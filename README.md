# pakcyberbot.com

Personal portfolio of **Faraz Ahmed (PakCyberbot)** — security researcher (red
teaming, bug bounty, OSINT, CTFs). Built with [Astro](https://astro.build),
static-first with minimal client JavaScript.

- **Live:** https://pakcyberbot.com
- **Stack:** Astro 7 · content collections · a few React-free islands · self-hosted fonts
- **Hosting:** GitHub Pages (deployed to the `gh-pages` branch by GitHub Actions)

---

## Local development

```bash
npm install       # install dependencies
npm run dev       # start dev server at http://localhost:4321
npm run build     # production build into dist/
npm run preview   # preview the production build locally
```

Node 20+ is recommended.

The Medium feed is fetched **at build time**. If it is unreachable the build
still succeeds and simply omits Medium cards.

---

## Project structure

```
src/
  assets/            profile photo + logo (optimized at build)
  components/        Nav, Footer, ProjectCard, ResearchCard
  content/           <-- all editable content lives here
    achievements.yaml
    certifications.yaml
    projects.yaml      WORK · projects
    challenges.yaml    WORK · authored CTF challenges & labs
    research.yaml      WORK · research / talks / posts (preview cards)
    external.yaml      BLOG · "Others" external write-up collections
    expertise/         HOME · "What I do" verification popups (Markdown)
    writeups/          Markdown blog posts
  data/site.ts       site config: name, role, socials, platforms, nav, skills, URLs
  layouts/           BaseLayout (SEO/meta) and PostLayout (blog reading view)
  lib/posts.ts       merges local posts + Medium feed
  pages/             routes (index, work, achievements, blog, about, contact, 404, rss)
  styles/global.css  design tokens + base styles
public/
  badges/            certification badge images referenced from certifications.yaml
  work/              project & research preview images referenced from YAML
certificates/        FULL certificate archive (linked from the site, not bundled)
scripts/make-og.mjs  regenerates public/og-default.png
legacy/              the previous Create React App site (kept for reference)
```

Images used by the data files (project previews, cert badges, research covers) live
in `public/` and are referenced by path in YAML — drop a file in and point to it,
no component changes. The hero portrait and nav logo are the only images imported
from `src/assets/` (so they get build-time optimization).

You update the site by editing data files and Markdown — never the components.

---

## How to add content

### A blog post / write-up

1. Create `src/content/writeups/my-post.md` (the filename becomes the URL slug).
2. Add frontmatter:

   ```yaml
   ---
   title: "My post title"
   date: 2026-09-10
   category: "CTF Writeups"   # OSCP Notes | CTF Writeups | Notes | any new name
   tags: ["web", "idor"]
   summary: "Shown on cards and in search."
   cover: ./my-cover.png       # optional; place the image beside the post
   draft: false                # true = hidden in production
   ---
   ```

3. Write Markdown. You get syntax highlighting, copy-code buttons, an auto table
   of contents, reading time, and prev/next links for free. Callouts use
   GitHub-style alerts:

   ```markdown
   > [!NOTE]
   > A note.
   > [!WARNING]
   > A warning.
   ```

Adding a **new category** needs nothing extra — type it in `category` and the
blog index picks it up as a filter automatically. See the two sample posts in
`src/content/writeups/` for a full reference.

The Achievements page has four data-driven sections: **CTF Competitions**,
**CVEs**, **Bug Bounty — Hall of Fame**, and **Community**.

**A CTF or community achievement** — edit `src/content/achievements.yaml`:

```yaml
- id: unique-id
  title: Event or recognition
  category: ctf            # ctf | community
  event: BlackHat MEA CTF  # optional
  placement: 1st place     # optional
  team: Team Revolt        # optional
  year: 2026
  description: One or two sentences.
  url: https://link-to-proof   # optional; CTFs without a url appear in the list without a link
  icon: trophy             # a lucide icon name
  featured: true           # CTFs: featured -> a card that opens a detail popup; others -> the list. Also shows in Home highlights.
  rank: 1                  # lower sorts first
```

**A CVE** — edit `src/content/cves.yaml`. Each entry is a card that opens a popup:

```yaml
- id: cve-2026-xxxxx
  cve: CVE-2026-XXXXX
  year: 2026
  summary: Short description shown in the popup.
  url: https://link-to-disclosure   # optional
```

**A Bug Bounty Hall-of-Fame entry** — edit `src/content/halloffame.yaml`. Leave
`url` as `""` until you have the link; it shows "link soon" until then:

```yaml
- id: acme
  program: Acme Corp
  year: 2026
  summary: Recognized for reporting <short description>.
  url: ""                       # add your acknowledgment/profile link here
  icon: lucide:shield-check     # or simple-icons:<brand>
```

### A certification (shown on the Achievements page)

Only **significant** certifications belong on the site. Drop the badge image into
`public/badges/`, then edit `src/content/certifications.yaml`:

```yaml
- id: unique-id
  name: Full Certification Name
  abbr: SHORT
  issuer: Issuing body
  year: 2026
  logo: /badges/your-badge.png   # image in public/badges/
  credentialUrl: https://verify-link
  description: One sentence.
  featured: true                 # also surfaced in Home highlights
```

Everything else (course-completion certificates, etc.) is **not** listed. Those
images live in the `certificates/` directory and are reached from the
"View all certificates" button, which links to that folder on GitHub. To add
one, drop the image into the right `certificates/<Category>/` subfolder and
commit it.

### Work — a project, a challenge, or a research post

All three live under `src/content/` and render on the **Work** page.

**Project** — `projects.yaml`. Put the preview image in `public/work/`:

```yaml
- id: my-tool
  title: My Tool
  description: What it does.
  tags: [Python, Red Team]
  image: /work/my-tool.png   # optional (public/work/)
  github: https://github.com/PakCyberbot/my-tool
  featured: true
```

**Authored CTF challenge / lab** — `challenges.yaml`. `platform` picks the icon:

```yaml
- id: my-room
  title: My Room
  platform: tryhackme        # hackthebox | tryhackme | other
  kind: Room                 # free label: Challenge, Sherlock, Room, Lab
  difficulty: Medium         # optional
  url: https://tryhackme.com/room/...
  description: One line.
```

**Research / talk / notable post** — `research.yaml`. Renders as a preview card;
add an image for a thumbnail or omit it for a clean generated preview:

```yaml
- id: my-post
  title: My LinkedIn write-up
  source: LinkedIn           # free label; drives the icon (LinkedIn/YouTube/Medium/Talk/…)
  date: 2026
  url: https://www.linkedin.com/posts/...
  image: /work/my-post.png   # optional (public/work/)
  description: One or two lines.
```

---

### A blog "Others" entry (external write-up site)

The blog shows my local posts first, then **Others** (external collections), then
Medium. Add an external collection in `src/content/external.yaml`:

```yaml
- id: my-notes
  title: My Notes Site
  url: https://example.com/notes/
  category: OSCP Notes        # becomes the source label / a category filter
  summary: One or two sentences.
  tags: [notes]
  image: /work/notes.png      # optional cover in public/work/
```

### A "What I do" verification popup

Each capability card on the Home page opens a popup whose content is a Markdown
file in `src/content/expertise/`. Copy `_template.md` to a new file (files
starting with `_` are ignored) and edit the frontmatter and body:

```markdown
---
title: Red Teaming
icon: crosshair     # any lucide icon name
summary: Shown on the card before it opens.
order: 1            # lower sorts first
---

## What I do
...

## Proof & verification
- [Proof link](https://...)
```

The body supports headings, lists, links, code and callouts — everything renders
inside the popup so visitors can verify your claims.

## Editing site-wide values

`src/data/site.ts` holds your name, tagline, email, social links, platform
links, skills, and the Medium feed / certificates URLs. Change them in one place.

---

## Deployment

Every push to `main` triggers `.github/workflows/react-deploy.yml`, which builds
the site and publishes `dist/` to the `gh-pages` branch (served at
pakcyberbot.com via the `public/CNAME` file). The workflow also runs once a day
so newly published Medium articles show up without a manual push.

It needs one repository secret, **`TOKEN_REPO`** — a token with permission to
push to `gh-pages`. You can also trigger a deploy manually from the Actions tab
("Run workflow").

To regenerate the social share image after changing branding:

```bash
node scripts/make-og.mjs
```
