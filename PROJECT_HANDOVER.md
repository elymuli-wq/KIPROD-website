# KIPROD Website — Developer Guide

## Governing reference

All website development, content, navigation, messaging, and CTAs must align to:

**KIPROD Website Master Implementation Blueprint v1**  
(`../Assets/KIPROD WEBSITE MASTER IMPLEMENTATION BLUEPRINT v1.pdf`)

The blueprint is the **final and authoritative** direction for the site. The codebase is an Astro scaffold that is being brought into full compliance with that document.

**Project status:** See **`PROJECT_STATUS.md`** first for current phase, completed work, and next steps. See `IMPLEMENTATION_PLAN.md` for phased task detail.

## What this site is

The KIPROD website is the **digital operating layer** of the KIPROD Institutional Strengthening Ecosystem — not a consultancy site, training company site, or generic corporate brochure.

**Philosophy:** From Insight → Capability → Execution

**Three pillars:**

| Pillar | Role |
|--------|------|
| KIPROD Credit Risk Institute | Insight & governance visibility |
| KIPROD Risk Management Academy | Capability development & institutional intelligence |
| RMS Institutional Partnerships | Operational strengthening & continuous support |

## Tech stack

- **Astro** — static site generator, file-based routing
- **TypeScript** — content schema (`src/content.config.ts`)
- **Markdown** — Insights articles (`src/content/insights/*.md`)
- **Vanilla CSS** — `src/styles/global.css`
- No React/Vue UI framework

## How to run locally

From the `solar-series/` directory:

```bash
npm install
npm run dev
```

Open the Local URL Astro prints (usually `http://localhost:4321`).

## Approved navigation

Primary nav (minimal, executive):

- Home
- About KIPROD
- Our Ecosystem
- Academy
- Institute
- Insights
- Contact

RMS Institutional Partnerships is **not** a top-level nav item. It is reached via the ecosystem section, engagement journey, and in-page links (`/partnerships`).

Nav CTA: **Start Free Programme** (capability pathway).

## Site routes

| Route | Blueprint role |
|-------|----------------|
| `/` | Ecosystem entry point |
| `/about` | Institutional identity |
| `/academy` | Capability & intelligence (+ Faculty & Institutional Specialists) |
| `/institute` | Governance visibility & insight |
| `/partnerships` | RMS — operational strengthening & continuous support |
| `/insights` | Executive governance intelligence |
| `/insights/[slug]` | Individual insight articles |
| `/resources` | Downloadable institutional assets |
| `/contact` | Institutional engagement — *Start an Institutional Discussion* |

## Homepage structure (required order)

1. Hero Section  
2. Executive Insight Strip  
3. Institutional Challenge  
4. Our Approach  
5. KIPROD Ecosystem  
6. Institutional Engagement Journey  
7. LMS Capability Entry  
8. Operational Strengthening  
9. Trust & Authority  
10. Insights  
11. Final Positioning  
12. Footer  

**Non-negotiable:** the homepage always shows two pathways:

| Pathway | CTA |
|---------|-----|
| Capability | Start Free Credit Risk Programme |
| Institutional | Start Institutional Discussion |

Downloads do **not** belong on the homepage; they live on `/resources`.

## Brand language (summary)

| Use | Avoid |
|-----|-------|
| Capability Development | Training |
| Institutional Strengthening | Consulting |
| Governance Visibility | Diagnostics |
| Institutional Partners | Clients |
| Operational Strengthening | Implementation (as a label) |
| Capability Platform | Online Courses |

LMS must be framed as **capability and institutional intelligence infrastructure**, not generic e-learning.

## Engagement phases (institutional model)

| Phase | Purpose |
|-------|---------|
| Phase 0 | LMS capability entry & institutional visibility |
| Phase 1 | Structured governance visibility review |
| Phase 2 | Portfolio risk visibility |
| Phase 3 | Operational strengthening |
| Phase 4 | Continuous ecosystem support |

## Content: Insights

Insights are a content collection:

- **List:** `/insights` → `src/pages/insights/index.astro`
- **Articles:** `/insights/<slug>` → `src/pages/insights/[slug].astro`
- **Source:** `src/content/insights/*.md`

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

Content tone: executive governance intelligence — not a generic blog.

## Project structure

```text
solar-series/
  public/
    assets/        # icons, logos, brand images
    downloads/     # institutional PDFs
    videos/        # homepage hero background video
  src/
    components/    # Nav, Footer, CapabilityPlatformLink, LmsProgrammeBlock, FacultySection, InsightGrid
    config/        # site.ts — SITE_URL, capability platform URL, live flag
    content/       # insights, faculty markdown
    layouts/       # BaseLayout (SEO meta, canonical)
    lib/           # insights.ts helpers
    pages/         # routes
    styles/        # global.css
  netlify.toml     # build + deploy notes
  .env.example     # PUBLIC_SITE_URL, PUBLIC_CAPABILITY_PLATFORM_*
  dist/            # build output (gitignored)
```

Static assets in `public/` are served from the site root (`/assets/...`, `/downloads/...`, `/videos/...`).

Homepage hero video: `/videos/abstract-network-optimized.mp4`

## Key implementation files

- `src/layouts/BaseLayout.astro` — global CSS, Nav, Footer, reveal script
- `src/components/Nav.astro` — navigation (must match approved nav structure)
- `src/components/Footer.astro`
- `src/pages/index.astro` — homepage (must follow blueprint section order)
- `src/pages/academy.astro` — must include Faculty & Institutional Specialists

## Build & deployment

```bash
npm run build
```

Output: `dist/`

**Production (confirmed):**

| Setting | Value |
|---------|--------|
| Domain | `kiprodrisk.co.ke` |
| Host | Netlify |
| Build command | `npm run build` |
| Publish directory | `dist` |

**Launch policy:** The marketing site does **not** go public until the custom capability platform (LMS) is ready. Capability CTAs (“Start Free Programme”) are wired at coordinated launch — no interim enrolment path.

**Capability platform URL:** `https://learn.kiprodrisk.co.ke` via `PUBLIC_CAPABILITY_PLATFORM_URL`. CTAs are gated by `PUBLIC_CAPABILITY_PLATFORM_LIVE` in `src/config/site.ts` — internal `/academy#programme` until launch, then external LMS. Do not use `learning.kiprodrisk.com` (deprecated). See `.env.example` and `PROJECT_STATUS.md`.

## Repository notes

- Git repository lives inside `solar-series/` (own `.git/`)
- Parent folder may contain brand assets and archived materials; only `solar-series/` is the active codebase
- Blueprint PDF: `../Assets/KIPROD WEBSITE MASTER IMPLEMENTATION BLUEPRINT v1.pdf`

## Governance

Any future page development, content refinement, LMS integration, visual updates, CTA structures, navigation logic, or messaging adjustments must align to the blueprint unless the blueprint is formally revised.
