import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "../components/page-hero";
import { SectionHeader } from "../components/section-header";
import { Reveal } from "../components/reveal";
import { CtaBand } from "../components/cta-band";
import { BookCta } from "../components/book-cta";
import { IconArrowRight, IconArrowUpRight } from "../components/icons";
import { Industries } from "../components/industries";

export const metadata: Metadata = buildMetadata({
  title: "Industries",
  description:
    "AI employees, agents, and automation tailored to how your sector actually operates — from healthcare and financial services to manufacturing across Nigeria and beyond.",
  path: "/industries",
  kicker: "Industry expertise",
});

type Spotlight = {
  code: string;
  sector: string;
  heading: string;
  summary: string;
  challenges: string[];
  opportunities: string[];
  employees: { role: string; detail: string }[];
  stat: { value: string; label: string };
};

const SPOTLIGHTS: Spotlight[] = [
  {
    code: "SPT.01 — HC",
    sector: "Healthcare",
    heading: "Give clinical teams their time back",
    summary:
      "Hospitals, clinics, and HMOs lose hours to intake, claims, and follow-ups that never needed a human. We automate the paperwork so your people can stay with patients.",
    challenges: [
      "Manual patient intake and records duplication across systems",
      "Slow, error-prone insurance claims and pre-authorisation",
      "Missed follow-ups and no-shows draining revenue",
    ],
    opportunities: [
      "Autonomous intake that structures records into your EMR",
      "Claims agents that validate, code, and submit in minutes",
      "Proactive follow-up and reminder outreach across channels",
    ],
    employees: [
      { role: "Intake Coordinator AI", detail: "Captures and verifies patient data on first contact." },
      { role: "Claims Specialist AI", detail: "Prepares, checks, and files claims against payer rules." },
      { role: "Care Follow-up AI", detail: "Schedules reminders and flags at-risk patients for staff." },
    ],
    stat: { value: "62%", label: "less time spent on claims processing" },
  },
  {
    code: "SPT.02 — FS",
    sector: "Financial Services",
    heading: "Move at the speed of compliance, not paperwork",
    summary:
      "Banks, fintechs, and lenders juggle onboarding, KYC, and reconciliation under real regulatory pressure. Our AI employees run these flows accurately and leave an audit trail.",
    challenges: [
      "Lengthy onboarding and KYC that stalls new customers",
      "Reconciliation and reporting that eat back-office hours",
      "Rising fraud and dispute volumes outpacing staff",
    ],
    opportunities: [
      "Document-driven KYC verification with human sign-off",
      "Continuous reconciliation across ledgers and processors",
      "Triage agents that surface suspicious activity for review",
    ],
    employees: [
      { role: "Onboarding Analyst AI", detail: "Runs KYC checks and prepares files for approval." },
      { role: "Reconciliation AI", detail: "Matches transactions and flags variances daily." },
      { role: "Dispute Resolution AI", detail: "Gathers evidence and drafts responses within SLA." },
    ],
    stat: { value: "3.4x", label: "faster customer onboarding" },
  },
  {
    code: "SPT.03 — MF",
    sector: "Manufacturing",
    heading: "Keep the line running and the orders moving",
    summary:
      "Plants and distributors run on procurement, scheduling, and QA that still live in spreadsheets and email. We wire those workflows into agents that never lose a thread.",
    challenges: [
      "Procurement and supplier comms scattered across inboxes",
      "Production scheduling that breaks under last-minute changes",
      "Quality and maintenance logs captured too late to act on",
    ],
    opportunities: [
      "Supplier agents that quote, order, and chase deliveries",
      "Schedule optimisation that reacts to demand and downtime",
      "QA agents that log defects and trigger maintenance tickets",
    ],
    employees: [
      { role: "Procurement Agent AI", detail: "Sources, negotiates, and tracks purchase orders." },
      { role: "Production Planner AI", detail: "Rebalances schedules as inputs and demand shift." },
      { role: "Quality Monitor AI", detail: "Flags defects and routes maintenance in real time." },
    ],
    stat: { value: "28%", label: "reduction in unplanned downtime" },
  },
];

