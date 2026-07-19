---
name: ui-section
description: Build a responsive, production-grade marketing/UI section or component with Tailwind v4 in this Next.js project (hero, features grid, pricing, testimonials, CTA, footer, nav). Use when the user asks to build/add a section, component, or block of the site UI. For whole-page design direction, prefer the frontend-design skill.
---

# ui-section

Build a self-contained, responsive section component that fits this Next.js 16 + Tailwind v4 site.

## Conventions
- Put reusable UI in `app/components/` (create it if missing) and import via `@/app/components/...`.
- Server components by default; add `"use client"` only for interactivity (menus, carousels, forms).
- Tailwind v4 utilities only — no ad-hoc CSS files. Use `app/globals.css` `@theme` for shared tokens (colors, spacing) instead of repeating magic values.
- Mobile-first: base styles are mobile; add `sm: md: lg:` for larger breakpoints.
- Use semantic HTML (`<section>`, `<header>`, `<nav>`, `<h1>`–`<h3>`) — pairs with the `a11y-check` skill.

## Quality bar (avoid generic AI look)
- Consistent spacing rhythm (`py-16 sm:py-24`), a max-width container (`mx-auto max-w-6xl px-4`).
- Real visual hierarchy: one clear headline, supporting copy, obvious primary CTA.
- Use `next/image` for images (sized, with `alt`), `next/link` for internal navigation.
- Respect `prefers-reduced-motion` for animations.
- Dark-mode aware if the site uses it (`dark:` variants).

## Component template
```tsx
export function FeatureSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Headline
      </h2>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* cards */}
      </div>
    </section>
  );
}
```

After building, suggest running the `run` skill to view it and `a11y-check` to validate.
