---
name: new-page
description: Scaffold a new Next.js App Router route in this project (folder under app/, page.tsx, optional layout, loading, and metadata). Use when the user asks to add a page, route, or section like /about, /blog, /contact, or a dynamic route like /blog/[slug].
---

# new-page

Create a new route in this Next.js 16 App Router project following the repo's conventions.

## Conventions in this repo
- App Router lives in `app/`. Routes are folders; the UI file is `page.tsx`.
- TypeScript, React 19 server components by default. Only add `"use client"` when the component needs interactivity/hooks.
- Tailwind v4 for styling (`app/globals.css`). Prefer utility classes over new CSS files.
- Import alias is `@/*` (e.g. `import { Foo } from "@/app/components/foo"`).

## Steps
1. Confirm the route path and whether it's static (`app/about/page.tsx`) or dynamic (`app/blog/[slug]/page.tsx`).
2. Create the folder + `page.tsx` exporting a default React component.
3. Add a `metadata` export (title + description) — see the `seo-metadata` skill for OpenGraph/JSON-LD.
4. Add `layout.tsx` only if the route subtree needs shared chrome; `loading.tsx` if it fetches data.
5. For dynamic routes, add `generateStaticParams` when the set of slugs is known at build time, and handle not-found with `notFound()` from `next/navigation`.
6. Keep components server-side unless interactivity is required.

## Page template
```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title",
  description: "One-sentence description of the page.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      {/* content */}
    </main>
  );
}
```

After scaffolding, offer to wire the route into the site nav/footer if one exists.
