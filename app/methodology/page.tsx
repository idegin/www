import type { Metadata } from "next";
import { buildMetadata, breadcrumbJsonLd, jsonLdScript } from "@/lib/seo";
import { PageHero } from "../components/page-hero";
import { SectionHeader } from "../components/section-header";
import { Reveal } from "../components/reveal";
import { CtaBand } from "../components/cta-band";
import { BookCta } from "../components/book-cta";
import { IconArrowRight } from "../components/icons";
import { DiscoveryFramework } from "../components/discovery-framework";
import { BusinessBeforeTech } from "../components/business-before-tech";

export const metadata: Metadata = buildMetadata({
  title: "Methodology",
  description:
    "How iDegin turns a manual organization into an autonomous one — a structured, six-phase transformation journey that starts with your business, not a tool.",
  path: "/methodology",
  kicker: "How we work",
});

type Phase = {
  n: string;
  code: string;
  title: string;
  summary: string;
  outcome: string;
  activities: string[];
};

const PHASES: Phase[] = [
  {
    n: "01",
    code: "PH.01 — Discover",
    title: "Business Discovery",
    summary:
      "Every engagement begins with understanding the business — not how it is documented on paper, but how work truly flows across departments, teams, and people. We sit with leadership and staff to learn how the organization actually operates day to day.",
    outcome: "Deep operational understanding, grounded in reality rather than org charts.",
    activities: [
      "Leadership and employee interviews",
      "Shadowing how work really gets done",
      "Mapping how departments collaborate",
      "Auditing current systems and tools",
      "Surfacing repetitive manual work",
      "Tracing approval chains and reporting",
      "Studying customer journeys end to end",
      "Uncovering hidden inefficiencies and bottlenecks",
    ],
  },
  {
    n: "02",
    code: "PH.02 — Map",
    title: "Process Mapping",
    summary:
      "With discovery complete, we map the organization's workflows into a single operational picture. Visualizing the business is what turns anecdotes into a system we can reason about — and reveals exactly where friction lives.",
    outcome: "A complete, shared operational picture of the business.",
    activities: [
      "Documenting core business processes",
      "Charting operational handoffs",
      "Modeling system interactions",
      "Tracing information flow between teams",
      "Locating productivity gaps",
      "Flagging duplicated work",
      "Identifying concrete automation opportunities",
    ],
  },
  {
    n: "03",
    code: "PH.03 — Assess",
    title: "AI Opportunity Assessment",
    summary:
      "Using the operational map, we identify where AI can generate the highest return on investment. Every recommendation is aligned with business objectives — measurable impact first, technology trends never.",
    outcome: "A prioritized set of AI opportunities ranked by business return.",
    activities: [
      "AI Employees and domain-expert agents",
      "Internal AI assistants and decision support",
      "Workflow and customer-service automation",
      "Knowledge retrieval across the organization",
      "Intelligent document processing",
      "Predictive operations and data analysis",
    ],
  },
  {
    n: "04",
    code: "PH.04 — Design",
    title: "Custom Solution Design",
    summary:
      "No two businesses operate the same way, so we architect solutions specifically for each organization instead of selling generic software. Everything is designed around your processes — not the other way around.",
    outcome: "An architecture engineered around your people and workflows.",
    activities: [
      "AI agents and enterprise platforms",
      "Workflow engines and custom dashboards",
      "Industry-specific software",
      "APIs and integrations with existing systems",
      "Web and mobile applications",
      "Solutions shaped to your operating model",
    ],
  },
  {
    n: "05",
    code: "PH.05 — Build",
    title: "Implementation & Integration",
    summary:
      "Our engineering team builds and deploys production-ready solutions that integrate seamlessly with the systems you already run — so technology behaves as one connected ecosystem rather than another silo.",
    outcome: "Production-ready systems, integrated into your existing stack.",
    activities: [
      "Building and shipping production systems",
      "Integrating with accounting software and ERPs",
      "Connecting CRMs and databases",
      "Wiring in messaging platforms",
      "Linking internal applications together",
      "Ensuring one connected ecosystem",
    ],
  },
  {
    n: "06",
    code: "PH.06 — Optimize",
    title: "Continuous Optimization",
    summary:
      "Transformation does not stop at deployment. We continuously monitor performance, refine workflows, introduce additional AI capabilities, and help the business evolve as new technologies emerge.",
    outcome: "A system that keeps improving as your business grows.",
    activities: [
      "Monitoring performance in production",
      "Optimizing workflows over time",
      "Introducing new AI capabilities",
      "Expanding automation coverage",
      "Adapting as new technology emerges",
    ],
  },
];

export default function MethodologyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Methodology", path: "/methodology" },
          ])
        )}
      />
      <PageHero
        tone="dark"
        code="SEC.METH — Methodology / Transformation"
        eyebrow="How we work"
        title="A structured path from manual to autonomous"
        description="Most organizations buy AI tools before knowing where AI will actually create value. We combine business consulting, systems engineering, and AI implementation into one repeatable transformation journey."
        cta
        secondary={{ label: "See solutions", href: "/solutions" }}
      />

      <DiscoveryFramework />

      <section className="relative bg-background">
        <div className="shell py-section">
          <SectionHeader
            index="PH"
            kicker="The transformation journey"
            title="Six phases, one connected engagement"
            intro="Each phase builds on the evidence gathered in the last. Nothing is automated before it is understood, and nothing is built before it is designed around your business."
          />

          <ol className="mt-16 space-y-12 sm:space-y-16">
            {PHASES.map((phase, index) => {
              const last = index === PHASES.length - 1;
              return (
                <li key={phase.n} className="relative">
                  <Reveal delay={(index % 3) * 90}>
                    <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
                      <div className="relative flex gap-6 lg:col-span-5">
                        <div className="relative flex flex-col items-center">
                          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-brand/10 font-mono text-lg font-semibold text-brand tabular-nums">
                            {phase.n}
                          </span>
                          {last ? null : (
                            <span
                              className="mt-3 w-px flex-1 bg-border"
                              aria-hidden="true"
                            />
                          )}
                        </div>
                        <div className="pb-2">
                          <p className="font-mono text-2xs uppercase tracking-[0.2em] text-muted">
                            {phase.code}
                          </p>
                          <h3 className="mt-3 font-display text-2xl font-semibold text-strong sm:text-3xl">
                            {phase.title}
                          </h3>
                          <p className="mt-4 max-w-md text-body">{phase.summary}</p>
                          <p className="mt-5 inline-flex items-start gap-2 text-sm text-muted">
                            <IconArrowRight className="mt-1 h-4 w-4 shrink-0 text-brand" />
                            <span>
                              <span className="font-medium text-strong">Outcome — </span>
                              {phase.outcome}
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className="lg:col-span-7 lg:pt-11">
                        <div className="rounded-2xl border border-border bg-surface-sunken p-6 blueprint-dots sm:p-8">
                          <p className="kicker">What happens here</p>
                          <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                            {phase.activities.map((activity, i) => (
                              <li key={activity} className="flex items-start gap-3">
                                <span className="mt-0.5 font-mono text-2xs text-brand tabular-nums">
                                  {phase.n}.{String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="text-sm text-body">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>

          <div className="mt-16 flex justify-center">
            <BookCta size="lg">Start with discovery</BookCta>
          </div>
        </div>
      </section>

      <BusinessBeforeTech />

      <CtaBand
        title="Start with discovery"
        intro="Book an AI Discovery Session and we'll walk phase one with you — mapping how your organization really works and where AI will create the most value."
      />
    </>
  );
}
