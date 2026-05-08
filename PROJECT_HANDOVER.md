# KIPROD Website — Project Handover (Developer Summary)

## What this is

This is the **Phase 1** KIPROD marketing website rebuilt into a maintainable multi-page structure using **Astro (static site generator)**.

The goal of the rebuild was to keep the **existing UI and copy** (already agreed with the client) while solving scalability problems:
- Shared navigation/footer/styles in one place (no copy/paste across pages)
- Clean routing (`/about`, `/academy`, etc.)
- Phase 2 foundations for content (Insights / Resources)

## Tech stack

- **Astro**: static site generator, file-based routing
- **TypeScript**: content schema config (`src/content.config.ts`)
- **Markdown**: Insights articles (`src/content/insights/*.md`)
- **Vanilla CSS**: consolidated into `src/styles/global.css`
- **No framework UI** (no React/Vue/etc). Just Astro + HTML/CSS.

## How to run locally

From the `solar-series/` directory:

```bash
npm install
npm run dev
```

Then open the Local URL Astro prints (usually `http://localhost:4321`).

## Site routes (Phase 1)

These routes are live in dev and build output:

- `/` (Homepage)
- `/about`
- `/academy`
- `/partnerships`
- `/institute`
- `/contact`

## Phase 2 foundations

### Insights (articles only)

Insights are implemented as a content collection:

- **List page**: `/insights` → `src/pages/insights/index.astro`
- **Article pages**: `/insights/<slug>` → `src/pages/insights/[slug].astro`
- **Content source**: `src/content/insights/*.md`

To add a new article, create a new Markdown file in:

`src/content/insights/your-article-slug.md`

Required frontmatter:

```md
---
title: "Title"
description: "One sentence summary."
date: 2026-05-08
tags: ["tag1", "tag2"]
draft: false
---
```

### Resources

Resources hub exists at `/resources` (`src/pages/resources/index.astro`) and currently surfaces the same Phase 1 placeholder PDF downloads used on the homepage.

## Key implementation decisions

- **Astro chosen** to avoid future rework: shared layout/components, clear routing, static output for easy hosting.
- **Shared layout**: `src/layouts/BaseLayout.astro`
  - Includes global CSS
  - Renders shared `Nav` + `Footer`
  - Includes a small IntersectionObserver “reveal” script and nav shadow behavior
- **Shared components**
  - `src/components/Nav.astro` (active state via `activePath`)
  - `src/components/Footer.astro`
- **All “chapter/eyebrow” labels removed** from hero sections (client requested).

## Project structure (what matters)

```text
solar-series/
  public/
    assets/        # icons + brand images used by pages
    downloads/     # placeholder PDFs
    videos/        # homepage hero background video
  src/
    components/   # Nav + Footer
    content/      # Insights markdown files
    layouts/      # BaseLayout
    pages/        # routes
    styles/       # global.css (all site styling)
  dist/           # build output (gitignored)
```

## Static assets & URLs

Anything in `public/` is served from the site root:
- `public/assets/...` → `/assets/...`
- `public/downloads/...` → `/downloads/...`
- `public/videos/...` → `/videos/...`

Homepage hero uses:
- `/videos/abstract-network-optimized.mp4`

## Archived / old files (outside this repo)

During migration, legacy standalone HTML and duplicate public assets were moved outside `solar-series/` into:
- `../unused/legacy-html/` (old `.html` pages)
- `../unused/source-public/` (old `assets/`, `downloads/`, `videos/` duplicates)

Only `solar-series/` should be considered the active codebase.

## Build & deployment

Build:

```bash
npm run build
```

Astro outputs static files to `dist/`.

Deployment options:
- **Netlify** / **Vercel**: simple static deploy
- **GitHub Pages**: possible, but requires setting the correct build output and (optionally) base path settings

Recommended build settings for static hosts:
- Build command: `npm run build`
- Publish directory: `dist`

## Git & branch notes (important)

This project’s git repository lives inside `solar-series/` (it has its own `.git/`).

If you are cloning from GitHub, you’re cloning the `solar-series` repo contents (not the parent folder).

