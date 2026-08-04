# DESIGN.md — iDegin Technologies

**The single source of truth for all visual implementation.** Every hex code, pixel value, font weight, and motion curve below is explicit so it can be translated directly into CSS/Tailwind (v4, CSS-first tokens in `app/globals.css`) without guesswork. No visual decision should be made outside this file.

- **Business:** iDegin Technologies — AI Workforce Transformation (autonomous AI employees + custom software for Nigerian mid-sized businesses).
- **Personality:** intelligent · premium · confident · kinetic · trustworthy · outcome-driven (never childish).
- **Brand color (sampled from logo):** Electric Cobalt `#1058F8`.
- **Logo motifs to reuse everywhere:** the **multi-agent node glyph** (connected nodes = AI agents collaborating) and the **terminal underscore `_`** (a blinking cursor — the brand is `iDegin_`). Assets: `public/brand/logo-light.png` (blue mark, for light backgrounds), `public/brand/logo-dark.png` (white mark, for dark backgrounds), `public/brand/favicon.png`.
- **Fonts:** Display = **Bricolage Grotesque** (Google) · Body/UI = **Geist Sans** (installed) · Mono/labels = **Geist Mono** (installed). None are on the banned list.

---

## 1. Visual Theme & Atmosphere

iDegin looks like an **AI command center for serious operators** — a dark, cinematic control room punctuated by bursts of electric, high-voltage color. The core tension is *engineering rigor meeting kinetic intelligence*: deep near-black "Void" canvases (where the multi-agent network hums, glows, and rewires itself in the background) alternate with crisp, editorial light "Paper" sections (where outcomes, numbers, and trust are stated plainly and confidently). This rhythm — dark immersive → light editorial → dark immersive — is the spine of the site and the reason it never feels like a template.

Electric Cobalt is the anchor, but the brand is deliberately **poly-chromatic**: a curated set of neon accents (Iris violet, Aqua cyan, Signal lime, Gold amber, Rose magenta) each own a different section, so scrolling feels like moving through distinct, purpose-built rooms rather than one gradient repeated ten times. Color is used with intent — cool blues/violets for *intelligence and system*, warm amber/rose for *the human cost of manual work*, and signal lime reserved almost exclusively for *measurable wins* (hours saved, cost cut). The result should read as a premium consulting firm that happens to be dangerously good at AI — confident, calm, expensive, and alive.

Motion is not decoration here; it is the argument. Because iDegin sells *autonomous, always-on AI workers*, the site must itself feel autonomous and always-on: node graphs self-assemble on scroll, counters tick up, the underscore cursor blinks, backgrounds drift. Nothing is fully static. (See §7 and `AGENTS.md`.)

**Key Characteristics:**
- Dark "Void" immersive sections alternating with light "Paper" editorial sections — never two adjacent sections styled alike.
- One electric primary (Cobalt) + five disciplined neon accents; each major section adopts a distinct accent.
- Node-graph and terminal-cursor motifs recur as connective tissue across sections.
- Image-heavy: duotone/graded photography, abstract network renders, glass panels over textured backgrounds.
- Big, tight, editorial display type (Bricolage Grotesque) against clean neutral body (Geist).
- Mono eyebrows/labels (Geist Mono, wide-tracked, uppercase) as a persistent "systems" signal.
- Perpetual, GPU-cheap motion + glow; strict `prefers-reduced-motion` fallback.
- WCAG AA throughout; neon accents are constrained to backgrounds/fills where they would fail as text.

---

## 2. Color Palette & Roles

> Contrast ratios (against the noted background) are computed and annotated. Body text must hit **4.5:1**, large/bold text **3:1**. Accents marked *"fills/dark-bg only"* fail as body text on white and must not be used for it.

### Primary — Electric Cobalt
| Role | Hex | Usage | Contrast |
|------|-----|-------|----------|
| Primary 50 | `#EEF3FF` | Tint backgrounds, hover wash | — |
| Primary 100 | `#DBE5FF` | Chips, subtle fills | — |
| Primary 300 | `#85A6FF` | Accents on Void, borders on dark | — |
| Primary 400 | `#4C7CFF` | Gradients, hover glows | — |
| **Primary 500** | **`#1058F8`** | **Brand. CTA fills, key accents, links** | 5.56:1 on white ✓ body |
| Primary 600 | `#0B3FCB` | Hover/active for CTAs, links on white | 8.9:1 on white ✓ |
| Primary 700 | `#0A34A6` | Pressed, deep headers | — |
| Primary 900 | `#0B255F` | Deep gradient stops | — |

