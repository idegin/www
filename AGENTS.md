<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project overview

Marketing website for **iDegin Technologies**, an AI Workforce Transformation company (see `ABOUT.md`). The primary business goal is lead generation — driving visitors to book an **AI Workflow Audit / Discovery Session**. Information architecture, page inventory, and per-page content are specified in `PLAN.md`; brand voice, positioning, and messaging are in `ABOUT.md`. Read both before writing copy or building a page.

# The mandate

**Instruction:** Build a beautiful, $10,000-grade marketing site using every relevant skill and MCP available.

**Rules**
1. Each section's design and layout must differ from the next — no repeated templates.
2. The site should be image-heavy, including background images.
3. Sections should have plenty of movement — transitions, animations, and effects.
4. Use the 21st.dev MCP where it helps.
5. Every section must be beautiful, professional, and modern — never childish.

**Requirements**
1. Advanced SEO.
2. LLM / AI-agent optimized (`llms.txt`, structured data, clean semantics).
3. Dynamic OG images and metadata.
4. Accessibility on all pages and sections (target WCAG AA).
5. Mobile responsive.
6. Lots of movement — GSAP is the default motion stack; Framer Motion is acceptable for React-component interactions.

# Tech stack

- **Framework:** Next.js `16.3.0`, App Router (`app/`), React `19.2.8`. Read the caveat block at the top of this file — this Next.js differs from training data; consult `node_modules/next/dist/docs/` before using an API.
- **Language:** TypeScript (`strict`). Path alias `@/*` → repo root (`./*`).
- **Styling:** Tailwind CSS v4 via `@tailwindcss/postcss` (CSS-first — no `tailwind.config.js`). Design tokens and global styles live in `app/globals.css`.
- **Fonts:** `next/font/google` — Geist Sans (`--font-geist-sans`) and Geist Mono (`--font-geist-mono`).
- **Content:** Markdown blog posts in `content/blog/`, parsed with `gray-matter` + `marked`.

# Commands

```bash
npm run dev      # start dev server (also regenerates the caveat block above)
npm run build    # production build — run before declaring UI work done
npm run start    # serve the production build
npx tsc --noEmit # type-check (there is no separate lint/test script)
```

An `eslint.config.mjs` is present; run `npx eslint .` if ESLint is installed. There is no test suite — verify changes with `npm run build` and by loading affected routes.

# Project structure

```
app/                 App Router routes + colocated UI
  layout.tsx         Root layout: fonts, <html>, global metadata
  page.tsx           Home page
  <route>/page.tsx   One folder per route (about, solutions, industries, ...)
  components/        Shared React components (kebab-case files)
  api/og/route.tsx   Dynamic OG image generation
  api/contact|subscribe/route.ts  Form endpoints
  llms.txt/route.ts  LLM-agent site summary
  robots.ts | sitemap.ts | manifest.ts  Generated SEO/PWA files
lib/
  site-config.ts     Single source of truth: company info, nav, socials, CTA
  seo.ts             buildMetadata() + ogImageUrl() helpers
  posts.ts           Blog markdown loading/parsing
content/blog/        Markdown posts (front matter via gray-matter)
public/brand/        Logos and brand assets
```

# Conventions & architecture

- **`lib/site-config.ts` is the single source of truth.** Never hardcode company name, URLs, email, phone, nav items, social links, or CTA copy in components — import from `siteConfig`, `primaryNav`, `footerNav`.
- **Metadata:** Build every page's `metadata` with `buildMetadata()` from `lib/seo.ts` (handles canonical URL, OpenGraph, Twitter, and the dynamic OG image). Don't hand-roll `Metadata` objects per page.
- **OG images:** Use `ogImageUrl()` / `/api/og` for dynamic social cards; don't ship static per-page OG images unless a page needs a bespoke one.
- **Server vs. client components:** Default to Server Components. Add `"use client"` only for interactivity/animation, and keep client components small and leaf-level.
- **Files:** kebab-case for component files (`site-header.tsx`); PascalCase for the exported component. One primary component per file.
- **Styling:** Tailwind utility classes; use the CSS variables/tokens defined in `app/globals.css` rather than ad-hoc hex values. Keep each section visually distinct (Rule 1).

