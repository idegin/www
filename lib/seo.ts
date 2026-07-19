import type { Metadata } from "next";
import { siteConfig } from "./site-config";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  kicker?: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  tags?: string[];
  ogImage?: string;
};

export function ogImageUrl(params: {
  title: string;
  kicker?: string;
  eyebrow?: string;
}) {
  const search = new URLSearchParams();
  search.set("title", params.title);
  if (params.kicker) search.set("kicker", params.kicker);
  if (params.eyebrow) search.set("eyebrow", params.eyebrow);
  return `/api/og?${search.toString()}`;
}

export function buildMetadata(input: SeoInput): Metadata {
  const url = `${siteConfig.url}${input.path}`;
  const image =
    input.ogImage ??
    ogImageUrl({ title: input.title, kicker: input.kicker ?? input.title });

  return {
    title: input.title,
    description: input.description,
    keywords: input.tags,
    alternates: { canonical: input.path },
    openGraph: {
      type: input.ogType ?? "website",
      url,
      title: input.title,
      description: input.description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [{ url: image, width: 1200, height: 630, alt: input.title }],
      ...(input.publishedTime
        ? { publishedTime: input.publishedTime }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [image],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    foundingDate: siteConfig.founded,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.contact.address.city,
      addressCountry: siteConfig.contact.address.countryCode,
    },
    sameAs: Object.values(siteConfig.socials),
  };
}

export function jsonLdScript(data: object) {
  return {
    __html: JSON.stringify(data),
  };
}
