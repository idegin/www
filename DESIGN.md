# iDegin Technologies — Design System

**Version 1.0 · "Operational Blueprint"**

This is the single source of truth for how iDegin looks, feels, and behaves on screen. It exists so that every page — built by a human or an agent — feels like it came from the same studio, on the same day, with the same taste. Read it before designing or building anything.

> **North star:** iDegin is not a software vendor. It is an **AI transformation partner**. The interface must feel like *consulting authority meets engineering precision* — considered, structured, and human — never like a generic "AI startup" template.

---

## 1. Design Principles

1. **Business before technology.** The design leads with outcomes and evidence, not gradients and buzzwords. Proof (metrics, case studies, logos) appears early and often.
2. **Engineered, not decorated.** Every element looks *designed to a system* — aligned to a grid, measured, intentional. We show our engineering rigor through precision, not ornament.
3. **One signal, used decisively.** Signal Blue is a scalpel, not a paint bucket. Dominant ink-and-paper neutrals with sharp blue accents outperform a timid, evenly-blue page.
4. **Editorial clarity.** Strong typographic hierarchy, generous negative space, and a clear reading rhythm. The page should be skimmable by an executive in 15 seconds.
5. **Motion with meaning.** Animation reveals structure and rewards attention — it never decorates for its own sake, and it always respects `prefers-reduced-motion`.
6. **Accessible by default.** WCAG 2.2 AA is the floor, not the goal. Contrast, focus, keyboard, and semantics are non-negotiable.

### The aesthetic direction: "Operational Blueprint"

A blueprint is how engineers communicate a system before it's built — precise lines, annotations, measured space, a confident signal color on a calm ground. That is iDegin's visual language:

- **Ink & paper** neutrals (warm-cool slate, never pure gray) as the calm ground.
- **Signal Blue** as the single voice of intelligence, action, and automation.
- **Solar Gold** as the warm human counterpoint — value, ROI, prestige. (Blue = machine intelligence; Gold = human/business value. The pairing *is* the brand thesis.)
- **Monospace annotations** — kickers, metrics, and technical labels set in mono, like schematic callouts.
- **Blueprint grids & dot fields** as atmospheric background texture instead of flat fills.

**What we deliberately reject:** purple-on-white gradients, glowing neon orbs, Inter/Roboto/Arial, center-everything hero templates, stock "AI brain" imagery, and any pattern that makes iDegin look interchangeable with a thousand other AI sites.

### Signature devices (this is what makes it *ours*)

These recurring devices are the fingerprint of the site. Use them deliberately and consistently — they are the difference between "another AI landing page" and iDegin.

1. **The terminal caret `_`.** The logo ends in a blinking cursor (`iDegin_`). Carry it through the site: kickers, statement headlines, and the CTA microcopy end in a blinking caret (`.caret` utility). It signals "a system, live and ready to execute."
2. **Registration crosshairs.** Small `+` marks (`.reg-mark`) at the corners of hero and key sections — like the alignment marks on an engineering drawing or print sheet. They frame content as *a spec*, not a slide.
3. **Mono coordinate annotations.** Tiny monospace labels float beside key modules — indices (`01 / 06`), coordinates (`x:048 y:120`), status (`● live`), section codes (`SEC.03 — AI EMPLOYEES`). They make the page read as instrumentation.
4. **The agent node-graph.** A live node-and-edge diagram (human manager → operations/finance/sales/support/knowledge/analytics AI) with pulsing signal nodes and animated connector dashes. This is the hero's centerpiece and the single most memorable element — reuse the motif across the site.
5. **Asymmetric, grid-anchored composition.** Content sits on a visible structural grid but breaks it intentionally — offset hero, off-axis visuals, left-weighted headlines. Never center-everything.
6. **Left-to-right underline reveal** on nav/links (`.link-line`) — precise, mechanical, not a fade.

Asymmetry, visible structure, one signal color, live diagrams, and instrument-panel annotations — that combination is the brand.

---

## 2. Color System

### 2.1 Primary · Signal Blue

The brand. Actions, links, focus, active states, key data, and the one thing the eye should follow. Brand value is **`primary-600 = #175CFF`**.

