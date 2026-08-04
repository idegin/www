import type { Metadata } from "next";
import { PageHero } from "../components/page-hero";
import { ReadinessAssessment } from "../components/readiness-assessment";
import { JsonLd } from "../components/json-ld";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = pageMetadata({
  title: "AI Readiness Assessment",
  description:
    "Answer six quick questions to see how ready your business is for an AI workforce—and get a tailored recommendation on where to start.",
  path: "/ai-readiness",
  eyebrow: "AI Readiness",
});

export default function AiReadinessPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "AI Readiness Assessment", path: "/ai-readiness" },
        ])}
      />
      <PageHero
        eyebrow="AI Readiness"
        title={
          <>
            How ready is your business for an{" "}
            <span className="text-gradient-brand">AI workforce?</span>
          </>
        }
        lead="Six quick questions. An instant readiness score and a tailored recommendation on where to start."
        cta={false}
      />
      <section className="bg-background pb-24">
        <div className="container-page">
          <ReadinessAssessment />
        </div>
      </section>
    </>
  );
}
