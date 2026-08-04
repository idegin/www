import { siteConfig } from "./site-config";

/** Organization schema — emitted site-wide for entity/LLM understanding. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/brand/logo-light.png`,
    description: siteConfig.description,
    foundingDate: siteConfig.founded,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.region,
      addressCountry: siteConfig.contact.address.countryCode,
    },
    sameAs: Object.values(siteConfig.socials),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: { "@type": "Organization", name: siteConfig.name },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${siteConfig.url}${it.path}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleSchema(post: {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  thumbnail: string;
  author: string;
  tags: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.thumbnail,
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.tags.join(", "),
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/brand/logo-light.png`,
      },
    },
    mainEntityOfPage: `${siteConfig.url}/resources/${post.slug}`,
  };
}

export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI Workforce Transformation",
    provider: { "@type": "Organization", name: siteConfig.name },
    areaServed: siteConfig.contact.address.country,
    description:
      "End-to-end AI Workforce Transformation: workflow audit, AI strategy, agent development, systems integration, deployment, training, and continuous optimization.",
  };
}

/** Serializable JSON-LD props for the <JsonLd> component. */
export type JsonLdData = Record<string, unknown>;
