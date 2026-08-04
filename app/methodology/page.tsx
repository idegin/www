import type { Metadata } from "next";
import { PageHero } from "../components/page-hero";
import { Methodology } from "../components/methodology";
import { ProcessDetails } from "../components/process-details";
import { Outcomes } from "../components/outcomes";
import { FinalCta } from "../components/final-cta";
import { JsonLd } from "../components/json-ld";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = pageMetadata({
  title: "Our Methodology",
  description:
    "How iDegin delivers: Discover, Design, Deploy, and Optimize. A proven four-phase path from manual operations to an autonomous AI workforce.",
  path: "/methodology",
  eyebrow: "Our Methodology",
});

export default function MethodologyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Methodology", path: "/methodology" },
        ])}
      />
      <PageHero
        eyebrow="Our Methodology"
        title={
          <>
            From manual to{" "}
            <span className="text-gradient-brand">autonomous</span>, in four phases
          </>
        }
        lead="We begin with your business, not the technology. Every engagement follows the same proven path—so you see impact fast and it compounds over time."
      />
      <Methodology />
      <ProcessDetails />
      <Outcomes />
      <FinalCta />
    </>
  );
}
