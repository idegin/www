"use client";

import { useState } from "react";
import { BookCta } from "./book-cta";
import { SectionHeader } from "./section-header";

const INPUTS = [
  { id: "employees", label: "Team members", min: 5, max: 500, step: 5, unit: "people" },
  { id: "hours", label: "Hours lost to manual work / person / week", min: 1, max: 30, step: 1, unit: "hrs" },
  { id: "rate", label: "Blended hourly cost", min: 5, max: 120, step: 5, unit: "USD" },
] as const;

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function CostOfInefficiency() {
  const [values, setValues] = useState({ employees: 60, hours: 8, rate: 35 });

  const annual = values.employees * values.hours * values.rate * 48;
  const reclaimed = Math.round(values.employees * values.hours * 48);

  return (
    <section id="cost" className="relative bg-surface-sunken">
      <div className="shell grid gap-12 py-section lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <SectionHeader
            index="02"
            kicker="The cost of inefficiency"
            title="Every week, your business quietly burns money on work a machine should do"
            intro="Move the sliders. This is a conservative estimate of what repetitive, manual work costs your organization every year."
          />

          <div className="mt-10 space-y-7">
            {INPUTS.map((input) => (
              <div key={input.id}>
                <div className="flex items-baseline justify-between">
                  <label
                    htmlFor={input.id}
                    className="text-sm font-medium text-strong"
                  >
                    {input.label}
                  </label>
                  <span className="font-mono text-sm text-brand tabular-nums">
                    {values[input.id]} {input.unit}
                  </span>
                </div>
                <input
                  id={input.id}
                  type="range"
                  min={input.min}
                  max={input.max}
                  step={input.step}
                  value={values[input.id]}
                  onChange={(event) =>
                    setValues((prev) => ({
                      ...prev,
                      [input.id]: Number(event.target.value),
                    }))
                  }
                  className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-border accent-primary-600"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="dark relative overflow-hidden rounded-2xl border border-white/10 bg-depth p-8 shadow-2xl sm:p-10">
          <div
            className="pointer-events-none absolute inset-0 blueprint-dots opacity-40"
            aria-hidden="true"
          />
          <span className="reg-mark right-4 top-4" aria-hidden="true" />
          <div className="relative">
            <p className="font-mono text-2xs uppercase tracking-[0.2em] text-ink-400">
              Estimated annual cost
            </p>
            <p className="mt-4 font-display text-5xl font-semibold text-gold-400 tabular-nums sm:text-6xl">
              {currency.format(annual)}
            </p>
            <p className="mt-3 text-sm text-ink-400">
              ≈{" "}
              <span className="font-mono text-ink-200 tabular-nums">
                {reclaimed.toLocaleString()}
              </span>{" "}
              hours reclaimable every year — the equivalent of{" "}
              <span className="font-mono text-ink-200 tabular-nums">
                {Math.round(reclaimed / 1800)}
              </span>{" "}
              full-time roles.
            </p>

            <div className="my-8 h-px w-full bg-white/10" />

            <p className="text-sm text-ink-300">
              An AI Discovery Session maps exactly where that money leaks — and
              which workflows to automate first for the fastest return.
            </p>
            <BookCta className="mt-6 w-full sm:w-auto">
              Calculate my opportunity
            </BookCta>
          </div>
        </div>
      </div>
    </section>
  );
}
