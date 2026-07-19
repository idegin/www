import Link from "next/link";
import { IconArrowUpRight } from "./icons";
import { SectionHeader } from "./section-header";

const OUTCOMES = [
  "Replace repetitive work",
  "Connect disconnected systems",
  "Build custom AI employees",
  "Modernize legacy operations",
  "Engineer bespoke software",
  "Automate the enterprise",
  "Centralize knowledge",
  "Orchestrate workflows",
];

export function SolutionsGrid() {
  return (
    <section id="solutions" className="relative bg-background">
      <div className="shell py-section">
        <SectionHeader
          index="07"
          kicker="What we deliver"
          title="We sell outcomes, not software licenses"
          intro="Everything we build is engineered specifically for your business, industry, and people. If it doesn't exist, we build it."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {OUTCOMES.map((outcome, index) => (
            <Link
              key={outcome}
              href="/solutions"
              className="group flex min-h-40 flex-col justify-between bg-surface p-6 transition hover:bg-surface-sunken"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xs uppercase tracking-[0.2em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <IconArrowUpRight className="h-4 w-4 text-muted transition group-hover:text-brand" />
              </div>
              <h3 className="mt-8 font-display text-lg font-semibold text-strong">
                {outcome}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
