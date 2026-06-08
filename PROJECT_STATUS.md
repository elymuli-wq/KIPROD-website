# KIPROD Digital Ecosystem — Project Status

> **Read this file first.** This is the living record of what the system is, what is done, and what comes next.  
> **Agents:** Update this document whenever you complete meaningful work — phase status, checklists, changelog, and “What’s next”. Keep `IMPLEMENTATION_PLAN.md` phase summaries aligned. Do not contradict locked client decisions below.

**Last updated:** 6 June 2026  
**Current focus:** Phase 6 (LMS MVP) — **launch blocker**  
**Public launch:** Not live — marketing site + LMS launch **together** only

---

## At a glance

| Item | Status |
|------|--------|
| **Marketing site (Astro)** | Phases 1–4 code complete; staging-ready on Netlify |
| **Capability platform (LMS)** | **Runnable prototype** at `KIPROD LMS` — M0 full; Supabase/production next |
| **Coordinated public launch** | Blocked until LMS MVP (Phase 6a) + Phase 5 QA |
| **Production domain** | `kiprodrisk.co.ke` (DNS not enabled for public until Phase 5) |
| **LMS subdomain** | `learn.kiprodrisk.co.ke` (confirmed; app not deployed) |
| **Build** | `npm run build` passes — 12 static pages |

---

## What this system is

KIPROD’s digital presence is **two separate products** that launch as one coordinated experience:

### 1. Marketing site (`solar-series/` — this repo)

The **digital operating layer** of the KIPROD Institutional Strengthening Ecosystem — not a consultancy brochure or generic training site.

- **Stack:** Astro (static), TypeScript content schema, Markdown collections, vanilla CSS
- **Domain:** `https://kiprodrisk.co.ke`
- **Host:** Netlify (static deploy, `dist/`)
- **Governing doc:** `../Assets/KIPROD WEBSITE MASTER IMPLEMENTATION BLUEPRINT v1.pdf`

**Philosophy:** From Insight → Capability → Execution

**Three ecosystem pillars:**

| Pillar | Route | Role |
|--------|-------|------|
| KIPROD Credit Risk Institute | `/institute` | Insight & governance visibility |
| KIPROD Risk Management Academy | `/academy` | Capability development & institutional intelligence |
| RMS Institutional Partnerships | `/partnerships` | Operational strengthening & continuous support |

### 2. Capability platform / LMS (Phase 6 — **not in this repo**)

Custom **capability and institutional intelligence infrastructure** — never framed as generic e-learning.

- **Subdomain:** `https://learn.kiprodrisk.co.ke`
- **Featured programme:** Modules M0–M5 + integrated simulation (client content in `KIPROD WEBSITE/Modules/`)
- **Recommended stack:** Next.js or Remix + Supabase (auth/DB) + hosted video (Mux/Cloudflare Stream)
- **Repo:** To be created — separate from `solar-series/`

Marketing-site CTAs are **pre-wired** via env vars but **gated** until LMS is live (see Environment below).

---

## Locked client decisions

Do not override these without explicit client approval:

| Decision | Value |
|----------|--------|
| Production domain | `kiprodrisk.co.ke` |
| LMS subdomain | `learn.kiprodrisk.co.ke` |
| Hosting (marketing site) | Netlify |
| Public launch | **Coordinated only** — site + LMS together |
| Capability CTAs before launch | Route to `/academy#programme` (no external enrolment) |
| Trust metrics | **None** — KIPROD is new; no fabricated counts |
| Partner logos | **None** — no placeholder logo pills |
| Legacy LMS URL | `learning.kiprodrisk.com` is **dead** — never link |
| Interim capability CTAs | **Not used** — no half-live enrolment path |
| PDF downloads | Placeholders OK until client supplies finals |

---

## Phase progress

**Go-live order:** Phase 4 → Phase 6 → Phase 5

