# KIPROD Website — Master Implementation Plan

**Governing reference:** `../Assets/KIPROD WEBSITE MASTER IMPLEMENTATION BLUEPRINT v1.pdf`  
**Active codebase:** `solar-series/` (Astro static marketing site)  
**Status:** Blueprint v1 is final. Phases 1–4 complete on the marketing site. Phase 6 (LMS) is the launch blocker.  
**Living status:** See **`PROJECT_STATUS.md`** for current state and next steps — update both files when phases complete.  
**Last updated:** 6 June 2026

---

## Client decisions (launch & infrastructure)

| Decision | Confirmed approach |
|----------|-------------------|
| **Production domain** | `kiprodrisk.co.ke` |
| **Hosting** | **Netlify** (already configured) |
| **Public launch** | **Coordinated launch only** — marketing site + capability platform (LMS) go live **together** |
| **Capability CTAs** | **No interim CTAs** — “Start Free Programme” / capability pathway links go live **only when the LMS is ready** |
| **Trust metrics** | **None approved** — KIPROD is new; do not publish fabricated participant counts |
| **Partner logos** | **None available** — do not show placeholder “client logo” pills as if they were real |
| **Legacy LMS URL** | `learning.kiprodrisk.com` is **dead** — never link to it |

Until launch, development continues on Netlify (preview/staging). The public site stays unpublished until Phase 6 MVP is complete and wired.

---

## 1. Blueprint Summary

The **KIPROD Website Master Implementation Blueprint v1** is the single source of truth for the digital ecosystem.

**Philosophy:** From Insight → Capability → Execution

### Three ecosystem pillars

| Pillar | Strategic role |
|--------|----------------|
| **KIPROD Credit Risk Institute** | Insight & governance visibility |
| **KIPROD Risk Management Academy** | Capability development & institutional intelligence |
| **RMS Institutional Partnerships** | Operational strengthening & continuous support |

### LMS positioning

The capability platform is **capability and institutional intelligence infrastructure** — never generic e-learning.

**Featured programme:** Fundamentals of Credit Risk Management (Institutional Edition)  
**Primary CTA (at launch):** Start Free Programme → capability platform URL

KIPROD is building a **custom** capability platform (Phase 6). Marketing site and LMS are **separate codebases**, launched together on coordinated domains under `kiprodrisk.co.ke`.

---

## 2. Progress summary

| Phase | Status | Notes |
|-------|--------|-------|
| **1** | ✅ Complete | Nav, language, hero, CTAs, contact |
| **2** | ✅ Complete | Homepage flow, trust structure, sub-pages |
| **3** | ✅ Complete | Faculty, Insights, LMS copy blocks |
| **4** | ✅ Complete | Prep site for launch (no public go-live yet) |
| **6** | 🔲 **Next** | Custom capability platform (LMS) — **blocks launch** |
| **5** | 🔲 Last | **Combined QA & launch** — site + LMS together on Netlify |

> **Phase order for go-live:** 4 (prep) → 6 (LMS MVP) → 5 (launch both). Phase 5 is intentionally last.

---

## 3. Phased Implementation Plan

### Phase 1 — Structure, Navigation & Brand Language ✅

### Phase 2 — Homepage Completion & Page Positioning ✅

### Phase 3 — Academy, Insights & LMS Content ✅

---

### Phase 4 — Prepare marketing site for coordinated launch ✅

**Goal:** Make the Astro site launch-ready **without** going public. No interim capability CTAs.

**Completed (June 2026):** Trust refactor, centralised capability URL (`src/config/site.ts`, `CapabilityPlatformLink.astro`), dead LMS URL removal, SEO/canonical/OG, `netlify.toml`, `.env.example`, LMS subdomain `learn.kiprodrisk.co.ke`.

**Tasks:**

1. **Brand assets (as available)**
   - Final branded PDFs when ready (replace `*_PLACEHOLDER.pdf` in `public/downloads/`)
   - KIPROD 2026 logo system applied consistently
   - *Not blocking:* PDFs can remain placeholders until client supplies finals

2. **Trust & Authority — new-institution approach**
   - Remove unapproved metrics (e.g. “1K+ participants”, “30+ modules”)
   - Remove fake partner logo placeholders
   - Reframe section around **credible, factual signals** only:
     - Three integrated ecosystem pillars
     - Institutional partner **categories** served (banks, SACCOs, MFI, fintech)
     - Governance engagement **types** (not client counts)
     - East Africa / Kenya focus
     - Faculty & institutional specialist depth (link to Academy)
   - Remove or replace fabricated testimonial until approved

3. **RMS page depth** — operational strengthening detail per blueprint Phases 1–4

4. **Resources hub** — final copy; remove “placeholder” labelling when PDFs are final

5. **SEO & metadata** — titles/descriptions/OG for `https://kiprodrisk.co.ke`

6. **Capability-platform URL prep (not live yet)**
   - Remove all `learning.kiprodrisk.com` links
   - Add central config e.g. `PUBLIC_CAPABILITY_PLATFORM_URL` in `.env` (empty or staging until Phase 6)
   - Capability CTAs in nav, hero, `LmsProgrammeBlock`, footer: **hidden or non-linked until launch** OR point to `#programme` on Academy with enrolment disabled — wired to live LMS URL in Phase 5 only

7. **Netlify**
   - Confirm build: `npm run build`, publish `dist/`
   - Staging/preview deploys OK; **production DNS for `kiprodrisk.co.ke` stays gated** until Phase 5

