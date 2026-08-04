import type { Metadata } from "next";
import { PageHero } from "../components/page-hero";
import { Industries } from "../components/industries";
import { WhyIdegin } from "../components/why-idegin";
import { FinalCta } from "../components/final-cta";
import { JsonLd } from "../components/json-ld";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = pageMetadata({
  title: "Industries We Serve",
  description:
    "AI Workforce Transformation for professional services, logistics, healthcare, manufacturing, financial services, real estate, education, and retail.",
  path: "/industries",
  eyebrow: "Industries",
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ])}
      />
      <PageHero
        eyebrow="Industries we serve"
        title={
          <>
            Deep expertise in the sectors{" "}
            <span className="text-gradient-brand">driving Nigeria&apos;s economy</span>
          </>
        }
        lead="We bring AI workforce transformation to the industries where repetitive work and coordination costs are highest—and where automation pays off fastest."
      />
      <Industries />
      <WhyIdegin />
      <FinalCta />
    </>
  );
}
