"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { Reveal, SectionHeading } from "./reveal";

type Metric = {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
};

const metrics: Metric[] = [
  { value: 70, suffix: "%", label: "Less manual work" },
  { value: 3, suffix: "×", label: "Faster turnaround" },
  { value: 40, suffix: "+ hrs", label: "Saved / employee / month" },
  { value: 24, suffix: "/7", label: "Autonomous coverage" },
];

function useCountUp(target: number, run: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!run) return;
    if (reduce) {
      setValue(target);
      return;
    }
    let raf = 0;
    let startTs = 0;
    const tick = (ts: number) => {
      if (!startTs) startTs = ts;
      const p = Math.min(1, (ts - startTs) / duration);
      setValue(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, duration, reduce]);

  return value;
}

function MetricCard({ metric, run }: { metric: Metric; run: boolean }) {
  const v = useCountUp(metric.value, run);
  return (
    <div className="relative rounded-2xl border border-line bg-surface p-7">
      <span
        className="absolute left-0 top-7 h-8 w-1 rounded-r bg-gradient-to-b from-cobalt-500 to-aqua-500"
        aria-hidden
      />
      <p className="font-display text-metric font-bold text-ink tabular-nums">
        {metric.prefix}
        {Math.round(v)}
        <span className="text-cobalt-600">{metric.suffix}</span>
      </p>
      <p className="mt-2 text-small text-muted">{metric.label}</p>
    </div>
  );
}

export function Outcomes() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      aria-labelledby="outcomes-heading"
      className="relative bg-background py-20 md:py-28"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Outcomes we design for"
          title={<span id="outcomes-heading">Measured in business impact</span>}
          lead="Every engagement is judged on outcomes—hours saved, costs cut, response times shrunk. Not lines of code."
          align="center"
        />

        <div
          ref={ref}
          className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {metrics.map((m, i) => (
            <Reveal key={m.label} index={i}>
              <MetricCard metric={m} run={inView} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