| Phase | Name | Status | Notes |
|-------|------|--------|-------|
| **1** | Structure, nav & brand language | ✅ Done | Nav, hero, CTAs, contact copy |
| **2** | Homepage & sub-pages | ✅ Done | Full 12-section homepage, `/resources`, partnerships journey |
| **3** | Academy, Insights & LMS copy | ✅ Done | Faculty, 4 insights, `LmsProgrammeBlock` |
| **4** | Prep site for launch | ✅ Done (code) | Trust refactor, SEO, env gating, dead URL removal |
| **6** | Custom LMS MVP | 🔲 **Next / blocker** | Separate repo; needs programme content from client |
| **5** | Combined QA & public launch | 🔲 Last | Wire live CTAs, DNS, end-to-end test |

---

## Marketing site — completed work

### Phase 1 ✅
- Approved nav: Home · About KIPROD · Our Ecosystem · Academy · Institute · Insights · Contact
- RMS via `/partnerships`, not top nav
- Blueprint hero copy, executive insight strip, institutional challenge
- Contact: “Start an Institutional Discussion”
- Dual homepage pathways (capability + institutional)

### Phase 2 ✅
- All 12 homepage sections in blueprint order
- Insights preview, Final Positioning, Trust section structure
- `/resources` organised by pillar; downloads off homepage
- Partnerships page with engagement Phases 0–4
- Sub-pages: `/about`, `/institute`, `/contact`

### Phase 3 ✅
- **Faculty:** 3 profiles in `src/content/faculty/*.md`, `FacultySection.astro` on Academy
- **Insights:** 4 articles with `topic` field, grouped listing, dynamic Institute publications
- **LMS copy:** `LmsProgrammeBlock.astro` on homepage + Academy (M1–M5)
- Reference docs: `FACULTY_REFERENCE.md`, `INSIGHTS_REFERENCE.md`

### Phase 4 ✅ (code)
- **Trust section:** Removed fake stats (1K+, 30+), placeholder logos, fabricated testimonial; factual ecosystem framing + faculty link
- **Capability URL centralised:** `src/config/site.ts`, `CapabilityPlatformLink.astro`
- **Dead links removed:** All `learning.kiprodrisk.com` references replaced
- **CTA gating:** `PUBLIC_CAPABILITY_PLATFORM_LIVE=false` → internal `/academy#programme`; `true` at launch → `learn.kiprodrisk.co.ke`
- **SEO:** `astro.config.mjs` site URL, canonical + OG/Twitter meta in `BaseLayout.astro`
- **Netlify:** `netlify.toml`, `.env.example`

### Site routes (all built)

| Route | Page |
|-------|------|
| `/` | Homepage (12 sections) |
| `/about` | Institutional identity |
| `/academy` | Capability platform + faculty (`#programme`, `#faculty`) |
| `/institute` | Governance visibility |
| `/partnerships` | RMS institutional partnerships |
| `/insights` | Insights index (by topic) |
| `/insights/[slug]` | 4 articles |
| `/resources` | Downloads by pillar |
| `/contact` | Institutional discussion form |

---

## Marketing site — remaining before public launch

These are Phase 5 items or client-supplied assets — not blockers for starting Phase 6:

| Item | Phase | Status |
|------|-------|--------|
| Final branded PDFs (replace `*_PLACEHOLDER.pdf`) | 4/5 | Waiting on client |
| Resources hub copy polish when PDFs final | 5 | Pending |
| Full blueprint compliance QA (§9–§24) | 5 | Not started |
| Cross-browser / mobile / a11y / performance audit | 5 | Not started |
| Enable `PUBLIC_CAPABILITY_PLATFORM_LIVE=true` | 5 | After LMS live |
| Production DNS for `kiprodrisk.co.ke` | 5 | Gated |
| LMS subdomain DNS + SSL | 5/6 | Gated |

---

## Capability platform (LMS) — not started

**This is the launch blocker.** The marketing site must not go public until Phase 6a MVP exists.

