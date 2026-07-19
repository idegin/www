import { PageHero } from "./page-hero";
import { siteConfig } from "@/lib/site-config";

type LegalSection = {
  heading: string;
  body: string[];
};

type LegalPageProps = {
  title: string;
  updated: string;
  sections: LegalSection[];
};

export function LegalPage({ title, updated, sections }: LegalPageProps) {
  return (
    <>
      <PageHero
        tone="light"
        eyebrow="Legal"
        title={title}
        description={`Last updated ${updated}`}
      />

      <section className="relative bg-background">
        <div className="shell py-section">
          <div className="mx-auto max-w-3xl">
            <p className="font-mono text-2xs uppercase tracking-[0.2em] text-muted">
              {siteConfig.legalName}
            </p>

            {sections.map((section, index) => (
              <div key={section.heading} className="mt-14 first:mt-10">
                <div className="flex items-baseline gap-4 border-b border-border pb-4">
                  <span className="font-mono text-sm text-brand tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-2xl font-semibold text-strong">
                    {section.heading}
                  </h2>
                </div>
                <div className="mt-5 space-y-4">
                  {section.body.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex} className="text-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