### Accent — The "Pop" System (each owns a section, see §9)
| Role | Base | Dark (hover) | Light (tint) | Usage | Text safety |
|------|------|--------------|--------------|-------|-------------|
| Iris (violet) | `#7A3BFF` | `#5B21D6` | `#EDE6FF` | "Intelligence"/methodology sections, gradient partner to Cobalt | 5.39:1 on white ✓ body |
| Aqua (cyan) | `#12D6E8` | `#0A9FB0` | `#D9FAFE` | Node-graph edges, network viz, agent motifs | fills/dark-bg only |
| Signal Lime | `#B6F03C` | `#86B81C` | `#F0FBD4` | **Reserved for wins/outcomes/metrics** | fills/dark-bg only |
| Gold Amber | `#FFB020` | `#E08A00` | `#FFF1D6` | "Cost of inefficiency", premium highlights, ratings | fills/dark-bg only |
| Rose Magenta | `#FF4D8D` | `#E01F6B` | `#FFE0EC` | Pain/urgency, "before" states, energy | 3.13:1 on white → large text only |

### Interactive States
| Role | Hex | Usage | Contrast |
|------|-----|-------|----------|
| Link Default | `#1058F8` | Links on light | 5.56:1 ✓ |
| Link Hover | `#0B3FCB` | Hovered links | 8.9:1 ✓ |
| Link Visited | `#5B21D6` | Visited links | 6.1:1 ✓ |
| Link (on dark) | `#85A6FF` | Links on Void | 6.4:1 on `#060910` ✓ |
| Focus Ring | `#1058F8` @ 45% | `0 0 0 3px rgba(16,88,248,0.45)` | visible on light & dark |
| Error | `#D92D20` | Validation errors (text-safe) | 4.9:1 on white ✓ |
| Error Surface | `#FEE4E2` | Error field background | — |
| Success | `#12B76A` | Confirmations | 3.4:1 → large/icon; pair with text |
| Success Surface | `#D1FADF` | Success background | — |
| Warning | `#B5560A` | Warning text | 4.6:1 on white ✓ |
| Warning Surface | `#FEF0C7` | Warning background | — |

### Neutral Scale (cool blue-tinted)
| Role | Hex | Usage | Contrast on white |
|------|-----|-------|-------------------|
| Neutral 950 (Ink) | `#0A0E1A` | Primary text on light | 18.6:1 ✓ |
| Neutral 800 | `#1B2236` | Strong text, dark headers | 14.5:1 ✓ |
| Neutral 700 | `#2E354B` | Secondary text | 10.8:1 ✓ |
| Neutral 600 | `#565E76` | Tertiary text | 6.16:1 ✓ body |
| Neutral 500 | `#7B8299` | Placeholders, disabled label | 4.0:1 → large only |
| Neutral 400 | `#A6ACC0` | Disabled text, subtle borders | — |
| Neutral 300 | `#CBCFDD` | Strong dividers on light | — |
| Neutral 200 | `#E5E8F0` | Borders, dividers | — |
| Neutral 100 | `#F1F3F9` | Subtle backgrounds | — |
| Neutral 50 | `#F7F9FC` | Alternate page background | — |

### Surface & Borders
| Role | Hex / Value | Usage |
|------|-------------|-------|
| Void (page dark) | `#060910` | Immersive dark section canvas |
| Void 900 | `#0B0F1C` | Dark section gradient base |
| Dark Surface | `#10162A` | Cards/panels on Void |
| Dark Glass | `rgba(255,255,255,0.04)` | Glass panels on Void (backdrop-blur 16px) |
| Surface Primary | `#FFFFFF` | Cards, main surfaces on light |
| Surface Secondary | `#F7F9FC` | Alternate surface, sidebars |
| Paper (page light) | `#FFFFFF` | Editorial section canvas |
| Border Default (light) | `#E5E8F0` | Standard borders on light |
| Border Subtle (light) | `#F1F3F9` | Subtle dividers on light |
| Border on Dark | `rgba(255,255,255,0.08)` | Borders on Void |
| Border on Dark Strong | `rgba(255,255,255,0.14)` | Emphasized borders on Void |
| Text on Dark (primary) | `#F4F6FB` | Body/headings on Void — 17.9:1 ✓ |
| Text on Dark (secondary)| `#A6ACC0` | Secondary text on Void — 7.3:1 ✓ |

