# Insights — Content Reference & Guidelines

**Governing references:** Master Implementation Blueprint v1 · Credit Risk Institute pillar  
**Content source:** `src/content/insights/*.md`  
**Published at:** `/insights` · linked from Institute · preview on homepage

---

## Purpose

Insights are **executive governance intelligence**—not a generic blog. They support the Credit Risk Institute pillar (insight & governance visibility) and must feel decision-useful for executives, boards, and institutional leaders.

---

## Content types (required `topic` field)

| Topic key | Label | Use for |
|-----------|-------|---------|
| `governance-perspective` | Governance perspective | Policy, governance visibility, board-level framing |
| `portfolio-risk` | Portfolio risk observation | Monitoring, early warning, portfolio behaviour |
| `sector-intelligence` | Sector intelligence | Market, sector, and regional developments |
| `operational-discussion` | Operational discussion | Execution, escalation, recovery operations |
| `executive-reflection` | Executive reflection | Strategic institutional observations |

---

## Tone & brand language

**Do:**

- Write for executives and institutional decision-makers
- Be practical, concise, and governance-oriented
- Link outcomes to governance visibility and operational execution
- End with a path to [Start Institutional Discussion](/contact) where appropriate

**Avoid:**

- Blog-style casual tone
- “Training”, “courses”, “tips and tricks”
- Generic consultancy or marketing language
- Overly academic or theoretical framing

| Use | Avoid |
|-----|-------|
| Governance visibility | Diagnostics |
| Institutional discussion | Request a meeting |
| Capability development | Training |
| Institutional partners | Clients |

---

## Frontmatter template

```md
---
title: "Article Title"
description: "One sentence summary for cards and SEO."
date: 2026-05-08
topic: governance-perspective
tags: ["governance", "monitoring"]
draft: false
---
```

`topic` must be one of: `governance-perspective` · `portfolio-risk` · `sector-intelligence` · `operational-discussion` · `executive-reflection`

---

## Adding a new insight

1. Create `src/content/insights/your-slug.md` using the template above  
2. Set `draft: false` when ready to publish  
3. Build — the article appears automatically on:
   - `/insights` (grouped by topic)
   - `/institute` (publications grid)
   - Homepage (latest 3 in Insights preview)

---

## Current published insights

| Slug | Topic |
|------|-------|
| `governance-visibility-beyond-policy` | Governance perspective |
| `portfolio-deterioration-late` | Executive reflection |
| `why-loans-go-bad` | Governance perspective |
| `early-warning-failures` | Portfolio risk observation |

---

## Code implementation

| Asset | Location |
|-------|----------|
| Content files | `src/content/insights/*.md` |
| Schema | `src/content.config.ts` |
| Helpers | `src/lib/insights.ts` |
| Card grid | `src/components/InsightGrid.astro` |
| List page | `src/pages/insights/index.astro` |
| Article page | `src/pages/insights/[slug].astro` |
| Institute linkage | `src/pages/institute.astro` |

---

*Align all Insights content to the Master Implementation Blueprint v1 and Institute positioning.*