# Design & content

- Follow the project skills and design docs first (`.claude/skills/`, `DESIGN.md` if present), then raise craft with the global UI skills. For any page/section work, invoke the `ui-ux-pro-max` skill before writing UI code.
- Consult Magic UI / React Bits / 21st.dev MCP for components before hand-rolling.
- Copy must match the brand voice in `ABOUT.md` — clear, confident, business-outcome-driven; avoid unnecessary jargon. Every page should follow the content arc in `PLAN.md` and end with a clear CTA (default: **Book Discovery** → `/contact`).

## Project skills (in `.claude/skills/`)

Invoke the one that fits before building; they raise the quality bar and encode the house style.

- **`ui-ux-pro-max`** — elite end-to-end UI/UX. Default for any page/section/component build.
- **`frontend-design`** — distinctive, production-grade frontend that avoids generic AI aesthetics.
- **`taste-skill`** (`design-taste-frontend`) — anti-slop direction; reads the brief, picks a real design direction, ships non-templated interfaces. Audit-first on redesigns.
- **`brandkit`** — brand-guideline boards, logo systems, identity/visual-world assets. Use for brand imagery and identity direction.
- **`redesign-skill`** (`redesign-existing-projects`) — design auditor: audits an existing screen, flags generic AI patterns, and upgrades to premium without breaking functionality. Run it on any section that already exists before iterating.
- **`emil-design-eng`** — Emil Kowalski's philosophy on UI polish, component design, and animation decisions. Consult for micro-interaction and motion craft.

# Motion — the site must never feel static

Movement is a hard requirement, not a finishing touch (Rules 3 & 6). A section that renders with no motion is incomplete. Every section must combine several of the layers below; no two adjacent sections should animate the same way (Rule 1).

- **Motion stack:** GSAP + ScrollTrigger is the default for scroll-driven and timeline work; Framer Motion (`motion`) for React component interactions and `AnimatePresence` exits. Use `@react-three/fiber` + drei for any 3D/WebGL, and Lottie for vector micro-animations. Reach for the `gsap-scrolltrigger`, `motion-framer`, and `emil-design-eng` skills.
- **Entrance:** every section reveals on scroll into view — staggered fades/slides/clip reveals, never all-at-once.
- **Scroll-driven:** parallax backgrounds, pinned/scrubbed sequences, horizontal scroll, or scroll-linked counters where they earn their place. Background images should move (parallax/Ken Burns), not sit flat.
- **Micro-interactions:** hover, focus, tap, and press states on every interactive element; magnetic buttons, animated underlines, cursor effects where tasteful.
- **Ambient:** subtle continuous motion (gradient drift, floating shapes, marquees, animated graphs) so the page feels alive at rest.
- **Page transitions:** animate route changes rather than hard cuts.
- **Non-negotiables:** honour `prefers-reduced-motion` (provide a calm, reduced variant — reduced, not zero polish), animate only GPU-cheap properties (`transform`/`opacity`), keep 60fps, lazy-init offscreen animations, and never let motion block content or interaction.

# Non-functional requirements (enforce on every page)

- **Accessibility (WCAG AA):** semantic landmarks, one `<h1>` per page and ordered headings, `alt` text on images, visible focus states, labelled form controls, ≥4.5:1 text contrast, keyboard-operable interactions.
- **SEO:** unique title/description via `buildMetadata`, canonical URL, JSON-LD structured data where relevant, and keep `sitemap.ts` / `robots.ts` accurate when adding routes.
- **Performance:** use `next/image` for imagery (this is an image-heavy site), lazy-load below-the-fold media, and check the production build for regressions.
- **Responsive:** mobile-first; verify layouts at mobile, tablet, and desktop widths.

# Workflow & git

- Branch off `main`; do not commit directly to `main`. Only commit/push when the user asks.
- Keep the auto-generated `nextjs-agent-rules` block at the top of this file committed with your work so the tree stays clean.
- Before finishing UI work: `npm run build` passes, `npx tsc --noEmit` is clean, and the affected routes render correctly.