| Token | Hex | Primary use |
|---|---|---|
| `primary-50` | `#EEF3FF` | Tinted section backgrounds, hover wells |
| `primary-100` | `#D9E4FF` | Subtle fills, selected chips |
| `primary-200` | `#BBCEFF` | Borders on tinted surfaces |
| `primary-300` | `#8DAEFF` | Disabled brand, on-dark secondary text |
| `primary-400` | `#5884FF` | On-dark links, gradient light stop |
| `primary-500` | `#2E63FF` | Hover on dark, gradient mid stop |
| **`primary-600`** | **`#175CFF`** | **Brand · buttons, links, focus ring** |
| `primary-700` | `#0E45DB` | Button hover / pressed |
| `primary-800` | `#1039AE` | Deep accents, active pressed |
| `primary-900` | `#143689` | Text on light blue tints |
| `primary-950` | `#0D1F53` | Darkest ink-blue accent |

### 2.2 Secondary · Midnight (deep indigo)

The authority surface. Hero backgrounds, footer, dark sections, and any moment that needs gravitas and depth. It reads near-black but carries a blue soul, so it never feels like flat black.

| Token | Hex | Use |
|---|---|---|
| `midnight-700` | `#131B40` | Raised cards on dark |
| `midnight-800` | `#0E1533` | Elevated dark panels |
| **`midnight-900`** | **`#0A1028`** | **Primary dark surface (hero, footer)** |
| `midnight-950` | `#060A1B` | Deepest sunken dark / gradient base |

Full 50–950 scale is available in `globals.css` for tints and overlays.

### 2.3 Tertiary · Solar Gold

The warm accent — used **sparingly** (roughly 1 gold element per 8 blue). Signals value, ROI, savings, prestige, and "human" warmth. Great for: highlighted metrics, premium badges, the underline on a key statement, ROI-positive numbers, awards.

| Token | Hex | Use |
|---|---|---|
| `gold-100` | `#FDECC8` | Warm tint backgrounds |
| `gold-300` | `#F9C24E` | On-dark gold accents |
| **`gold-400`** | **`#F5A623`** | **Accent base · highlights, ROI numbers** |
| `gold-600` | `#BC6A06` | Gold text on light (AA on paper) |
| `gold-700` | `#964F0A` | Deep gold text |

> Contrast note: use `gold-600`/`gold-700` for gold **text** on light surfaces; reserve `gold-400` for large elements, fills, borders, and text on dark.

### 2.4 Neutral · Ink / Slate

The workhorse. A cool slate with a faint blue undertone so neutrals feel part of the brand, not a separate gray world.

| Token | Hex | Role |
|---|---|---|
| `ink-0` | `#FFFFFF` | Base page background (light) |
| `ink-50` | `#F5F7FA` | Sunken / alternating section background |
| `ink-100` | `#EDEFF4` | Muted fills, skeletons |
| `ink-200` | `#DDE1EA` | **Default borders / hairlines** |
| `ink-300` | `#C3CAD8` | Strong borders, dividers, scrollbar |
| `ink-400` | `#98A1B4` | Subtle text, placeholders, icons |
| `ink-500` | `#6C7589` | Muted / secondary text |
| `ink-700` | `#363E4F` | **Body text** |
| `ink-900` | `#141821` | — |
| `ink-950` | `#0A0D14` | **Headings / strong text** |

### 2.5 Semantic · Feedback

Each has a subtle background (`-50`), a base (`-500`), and a strong text tone (`-700`).

| Intent | Subtle | Base | Strong | Use |
|---|---|---|---|---|
| Success | `#ECFDF3` | `#12B76A` | `#027A48` | ROI gains, confirmations, "after" states |
| Warning | `#FFFAEB` | `#F79009` | `#B54708` | Cost-of-inefficiency, caution |
| Danger | `#FEF3F2` | `#F04438` | `#B42318` | Errors, destructive actions |
| Info | `#EEF3FF` | `#175CFF` | `#0E45DB` | Neutral highlights (maps to brand) |

### 2.6 Semantic surface, text & border tokens

These are **theme-aware**: they resolve to light values by default and flip automatically inside any `.dark` wrapper (used for hero/footer/dark sections). **Always prefer these over raw palette tokens for surfaces, text, and borders** — they keep dark sections correct for free.

| Utility | Token | Light | Dark |
|---|---|---|---|
| `bg-background` | `--background` | `ink-0` | `midnight-900` |
| `bg-surface` | `--surface` | `ink-0` | `midnight-900` |
| `bg-surface-raised` | `--surface-raised` | `ink-0` | `midnight-800` |
| `bg-surface-sunken` | `--surface-sunken` | `ink-50` | `midnight-950` |
| `bg-surface-muted` | `--surface-muted` | `ink-100` | `midnight-800` |
| `text-strong` | `--text-strong` | `ink-950` | `ink-50` |
| `text-body` | `--text` | `ink-700` | `ink-300` |
| `text-muted` | `--text-muted` | `ink-500` | `ink-400` |
| `text-subtle` | `--text-subtle` | `ink-400` | `midnight-300` |
| `text-link` / `hover:text-link-hover` | `--text-link` | `primary-600` | `primary-300` |
| `border-border` | `--border` | `ink-200` | `white/10` |
| `border-border-subtle` | `--border-subtle` | `ink-100` | `white/6` |
| `border-border-strong` | `--border-strong` | `ink-300` | `white/18` |
| `text-brand` / `bg-brand` | `--brand` | `primary-600` | `primary-500` |
| `text-accent` | `--accent` | `gold-400` | `gold-400` |

