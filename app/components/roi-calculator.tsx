"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRightIcon } from "./icons";
import { siteConfig } from "@/lib/site-config";

const naira = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
});
const num = new Intl.NumberFormat("en-US");

// Share of repetitive time an AI workforce typically absorbs (conservative).
const AUTOMATION_RATE = 0.6;
const WEEKS_PER_MONTH = 4.33;

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-small font-medium text-ink">{label}</label>
        <span className="font-mono text-small font-semibold text-cobalt-600">
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-cobalt-500"
        aria-label={label}
      />
    </div>
  );
}

export function RoiCalculator() {
  const [team, setTeam] = useState(20);
  const [hours, setHours] = useState(10);
  const [rate, setRate] = useState(4000);

  const { monthlyHours, monthlyCost, annualCost, fteEquivalent } = useMemo(() => {
    const weeklyHours = team * hours * AUTOMATION_RATE;
    const monthlyHours = weeklyHours * WEEKS_PER_MONTH;
    const monthlyCost = monthlyHours * rate;
    return {
      monthlyHours,
      monthlyCost,
      annualCost: monthlyCost * 12,
      fteEquivalent: monthlyHours / (40 * WEEKS_PER_MONTH),
    };
  }, [team, hours, rate]);

  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
      {/* Inputs */}
      <div className="rounded-2xl border border-line bg-surface p-6 shadow-subtle sm:p-8">
        <h2 className="text-subheading font-display font-semibold text-ink">
          Your team today
        </h2>
        <div className="mt-6 flex flex-col gap-7">
          <Slider
            label="Team size"
            value={team}
            min={1}
            max={500}
            step={1}
            onChange={setTeam}
            format={(v) => `${num.format(v)} people`}
          />
          <Slider
            label="Hours/week on repetitive work (per person)"
            value={hours}
            min={1}
            max={40}
            step={1}
            onChange={setHours}
            format={(v) => `${v} hrs`}
          />
          <Slider
            label="Average cost per hour"
            value={rate}
            min={500}
            max={30000}
            step={500}
            onChange={setRate}
            format={(v) => naira.format(v)}
          />
        </div>
        <p className="mt-6 text-caption text-muted">
          Estimate assumes an AI workforce absorbs ~
          {Math.round(AUTOMATION_RATE * 100)}% of repetitive work. Your actual
          results are scoped during the audit.
        </p>
      </div>

      {/* Results */}
      <div className="rounded-2xl border border-cobalt-300 bg-cobalt-950 p-6 text-white shadow-glow sm:p-8">
        <h2 className="eyebrow text-cobalt-100">Estimated impact</h2>
        <div className="mt-6 grid grid-cols-2 gap-5">
          <Metric label="Hours saved / month" value={num.format(Math.round(monthlyHours))} />
          <Metric label="≈ full-time equivalents" value={fteEquivalent.toFixed(1)} />
          <Metric label="Saved / month" value={naira.format(Math.round(monthlyCost))} />
          <Metric label="Saved / year" value={naira.format(Math.round(annualCost))} highlight />
        </div>
        <Link
          href={siteConfig.cta.href}
          className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-button text-cobalt-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-cobalt-50 sm:w-auto"
        >
          Get your real numbers — book an audit
          <ArrowUpRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <motion.div
      key={value}
      initial={{ opacity: 0.4 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      className={`rounded-xl p-4 ${highlight ? "bg-white/10 ring-1 ring-white/20" : "bg-white/5"}`}
    >
      <div className="font-display text-2xl font-bold tabular-nums sm:text-3xl">
        {value}
      </div>
      <div className="mt-1 text-caption text-cobalt-100">{label}</div>
    </motion.div>
  );
}