### Phase 6a MVP must include
- [ ] Auth (register / login)
- [ ] Featured programme: 5 modules (M1–M5), content/video, simple quizzes
- [ ] Progress tracking + completion
- [ ] Admin view of enrollees
- [ ] Deployed at `learn.kiprodrisk.co.ke`

### Phase 6b (strongly recommended)
- [ ] Institutional org accounts / enrolment model aligned with blueprint Phase 0

### Client inputs required before LMS build
| Input | Required for |
|-------|----------------|
| Programme content M1–M5 (scripts, slides, video) | 6a |
| **Per-module: concept, case, scenario Q, reflection prompt, insight message** | 6a (UI Flow v2) |
| Assessment / scenario questions per module | 6a |
| Certificate / completion design | 6a |
| Enrolment model (open free vs institutional signup) | 6a |
| Kenya data privacy / consent copy | Public enrolment |

### Suggested next step for Phase 6
1. Open repo: **`D:\Eli\PICC DIGITAL\KIPROD LMS`** — read **`AGENT_CONTEXT.md`** first
2. Configure Supabase + `.env.local` per **`LMS_IMPLEMENTATION_PLAN.md`**
3. Follow MVP build order (§8) — auth → programme → video → quizzes → admin → deploy

**Client UI spec:** `KIPROD LMS/docs/LMS_UI_FLOW_REFERENCE.md`  
**Module intelligence:** `KIPROD LMS/docs/MODULE_INTELLIGENCE_ARCHITECTURE.md`  
**Module content (client):** `KIPROD WEBSITE/Modules/`

---

## Environment & deployment

### Marketing site env vars (`.env.example`)

```env
PUBLIC_SITE_URL=https://kiprodrisk.co.ke
PUBLIC_CAPABILITY_PLATFORM_URL=https://learn.kiprodrisk.co.ke
PUBLIC_CAPABILITY_PLATFORM_LIVE=false
```

| Variable | Current (dev/staging) | At launch (Phase 5) |
|----------|-------------------------|---------------------|
| `PUBLIC_SITE_URL` | `https://kiprodrisk.co.ke` | Same |
| `PUBLIC_CAPABILITY_PLATFORM_URL` | `https://learn.kiprodrisk.co.ke` | Same |
| `PUBLIC_CAPABILITY_PLATFORM_LIVE` | `false` | **`true`** |

### Local development

```bash
cd solar-series
npm install
npm run dev    # usually http://localhost:4321
npm run build  # output: dist/
```

### Netlify (marketing site)

- Build: `npm run build`
- Publish: `dist/`
- Preview/staging deploys: OK anytime
- **Production DNS:** Enable only at Phase 5

---

## Key files (for agents)

| Purpose | Path |
|---------|------|
| **Status (this file)** | `PROJECT_STATUS.md` |
| **LMS build spec** | `D:\Eli\PICC DIGITAL\KIPROD LMS\LMS_IMPLEMENTATION_PLAN.md` |
| **LMS intelligence spec** | `KIPROD LMS/docs/MODULE_INTELLIGENCE_ARCHITECTURE.md` |
| **Module content (client)** | `KIPROD WEBSITE/Modules/` |
| Phased plan detail | `IMPLEMENTATION_PLAN.md` |
| Developer conventions | `PROJECT_HANDOVER.md` |
| Site URL / LMS gating | `src/config/site.ts` |
| Capability CTA component | `src/components/CapabilityPlatformLink.astro` |
| Programme block | `src/components/LmsProgrammeBlock.astro` |
| Faculty section | `src/components/FacultySection.astro` |
| Insights helpers | `src/lib/insights.ts` |
| Content schema | `src/content.config.ts` |
| Global layout + SEO | `src/layouts/BaseLayout.astro` |
| Homepage | `src/pages/index.astro` |
| Styles | `src/styles/global.css` |
| Netlify config | `netlify.toml` |

### Content collections

| Collection | Location | Count |
|------------|----------|-------|
| Insights | `src/content/insights/*.md` | 4 articles |
| Faculty | `src/content/faculty/*.md` | 3 profiles |
| Downloads | `public/downloads/` | Placeholder PDFs |

