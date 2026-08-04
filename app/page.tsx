import type { Metadata } from "next";
import { Hero } from "./components/hero";
import { BusinessReality } from "./components/business-reality";
import { TransformationIntro } from "./components/transformation-intro";
import { WhatWeTransform } from "./components/what-we-transform";
import { Methodology } from "./components/methodology";
import { Outcomes } from "./components/outcomes";
import { Industries } from "./components/industries";
import { WhyIdegin } from "./components/why-idegin";
import { Faq } from "./components/faq";
import { FinalCta } from "./components/final-cta";
import { JsonLd } from "./components/json-ld";
import { pageMetadata } from "@/lib/seo";
import { serviceSchema, faqSchema } from "@/lib/jsonld";
import { siteConfig } from "@/lib/site-config";
import { faqs } from "@/lib/faqs";

export const metadata: Metadata = pageMetadata({
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "/",
  eyebrow: "AI Workforce Transformation",
});

export default function Home() {
  return (
    <>
      <JsonLd data={[serviceSchema(), faqSchema(faqs)]} />
      <Hero />
      <BusinessReality />
      <TransformationIntro />
      <WhatWeTransform />
      <Methodology />
      <Outcomes />
      <Industries />
      <WhyIdegin />
      <Faq />
      <FinalCta />
    </>
  );
}
