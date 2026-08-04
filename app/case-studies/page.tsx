import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/page-hero";
import { Reveal } from "../components/reveal";
import { JsonLd } from "../components/json-ld";
import { ArrowRightIcon } from "../components/icons";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/jsonld";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "Case Studies",
  description:
    "Real results from AI Workforce Transformation engagements. Detailed iDegin case studies are coming soon.",
  path: "/case-studies",
  eyebrow: "Case Studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
        ])}
      />
      <PageHero
        eyebrow="Case studies"
        title={
          <>
            Proof, <span className="text-gradient-brand">coming soon</span>
          </>
        }
        lead="We're documenting the measurable impact of our AI Workforce Transformation engagements—hours saved, costs cut, and workflows automated."
        cta={false}
      />
      <section className="bg-background pb-24">
        <div className="container-page">
          <Reveal>
            <div className="mx-auto max-w-2xl rounded-2xl border border-line bg-surface-alt p-10 text-center">
              <span className="eyebrow text-cobalt-600">In the meantime</span>
              <h2 className="mt-4 text-subheading font-display font-semibold text-ink">
                Want to be our next success story?
              </h2>
              <p className="mt-3 text-body text-muted">
                Book an AI Workflow Audit and we&apos;ll show you exactly where an
                AI workforce moves your numbers.
              </p>
              <Link
                href={siteConfig.cta.href}
                className="group mt-6 inline-flex items-center gap-2 rounded-md bg-cobalt-500 px-6 py-3.5 text-button text-white shadow-glow transition-all duration-200 hover:-translate-y-0.5 hover:bg-cobalt-600"
              >
                {siteConfig.cta.label}
                <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
