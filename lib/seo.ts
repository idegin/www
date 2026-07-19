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
    alternates: { canonical: url },
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
      site: siteConfig.twitter,
      creator: siteConfig.twitter,
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
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon-512.png`,
    image: `${siteConfig.url}/api/og`,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    foundingDate: siteConfig.founded,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.region,
      addressCountry: siteConfig.contact.address.countryCode,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: siteConfig.contact.sales,
      availableLanguage: ["English"],
      areaServed: siteConfig.contact.address.country,
    },
    sameAs: Object.values(siteConfig.socials),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function serviceListJsonLd(
  services: { name: string; description: string; path?: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: siteConfig.contact.address.country,
        ...(service.path ? { url: `${siteConfig.url}${service.path}` } : {}),
      },
    })),
  };
}

export function jsonLdScript(data: object) {
  return {
    __html: JSON.stringify(data),
  };
}
