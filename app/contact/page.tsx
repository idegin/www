import type { Metadata } from "next";
import { buildMetadata, jsonLdScript } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { PageHero } from "../components/page-hero";
import { ConsultationForm } from "../components/consultation-form";
import { Reveal } from "../components/reveal";

export const metadata: Metadata = buildMetadata({
  title: "Book an AI Discovery Session",
  description:
    "Tell us how your business runs today. In 30 minutes we'll map your highest-ROI automation opportunity — no cost, no obligation.",
  path: "/contact",
  kicker: "Let's talk",
});

const STEPS = [
  { n: "01", t: "You share the shape of your business", d: "Team size, industry, and the operational friction slowing you down." },
  { n: "02", t: "We map the opportunity", d: "A 30-minute call to pinpoint where AI creates the highest return." },
  { n: "03", t: "You get a roadmap", d: "A clear, prioritized view of what to automate first — yours to keep." },
];

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact iDegin Technologies",
  url: `${siteConfig.url}/contact`,
  mainEntity: {
    "@type": "Organization",
    name: siteConfig.legalName,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.contact.address.city,
      addressCountry: siteConfig.contact.address.countryCode,
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(contactJsonLd)}
      />

      <PageHero
        tone="dark"
        code="SEC.CONTACT — Discovery / Booking"
        eyebrow="Let's talk"
        title="Book your AI Discovery Session"
        description="This isn't a sales call. It's a working session to map where AI and automation will move the needle in your operation."
      />

      <section className="relative bg-surface-sunken">
        <div className="shell grid gap-12 py-section lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <ConsultationForm />
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={100}>
              <p className="kicker">What happens next</p>
              <ol className="mt-8 space-y-8">
                {STEPS.map((step) => (
                  <li key={step.n} className="flex gap-5">
                    <span className="font-mono text-2xs text-brand tabular-nums">
                      {step.n}
                    </span>
                    <div className="border-l border-border pl-5">
                      <p className="font-display text-lg font-semibold text-strong">
                        {step.t}
                      </p>
                      <p className="mt-1 text-sm text-muted">{step.d}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-12 rounded-2xl border border-border bg-surface p-6">
                <p className="kicker">Prefer email?</p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="link-line mt-4 inline-block font-display text-lg font-semibold text-strong"
                >
                  {siteConfig.contact.email}
                </a>
                <p className="mt-4 font-mono text-2xs uppercase tracking-wider text-muted">
                  {siteConfig.contact.address.full}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
