import { Reveal, SectionHeading } from "./reveal";
import { CheckIcon } from "./feature-icons";

const timeline = [
  { when: "Week 1–2", phase: "Discover", detail: "Interviews, process mapping, data-flow analysis." },
  { when: "Week 2–3", phase: "Design", detail: "Blueprint, roadmap, and ROI projection." },
  { when: "Week 3–4", phase: "Deploy", detail: "First AI employees live in your tools." },
  { when: "Ongoing", phase: "Optimize", detail: "Monitoring and improvement, month over month." },
];

const deliverables = [
  "Workflow Audit Report",
  "AI Opportunity Assessment",
  "AI Workforce Blueprint",
  "Implementation Roadmap",
  "ROI Projection",
  "Live, optimized AI employees",
];

export function ProcessDetails() {
  return (
    <section className="relative bg-background py-20 md:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Timeline */}
        <div>
          <SectionHeading eyebrow="Expected timeline" title="From audit to impact in weeks" />
          <ol className="mt-8 flex flex-col">
            {timeline.map((t, i) => (
              <Reveal key={t.phase} index={i}>
                <li className="relative flex gap-5 pb-8 last:pb-0">
                  {i < timeline.length - 1 ? (
                    <span
                      className="absolute left-[11px] top-6 h-full w-px bg-line"
                      aria-hidden
                    />
                  ) : null}
                  <span className="relative z-10 mt-1 size-6 shrink-0 rounded-full border-2 border-cobalt-500 bg-surface" />
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-caption font-medium text-cobalt-600">
                        {t.when}
                      </span>
                      <h3 className="text-subheading font-display font-semibold text-ink">
                        {t.phase}
                      </h3>
                    </div>
                    <p className="mt-1 text-small text-muted">{t.detail}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Deliverables */}
        <div>
          <SectionHeading eyebrow="What you get" title="Concrete deliverables, not slideware" />
          <ul className="mt-8 grid gap-3">
            {deliverables.map((d, i) => (
              <Reveal key={d} index={i}>
                <li className="flex items-center gap-3 rounded-xl border border-line bg-surface px-5 py-4">
                  <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-cobalt-500 text-white">
                    <CheckIcon className="size-3.5" />
                  </span>
                  <span className="text-body text-ink">{d}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
