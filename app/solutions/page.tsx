import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "../components/page-hero";
import { SectionHeader } from "../components/section-header";
import { Reveal } from "../components/reveal";
import { CtaBand } from "../components/cta-band";
import { AiEmployees } from "../components/ai-employees";
import { SolutionsGrid } from "../components/solutions-grid";
import { IconArrowUpRight, IconPlus } from "../components/icons";

export const metadata: Metadata = buildMetadata({
  title: "Solutions",
  description:
    "AI transformation, AI employees, AI agents, custom software engineering, and automation — five solution categories engineered around your business, not the other way around.",
  path: "/solutions",
  kicker: "What we build",
});

const CATEGORIES = [
  {
    index: "01",
    title: "AI Transformation",
    href: "/methodology",
    problem:
      "Teams are drowning in manual process while competitors compound. You need a plan, not another pilot.",
    deliverables: [
      "Operational assessment and opportunity map",
      "Phased transformation roadmap with ROI targets",
      "Executive alignment and change enablement",
      "Governance, guardrails, and measurement",
    ],
  },
  {
    index: "02",
    title: "AI Employees",
    href: "/solutions",
    problem:
      "The work is repetitive, high-volume, and never sleeps — but headcount does. You need a role filled, not a chatbot.",
    deliverables: [
      "A named role with defined responsibilities",
      "Knowledge, tools, and system access wired in",
      "Human-in-the-loop escalation paths",
      "Onboarding, monitoring, and performance reviews",
    ],
  },
  {
    index: "03",
    title: "AI Agents",
    href: "/solutions",
    problem:
      "A single task spans five systems and three approvals. You need something that reasons and acts, not just replies.",
    deliverables: [
      "Task-scoped agents with tool access",
      "Multi-step planning and self-correction",
      "Integrations across your existing stack",
      "Traceable actions with audit logs",
    ],
  },
  {
    index: "04",
    title: "Software Engineering",
    href: "/solutions",
    problem:
      "Off-the-shelf tools force your business to bend. You need software shaped to how you actually operate.",
    deliverables: [
      "Custom web and internal platforms",
      "APIs and integration layers",
      "Data models built for your workflow",
      "Production-grade, tested, and documented",
    ],
  },
  {
    index: "05",
    title: "Automation",
    href: "/solutions",
    problem:
      "Hours vanish into copy-paste, handoffs, and status chasing. You need the busywork to simply disappear.",
    deliverables: [
      "End-to-end workflow automation",
      "System-to-system data sync",
      "Triggered notifications and approvals",
      "Reliability monitoring and alerts",
    ],
  },
];

const INCLUDED = [
  {
    index: "01",
    title: "Problem framing",
    body: "We start from the business outcome and the constraint behind it — not a feature list. Every engagement opens with a shared definition of the problem worth solving.",
  },
  {
    index: "02",
    title: "Custom architecture",
    body: "A system designed for your data, your tools, and your team. No generic templates dressed up as a solution — the architecture fits your operation.",
  },
  {
    index: "03",
    title: "Concrete deliverables",
    body: "Working software, deployed AI roles, and documented workflows you own outright. You leave every phase with something in production, not a slide deck.",
  },
  {
    index: "04",
    title: "Honest timeline",
    body: "A phased plan with dates, milestones, and dependencies laid out up front. You know what ships, when it ships, and what it unblocks next.",
  },
  {
    index: "05",
    title: "ROI model",
    body: "The hours saved, cost avoided, and revenue enabled — modelled before we build and measured after. If the numbers do not work, we say so.",
  },
  {
    index: "06",
    title: "FAQ and handover",
    body: "Clear answers on ownership, security, maintenance, and scale — plus a handover so your team can run and extend what we built.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        tone="dark"
        code="SEC.SOL — Solutions / Outcomes"
        eyebrow="What we build"
        title="Solutions engineered around your business"
        description="AI employees, autonomous agents, custom software, and automation — five ways to remove the manual, compounding work that slows your operation down. We start with your business, then decide what to build."
        cta
        secondary={{ label: "See the methodology", href: "/methodology" }}
      />

      <section className="relative bg-background">
        <div className="shell py-section">
          <SectionHeader
            index="01"
            kicker="Five categories"
            title="Five ways we remove the work that holds you back"
            intro="Most engagements combine more than one. We choose the mix after we understand the problem — never before."
          />

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((category, index) => (
              <Reveal key={category.title} delay={(index % 3) * 80}>
                <Link
                  href={category.href}
                  className="group flex h-full flex-col bg-surface p-7 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-2xs uppercase tracking-wider text-muted tabular-nums">
                      {category.index} / 05
                    </span>
                    <IconArrowUpRight className="h-5 w-5 text-muted transition-colors group-hover:text-brand" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-strong">
                    {category.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted">{category.problem}</p>
                  <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
                    {category.deliverables.map((deliverable) => (
                      <li
                        key={deliverable}
                        className="flex items-start gap-2.5 text-sm text-body"
                      >
                        <IconPlus className="mt-1 h-3.5 w-3.5 shrink-0 text-brand" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </Link>
              </Reveal>
            ))}
            <div className="hidden bg-surface-sunken p-7 lg:flex lg:flex-col lg:justify-center">
              <p className="kicker">Not sure which?</p>
              <p className="mt-4 text-sm text-muted">
                Book a discovery session and we will map your highest-ROI
                opportunity before recommending a single line of code.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand"
              >
                Start with discovery
                <IconArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AiEmployees />

      <section className="relative bg-surface-sunken">
        <div className="shell py-section">
          <SectionHeader
            index="02"
            kicker="Every engagement"
            title="For every solution, you get more than software"
            intro="Whatever we build, the shape of the work is the same — rigorous, measured, and owned by you at the end."
          />

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED.map((item, index) => (
              <Reveal key={item.title} delay={(index % 3) * 80}>
                <article className="relative flex h-full flex-col bg-surface p-7">
                  <span
                    className="reg-mark right-4 top-4"
                    aria-hidden="true"
                  />
                  <span className="font-mono text-2xs uppercase tracking-wider text-muted tabular-nums">
                    {item.index}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-strong">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SolutionsGrid />

      <CtaBand />
    </>
  );
}
