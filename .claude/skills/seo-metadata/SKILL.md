---
name: seo-metadata
description: Add or improve SEO for a Next.js page or the whole site — metadata exports (title, description, canonical), OpenGraph/Twitter cards, JSON-LD structured data, and sitemap.ts/robots.ts. Use when the user mentions SEO, social sharing previews, meta tags, Open Graph, sitemap, or search ranking.
---

# seo-metadata

Improve discoverability and social sharing for this Next.js App Router site.

## What good SEO looks like here
- Every route exports `metadata` (or `generateMetadata` for dynamic routes) with a unique `title` and `description`.
- A root `metadataBase` is set in `app/layout.tsx` so relative OG image URLs resolve.
- OpenGraph + Twitter card metadata for rich link previews.
- JSON-LD structured data for the org / articles / breadcrumbs where relevant.
- `app/sitemap.ts` and `app/robots.ts` exist and stay in sync with real routes.

## Root metadata (app/layout.tsx)
```tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: { default: "Site Name", template: "%s · Site Name" },
  description: "Site-wide description.",
  openGraph: { type: "website", siteName: "Site Name", images: ["/og.png"] },
  twitter: { card: "summary_large_image" },
};
```

## Per-page (static)
```tsx
export const metadata: Metadata = {
  title: "About",
  description: "…",
  alternates: { canonical: "/about" },
};
```

## Dynamic route (generateMetadata)
```tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  return { title: post.title, description: post.excerpt,
    openGraph: { images: [post.cover] } };
}
```

## JSON-LD
Render a `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />` inside the page. Use schema.org types (Organization, Article, BreadcrumbList).

## sitemap.ts / robots.ts
Create `app/sitemap.ts` returning a `MetadataRoute.Sitemap` array and `app/robots.ts` returning `MetadataRoute.Robots`. Ask before hardcoding the production domain; keep it in one place.

Ask for the real production domain before writing absolute URLs — don't invent one.
