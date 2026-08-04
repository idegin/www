import type { Metadata } from "next";
import { PageHero } from "../components/page-hero";
import { TransformationIntro } from "../components/transformation-intro";
import { WhatWeTransform } from "../components/what-we-transform";
import { Outcomes } from "../components/outcomes";
import { FinalCta } from "../components/final-cta";
import { JsonLd } from "../components/json-ld";
import { pageMetadata } from "@/lib/seo";
import { serviceSchema, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = pageMetadata({
  title: "AI Workforce Transformation Solutions",
  description:
    "iDegin's end-to-end AI Workforce Transformation: workflow audit, AI strategy, agent development, systems integration, training, and continuous optimization.",
  path: "/solutions",
  eyebrow: "Our Solution",
});

export default function SolutionsPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Our Solution"
        title={
          <>
            One service.{" "}
            <span className="text-gradient-brand">A workforce of outcomes.</span>
          </>
        }
        lead="Everything we do falls under a single, end-to-end engagement: AI Workforce Transformation. We design, build, and continuously optimize the AI employees that run your operations."
      />
      <TransformationIntro />
      <WhatWeTransform />
      <Outcomes />
      <FinalCta />
    </>
  );
}