const ENGAGEMENT = [
  {
    code: "01",
    title: "Industry challenges mapped",
    detail: "We document the workflows, systems, and constraints unique to your sector before proposing anything.",
  },
  {
    code: "02",
    title: "AI opportunities scored",
    detail: "Each opportunity is ranked by effort, impact, and readiness so you invest where it pays off first.",
  },
  {
    code: "03",
    title: "Example AI employees",
    detail: "Concrete role definitions for the agents that fit your operation — not abstract capabilities.",
  },
  {
    code: "04",
    title: "Case studies",
    detail: "Relevant proof from comparable teams, with the numbers and the tradeoffs behind them.",
  },
  {
    code: "05",
    title: "ROI model",
    detail: "A grounded model of hours saved, cost avoided, and payback period tailored to your figures.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        tone="light"
        code="SEC.IND — Industries / Sector fit"
        eyebrow="Industry expertise"
        title="AI tailored to how your sector actually operates"
        description="Every industry has its own workflows, language, and rules. We build AI employees and automation around yours — so the technology fits the business, not the other way around."
        cta
      />

      <Industries />

      <section className="relative bg-surface-sunken">
        <div className="shell py-section">
          <SectionHeader
            index="02"
            kicker="Industry spotlights"
            title="What sector fit looks like in practice"
            intro="Three sectors where AI employees change the economics of everyday operations. Yours works the same way — different workflows, same discipline."
          />

          <div className="mt-16 flex flex-col gap-16 lg:gap-24">
            {SPOTLIGHTS.map((spotlight, index) => {
              const flipped = index % 2 === 1;
              return (
                <Reveal key={spotlight.sector}>
                  <article className="grid gap-10 lg:grid-cols-12 lg:items-center">
                    <div
                      className={`lg:col-span-5 ${flipped ? "lg:order-2 lg:col-start-8" : ""}`}
                    >
                      <p className="font-mono text-2xs uppercase tracking-[0.2em] text-muted">
                        {spotlight.code}
                      </p>
                      <p className="kicker mt-4">{spotlight.sector}</p>
                      <h3 className="mt-4 font-display text-2xl font-semibold text-strong sm:text-3xl">
                        {spotlight.heading}
                      </h3>
                      <p className="mt-4 text-body">{spotlight.summary}</p>
                      <div className="mt-8 inline-flex flex-col rounded-2xl border border-border bg-surface p-6">
                        <span className="font-display text-4xl font-semibold tabular-nums text-accent">
                          {spotlight.stat.value}
                        </span>
                        <span className="mt-2 text-sm text-muted">
                          {spotlight.stat.label}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`grid gap-6 sm:grid-cols-3 lg:col-span-7 ${
                        flipped ? "lg:order-1 lg:col-start-1" : ""
                      }`}
                    >
                      <div className="rounded-2xl border border-border bg-surface p-7 transition hover:-translate-y-1 hover:shadow-lg">
                        <p className="kicker">Challenges</p>
                        <ul className="mt-4 space-y-3 text-sm text-body">
                          {spotlight.challenges.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-border-strong" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-2xl border border-border bg-surface p-7 transition hover:-translate-y-1 hover:shadow-lg">
                        <p className="kicker">AI opportunities</p>
                        <ul className="mt-4 space-y-3 text-sm text-body">
                          {spotlight.opportunities.map((item) => (
                            <li key={item} className="flex gap-2">
                              <IconArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-2xl border border-border bg-surface p-7 transition hover:-translate-y-1 hover:shadow-lg">
                        <p className="kicker">Example AI employees</p>
                        <ul className="mt-4 space-y-4 text-sm">
                          {spotlight.employees.map((employee) => (
                            <li key={employee.role}>
                              <span className="font-medium text-strong">
                                {employee.role}
                              </span>
                              <span className="mt-1 block text-muted">
                                {employee.detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative bg-background">
        <div className="shell py-section">
          <SectionHeader
            index="03"
            kicker="How we work"
            title="What every industry engagement includes"
            intro="Whatever your sector, the discovery follows the same rigorous structure — so you always leave with evidence, not opinions."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ENGAGEMENT.map((item, index) => (
              <Reveal key={item.title} delay={(index % 3) * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-7 transition hover:-translate-y-1 hover:shadow-lg">
                  <span className="font-mono text-2xs uppercase tracking-[0.2em] text-muted tabular-nums">
                    {item.code}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-strong">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-muted">{item.detail}</p>
                </div>
              </Reveal>
            ))}

            <Reveal delay={160}>
              <div className="dark flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-depth p-7">
                <div>
                  <p className="kicker text-primary-400">Your sector</p>
                  <h3 className="mt-4 font-display text-xl font-semibold text-white">
                    Don&apos;t see your industry?
                  </h3>
                  <p className="mt-3 text-sm text-ink-300">
                    If your operation runs on repeatable workflows, we can map AI employees to it. Bring us the messiest process you have.
                  </p>
                </div>
                <BookCta size="md" className="mt-6">
                  Book Discovery
                </BookCta>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-14">
              <Link
                href="/#industries"
                className="group inline-flex items-center gap-2 text-sm font-medium text-brand"
              >
                Explore all sectors we serve
                <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand title="See what AI can do in your industry" />
    </>
  );
}
