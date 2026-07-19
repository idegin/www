import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { PageHero } from "../components/page-hero";
import { SectionHeader } from "../components/section-header";
import { Reveal } from "../components/reveal";
import { CtaBand } from "../components/cta-band";
import { BookCta } from "../components/book-cta";
import { IconArrowRight } from "../components/icons";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "iDegin Technologies is an AI transformation and custom software engineering company in Abuja, Nigeria. We learn how a business truly operates before we build the technology that runs it.",
  path: "/about",
  kicker: "Who we are",
});

const principles = [
  {
    kicker: "Mission",
    title: "Make operational complexity disappear",
    body: "Empower businesses with intelligent technology that eliminates operational complexity, automates repetitive work, and frees people to focus on innovation, growth, and high-value decisions.",
  },
  {
    kicker: "Vision",
    title: "Africa's leading AI transformation company",
    body: "Help organizations across the continent build intelligent businesses powered by autonomous AI agents, custom software, and modern digital infrastructure that unlock sustainable growth.",
  },
  {
    kicker: "Promise",
    title: "Your most productive employee",
    body: "Technology should never be another obstacle — it should become your most productive employee. We build systems that understand your business and automate the work that slows you down. If it doesn't exist, we'll build it.",
  },
];

const values = [
  {
    title: "Business before technology",
    body: "We learn how work truly flows across teams before recommending a single tool. The business leads; the technology follows.",
  },
  {
    title: "Measurable outcomes",
    body: "Every recommendation ties back to revenue, cost, speed, or decision quality — never to technology trends for their own sake.",
  },
  {
    title: "Deep engineering",
    body: "We pair strategic consulting with production-grade systems engineering, so what we design actually ships and holds up.",
  },
  {
    title: "Understand, then automate",
    body: "We refuse to automate a process we don't understand. Discovery and process mapping come first, always.",
  },
  {
    title: "Long-term partnership",
    body: "Transformation doesn't end at deployment. We monitor, optimize, and evolve systems as your business and the technology grow.",
  },
  {
    title: "Build what doesn't exist",
    body: "When off-the-shelf software can't fit how you operate, we architect and build the solution from the ground up.",
  },
];

const stats = [
  { value: siteConfig.contact.address.full, label: "Headquartered" },
  { value: "15+", label: "AI employee roles built" },
  { value: "15", label: "Industries served" },
  { value: siteConfig.founded, label: "Founded" },
];

