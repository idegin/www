import Link from "next/link";
import { IconArrowUpRight } from "./icons";
import { SectionHeader } from "./section-header";

const INDUSTRIES = [
  { name: "Healthcare", code: "HC" },
  { name: "Financial Services", code: "FS" },
  { name: "Government", code: "GV" },
  { name: "Manufacturing", code: "MF" },
  { name: "Retail", code: "RT" },
  { name: "Education", code: "ED" },
  { name: "Construction", code: "CN" },
  { name: "Logistics", code: "LG" },
  { name: "Real Estate", code: "RE" },
  { name: "Telecommunications", code: "TC" },
  { name: "Agriculture", code: "AG" },
  { name: "Professional Services", code: "PS" },
];

export function Industries() {
  return (
    <section id="industries" className="relative bg-background">
      <div className="shell py-section">
        <SectionHeader
          index="09"
          kicker="Industry expertise"
          title="Tailored to how your sector actually operates"
          intro="Every industry has its own workflows, constraints, and language. Our AI employees learn yours."
        />

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-4">
          {INDUSTRIES.map((industry) => (
            <Link
              key={industry.name}
              href="/industries"
              className="group flex items-center justify-between gap-3 bg-surface px-5 py-6 transition hover:bg-surface-sunken"
            >
              <span className="flex items-center gap-3">
                <span className="font-mono text-2xs text-muted">
                  {industry.code}
                </span>
                <span className="text-sm font-medium text-strong">
                  {industry.name}
                </span>
              </span>
              <IconArrowUpRight className="h-4 w-4 shrink-0 text-transparent transition group-hover:text-brand" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
