"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "./reveal";
import { SearchIcon, LayersIcon, RocketIcon, GearIcon, type IconType } from "./feature-icons";

const steps: {
  no: string;
  icon: IconType;
  title: string;
  body: string;
  deliverable: string;
}[] = [
  {
    no: "01",
    icon: SearchIcon,
    title: "Discover",
    body: "We observe how work actually happens—interviews, process mapping, and data-flow analysis.",
    deliverable: "Workflow Audit Report",
  },
  {
    no: "02",
    icon: LayersIcon,
    title: "Design",
    body: "We design the future-state operation and the AI workforce that powers it.",
    deliverable: "AI Workforce Blueprint",
  },
  {
    no: "03",
    icon: RocketIcon,
    title: "Deploy",
    body: "We build and integrate agents into your tools, then roll out with training.",
    deliverable: "Live AI Employees",
  },
  {
    no: "04",
    icon: GearIcon,
    title: "Optimize",
    body: "We monitor accuracy, adoption, and ROI—improving performance over time.",
    deliverable: "Continuous Optimization",
  },
];

export function Methodology() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-labelledby="method-heading"
      className="relative overflow-hidden bg-surface-alt py-20 md:py-28"
    >
      <div className="container-page">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow inline-flex items-center gap-2 text-cobalt-600">
              <span className="h-px w-6 bg-cobalt-400" aria-hidden />
              Our methodology
            </span>
          </Reveal>
          <Reveal index={1}>
            <h2
              id="method-heading"
              className="mt-4 text-heading font-display font-semibold text-ink"
            >
              A proven path from manual to autonomous
            </h2>
          </Reveal>
          <Reveal index={2}>
            <p className="mt-4 text-body-lg text-muted">
              Four phases, one outcome: a business that runs faster, more
              consistently, and more efficiently.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-16">
          {/* Connecting line (desktop) */}
          <div
            className="absolute left-0 right-0 top-7 hidden h-px bg-line lg:block"
            aria-hidden
          >
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-cobalt-500 to-aqua-500"
              initial={{ scaleX: reduce ? 1 : 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: reduce ? 0 : 1.1, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {steps.map((s, i) => (
              <li key={s.no}>
                <Reveal index={i}>
                  <div className="relative">
                    <span className="relative z-10 inline-flex size-14 items-center justify-center rounded-2xl border border-line bg-surface text-cobalt-600 shadow-subtle">
                      <s.icon className="size-6" />
                    </span>
                    <div className="mt-5">
                      <span className="font-mono text-caption font-medium tracking-widest text-cobalt-500">
                        {s.no}
                      </span>
                      <h3 className="mt-1 text-subheading font-display font-semibold text-ink">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-small text-muted">{s.body}</p>
                      <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-cobalt-50 px-3 py-1 text-caption font-medium text-cobalt-700">
                        {s.deliverable}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
