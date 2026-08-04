import type { Metadata } from "next";
import { siteConfig } from "./site-config";

/** Dynamic OG image URL (rendered by app/api/og/route.tsx). */
export function ogImageUrl(params: { title: string; eyebrow?: string }) {
  const search = new URLSearchParams();
  search.set("title", params.title);
  if (params.eyebrow) search.set("eyebrow", params.eyebrow);
  return `/api/og?${search.toString()}`;
}

type PageSeo = {
  title: string;
  description: string;
  /** Route path beginning with "/" (used for the canonical URL). */
  path: string;
  /** Short label shown on the OG image. */
  eyebrow?: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  tags?: string[];
  /** Override the dynamic OG image (e.g. a post thumbnail). */
  ogImage?: string;
};

/** Build consistent, SEO-complete per-page metadata. */
export function pageMetadata({
  title,
  description,
  path,
  eyebrow,
  ogType = "website",
  publishedTime,
  tags,
  ogImage,
}: PageSeo): Metadata {
  const url = `${siteConfig.url}${path}`;
  const image = ogImage ?? ogImageUrl({ title, eyebrow });
  const fullTitle = `${title} — ${siteConfig.shortName}`;

  return {
    title,
    description,
    keywords: tags,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: ogType,
      ...(publishedTime ? { publishedTime } : {}),
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: siteConfig.twitter,
    },
  };
}