### Shadow & Glow Colors
| Role | Value | Usage |
|------|-------|-------|
| Shadow Light | `rgba(10,14,26,0.06)` | Subtle elevation |
| Shadow Medium | `rgba(10,14,26,0.10)` | Card elevation |
| Shadow Heavy | `rgba(10,14,26,0.20)` | Modal/dropdown elevation |
| Glow Primary | `rgba(16,88,248,0.45)` | Cobalt neon glow (CTAs, hero) |
| Glow Iris | `rgba(122,59,255,0.40)` | Violet glow |
| Glow Aqua | `rgba(18,214,232,0.40)` | Cyan glow (network) |

**Signature gradients**
- *Cobalt→Iris (brand):* `linear-gradient(135deg, #1058F8 0%, #7A3BFF 100%)`
- *Aqua→Cobalt (network):* `linear-gradient(120deg, #12D6E8 0%, #1058F8 100%)`
- *Void depth:* `radial-gradient(120% 120% at 50% -10%, #0B0F1C 0%, #060910 60%)`
- *Signal (outcomes):* `linear-gradient(135deg, #B6F03C 0%, #12D6E8 100%)` (on dark only)

---

## 3. Typography Rules

**Display Font:** Bricolage Grotesque (Google Fonts) — variable, optical, editorial character for big kinetic headlines.
**Body/UI Font:** Geist Sans (`--font-geist-sans`, already wired in `app/layout.tsx`).
**Mono Font:** Geist Mono (`--font-geist-mono`) — eyebrows, labels, data, the terminal-cursor motif.

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Bricolage Grotesque | 80px / 5rem | 700 | 1.0 | -0.03em | Homepage hero only; clamp on mobile |
| Display Large | Bricolage Grotesque | 56px / 3.5rem | 700 | 1.05 | -0.02em | Major section openers |
| Section Heading (H2) | Bricolage Grotesque | 40px / 2.5rem | 600 | 1.1 | -0.02em | Standard section headers |
| Sub-heading (H3) | Bricolage Grotesque | 26px / 1.625rem | 600 | 1.25 | -0.01em | Card titles, sub-sections |
| Body Large | Geist Sans | 19px / 1.1875rem | 400 | 1.6 | 0 | Lead paragraphs, hero sub-copy |
| Body | Geist Sans | 16px / 1rem | 400 | 1.65 | 0 | Standard body text |
| Button | Geist Sans | 15px / 0.9375rem | 600 | 1.0 | 0.01em | All button labels |
| Small | Geist Sans | 14px / 0.875rem | 400 | 1.5 | 0 | Captions, metadata |
| Caption | Geist Sans | 12px / 0.75rem | 500 | 1.4 | 0.02em | Fine print, timestamps |
| Eyebrow / Kicker | Geist Mono | 13px / 0.8125rem | 500 | 1.0 | 0.16em | UPPERCASE; precede headings; brand "systems" signal |
| Data / Metric | Geist Mono | 56px / 3.5rem | 600 | 1.0 | -0.01em | Big animated numbers (§9 outcomes) |

**Rules:** one `<h1>` per page (Display Hero/Large). Body measure caps at **68ch**. Never set body under 16px. Eyebrows are always mono + uppercase + wide tracking. Headlines may use a two-tone treatment (e.g. white text with one word in Cobalt or the accent that owns the section).

---

## 4. Component Stylings

### Buttons

**Primary Button (Cobalt):**
| Property | Value |
|----------|-------|
| Background | `#1058F8` |
| Text Color | `#FFFFFF` (5.56:1 ✓) |
| Font | Geist Sans, 15px, 600, LS 0.01em |
| Padding | 14px 24px |
| Border Radius | 12px |
| Border | none |
| Shadow | `0 4px 8px rgba(10,14,26,0.08)` |
| Hover Background | `#0B3FCB` |
| Hover Shadow | `0 8px 20px rgba(16,88,248,0.35)` (glow) |
| Hover Transform | `translateY(-1px)` |
| Focus Ring | `0 0 0 3px rgba(16,88,248,0.45)` |
| Active Background | `#0A34A6` |
| Active Transform | `translateY(1px)` |
| Disabled Background | `#A6ACC0` |
| Disabled Text | `#F1F3F9` |
| Transition | `transform 160ms ease, background 200ms ease, box-shadow 200ms ease` |

