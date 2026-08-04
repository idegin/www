"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { AgentGraph } from "./agent-graph";
import { ArrowUpRightIcon, ArrowRightIcon } from "./icons";
import { industries, siteConfig } from "@/lib/site-config";

const stats = [
  { value: "24/7", label: "Autonomous execution" },
  { value: "10×", label: "Output per employee" },
  { value: "4 wks", label: "Audit to deployment" },
];

export function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.09, delayChildren: 0.1 },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-background text-ink"
    >
      {/* Background layers (light) */}
      <div
        className="bg-brand-mesh absolute inset-0 -z-10 opacity-70 blur-3xl"
        aria-hidden
      />
      <AgentGraph className="absolute inset-0 -z-10 h-full w-full opacity-60" />
      <div
        className="bg-grid absolute inset-0 -z-10 text-cobalt-500/60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]"
        aria-hidden
      />
      {/* Soft top glow */}
      <div
        className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-cobalt-50 to-transparent"
        aria-hidden
      />

      <div className="container-page flex min-h-[100svh] flex-col justify-center pb-24 pt-36 md:pb-28 md:pt-40">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div variants={item}>
            <span className="glass-light inline-flex items-center gap-2 rounded-full px-4 py-1.5 eyebrow text-cobalt-700 shadow-subtle">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-node-pulse rounded-full bg-cobalt-500" />
                <span className="relative inline-flex size-2 rounded-full bg-cobalt-500" />
              </span>
              AI Workforce Transformation
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            id="hero-heading"
            variants={item}
            className="mt-6 text-hero font-display font-bold text-ink"
          >
            Turn a team of 20 into a{" "}
            <span className="text-gradient-brand">workforce of 500</span>
            <span
              className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.08em] animate-blink bg-cobalt-500 align-baseline"
              aria-hidden
            />
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-body-lg text-muted"
          >
            {siteConfig.description} We design, deploy, and continuously optimize
            AI employees that work alongside your team—so you scale output, not
            headcount.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href={siteConfig.cta.href}
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-cobalt-500 px-6 py-3.5 text-button text-white shadow-glow transition-all duration-200 hover:-translate-y-0.5 hover:bg-cobalt-600 hover:shadow-glow-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt-500"
            >
              {siteConfig.cta.label}
              <ArrowUpRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/methodology"
              className="group inline-flex items-center justify-center gap-2 rounded-md border border-line bg-white/60 px-6 py-3.5 text-button text-ink transition-colors duration-200 hover:border-cobalt-400 hover:bg-cobalt-50"
            >
              See the methodology
              <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Stat chips */}
          <motion.dl
            variants={item}
            className="mt-14 grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-xl border border-line bg-line"
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-surface px-5 py-5">
                <dt className="font-display text-2xl font-bold text-cobalt-600 sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs text-muted sm:text-small">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>

      {/* Trust marquee */}
      <div className="relative border-t border-line bg-surface-alt/70 py-5 backdrop-blur-sm">
        <div className="container-page flex items-center gap-6">
          <span className="hidden shrink-0 eyebrow text-placeholder sm:block">
            Built for
          </span>
          <div
            className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
            aria-hidden
          >
            <div className="flex w-max animate-marquee-slow gap-10 pr-10">
              {[...industries, ...industries].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="whitespace-nowrap text-small font-medium text-muted"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
