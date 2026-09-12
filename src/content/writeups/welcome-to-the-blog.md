---
title: "Welcome — how this blog works"
date: 2026-09-05
category: "Notes"
tags: ["meta", "astro", "markdown"]
summary: "A quick tour of the writing features available on this site: callouts, syntax highlighting, copy buttons, a table of contents and more."
draft: false
---

This post exists to show what Markdown authoring on this site can do. Drop a new
`.md` file into `src/content/writeups/`, fill in the frontmatter, and it appears
in the blog index automatically.

## Frontmatter

Every post starts with a small block of metadata:

```yaml
---
title: "Your title"
date: 2026-09-05
category: "CTF Writeups"   # OSCP Notes | CTF Writeups | Notes | anything new
tags: ["web", "idor"]
summary: "One or two sentences shown on cards and in search."
cover: ./cover.png          # optional
draft: false                # true hides it from production builds
---
```

Adding a new category takes nothing more than typing it — the index picks it up.

## Code with syntax highlighting

Fenced code blocks are highlighted at build time (zero client JS) and get a
copy button on hover. Several languages render out of the box:

```bash
# recon one-liner
ffuf -u https://target/FUZZ -w wordlist.txt -mc 200,301,302 -t 60
```

```python
import requests

def check(host: str) -> int:
    r = requests.get(f"https://{host}/health", timeout=5)
    return r.status_code
```

```powershell
Get-ChildItem -Recurse -Filter *.kdbx | Select-Object FullName
```

## Callouts

Use GitHub-style alerts for emphasis:

> [!NOTE]
> This is a note. Good for context or side information.

> [!TIP]
> A tip — a shortcut or a better way to do something.

> [!WARNING]
> A warning — something that can bite you.

> [!CAUTION]
> A caution — destructive or dangerous actions.

## Headings become a table of contents

Any `##` and `###` heading is collected into the sticky table of contents on the
right (on wide screens) and highlights as you scroll.

### A sub-heading

Reading time is estimated automatically from the word count, and previous/next
links appear at the bottom to move between posts.

## Wrapping up

That is the whole authoring surface. Write Markdown, commit, and the site does
the rest.