**Secondary Button (outline):**
| Property | Value |
|----------|-------|
| Background | `transparent` |
| Text Color | `#0A0E1A` (on light) / `#F4F6FB` (on dark) |
| Border | `1px solid #E5E8F0` (light) / `1px solid rgba(255,255,255,0.14)` (dark) |
| Padding | 13px 23px |
| Border Radius | 12px |
| Hover Background | `#F7F9FC` (light) / `rgba(255,255,255,0.06)` (dark) |
| Hover Border | `#1058F8` |
| Focus Ring | `0 0 0 3px rgba(16,88,248,0.45)` |
| Active Transform | `translateY(1px)` |
| Transition | `all 180ms ease` |

**Dark/Inverse Button (on Void, glowing):**
| Property | Value |
|----------|-------|
| Background | `#FFFFFF` |
| Text Color | `#0A0E1A` |
| Padding | 14px 24px |
| Border Radius | 12px |
| Shadow | `0 0 0 1px rgba(255,255,255,0.10), 0 0 40px rgba(16,88,248,0.35)` |
| Hover Background | `#F1F3F9` |
| Hover Shadow | `0 0 48px rgba(16,88,248,0.55)` |
| Focus Ring | `0 0 0 3px rgba(133,166,255,0.55)` |
| Transition | `all 200ms ease` |

### Cards
| Property | Value |
|----------|-------|
| Background (light) | `#FFFFFF` |
| Background (dark) | `#10162A` or Dark Glass `rgba(255,255,255,0.04)` + `backdrop-filter: blur(16px)` |
| Border (light) | `1px solid #E5E8F0` |
| Border (dark) | `1px solid rgba(255,255,255,0.08)` |
| Border Radius | 20px |
| Padding | 28px |
| Shadow | `0 1px 2px rgba(10,14,26,0.06)` (resting) |
| Hover Shadow | `0 12px 24px rgba(10,14,26,0.12)` (light) / accent glow on dark |
| Hover Border | section-accent color @ 40% |
| Hover Transform | `translateY(-4px)` |
| Transition | `transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease` |

### Inputs
| Property | Value |
|----------|-------|
| Background | `#FFFFFF` (light) / `rgba(255,255,255,0.04)` (dark) |
| Border | `1px solid #E5E8F0` (light) / `1px solid rgba(255,255,255,0.14)` (dark) |
| Border Radius | 12px |
| Padding | 12px 16px |
| Font | Geist Sans, 16px (prevents iOS zoom) |
| Text Color | `#0A0E1A` / `#F4F6FB` |
| Placeholder Color | `#7B8299` |
| Focus Border | `#1058F8` |
| Focus Ring | `0 0 0 3px rgba(16,88,248,0.25)` |
| Error Border | `#D92D20` |
| Error Ring | `0 0 0 3px rgba(217,45,32,0.20)` |
| Disabled Background | `#F1F3F9` |
| Transition | `border-color 160ms ease, box-shadow 160ms ease` |

### Navigation
| Property | Value |
|----------|-------|
| Background (top) | `transparent` over hero |
| Background (scrolled) | `rgba(6,9,16,0.72)` + `backdrop-filter: blur(14px)` + `1px solid rgba(255,255,255,0.08)` bottom |
| Height | 72px (desktop), 60px (mobile) |
| Link Color | `#F4F6FB` on Void / `#2E354B` on Paper |
| Link Hover Color | `#FFFFFF` / `#0A0E1A` |
| Active Link Color | `#85A6FF` on dark / `#1058F8` on light |
| Active Indicator | 2px animated underline that wipes in (Cobalt→Iris) |
| CTA in nav | Primary Button ("Book Discovery") |
| Mobile Menu Background | `#060910` full-screen overlay, links stagger in |

### Badge / Pill
| Property | Value |
|----------|-------|
| Background | accent Light tint (e.g. `#EEF3FF`) / `rgba(255,255,255,0.06)` on dark |
| Text | accent Dark (e.g. `#0B3FCB`) |
| Border Radius | 9999px |
| Padding | 6px 12px |
| Font | Geist Mono, 12px, 500, LS 0.06em, UPPERCASE |
| Optional | leading 6px dot in accent Base + soft glow |

---

## 5. Layout Principles

**Base Spacing Unit:** 4px.
**Spacing Scale:** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160 (px).

**Grid:**
| Property | Value |
|----------|-------|
| Max Container Width (content) | 1280px |
| Max Container Width (immersive/full-bleed) | 1440px |
| Text Measure | 68ch |
| Grid Columns | 12 |
| Column Gap | 24px |
| Row Gap | 24px |
| Gutter (page padding) | 16px → 24px → 32px → 48px → 64px (per breakpoint) |

