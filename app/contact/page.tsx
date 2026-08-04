import type { Metadata } from "next";
import { PageHero } from "../components/page-hero";
import { ConsultationForm } from "../components/consultation-form";
import { Faq } from "../components/faq";
import { JsonLd } from "../components/json-ld";
import { CheckIcon } from "../components/feature-icons";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/jsonld";
import { siteConfig } from "@/lib/site-config";
import { faqs } from "@/lib/faqs";

export const metadata: Metadata = pageMetadata({
  title: "Book an AI Workflow Audit",
  description:
    "Book your AI Workflow Audit with iDegin. A focused session to map your operations, surface high-ROI automation, and show exactly where an AI workforce pays off.",
  path: "/contact",
  eyebrow: "Book an AI Workflow Audit",
});

const included = [
  "A walkthrough of your current operations and workflows",
  "AI opportunity mapping, ranked by ROI",
  "A clear implementation roadmap and timeline",
  "A projected return on investment",
];

const idealFor = [
  "Teams spending hours on repetitive, manual work",
  "Businesses coordinating across many disconnected tools",
  "Companies hiring just to keep up with growth",
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Book an Audit", path: "/contact" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <PageHero
        eyebrow="Let's talk"
        title={
          <>
            Book your <span className="text-gradient-brand">AI Workflow Audit</span>
          </>
        }
        lead="Tell us about your operations and we'll show you exactly where an AI workforce pays off—mapped to your business, in weeks not months."
        cta={false}
      />

      <section className="bg-background pb-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Left: value + info */}
          <div>
            <h2 className="text-subheading font-display font-semibold text-ink">
              What the audit includes
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {included.map((t) => (
                <li key={t} className="flex gap-3 text-body text-muted">
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-cobalt-500 text-white">
                    <CheckIcon className="size-3.5" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-subheading font-display font-semibold text-ink">
              Ideal for
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {idealFor.map((t) => (
                <li key={t} className="flex gap-3 text-body text-muted">
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-cobalt-50 text-cobalt-600">
                    <CheckIcon className="size-3.5" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-line bg-surface-alt p-6">
              <h3 className="eyebrow text-muted">Reach us directly</h3>
              <dl className="mt-4 flex flex-col gap-3 text-body">
                <div>
                  <dt className="text-small text-muted">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-cobalt-600 hover:text-cobalt-700"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-small text-muted">Office</dt>
                  <dd className="text-muted">{siteConfig.contact.address.full}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <ConsultationForm />
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
}
