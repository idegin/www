import type { Metadata } from "next";
import { PageHero } from "../components/page-hero";
import { RoiCalculator } from "../components/roi-calculator";
import { JsonLd } from "../components/json-ld";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = pageMetadata({
  title: "AI ROI Calculator",
  description:
    "Estimate the hours and cost an AI workforce could save your business. Free, instant, and tailored to your team size and workload.",
  path: "/roi-calculator",
  eyebrow: "ROI Calculator",
});

export default function RoiCalculatorPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "ROI Calculator", path: "/roi-calculator" },
        ])}
      />
      <PageHero
        eyebrow="ROI Calculator"
        title={
          <>
            What could an AI workforce{" "}
            <span className="text-gradient-brand">save you?</span>
          </>
        }
        lead="Move the sliders to estimate the time and money an AI workforce could reclaim across your team. Then book an audit to get the real, scoped numbers."
        cta={false}
      />
      <section className="bg-background pb-24">
        <div className="container-page">
          <RoiCalculator />
        </div>
      </section>
    </>
  );
}