**Section Spacing:**
| Context | Desktop | Mobile |
|---------|---------|--------|
| Between major sections | 128px | 80px |
| Between sub-sections | 64px | 48px |
| Between content blocks | 32px | 24px |

**Border Radius Scale:**
| Size | Value | Usage |
|------|-------|-------|
| Small | 10px | Inputs, small badges, tags |
| Medium | 12px | Buttons, chips |
| Large | 20px | Cards |
| XL | 28px | Feature panels, images, media |
| 2XL | 36px | Hero media, immersive frames |
| Full | 9999px | Pills, avatars, dots |

Layouts should favor **asymmetry and editorial off-grid moments** (e.g. a headline spanning 7 columns, media bleeding off the right edge) rather than perfectly centered, symmetrical thirds. Bento grids for "What We Transform" — gapless-feeling, varied cell sizes.

---

## 6. Depth & Elevation

| Level | Name | CSS box-shadow | Usage |
|-------|------|----------------|-------|
| 0 | Flat | `none` | Default, inline elements |
| 1 | Subtle | `0 1px 2px rgba(10,14,26,0.06)` | Resting cards, subtle separation |
| 2 | Raised | `0 4px 8px rgba(10,14,26,0.08), 0 2px 4px rgba(10,14,26,0.05)` | Hovered cards, dropdowns |
| 3 | Elevated | `0 12px 24px rgba(10,14,26,0.12), 0 4px 8px rgba(10,14,26,0.06)` | Modals, popovers, sticky panels |
| 4 | Floating | `0 24px 48px rgba(10,14,26,0.18), 0 8px 16px rgba(10,14,26,0.08)` | Dragged elements, hero media |
| 5 | Neon Glow | `0 0 0 1px rgba(16,88,248,0.30), 0 0 48px rgba(16,88,248,0.35)` | CTAs on Void, active nodes, focal accents |

Shadows derive from the blue-black `rgba(10,14,26,…)` ink — never pure black. On Void sections, replace ambient shadow with **glow** (Level 5) tinted to the section's accent.

---

## 7. Motion & Animation Language

Motion is a hard requirement (see `AGENTS.md` → "Motion — the site must never feel static"). Stack: **GSAP + ScrollTrigger** (scroll/timeline) and **Framer Motion** (`motion`, component interactions, `AnimatePresence`); `@react-three/fiber`/drei for 3D; Lottie for vector micro-icons.

**Signature motifs (reuse across the site):**
- **Blinking cursor `_`** — the brand underscore blinks (1s steps) after key headlines; the hero headline can type in.
- **Self-assembling node graph** — nodes and edges (Aqua→Cobalt) draw in on scroll and pulse continuously; the recurring "AI agents collaborating" visual.
- **Magnetic CTAs** — primary buttons attract the cursor within ~80px and lift with glow.
- **Count-up metrics** — outcome numbers tick from 0 when scrolled into view (Signal Lime/Amber).
- **Parallax + Ken Burns** — background images drift/scale slowly; foreground glass panels move at a different rate.
- **Gradient drift** — Cobalt→Iris meshes slowly animate on Void sections (ambient life at rest).

**Timing tokens:**
| Token | Duration | Easing | Use |
|-------|----------|--------|-----|
| Micro | 120–180ms | `cubic-bezier(0.4,0,0.2,1)` | hover, focus, taps |
| Base | 240–320ms | `cubic-bezier(0.22,1,0.36,1)` (ease-out-quint) | reveals, cards |
| Entrance | 500–800ms | `cubic-bezier(0.16,1,0.3,1)` (ease-out-expo) | section headlines, staggers |
| Scrub | tied to scroll | linear | pinned/scrubbed sequences, parallax |
| Spring (Framer) | — | `{ stiffness: 260, damping: 26 }` | magnetic/interactive elements |

**Rules:** stagger children 60–90ms; animate only `transform`/`opacity` (GPU); reveal each section on scroll-in (never all-at-once); lazy-init offscreen animations; hold 60fps. **`prefers-reduced-motion`:** disable parallax/scrub/type-in/auto-loops, replace with a single 200ms opacity fade — reduced, not zero polish. No two adjacent sections may use the same entrance pattern (Rule 1).

---

## 8. Imagery & Texture Direction

The site must be **image-heavy, including backgrounds** (Rule 2). Treat imagery as a system, not stock drops.