To create a dark section, wrap it in `<section className="dark bg-background text-body">…` — all semantic tokens invert automatically.

### 2.7 Gradients & atmosphere

Utility classes in `globals.css` — reach for these instead of flat fills:

- `.bg-signal` — 135° blue gradient for primary CTAs and highlight panels.
- `.bg-depth` — midnight gradient for dark hero/footer grounds.
- `.bg-aurora` — soft multi-radial blue + gold glow for hero atmosphere.
- `.text-signal` — blue gradient clipped to text (statement words only, never body).
- `.blueprint-grid` / `.blueprint-dots` — engineered grid/dot texture.
- `.grain` — fine SVG noise overlay for depth on dark surfaces.
- `.glass` — frosted translucency for sticky header, mega-menu, floating CTA.

### 2.8 Contrast & accessibility rules

- Body text on any surface must clear **4.5:1**; large text (≥24px / ≥19px bold) must clear **3:1**.
- `text-body` on `background` and `text-strong` on `background` both pass AA in light and dark.
- Never place `primary-600` text on `midnight-900` (fails) — use `primary-300`/`primary-400` on dark.
- Never signal meaning with color alone — pair with icon, label, or shape.

---

## 3. Typography

A three-voice system: an **expressive display**, a **clean body/UI**, and a **technical mono**. Distinctive but credible — no Inter, no Roboto, no Arial.

| Role | Family | Token / utility | Why |
|---|---|---|---|
| Display / headings | **Bricolage Grotesque** | `font-display` | Editorial, characterful, variable — confident without shouting. Gives headlines a "designed" edge. |
| Body / UI | **Geist** | `font-sans` (default) | Modern, neutral-but-not-generic, superb at small sizes. |
| Technical / labels | **Geist Mono** | `font-mono` | The schematic voice — kickers, metrics, code, data callouts. |

### 3.1 Type scale

Sizes carry tuned line-height and tracking (defined in `@theme`). Use utilities `text-*`.

| Utility | Size | Line-height | Use |
|---|---|---|---|
| `text-display` | clamp 44→96px | 1.02 | Hero statement only ("Your Next Top Performer Isn't Human.") |
| `text-7xl` / `text-6xl` | 96 / 76px | tight | Rare mega moments |
| `text-5xl` | 60px | 1.04 | Page H1 |
| `text-4xl` | 48px | 1.05 | Section H2 |
| `text-3xl` | 36px | 1.11 | Sub-section H3 |
| `text-2xl` | 28px | 1.2 | Card titles, large lead |
| `text-xl` | 22px | 1.38 | Lead paragraph / intro |
| `text-lg` | 18px | 1.55 | Emphasized body |
| `text-base` | 16px | 1.65 | **Body default** |
| `text-sm` | 14px | 1.57 | Secondary, captions, nav |
| `text-xs` | 12px | 1.5 | Meta, footnotes |
| `text-2xs` | 11px | 1 | Kicker/label (mono, tracked) |

### 3.2 Typographic rules

- **One `text-display`/H1 per page.** Headings descend in order (h1 → h2 → h3); never skip levels for size — use classes instead.
- **Kickers are mono.** Every section opens with a `.kicker` (uppercase mono, `primary-600`, `0.18em` tracking) — e.g. `// 03 — AI EMPLOYEES`. This is a signature motif; use it consistently.
- **Metrics are mono.** Big numbers (ROI, hours saved, %) use `font-mono` with `tabular-nums` so they align and read as data.
- **Measure.** Body copy caps at `max-w-content` (~65ch). Never run prose full-bleed.
- **Balance & pretty.** Headings use `text-balance`; paragraphs use `text-pretty` (both applied in base layer).
- **Tracking.** Large display tightens (negative tracking, already in scale); mono labels widen.

---

## 4. Spacing, Layout & Grid

