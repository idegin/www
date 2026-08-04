import { Reveal, SectionHeading } from "./reveal";
import {
  TargetIcon,
  BanknoteIcon,
  GearIcon,
  UsersIcon,
  HeadsetIcon,
  CartIcon,
  BookIcon,
  BriefcaseIcon,
  type IconType,
} from "./feature-icons";

const functions: { icon: IconType; title: string; body: string }[] = [
  { icon: TargetIcon, title: "Sales", body: "Lead follow-up, outreach, CRM hygiene, and pipeline updates." },
  { icon: BanknoteIcon, title: "Finance", body: "Invoicing, reconciliation, reporting, and approvals." },
  { icon: GearIcon, title: "Operations", body: "Workflow coordination and status across your tools." },
  { icon: UsersIcon, title: "HR", body: "Onboarding, scheduling, policy answers, and requests." },
  { icon: HeadsetIcon, title: "Customer Support", body: "Instant, accurate responses across every channel, 24/7." },
  { icon: CartIcon, title: "Procurement", body: "Requests, vendor comms, and purchase order tracking." },
  { icon: BookIcon, title: "Knowledge", body: "Instant retrieval of answers trapped across your systems." },
  { icon: BriefcaseIcon, title: "Executive Ops", body: "Briefings, summaries, and follow-through for leadership." },
];

export function WhatWeTransform() {
  return (
    <section
      aria-labelledby="transform-heading"
      className="relative bg-background py-20 md:py-28"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="What we transform"
          title={
            <span id="transform-heading">
              One AI workforce, across every function
            </span>
          }
          lead="From the front office to the back office, iDegin deploys AI employees that plug into how each team already works."
          align="center"
        />

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {functions.map((f, i) => (
            <Reveal key={f.title} index={i % 4}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-cobalt-300 hover:shadow-elevated">
                {/* hover glow wash */}
                <span
                  className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-cobalt-200/40 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />
                <span className="relative inline-flex size-12 items-center justify-center rounded-xl bg-cobalt-50 text-cobalt-600 transition-all duration-300 group-hover:bg-cobalt-500 group-hover:text-white">
                  <f.icon className="size-6" />
                </span>
                <h3 className="relative mt-5 text-subheading font-display font-semibold text-ink">
                  {f.title}
                </h3>
                <p className="relative mt-2 text-small text-muted">{f.body}</p>
                <span
                  className="absolute right-5 top-5 font-mono text-caption text-neutral-300"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