- **Subjects:** abstract AI/network renders (glowing nodes, data flows), modern Nigerian/African business teams and offices (authentic, not generic corporate stock), macro tech textures (circuitry, fiber, server light), clean product/dashboard mockups for AI agents.
- **Treatment:** duotone or graded toward the section accent (e.g. Cobalt duotone on hero, Iris on methodology); dark vignette + subtle **film grain overlay** (`opacity 0.04–0.07`) on Void sections to unify photography; glass panels (`backdrop-blur`) floated over full-bleed images.
- **Framing:** rounded XL/2XL corners (28–36px) on contained media; full-bleed edge-to-edge for immersive sections; images may bleed off one edge for editorial tension.
- **Delivery:** always `next/image` with explicit width/height, `sizes`, and `priority` only on the hero; lazy-load below the fold; provide meaningful `alt`. Keep LCP image optimized (§ performance in AGENTS.md).
- **Overlays for legibility:** any text over an image sits on a scrim — `linear-gradient(rgba(6,9,16,0.2), rgba(6,9,16,0.75))` — to preserve AA contrast.

---

## 9. Section-by-Section Design & Accent Map (Home)

Each section is visually distinct (Rule 1) and owns an accent so the site *pops* as you scroll. Sections map to `PLAN.md`.

| # | Section | Canvas | Accent | Layout & signature treatment |
|---|---------|--------|--------|------------------------------|
| 1 | Hero | Void `#060910` | Cobalt + Aqua | Full-bleed animated node-graph bg, drifting Cobalt→Iris mesh; Display Hero with type-in + blinking `_`; magnetic primary CTA with glow; trust logos marquee below |
| 2 | The Business Reality (problems) | Paper `#FFFFFF` | Rose + Amber | Editorial off-grid list of pains; each pain card tinted warm; small red/amber "cost" tags; subtle diagonal divider into next section |
| 3 | Introducing AI Workforce Transformation | Void gradient (Cobalt→Iris) | Iris | Split layout: prose left, live self-assembling agent graph right (R3F/canvas); glass panel over dark |
| 4 | What We Transform (functions) | Paper `#F7F9FC` | Multi (rotating per card) | **Bento grid**, varied cell sizes; each function card owns a different accent border/icon (Cobalt, Iris, Aqua, Lime, Amber, Rose) — the poly-chromatic "pop" moment; hover lifts + accent glow |
| 5 | Our Methodology (Observe→Design→Deploy→Optimize) | Void `#0B0F1C` | Aqua→Iris | Horizontal/pinned 4-step timeline scrubbed on scroll; connecting line draws in Aqua→Cobalt; step numbers in Geist Mono |
| 6 | Business Outcomes (metrics) | Paper `#FFFFFF` | **Signal Lime** + Amber | Big Geist Mono count-up numbers; lime reserved here for wins; minimalist, confident, lots of whitespace |
| 7 | Industries We Serve | Void `#060910` | Cobalt (+ per-card tint) | Image-heavy cards with duotone photography, parallax bg; hover reveals "Possible AI Agents"; horizontal drag/scroll on desktop |
| 8 | Why iDegin (comparison) | Split Void/Paper | Rose (traditional) vs Cobalt (iDegin) | Two-column contrast; the "old way" column desaturated/rose-warned, iDegin column glowing Cobalt |
| 9 | FAQ | Paper `#FFFFFF` | Iris | Clean accordion, Iris active state, animated expand; mono question numbers |
| 10 | Final CTA (Book Audit) | Void `#060910` | Cobalt glow (full gradient) | Centered, distraction-free; large Cobalt→Iris gradient headline, glowing inverse CTA, ambient mesh + blinking `_` |

Interior pages (Solutions, Industries, Process, About, Insights, Contact, Book Audit) inherit this system: lead with a Void hero, alternate Void/Paper, and pick a governing accent (Solutions=Cobalt, Industries=Aqua, Process=Iris, About=Amber, Insights=Cobalt, Contact/Book=Cobalt with Lime confirmation states).

---

## 10. Do's and Don'ts

