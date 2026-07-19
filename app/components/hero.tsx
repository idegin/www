import Link from "next/link";
import { AgentGraph } from "./agent-graph";
import { BookCta } from "./book-cta";
import { IconPlay } from "./icons";

const STATS = [
  { k: "AI Employees", v: "15+ roles" },
  { k: "Industries", v: "15 served" },
  { k: "Engagement", v: "1 goal" },
];

const TITLE_BLOCK = [
  { k: "Doc", v: "AI Workforce" },
  { k: "Rev", v: "2026.1" },
  { k: "Sheet", v: "01 / 17" },
  { k: "Status", v: "● Live · Abuja NG" },
];

const RULER = [0, 1, 2, 3, 4, 5, 6];

export function Hero() {
  return (
    <section
      data-hero-tone="dark"
      className="dark relative isolate flex min-h-[92svh] flex-col overflow-hidden bg-depth grain pt-20 lg:pt-24"
    >
      <div
        className="pointer-events-none absolute inset-0 blueprint-grid opacity-50"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-aurora" aria-hidden="true" />

      <div
        className="pointer-events-none absolute inset-x-3 top-[4.5rem] bottom-3 border border-white/10 sm:inset-x-6 sm:bottom-6 lg:top-20"
        aria-hidden="true"
      >
        <span className="reg-mark -left-1.5 -top-1.5" />
        <span className="reg-mark -right-1.5 -top-1.5" />
        <span className="reg-mark -bottom-1.5 -left-1.5" />
        <span className="reg-mark -right-1.5 -bottom-1.5" />
      </div>

      <div
        className="pointer-events-none absolute bottom-24 left-6 top-40 hidden w-px bg-white/10 lg:block"
        aria-hidden="true"
      >
        {RULER.map((tick) => (
          <span
            key={tick}
            className="absolute -left-1 h-px w-2.5 bg-white/25"
            style={{ top: `${(tick / (RULER.length - 1)) * 100}%` }}
          >
            <span className="absolute left-4 -top-2 font-mono text-[9px] text-ink-600">
              {String(tick * 12).padStart(3, "0")}
            </span>
          </span>
        ))}
      </div>

      <div className="shell relative z-[1] flex flex-1 flex-col">
        <div className="grid grid-cols-2 border-y border-white/10 sm:grid-cols-4">
          {TITLE_BLOCK.map((cell, index) => (
            <div
              key={cell.k}
              className={`px-4 py-3 ${
                index === 0 ? "" : "border-l border-white/10"
              } ${index === 2 ? "border-l-0 sm:border-l" : ""}`}
            >
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">
                {cell.k}
              </dt>
              <dd className="mt-1 font-mono text-2xs uppercase tracking-wider text-ink-300">
                {cell.v}
              </dd>
            </div>
          ))}
        </div>

        <div className="grid flex-1 items-center gap-6 py-10 lg:grid-cols-12 lg:gap-4 lg:py-12">
          <div className="lg:col-span-7 lg:pl-8">
            <p className="kicker inline-flex items-center gap-2 text-primary-400">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-400 animate-pulse-ring" />
              AI Transformation Partner
            </p>

            <h1 className="mt-6 max-w-3xl font-display text-display font-semibold text-white">
              Your next top performer isn&rsquo;t{" "}
              <span className="text-signal">human</span>
              <span className="caret text-primary-400" aria-hidden="true" />
            </h1>

            <p className="mt-7 max-w-xl text-lg text-ink-300">
              We build autonomous AI employees and custom software that automate
              operations, eliminate repetitive work, and help organizations
              scale without increasing headcount.
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
          </div>

          <div className="relative lg:col-span-5">
            <p className="mb-2 font-mono text-2xs uppercase tracking-wider text-ink-400 lg:absolute lg:-top-4 lg:right-2">
              fig.01 — orchestration map
            </p>
            <AgentGraph
              bare
              gradientId="hero-edge"
              className="mx-auto max-w-sm lg:max-w-none lg:translate-x-6 lg:scale-110"
            />
          </div>
        </div>

        <dl className="grid grid-cols-3 border-t border-white/10">
          {STATS.map((stat, index) => (
            <div
              key={stat.k}
              className={`px-4 py-4 lg:px-8 ${
                index === 0 ? "" : "border-l border-white/10"
              }`}
            >
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">
                {stat.k}
              </dt>
              <dd className="mt-1 font-display text-lg font-semibold text-white sm:text-xl">
                {stat.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