const pods = [
  {
    name: "Strategy",
    body: "Business discovery, process mapping, and AI opportunity assessment — the work that decides where automation earns its return.",
  },
  {
    name: "Engineering",
    body: "Agents, platforms, workflow engines, and integrations built to production standards and wired into your existing systems.",
  },
  {
    name: "Research",
    body: "Domain-expert autonomous agents that reason, plan, use tools, and execute — trained on how your organization actually works.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        tone="dark"
        code="SEC.ABOUT — Company / iDegin"
        eyebrow="Who we are"
        title={
          <>
            We don&apos;t sell software.
            <br />
            We solve operational problems
            <span className="caret text-gold-400" aria-hidden="true" />
          </>
        }
        description="iDegin Technologies is an AI transformation and custom software engineering company in Abuja, Nigeria. We believe technology should adapt to the business — not the other way around."
        cta
        secondary={{ label: "See our work", href: "/case-studies" }}
      />

      <section className="relative bg-background">
        <div className="shell py-section">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <p className="kicker">Our origin</p>
                <h2 className="mt-4 font-display text-3xl font-semibold text-strong sm:text-4xl">
                  The belief we were built on
                </h2>
                <p className="mt-6 font-mono text-2xs uppercase tracking-[0.2em] text-muted">
                  x:048 y:120 — Business before technology
                </p>
              </div>
              <div className="max-w-content text-lg text-body lg:col-span-7">
                <p>
                  Technology should not force a business to change how it works.
                  It should adapt to the business. That single conviction shapes
                  every engagement we take on.
                </p>
                <p className="mt-6">
                  So we begin by understanding how an organization actually
                  operates — not how it is documented on paper, but how work
                  truly flows across departments, teams, and people. We
                  interview stakeholders and employees, study operational
                  workflows, identify bottlenecks, and uncover the hidden
                  inefficiencies most teams have stopped noticing.
                </p>
                <p className="mt-6 text-strong">
                  Only after we understand the business do we design and deploy
                  AI solutions that create measurable impact. We learn the
                  business first — and if the software you need doesn&apos;t
                  exist, we build it.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-surface-sunken">
        <div className="shell py-section">
          <Reveal>
            <SectionHeader
              index="01 / 03"
              kicker="What drives us"
              title="Mission, vision, and the promise we hold to"
              intro="Three commitments that keep every project honest — from the first discovery call to continuous optimization years later."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {principles.map((item, index) => (
              <Reveal key={item.kicker} delay={index * 80}>
                <article className="flex h-full flex-col rounded-xl border border-border bg-surface p-8 transition duration-200 hover:-translate-y-1 hover:shadow-lg">
                  <p className="kicker">{item.kicker}</p>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-strong">
                    {item.title}
                  </h3>
                  <p className="mt-4 flex-1 text-body">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-background">
        <div className="shell py-section">
          <Reveal>
            <SectionHeader
              index="02 / 03"
              kicker="How we operate"
              title="The values behind the work"
              intro="These aren't slogans. They are the operating rules that decide what we build, how we build it, and what we refuse to do."
            />
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={(index % 3) * 80} className="h-full">
                <div className="flex h-full flex-col bg-surface p-8">
                  <span className="font-mono text-2xs tabular-nums tracking-[0.2em] text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-strong">
                    {value.title}
                  </h3>
                  <p className="mt-3 flex-1 text-body">{value.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="dark relative overflow-hidden bg-depth grain">
        <div
          className="pointer-events-none absolute inset-0 blueprint-grid opacity-40"
          aria-hidden="true"
        />
        <span className="reg-mark left-5 top-6 sm:left-8" aria-hidden="true" />
        <span className="reg-mark right-5 bottom-6 sm:right-8" aria-hidden="true" />
        <div className="shell relative py-section">
          <Reveal>
            <p className="kicker text-primary-400">By the numbers</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold text-white sm:text-4xl">
              A young company, engineered for scale
            </h2>
          </Reveal>
          <dl className="mt-12 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 80}>
                <div>
                  <dt className="font-mono text-2xs uppercase tracking-[0.2em] text-ink-300">
                    {stat.label}
                  </dt>
                  <dd className="mt-3 font-display text-3xl font-semibold tabular-nums text-white sm:text-4xl">
                    {stat.value}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="relative bg-surface-sunken">
        <div className="shell py-section">
          <Reveal>
            <SectionHeader
              index="03 / 03"
              kicker="How we're different"
              title="Consulting authority meets engineering precision"
              intro="We are not a software vendor with a sales team. We are strategists, engineers, and researchers who work as one pod on every engagement."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pods.map((pod, index) => (
              <Reveal key={pod.name} delay={index * 80}>
                <article className="flex h-full flex-col rounded-xl border border-border bg-surface p-8 transition duration-200 hover:-translate-y-1 hover:shadow-lg">
                  <span className="reg-mark left-6 top-6" aria-hidden="true" />
                  <p className="font-mono text-2xs uppercase tracking-[0.2em] text-muted">
                    Pod
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-strong">
                    {pod.name}
                  </h3>
                  <p className="mt-4 flex-1 text-body">{pod.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <BookCta href="/methodology">See how we work</BookCta>
              <Link
                href="/case-studies"
                className="group inline-flex items-center gap-2 text-sm font-medium text-brand"
              >
                Read our case studies
                <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Build your AI workforce with us" />
    </>
  );
}
