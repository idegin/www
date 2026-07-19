import Link from "next/link";
import { IconArrowRight } from "./icons";
import { SectionHeader } from "./section-header";

const CASES = [
  {
    industry: "Financial Services",
    title: "From 3-day approvals to same-hour decisions",
    body: "A lending operation replaced manual review queues with an orchestrated AI approval workflow.",
    metric: "-92%",
    metricLabel: "approval time",
  },
  {
    industry: "Healthcare",
    title: "24/7 patient support without adding headcount",
    body: "A clinic network deployed a support AI grounded in its policies to handle tier-1 enquiries.",
    metric: "18k",
    metricLabel: "hrs saved / yr",
  },
  {
    industry: "Manufacturing",
    title: "Connecting five disconnected systems into one",
    body: "A manufacturer unified ERP, inventory, and procurement behind an operations AI layer.",
    metric: "5→1",
    metricLabel: "systems unified",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative bg-surface-sunken">
      <div className="shell py-section">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            index="10"
            kicker="Proof, not promises"
            title="Outcomes we've engineered"
          />
          <Link
            href="/case-studies"
            className="link-line inline-flex items-center gap-2 text-sm font-medium text-brand"
          >
            All case studies
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {CASES.map((item) => (
            <Link
              key={item.title}
              href="/case-studies"
              className="group flex flex-col rounded-2xl border border-border bg-surface p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="font-mono text-2xs uppercase tracking-[0.2em] text-muted">
                {item.industry}
              </span>
              <div className="mt-6 flex items-baseline gap-3">
                <span className="font-display text-4xl font-semibold text-brand tabular-nums">
                  {item.metric}
                </span>
                <span className="font-mono text-2xs uppercase tracking-wider text-muted">
                  {item.metricLabel}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-strong">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm text-muted">{item.body}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand">
                Read the story
                <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