### Do's
1. Alternate Void (`#060910`) and Paper (`#FFFFFF`/`#F7F9FC`) sections; give each major section its own accent from §2.
2. Anchor on Cobalt `#1058F8`; reach for Iris/Aqua/Lime/Amber/Rose to differentiate sections and create pop.
3. Reserve **Signal Lime** for measurable wins/outcomes — it should feel earned, not decorative.
4. Use Geist Mono, uppercase, `0.16em` tracking for every eyebrow/label — it's the brand "systems" signal.
5. Keep the node-graph and blinking `_` motifs recurring as connective tissue.
6. Set headlines in Bricolage Grotesque, tight tracking (−0.02 to −0.03em), often two-tone.
7. Animate every section on scroll-in; keep ambient motion alive at rest (§7).
8. Use `next/image` with duotone/graded, grain-overlaid photography and legibility scrims.
9. Put neon accents on Void backgrounds or as fills; use only Cobalt/Iris for accent *text* on white.
10. Honor `prefers-reduced-motion` with a calm fade fallback — never ship zero polish.
11. Verify every text/bg pair against §2 contrast notes before shipping.
12. Pull section components from Magic UI / React Bits / 21st.dev before hand-rolling.

### Don'ts
1. Don't use banned fonts (Inter, Roboto, Arial, Helvetica, Space Grotesk, Lato, Open Sans, Source Sans Pro).
2. Don't style two adjacent sections the same way or reuse the same entrance animation back-to-back.
3. Don't set Aqua, Lime, or Amber as body text on white — they fail AA (fills/dark-bg only).
4. Don't render a section fully static — a no-motion section is incomplete.
5. Don't use pure-black shadows; use the `rgba(10,14,26,…)` ink ramp.
6. Don't drop generic stock (handshakes, glowing brains, faceless suits) — use the imagery system in §8.
7. Don't center every hero over a stock gradient with "Welcome to iDegin".
8. Don't build perfectly symmetrical 3-column feature grids — favor bento/asymmetry.
9. Don't round *everything* uniformly; use the radius scale by role.
10. Don't let neon glow bleed onto text and hurt legibility.
11. Don't hardcode brand values in components — import from `lib/site-config.ts`; import these tokens from `app/globals.css`.
12. Don't animate `width`/`height`/`top`/`left`; animate `transform`/`opacity`.

### The AI Slop Test
> If someone saw this and was told AI made it, would they believe it? If yes, redesign.

Apply to every page/component. Common tells to avoid: centered text over a stock gradient hero; symmetrical 3-column feature grids; everything rounded the same; teal+coral as the identity; "Welcome to [Business]" headlines; purposeless SVG blobs; static sections. iDegin's antidotes: Void/Paper rhythm, poly-chromatic accents, node-graph + `_` motifs, editorial asymmetry, and perpetual motion.

---

## 11. Responsive Behavior

### Breakpoints
| Name | Width | Columns | Container Padding |
|------|-------|---------|-------------------|
| Mobile | 375px | 4 | 16px |
| Tablet | 768px | 8 | 24px |
| Desktop | 1024px | 12 | 32px |
| Large | 1280px | 12 | 48px |
| XL | 1536px | 12 | 64px |

### Touch Targets
- Minimum touch target: 44px × 44px.
- Minimum spacing between targets: 8px.
- Inputs at 16px font to prevent iOS zoom.

### Typography Scaling (use `clamp()`)
| Role | Mobile | Tablet | Desktop | clamp() |
|------|--------|--------|---------|---------|
| Display Hero | 2.75rem | 4rem | 5rem | `clamp(2.75rem, 6vw + 1rem, 5rem)` |
| Display Large | 2.25rem | 2.75rem | 3.5rem | `clamp(2.25rem, 4vw + 1rem, 3.5rem)` |
| Section Heading | 1.75rem | 2rem | 2.5rem | `clamp(1.75rem, 3vw + 0.5rem, 2.5rem)` |
| Sub-heading | 1.375rem | 1.5rem | 1.625rem | `clamp(1.375rem, 1.5vw + 0.75rem, 1.625rem)` |
| Data / Metric | 2.5rem | 3rem | 3.5rem | `clamp(2.5rem, 5vw, 3.5rem)` |
| Body Large | 1.0625rem | 1.125rem | 1.1875rem | `clamp(1.0625rem, 1vw + 0.75rem, 1.1875rem)` |
| Body | 1rem | 1rem | 1rem | fixed |

### Collapsing Strategy
- **Navigation:** hamburger below 1024px (full-screen Void overlay, staggered links); full horizontal nav at 1024px+.
- **Grid/bento:** single column on mobile, 2 columns on tablet, full bento on desktop.
- **Hero:** stacked (text over media) on mobile; side-by-side/immersive on desktop.
- **Methodology timeline:** vertical stepper on mobile; horizontal pinned/scrubbed on desktop.
- **Industry cards:** full-width stack (mobile) → 2-col (tablet) → horizontal drag row (desktop).
- **Images:** full-bleed on mobile; contained with XL radius on desktop.
- **Motion:** reduce parallax intensity on mobile; disable heavy 3D/pinning under 768px in favor of lighter reveals.

