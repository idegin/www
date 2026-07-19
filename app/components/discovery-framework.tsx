import { SectionHeader } from "./section-header";

const STEPS = [
  { n: "01", title: "Discover", body: "Interview leadership and staff to learn how work actually flows." },
  { n: "02", title: "Map", body: "Visualize processes, handoffs, and every hidden inefficiency." },
  { n: "03", title: "Assess", body: "Pinpoint where AI creates the highest return on investment." },
  { n: "04", title: "Design", body: "Architect the AI employees and software around your processes." },
  { n: "05", title: "Build", body: "Engineer, test, and integrate production-ready systems." },
  { n: "06", title: "Optimize", body: "Monitor, refine, and expand capability as you grow." },
];

export function DiscoveryFramework() {
  return (
    <section id="methodology" className="relative bg-surface-sunken">
      <div className="shell py-section">
        <SectionHeader
          index="06"
          kicker="Our methodology"
          title="A structured path from manual to autonomous"
          intro="Business consulting, systems engineering, and AI implementation combined into one repeatable transformation journey."
        />

        <ol className="mt-16 grid gap-y-10 md:grid-cols-3 md:gap-x-8 lg:grid-cols-6 lg:gap-x-4">
          {STEPS.map((step) => (
            <li key={step.n} className="relative">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-brand/10 font-mono text-sm text-brand tabular-nums">
                  {step.n}
                </span>
                <span className="h-px flex-1 bg-border" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-strong">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