### Brand language (enforce in all copy)

| Use | Avoid |
|-----|-------|
| Capability Development | Training |
| Institutional Strengthening | Consulting |
| Governance Visibility | Diagnostics |
| Institutional Partners | Clients |
| Capability Platform | Online Courses |

---

## What to do next (priority order)

1. **Phase 6 — Start LMS repo & MVP scaffold**  
   Auth, one programme (M1–M5), progress, deploy to staging subdomain.

2. **Client — Supply programme content**  
   Without M1–M5 material, LMS cannot reach MVP.

3. **Phase 6a — Complete featured programme end-to-end**  
   Enrol → modules → quiz → completion on `learn.kiprodrisk.co.ke`.

4. **Phase 5 — Combined launch**  
   - Set `PUBLIC_CAPABILITY_PLATFORM_LIVE=true` on Netlify (marketing site)  
   - Blueprint QA on marketing site  
   - E2E: homepage → Start Free Programme → LMS enrol → completion  
   - Enable production DNS for both domains  

5. **Optional polish (non-blocking)**  
   - Replace placeholder PDFs when client provides finals  
   - Phase 6b institutional org accounts  

---

## Success criteria (public launch checklist)

### Marketing site
- [x] Blueprint structure and copy (Phases 1–3)
- [x] Trust section — honest new-institution signals
- [x] SEO baseline for `kiprodrisk.co.ke`
- [x] No links to dead `learning.kiprodrisk.com`
- [x] Capability CTAs gated until LMS live
- [ ] Capability CTAs point to **live** LMS (Phase 5)
- [ ] Full QA sign-off (Phase 5)

### Capability platform
- [ ] MVP live on `learn.kiprodrisk.co.ke`
- [ ] Featured programme enrolment works end-to-end
- [ ] Marketing site + LMS launched **together**

### Infrastructure
- [x] Domain confirmed: `kiprodrisk.co.ke`
- [x] LMS subdomain confirmed: `learn.kiprodrisk.co.ke`
- [x] Host: Netlify (marketing site)
- [ ] LMS subdomain DNS + SSL (Phase 6 deploy)
- [ ] Production deploy enabled (Phase 5)

---

## Out of scope / do not do

- Do **not** publish the marketing site publicly before LMS MVP is ready
- Do **not** set `PUBLIC_CAPABILITY_PLATFORM_LIVE=true` until LMS works end-to-end
- Do **not** link to `learning.kiprodrisk.com`
- Do **not** add fabricated trust metrics, partner logos, or testimonials
- Do **not** add interim external capability CTAs that imply live enrolment
- Do **not** treat RMS as a top-level nav item
- Do **not** put downloads on the homepage (use `/resources`)

---

## Changelog

| Date | Change |
|------|--------|
| 2026-06-06 | **Phase 4 code complete:** trust refactor, `site.ts` + `CapabilityPlatformLink`, SEO, env gating, `netlify.toml`, `.env.example`. LMS subdomain confirmed: `learn.kiprodrisk.co.ke`. |
| 2026-06-06 | **Phase 3 complete:** faculty profiles, 4 insights with topics, `LmsProgrammeBlock`, reference docs. |
| 2026-06-06 | **Phase 2 complete:** full homepage flow, resources hub, partnerships phases. |
| 2026-06-06 | **Phase 1 complete:** nav, brand language, hero, contact. |
| 2026-06-06 | Client decisions locked: coordinated launch, Netlify, no fake trust assets, no interim CTAs. |
| 2026-06-06 | **LMS repo prepared** at `D:\Eli\PICC DIGITAL\KIPROD LMS` — Next.js scaffold, `AGENT_CONTEXT.md`, plan moved. |
| 2026-06-06 | **Client module content** ingested (M0–M5 + simulation); intelligence architecture: module reports → institutional heatmap. |

---

*When you finish a task, update the phase table, relevant checklists, “What to do next”, and add a changelog row.*
