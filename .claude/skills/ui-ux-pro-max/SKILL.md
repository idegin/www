---
name: ui-ux-pro-max
description: Elite, end-to-end UI/UX design-and-build skill for creating distinctive, production-grade, accessible, high-converting interfaces. Use whenever building or redesigning any web component, page, screen, or app, or when the user asks for "pro"/"max"/"top-tier"/premium UI/UX quality. Covers research, information architecture, visual design, motion, accessibility, responsive layout, and performance.
license: Use freely.
---

# UI/UX Pro Max

The highest-quality bar for interface work. Every artifact this skill produces should look intentionally designed by a senior product designer and engineer — never generic "AI slop". Ship real, working, accessible code, not mockups.

## Operating principle

Design serves an outcome. Before pixels: know **who** uses this, **what** they're trying to do, and **what one action** the screen should drive. Then commit to a bold, coherent aesthetic direction and execute it with precision. Intentionality beats intensity — refined minimalism and confident maximalism both win; timid, evenly-distributed design always loses.

## Workflow

1. **Understand** — purpose, audience, primary task, brand/voice, technical stack, constraints. Detect existing design tokens/systems in the repo and honor them (never hard-code hex when a token exists).
2. **Architect** — information hierarchy first. What is the single most important element on the screen? Order content by user priority, not by convenience. One clear headline, supporting copy, one obvious primary CTA.
3. **Direct** — pick an explicit aesthetic: editorial, brutalist, luxury/refined, retro-futuristic, organic, industrial, playful, Swiss/grid, etc. Choose light or dark deliberately. State the direction in one sentence before coding.
4. **Build** — production-grade, semantic, responsive, accessible code that matches the chosen direction.
5. **Verify** — check against the quality checklist below; run the project's lint/build/a11y tooling; view it running when possible. Never claim a result you didn't observe.

## Visual craft

- **Typography** — the fastest lever for perceived quality. Pick a distinctive, characterful pairing (a display face + a refined body face). Avoid Inter/Roboto/Arial/system defaults and the overused Space Grotesk. Set a real type scale, tight tracking on large headings, generous line-height on body, and a hard measure (~60–75ch) on long text.
- **Color & theme** — one dominant color with sharp, sparing accents beats a flat rainbow. Drive everything from CSS variables/tokens. Ensure text meets WCAG AA contrast (4.5:1 body, 3:1 large text/UI). Avoid the cliché purple-gradient-on-white.
- **Space & layout** — establish a consistent spacing rhythm (a 4/8px scale). Use a max-width container. Reach for asymmetry, overlap, grid-breaking, and generous negative space (or controlled density) instead of the default centered stack.
- **Depth & atmosphere** — replace flat solid fills with intentional texture: subtle gradients/meshes, grain/noise, layered transparency, considered shadows, decorative borders, hairlines. Depth should feel earned, not decorative noise.
- **Detail** — align optical edges, match border radii, size icons consistently, respect a shadow elevation system. The last 5% of polish is what separates senior from generic.

## Interaction & motion

- Every interactive element needs visible **hover, focus-visible, active, and disabled** states, plus loading and empty states for anything async.
- Motion should have purpose: one well-orchestrated page-load reveal with staggered delays delights more than scattered micro-animations. Use easing (not linear), short durations (150–400ms), and transform/opacity for performance.
- Always honor `prefers-reduced-motion` — provide a reduced/instant path.
- Give feedback for every action (optimistic UI, toasts, inline validation). Never leave the user guessing whether something worked.

## Accessibility (non-negotiable, WCAG 2.2 AA)

- Semantic HTML first (`<header> <nav> <main> <section> <footer>`, ordered headings, `<button>` vs `<a>` correctly). ARIA only to fill genuine gaps.
- Full keyboard operability, logical tab order, visible focus rings, and a skip link on pages.
- Meaningful `alt` on informative images, `alt=""` on decorative ones. Label every form field; associate errors with inputs; don't rely on color alone.
- Respect target sizes (≥24px), reduced motion, and dark/light contrast.

## Responsive & performance

- Mobile-first: base styles for small screens, layer up with breakpoints. Test the real range (360 → 1440+), not just desktop.
- Fluid type/space with `clamp()` where it helps; avoid fixed pixel prisons.
- Optimize images (right format/size, lazy where appropriate, explicit dimensions to avoid CLS), subset/`display: swap` fonts, and keep the critical path lean. Watch LCP, CLS, and INP.

## Quality checklist (self-review before "done")

- [ ] One clear aesthetic direction, executed consistently — not a generic template.
- [ ] Distinctive typography; no default system/Inter/Roboto fonts unless required.
- [ ] Tokenized color; AA contrast verified; one dominant color + disciplined accents.
- [ ] Real hierarchy: obvious primary action, ordered content, consistent spacing rhythm.
- [ ] All interactive states present (hover/focus-visible/active/disabled/loading/empty).
- [ ] Semantic, accessible markup; keyboard-navigable; reduced-motion honored.
- [ ] Responsive from ~360px up; no layout shift; images/fonts optimized.
- [ ] Lint/build clean; rendered and observed, not assumed.

Don't hold back — show what a genuinely senior designer-engineer would ship. If the project defines its own design system, that system wins over this skill's defaults; use this skill to raise the craft, not to override house style.
