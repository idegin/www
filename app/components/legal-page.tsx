import { PageHero } from "./page-hero";
import { Reveal } from "./reveal";

export type LegalSection = { heading: string; body: string[] };

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} lead={intro} cta={false} />
      <section className="bg-background pb-24">
        <div className="container-page">
          <p className="text-small text-muted">Last updated: {updated}</p>
          <div className="mt-10 max-w-3xl">
            {sections.map((s, i) => (
              <Reveal key={s.heading} index={i % 3} className="mb-10">
                <h2 className="text-subheading font-display font-semibold text-ink">
                  {s.heading}
                </h2>
                {s.body.map((p, j) => (
                  <p key={j} className="mt-3 text-body text-muted">
                    {p}
                  </p>
                ))}
              </Reveal>
            ))}
            <p className="mt-12 rounded-xl border border-line bg-surface-alt p-5 text-small text-muted">
              This document is a general template provided for information only
              and does not constitute legal advice. Please have it reviewed by
              qualified legal counsel before relying on it.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
