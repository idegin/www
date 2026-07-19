import Link from "next/link";
import { AgentGraph } from "./agent-graph";
import { BookCta } from "./book-cta";
import { IconPlay, IconPlus } from "./icons";

const STATS = [
  { k: "AI Employees", v: "15+ roles" },
  { k: "Industries", v: "15 served" },
  { k: "Based in", v: "Abuja, NG" },
];

const CAPABILITIES = [
  "Custom AI Agents",
  "AI Employees",
  "Multi-Agent Systems",
  "Workflow Automation",
  "Enterprise Software",
  "Legacy Modernization",
  "Document Processing",
  "Knowledge Management",
];

export function Hero() {
  return (
    <section className="dark relative isolate overflow-hidden bg-depth grain">
      <div
        className="pointer-events-none absolute inset-0 blueprint-grid opacity-60"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-aurora" aria-hidden="true" />
      <span className="reg-mark left-5 top-24 sm:left-8" aria-hidden="true" />
      <span className="reg-mark right-5 top-24 sm:right-8" aria-hidden="true" />
      <span className="reg-mark bottom-28 left-5 sm:left-8" aria-hidden="true" />
      <span className="reg-mark bottom-28 right-5 sm:right-8" aria-hidden="true" />

      <div className="shell relative grid items-center gap-14 pb-16 pt-32 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-40">
        <div className="lg:col-span-7">
          <p className="font-mono text-2xs uppercase tracking-[0.2em] text-ink-500">
            SEC.01 — Idegin / AI Transformation
          </p>

          <p className="kicker mt-5 inline-flex items-center gap-2 text-primary-400">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-400 animate-pulse-ring" />
            AI Transformation Partner
          </p>

          <h1 className="mt-5 max-w-2xl font-display text-display font-semibold text-white">
            Your next top performer isn&rsquo;t{" "}
            <span className="text-signal">human</span>
            <span className="caret text-primary-400" aria-hidden="true" />
          </h1>

          <p className="mt-6 max-w-xl text-lg text-ink-300">
            We build autonomous AI employees and custom software that automate
            business operations, eliminate repetitive work, and help
            organizations scale without increasing headcount.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <BookCta variant="solid" size="lg" />
            <Link
              href="/#overview"
              className="group inline-flex h-13 items-center gap-3 rounded-md px-4 text-base font-medium text-ink-200 transition hover:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition group-hover:border-white/40 group-hover:bg-white/5">
                <IconPlay className="h-3 w-3 translate-x-px text-white" />
              </span>
              Watch 2-min overview
            </Link>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-6">
            {STATS.map((stat) => (
              <div key={stat.k}>
                <dt className="font-mono text-2xs uppercase tracking-wider text-ink-500">
                  {stat.k}
                </dt>
                <dd className="mt-1 font-display text-lg font-semibold text-white">
                  {stat.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5">
          <AgentGraph />
        </div>
      </div>

      <div className="relative overflow-hidden border-y border-white/10 py-4">
        <div className="flex w-max animate-marquee items-center gap-8 pr-8">
          {[...CAPABILITIES, ...CAPABILITIES].map((cap, index) => (
            <span
              key={`${cap}-${index}`}
              className="flex items-center gap-8 whitespace-nowrap font-mono text-2xs uppercase tracking-[0.2em] text-ink-400"
            >
              {cap}
              <IconPlus className="h-3 w-3 text-primary-500" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
