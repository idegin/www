"use client";

import { useState } from "react";
import { SectionHeader } from "./section-header";

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

function formatDuration(minutes: number) {
  if (minutes >= 1440) return `${(minutes / 1440).toFixed(1)} days`;
  if (minutes >= 60) return `${(minutes / 60).toFixed(1)} hrs`;
  return `${Math.max(1, Math.round(minutes))} min`;
}

export function BeforeAfter() {
  const [value, setValue] = useState(15);
  const t = value / 100;

  const metrics = [
    { label: "Manual hours / week", value: `${Math.round(lerp(320, 40, t))}`, fill: 1 - t },
    { label: "Avg. approval time", value: formatDuration(lerp(4320, 4, t)), fill: 1 - t },
    { label: "Process error rate", value: `${lerp(8, 0.4, t).toFixed(1)}%`, fill: 1 - t },
    { label: "Real-time visibility", value: `${Math.round(lerp(20, 99, t))}%`, fill: t },
  ];

  return (
    <section className="relative bg-surface-sunken">
      <div className="shell py-section">
        <SectionHeader
          index="08"
          kicker="Before vs after"
          title="Drag to watch the operation transform"
          intro="The same business, before and after an iDegin engagement. Slide from manual reality to an autonomous operation."
        />

        <div className="mt-12 rounded-2xl border border-border bg-surface p-6 sm:p-10">
          <div className="flex items-center justify-between font-mono text-2xs uppercase tracking-wider">
            <span className={t < 0.5 ? "text-danger-500" : "text-muted"}>
              Manual today
            </span>
            <span className={t >= 0.5 ? "text-brand" : "text-muted"}>
              Autonomous with iDegin
            </span>
          </div>
          <label htmlFor="transform" className="sr-only">
            Transformation level
          </label>
          <input
            id="transform"
            type="range"
            min={0}
            max={100}
            value={value}
            onChange={(event) => setValue(Number(event.target.value))}
            className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full bg-border accent-primary-600"
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-border bg-surface-sunken p-5"
              >
                <p className="font-mono text-2xs uppercase tracking-wider text-muted">
                  {metric.label}
                </p>
                <p className="mt-3 font-display text-3xl font-semibold text-strong tabular-nums">
                  {metric.value}
                </p>
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-border">
                  <div
                    className="h-full rounded-full bg-brand transition-[width] duration-200"
                    style={{ width: `${Math.round(metric.fill * 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