---

## 12. Agent Prompt Guide

### Quick Reference
- Primary: `#1058F8` · Primary Dark: `#0B3FCB`
- Accents: Iris `#7A3BFF` · Aqua `#12D6E8` · Lime `#B6F03C` · Amber `#FFB020` · Rose `#FF4D8D`
- Text Primary (light): `#0A0E1A` · Secondary: `#2E354B` · Tertiary: `#565E76`
- Text on Dark: `#F4F6FB` / secondary `#A6ACC0`
- Void: `#060910` · Paper: `#FFFFFF` · Surface Alt: `#F7F9FC` · Dark Surface: `#10162A`
- Border light: `#E5E8F0` · Border dark: `rgba(255,255,255,0.08)`
- Fonts: Display Bricolage Grotesque · Body Geist Sans · Mono Geist Mono

### Example Component Prompts

**Hero Section:**
"Build a full-bleed hero on Void `#060910` with an animated node-graph background (Aqua `#12D6E8` → Cobalt `#1058F8` edges) and a slowly drifting Cobalt→Iris mesh. Eyebrow in Geist Mono 13px, weight 500, UPPERCASE, letter-spacing 0.16em, color `#85A6FF`. Headline in Bricolage Grotesque `clamp(2.75rem,6vw+1rem,5rem)`, weight 700, line-height 1.0, letter-spacing -0.03em, color `#F4F6FB` with one keyword in Cobalt `#1058F8` and a blinking `_` cursor. Sub-copy Geist Sans 19px/1.6 color `#A6ACC0`, max 68ch. Primary CTA: inverse button, background `#FFFFFF`, text `#0A0E1A`, padding 14px 24px, radius 12px, shadow `0 0 40px rgba(16,88,248,0.35)`, magnetic + glow on hover. Reveal with ease-out-expo, stagger 80ms."

**Bento Feature Card ("What We Transform"):**
"Card on `#FFFFFF`, border `1px solid #E5E8F0`, radius 20px, padding 28px, shadow `0 1px 2px rgba(10,14,26,0.06)`. Assign a rotating accent per card (Cobalt/Iris/Aqua/Lime/Amber/Rose): icon and top border use the accent Base; title Bricolage Grotesque 26px weight 600 color `#0A0E1A`; description Geist Sans 16px/1.65 color `#565E76`. Hover: `translateY(-4px)`, shadow `0 12px 24px rgba(10,14,26,0.12)`, border-color accent @40%. Transition 200ms ease."

**Outcome Metric:**
"On `#FFFFFF`, big count-up number in Geist Mono `clamp(2.5rem,5vw,3.5rem)` weight 600 color `#0A0E1A`, with a Signal Lime `#B6F03C` underline/accent; label in Geist Mono 13px UPPERCASE tracking 0.16em color `#565E76`. Animate 0→value with GSAP when scrolled into view."

**Contact / Book-Audit Form:**
"Labels Geist Sans 14px weight 600 color `#2E354B`. Inputs: background `#FFFFFF`, border `1px solid #E5E8F0`, radius 12px, padding 12px 16px, font 16px, placeholder `#7B8299`, focus border `#1058F8` + ring `0 0 0 3px rgba(16,88,248,0.25)`, error border `#D92D20`. Submit uses Primary Button. Success state uses `#12B76A` on `#D1FADF`."

**Footer:**
"Footer on Void `#060910`, top border `1px solid rgba(255,255,255,0.08)`. Headings Geist Mono 13px UPPERCASE tracking 0.16em color `#A6ACC0`; body Geist Sans 14px color `#A6ACC0`; links color `#F4F6FB`, hover `#85A6FF`. White logo mark (`logo-dark.png`). 4 columns on desktop (Company / Solutions / Resources / Legal), single column on mobile. Footer CTA: 'Book an AI Workflow Audit'."

---

### Validation (self-checked)
9 core sections present (+3 project extensions) · all hex 6-digit · contrast ratios computed and AA-annotated in §2 · full typography table (all roles/columns) · no banned fonts · buttons (default/hover/focus/active) + secondary + dark + cards + inputs + nav defined · 6 elevation levels · spacing base 4px + radius scale · 5 breakpoints + 44px touch targets + clamp scaling · agent prompts use exact tokens · AI Slop Test included.