- **Base unit:** 4px. Compose rhythm in multiples (`4, 8, 12, 16, 24, 32, 48, 64, 96`). Extra steps added: `4.5, 15, 18, 22, 30, 38`.
- **Section rhythm:** vertical padding uses `py-section` (`clamp(4rem→9rem)`) for major sections, `py-section-sm` for compact ones. Consistent vertical rhythm is what makes the site feel engineered.
- **Shell:** wrap page content in `.shell` (max `1280px`, responsive inline padding). Full-bleed atmospheric sections may use `max-w-wide` (`1440px`).
- **Grid:** 12-column mental model. Cards default to `grid gap-6 sm:grid-cols-2 lg:grid-cols-3`. Break the grid intentionally for emphasis (offset cards, asymmetric hero) — grid-breaking is encouraged, randomness is not.
- **Container tokens:** `max-w-content` (48rem prose), `max-w-page` (80rem), `max-w-wide` (90rem).

### Breakpoints

| Name | Min-width | Notes |
|---|---|---|
| `xs` | 400px | Large phones |
| `sm` | 640px | — |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop / mega-menu appears |
| `xl` | 1280px | Standard shell |
| `2xl` | 1536px | Wide displays |

Mobile-first always: base styles target phones; layer up with `sm: md: lg:`.

---

## 5. Radius, Elevation & Borders

**Radius** — soft-but-precise, not pill-everything:

| Token | Value | Use |
|---|---|---|
| `rounded-sm` | 6px | Chips, tags, small inputs |
| `rounded-md` | 10px | Buttons, inputs |
| `rounded-lg` | 14px | Cards |
| `rounded-xl` | 18px | Feature cards, media |
| `rounded-2xl` | 24px | Large panels, hero media |
| `rounded-3xl` | 32px | Full-bleed feature blocks |

**Elevation** — blue-tinted shadows for cohesion (`shadow-xs → shadow-2xl`), plus:
- `shadow-glow` — blue focus glow for primary CTAs / active nodes.
- `shadow-glow-gold` — reserved for premium/ROI highlights.
- Prefer **borders + subtle shadow** over heavy drop shadows. On dark surfaces, use `border-border` (translucent white) + inner highlight, not black shadows.

**Borders** — 1px hairlines (`border-border`) are the default separator. The blueprint aesthetic favors visible structure: thin lines, defined edges, `divide-border` between list rows.

---

## 6. Motion

Animation reveals structure at high-impact moments — it is choreography, not decoration.

**Durations:** `duration-fast` (140ms, hovers) · `duration-base` (220ms, most transitions) · `duration-slow` (420ms, entrances) · `duration-slower` (720ms, hero reveals).

**Easings:** `ease-out-expo` (entrances), `ease-out-quart` (general), `ease-in-out-smooth` (loops), `ease-spring` (playful pop).

**Prebuilt animations:** `animate-fade-up`, `animate-fade-in`, `animate-scale-in`, `animate-marquee` (logo strip), `animate-shimmer` (skeletons), `animate-pulse-ring` (live/active AI nodes), `animate-float`.

**Patterns:**
- **One orchestrated page-load** per view: staggered reveals via the `.stagger` helper (set `--i` per child) beats scattered micro-interactions.
- **Scroll-triggered reveals** for sections (fade-up, once). Never animate on every scroll tick.
- **Hover** should reward — cards lift (`-translate-y-1` + shadow), the AI-employee cards expand, buttons shift tint.
- **Live elements** (agent collaboration viz, real-time counters) use `animate-pulse-ring` / `animate-float` to feel alive.
- **Reduced motion:** globally neutralized in the base layer — but still design a static state that reads well.

---

## 7. Iconography & Imagery

- **Icons:** single, consistent line set (e.g. Lucide) — `1.5px` stroke, `currentColor`, `20/24px`. No mixed icon styles, no filled+line mixing.
- **Imagery:** prefer **bespoke schematic/diagram visuals** (agent graphs, workflow maps, before/after slabs) over stock photography. When photography is used: real people/operations, cool-graded to sit with the palette, never generic "robot handshake" stock.
- **AI/agent visuals:** node-and-edge diagrams on `blueprint-grid` grounds, blue signal nodes with `pulse-ring`, gold for the human/manager node. This is the site's strongest recurring visual — invest in it.
- **All images** use `next/image` with explicit dimensions, meaningful `alt`, and modern formats. Decorative images get `alt=""`.
- **OG images** are dynamically generated (per `INFO.md`) using the brand tokens — midnight ground, signal-blue kicker, Bricolage title.

---

## 8. Component Standards

Every component is its own file, semantic HTML, tokens only (never hard-coded hex). Baselines:

