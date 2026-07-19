import { IconClose, IconArrowRight } from "./icons";
import { SectionHeader } from "./section-header";

const ROWS = [
  { dim: "Starting point", them: "Generic, off-the-shelf software", us: "Research into your actual business" },
  { dim: "Fit", them: "One-size-fits-all", us: "Custom AI and software, built for you" },
  { dim: "Understanding", them: "Little context on how you work", us: "Employee and leadership interviews" },
  { dim: "Scope", them: "Implementation, then gone", us: "Continuous optimization" },
  { dim: "Relationship", them: "A vendor", us: "A long-term transformation partner" },
];

export function WhyChooseIdegin() {
  return (
    <section className="relative bg-background">
      <div className="shell py-section">
        <SectionHeader
          index="11"
          kicker="Why iDegin"
          title="Most vendors sell you software. We solve the problem."
          center
        />

        <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-2xl border border-border">
          <div className="grid grid-cols-[1fr_1fr_1fr] bg-surface-sunken sm:grid-cols-[1.2fr_1fr_1fr]">
            <div className="p-5" />
            <div className="border-l border-border p-5">
              <p className="font-mono text-2xs uppercase tracking-wider text-muted">
                Traditional vendor
              </p>
            </div>
            <div className="border-l border-border bg-brand/5 p-5">
              <p className="font-mono text-2xs uppercase tracking-wider text-brand">
                iDegin
              </p>
            </div>
          </div>

          {ROWS.map((row) => (
            <div
              key={row.dim}
              className="grid grid-cols-[1fr_1fr_1fr] border-t border-border sm:grid-cols-[1.2fr_1fr_1fr]"
            >
              <div className="flex items-center p-5">
                <span className="text-sm font-medium text-strong">{row.dim}</span>
              </div>
              <div className="flex items-start gap-2 border-l border-border p-5">
                <IconClose className="mt-0.5 h-4 w-4 shrink-0 text-danger-500" />
                <span className="text-sm text-muted">{row.them}</span>
              </div>
              <div className="flex items-start gap-2 border-l border-border bg-brand/5 p-5">
                <IconArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span className="text-sm text-strong">{row.us}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