**Deliverables:** Launch-ready marketing site (staging), honest trust section, no dead external links, capability CTAs ready to wire

#### What we need from you for Phase 4

| Item | Required? | Status |
|------|-----------|--------|
| Production domain | ✅ Confirmed | `kiprodrisk.co.ke` |
| Hosting | ✅ Confirmed | Netlify |
| Trust metrics | N/A | None — use new-institution framing |
| Partner logos | N/A | None — omit logo grid |
| Interim capability CTA | N/A | **Not used** — launch with LMS |
| Final branded PDFs | When available | Optional before launch; placeholders OK for dev |
| LMS subdomain | ✅ Confirmed | `learn.kiprodrisk.co.ke` |
| Programme content (M1–M5) | Before Phase 6 MVP | Required for LMS, not Phase 4 site |

---

### Phase 6 — KIPROD Capability Platform (custom LMS) — **launch blocker**

**Goal:** MVP capability platform so the site can go live with working capability CTAs.

Build in **separate repo** (recommended). See §4 below for approach.

**MVP (6a) must include:**

- Auth (register / login)
- Featured programme: 5 modules, video/content, simple quizzes
- Progress + completion
- Admin view of enrollees
- Deployed on Netlify or Vercel (or subdomain pointing to app host)

**At minimum for coordinated launch:** Phase **6a** complete. Phase 6b (institutional org accounts) strongly recommended given blueprint Phase 0 positioning.

**Deliverables:** Live capability platform URL wired to all marketing-site CTAs

#### What we need from you for Phase 6

| Item | When |
|------|------|
| Programme content M1–M5 (scripts, slides, video) | Before 6a |
| Assessment questions per module | Before 6a |
| Certificate / completion design | Before 6a |
| Subdomain (e.g. `learn.kiprodrisk.co.ke`) | Before deploy |
| Enrolment model (open free vs institutional signup) | Before 6a |
| Kenya data privacy / consent copy | Before public enrolment |

---

### Phase 5 — Combined QA & public launch (site + LMS)

**Goal:** Single public launch on `kiprodrisk.co.ke` with working capability pathway.

**Prerequisites:** Phase 4 complete + Phase 6a (minimum) live.

**Tasks:**

1. Wire `PUBLIC_CAPABILITY_PLATFORM_URL` to all capability CTAs (nav, hero, Academy, homepage LMS section, footer)
2. Blueprint compliance QA (§9–§24) on marketing site
3. End-to-end test: homepage → Start Free Programme → enrol → module → completion
4. Cross-browser, mobile, performance, accessibility (both products)
5. Enable production on Netlify for `kiprodrisk.co.ke` + LMS subdomain DNS/SSL
6. Post-launch governance — changes checked against blueprint

**Deliverables:** Public `kiprodrisk.co.ke` + live capability platform; dual-pathway CTAs fully functional

---

## 4. Phase 6 — LMS build guidance (summary)

**Separate phase:** Yes — different product, repo, database, auth.

| | Marketing site | Capability platform |
|--|----------------|---------------------|
| Domain | `kiprodrisk.co.ke` | e.g. `learn.kiprodrisk.co.ke` |
| Host | Netlify (static) | Netlify (SSR) or Vercel + Supabase |
| Launch | With LMS only | With site only |

**Recommended MVP stack:** Next.js + Supabase + Mux + Vercel. Repo: `D:\Eli\PICC DIGITAL\KIPROD LMS`. Full spec: **`AGENT_CONTEXT.md`** and **`LMS_IMPLEMENTATION_PLAN.md`** in that repo.

**Build order:** One programme done well → institutional org enrolment (6b) → more programmes (6c).

---

## 5. Phase summary (go-live order)

| Order | Phase | Focus |
|-------|-------|-------|
| 1 | **4** | Prep marketing site (trust, SEO, no dead links, CTAs stubbed) |
| 2 | **6a** | LMS MVP — **required before public launch** |
| 3 | **5** | QA + **launch both** on Netlify |

Phases 1–3: ✅ done.

---

## 6. Success criteria (at public launch)

### Marketing site

- [x] Blueprint structure and copy (Phases 1–3)
- [x] Trust section uses honest new-institution signals (no fake metrics/logos)
- [x] SEO for `kiprodrisk.co.ke`
- [x] No links to dead `learning.kiprodrisk.com`
- [x] Capability CTAs gated until LMS live (internal `/academy#programme`)
- [ ] Capability CTAs point to **live** LMS (Phase 5)

### Capability platform

- [ ] MVP live on confirmed subdomain
- [ ] Featured programme enrolment works end-to-end
- [ ] Marketing site + LMS launched **together**

### Infrastructure

- [x] Domain: `kiprodrisk.co.ke`
- [x] Host: Netlify
- [x] LMS subdomain confirmed (`learn.kiprodrisk.co.ke`)
- [ ] LMS subdomain DNS + SSL configured (Phase 6 deploy)
- [ ] Production deploy enabled (Phase 5)

---

## 7. Next code work

**Phase 6 (separate repo):** Custom LMS MVP — see `PROJECT_STATUS.md` § Capability platform.

**Phase 5 (this repo, after LMS live):** Set `PUBLIC_CAPABILITY_PLATFORM_LIVE=true`, full QA, enable production DNS.

---

*Public launch waits for Phase 6 LMS MVP. Marketing site and capability platform deploy together on `kiprodrisk.co.ke` (Netlify). Current status: `PROJECT_STATUS.md`.*