**Buttons**
- *Primary:* `bg-brand text-on-brand rounded-md px-5 h-11`, `hover:bg-brand-hover`, `shadow-sm`, focus ring. The main CTA ("Book Discovery") everywhere.
- *Secondary:* `bg-surface border border-border text-strong hover:bg-surface-sunken`.
- *Ghost:* transparent, `text-body hover:text-strong`.
- *On-dark:* white or `.bg-signal` fill; never low-contrast blue-on-midnight.
- Min target 44×44px. Always a visible focus-visible ring.

**Cards** — `bg-surface border border-border rounded-xl p-6`, `hover:-translate-y-1 hover:shadow-lg transition`. Optional `.blueprint-dots` inner texture.

**Inputs** — `h-11 rounded-md border border-border bg-surface px-3.5`, focus `ring-2 ring-ring border-brand`. Every input has a `<label>`; errors use `danger` tone + `aria-describedby`.

**Badges / chips** — mono, `text-2xs` tracked, `rounded-sm`, tinted (`bg-primary-50 text-primary-900`, or `bg-gold-100 text-gold-700`).

**Header** — sticky, `.glass`, transparent until scroll (per PRD), mega-menu on `lg`. `z-header`.

**Mega-menu** — `.glass` panel, grouped-by-outcome columns, generous padding, kicker labels per group.

**Footer** — `.dark .bg-depth` ground, blueprint grid, CTA strip above ("Book Your AI Discovery Session").

**Section wrapper** — `<section>` + `.shell` + `py-section`, opens with a `.kicker`, alternates `bg-background` / `bg-surface-sunken` for rhythm.

---

## 9. The Single Conversion Goal

Per the PRD, every page drives one action: **Book an AI Discovery Session.** Design implications:

- The primary CTA is always `bg-brand`, always visible (header + at least one in-page + footer strip).
- Secondary paths (calculators, assessments) use secondary/ghost styling — never compete visually with the primary CTA.
- Interactive conversion assets (ROI Calculator, AI Workforce Explorer, Opportunity Score) are signature blue-forward, engineered-feeling modules — the blueprint aesthetic is strongest here.

---

## 10. Do / Don't

| ✅ Do | ❌ Don't |
|---|---|
| Use semantic tokens (`bg-surface`, `text-strong`) | Hard-code hex or raw `ink-*` for theme-able surfaces |
| One decisive blue accent per view | Flood the page in blue |
| Mono kickers + mono metrics | Skip the kicker or set numbers in body sans |
| Ink-and-paper calm ground | Purple gradients on white |
| Bricolage headings, Geist body | Inter / Roboto / Arial / system fonts |
| Gold sparingly for value/ROI | Gold as a second primary |
| One orchestrated load animation | Scattered, constant micro-motion |
| `next/image`, real/schematic visuals | Generic "AI brain" stock art |
| Dark sections via `.dark` wrapper | Manual per-element dark overrides |
| WCAG AA contrast, visible focus | Color-only meaning, removed outlines |

---

## 11. Token Reference (quick map)

- **Palette:** `primary-{50–950}`, `midnight-{50–950}`, `gold-{50–950}`, `ink-{0–950}`, `success/warning/danger/info-{50,500,700}`
- **Semantic:** `background`, `surface[-raised|-sunken|-muted|-inverse]`, `strong`, `body`, `muted`, `subtle`, `on-brand`, `link[-hover]`, `border[-subtle|-strong|-inverse]`, `brand[-hover]`, `accent`, `ring`
- **Fonts:** `font-display`, `font-sans`, `font-mono`
- **Type:** `text-{2xs…7xl, display}`
- **Space:** default + `4.5,15,18,22,30,38,section,section-sm`
- **Radius:** `rounded-{xs…3xl}`
- **Shadow:** `shadow-{xs…2xl, glow, glow-gold, inset}`
- **Motion:** `duration-{fast,base,slow,slower}`, `ease-{out-expo,out-quart,in-out-smooth,spring}`, `animate-{fade-up,fade-in,scale-in,marquee,shimmer,pulse-ring,float,blink,dash,orbit}`
- **Signature utilities:** `.shell`, `.kicker`, `.blueprint-grid`, `.blueprint-dots`, `.bg-signal`, `.bg-depth`, `.bg-aurora`, `.text-signal`, `.grain`, `.glass`, `.stagger`, `.text-balance`, `.reg-mark`, `.caret`, `.link-line`, `.rule`

All tokens are defined in `app/globals.css`. When you need something new, add it there as a token first, then use it — never inline a magic value.
