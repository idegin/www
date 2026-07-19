import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "../components/page-hero";
import { SectionHeader } from "../components/section-header";
import { Reveal } from "../components/reveal";
import { CtaBand } from "../components/cta-band";
import { BookCta } from "../components/book-cta";
import { IconArrowRight } from "../components/icons";
import { CaseStudies } from "../components/case-studies";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies",
  description:
    "Measurable outcomes from AI transformation work across finance, healthcare, and manufacturing — faster approvals, hours reclaimed, and systems unified.",
  path: "/case-studies",
  kicker: "Proof, not promises",
});

const METRICS = [
  { value: "92%", label: "faster approvals", tone: "brand" },
  { value: "18k", label: "hrs saved / yr", tone: "accent" },
  { value: "5→1", label: "systems unified", tone: "brand" },
  { value: "15", label: "industries served", tone: "brand" },
] as const;

const ANATOMY = [
  {
    step: "01",
    title: "Challenge",
    body: "We name the operational bottleneck in plain business terms — the queue, the cost, the delay that leadership already feels.",
  },
  {
    step: "02",
    title: "Discovery",
    body: "A structured audit maps the process end to end: systems, handoffs, exceptions, and the true unit economics behind them.",
  },
  {
    step: "03",
    title: "Solution",
    body: "We design the AI workforce — the employees, agents, and automations — and how they slot into existing tools and teams.",
  },
  {
    step: "04",
    title: "Implementation",
    body: "We build, integrate, and ground the system in real policy and data, shipping in tight iterations against clear acceptance criteria.",
  },
  {
    step: "05",
    title: "Results",
    body: "We measure against the baseline captured in discovery — cycle time, throughput, headcount deflection, error rate.",
  },
  {
    step: "06",
    title: "ROI",
    body: "Every engagement resolves to a number the CFO can defend: payback period, annualized savings, and value created per naira spent.",
  },
] as const;

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        tone="dark"
        code="SEC.CASE — Case Studies / Outcomes"
        eyebrow="Proof, not promises"
        title="Outcomes we've engineered"
        description="We don't sell software — we ship measurable results. Every engagement below started with a business bottleneck and ended with a number leadership could take to the board."
        cta
      />

      <section className="dark relative overflow-hidden bg-depth grain">
        <div
          className="pointer-events-none absolute inset-0 blueprint-dots opacity-30"
          aria-hidden="true"
        />
        <div className="shell relative py-section-sm">
          <Reveal>
            <div className="flex flex-col gap-3 border-b border-white/10 pb-8">
              <p className="kicker text-primary-400">In aggregate</p>
              <h2 className="max-w-2xl font-display text-2xl font-semibold text-white sm:text-3xl">
                What our work adds up to across every engagement
              </h2>
            </div>
          </Reveal>
          <dl className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {METRICS.map((metric, index) => (
              <Reveal key={metric.label} delay={(index % 4) * 80}>
                <div className="flex flex-col gap-3 border-l border-white/10 pl-6">
                  <dd
                    className={`font-display text-4xl font-semibold tabular-nums sm:text-5xl ${
                      metric.tone === "accent" ? "text-accent" : "text-brand"
                    }`}
                  >
                    {metric.value}
                  </dd>
                  <dt className="font-mono text-2xs uppercase tracking-[0.2em] text-ink-300">
                    {metric.label}
                  </dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <CaseStudies />

      <section className="relative bg-background">
        <div className="shell py-section">
          <Reveal>
            <SectionHeader
              index="02"
              kicker="How we tell it"
              title="The anatomy of a case study"
              intro="Every story on this page follows the same six-part structure — the same discipline we bring to the engagement itself. Numbers earn their place; nothing here is decorative."
            />
          </Reveal>
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ANATOMY.map((item, index) => (
              <Reveal key={item.step} delay={(index % 3) * 80}>
                <li className="flex h-full flex-col rounded-2xl border border-border bg-surface p-7 transition duration-200 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xs uppercase tracking-[0.2em] text-brand">
                      {item.step} / 06
                    </span>
                    <span className="reg-mark" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-strong">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-muted">{item.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={120}>
            <div className="mt-12">
              <Link
                href="/services"
                className="link-line inline-flex items-center gap-2 text-sm font-medium text-brand"
              >
                See how we deliver each stage
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="dark relative overflow-hidden bg-depth grain">
        <div
          className="pointer-events-none absolute inset-0 blueprint-grid opacity-40"
          aria-hidden="true"
        />
        <span className="reg-mark left-5 top-8 sm:left-8" aria-hidden="true" />
        <span className="reg-mark right-5 bottom-8 sm:right-8" aria-hidden="true" />
        <div className="shell relative py-section">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="kicker justify-center text-primary-400">The standard we hold</p>
              <blockquote className="mt-8">
                <p className="font-display text-2xl font-semibold text-white text-balance sm:text-3xl lg:text-4xl">
                  &ldquo;A result you can&rsquo;t measure isn&rsquo;t a result — it&rsquo;s a
                  hope. We refuse to ship anything that can&rsquo;t be defended with a{" "}
                  <span className="text-accent">number</span>.&rdquo;
                </p>
                <footer className="mt-8 font-mono text-2xs uppercase tracking-[0.2em] text-ink-300">
                  iDegin Technologies — Engineering Principles, Abuja
                </footer>
              </blockquote>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-12 flex justify-center">
              <BookCta size="lg">Bring us your number</BookCta>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Your outcome starts with a conversation" />
    </>
  );
}
