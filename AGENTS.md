# AGENTS.md — iDegin Technologies Website

Guidance for any agent (or human) working in this repo. Read this first.

## What this is

The marketing website for **iDegin Technologies** — an AI transformation and custom software company based in Abuja, Nigeria. iDegin builds autonomous **AI employees**, multi-agent systems, and custom software. The site positions the company as an **AI Transformation Partner**, not a software vendor.

**Every page has one job:** move the visitor toward booking an **AI Discovery Session** (not a quote, not "contact sales").

Read alongside this file:
- **`INFO.md`** — company background, services, methodology, industries (voice & substance).
- **`PRD.md`** — full site architecture, page-by-page structure, and conversion features.
- **`DESIGN.md`** — the complete design system ("Operational Blueprint"). **Binding for all UI.**

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-first config in `app/globals.css` — no `tailwind.config.js`)
- Fonts via `next/font/google`: **Bricolage Grotesque** (display), **Geist** (body), **Geist Mono** (labels)
- Import alias: `@/*`
- Content (blog / insights / resources): **MD/MDX**

Commands: `npm run dev` · `npm run build` · `npm run start` · `npm run lint`

## Non-negotiable rules (from INFO.md)

1. **No code comments.** Code should be self-explanatory.
2. **One component per section** — break every section into its own file under `app/components/`.
3. **Semantic HTML always** (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, ordered headings).
4. **Publications use MD/MDX** (blog, insights, resources, guides).
5. **UI must be beautiful and modern** — meet the bar in `DESIGN.md`, never generic.
6. **Always use the skills in `.claude/skills/`** (see below).
7. **Dynamically generated OG images** using the brand tokens.
8. **SEO- and LLM-friendly** — metadata, structured data (JSON-LD), sitemap/robots, clean semantics.
9. **Accessible** — WCAG 2.2 AA minimum.

## Design system (must follow)

The design system is **"Operational Blueprint"** — signal blue (`#175CFF`) + solar gold accents on ink-and-paper neutrals, monospace technical annotations, blueprint-grid textures. It reads as *consulting authority meets engineering precision*. Full spec in `DESIGN.md`.

Hard rules when building UI:
- Use **semantic tokens** (`bg-surface`, `text-strong`, `text-body`, `border-border`, `bg-brand`, `text-accent`) — never hard-code hex or reach for raw `ink-*` on theme-able surfaces.
- Dark sections (hero, footer, dark bands): wrap in `.dark` and semantic tokens invert automatically.
- Every section opens with a **mono `.kicker`** eyebrow. Metrics use `font-mono` + `tabular-nums`.
- Headings: `font-display` (Bricolage). Body: `font-sans` (Geist). Labels/data: `font-mono`.
- One decisive blue accent per view; gold used sparingly (value/ROI). **No purple gradients, no Inter/Roboto/Arial, no stock "AI brain" art.**
- Primary CTA is always `bg-brand` ("Book Discovery") and always reachable.
- Respect `prefers-reduced-motion`; prefer one orchestrated page-load reveal over scattered micro-motion.

If you need a new value (color, space, shadow), add it as a **token in `globals.css` first**, then use it.

## Skills (use them — rule 6)

Located in `.claude/skills/`. Invoke the matching skill before doing the work:

| Skill | Use when |
|---|---|
| `frontend-design` | Building any component/page — sets the aesthetic bar (pairs with `DESIGN.md`). |
| `ui-section` | Building a specific section/component (hero, features, footer…). |
| `new-page` | Adding a route under `app/` (static or dynamic). |
| `seo-metadata` | Metadata, OpenGraph, JSON-LD, sitemap/robots, OG images. |
| `a11y-check` | Before shipping a page/section — accessibility audit. |
| `perf-audit` | Performance / Core Web Vitals work. |

## Working conventions

- **Structure:** routes in `app/`, shared UI in `app/components/`, content in MD/MDX. Server components by default; add `"use client"` only at interactive leaves.
- **Images:** `next/image` with explicit dimensions + meaningful `alt` (decorative → `alt=""`).
- **Metadata:** every route exports `metadata`/`generateMetadata` with a unique title + description. Keep the production domain (`https://idegin.com` in `layout.tsx`) in one place.
- **Before declaring done:** `npm run lint` clean, run the `a11y-check` skill on new UI, and verify it renders (`npm run dev` / the `run` skill). Don't claim a result you didn't verify.

## Voice

Confident, outcome-driven, human. Lead with business value, then show the engineering. Mirror `INFO.md`: "We never begin with AI. We begin with your business." Never hype-y; always specific.
