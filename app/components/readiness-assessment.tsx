"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRightIcon, ArrowRightIcon } from "./icons";
import { CheckIcon } from "./feature-icons";
import { siteConfig } from "@/lib/site-config";

type Q = { q: string; options: { label: string; score: number }[] };

const questions: Q[] = [
  {
    q: "How much of your team's day goes to repetitive, manual work?",
    options: [
      { label: "Very little", score: 0 },
      { label: "Some of it", score: 1 },
      { label: "A lot of it", score: 2 },
      { label: "Most of it", score: 3 },
    ],
  },
  {
    q: "How connected are the tools your team uses?",
    options: [
      { label: "Mostly siloed", score: 0 },
      { label: "A few integrate", score: 1 },
      { label: "Partly integrated", score: 2 },
      { label: "Well integrated", score: 3 },
    ],
  },
  {
    q: "Are your core processes documented?",
    options: [
      { label: "Not really", score: 0 },
      { label: "A few are", score: 1 },
      { label: "Most are", score: 2 },
      { label: "Clearly documented", score: 3 },
    ],
  },
  {
    q: "How accessible is your business data?",
    options: [
      { label: "Scattered everywhere", score: 0 },
      { label: "Somewhat organized", score: 1 },
      { label: "Mostly centralized", score: 2 },
      { label: "Centralized & clean", score: 3 },
    ],
  },
  {
    q: "How strong is leadership buy-in for AI?",
    options: [
      { label: "None yet", score: 0 },
      { label: "Curious", score: 1 },
      { label: "Supportive", score: 2 },
      { label: "Actively championed", score: 3 },
    ],
  },
  {
    q: "Have you automated any workflows so far?",
    options: [
      { label: "None", score: 0 },
      { label: "Experimented", score: 1 },
      { label: "One or two", score: 2 },
      { label: "Several", score: 3 },
    ],
  },
];

const MAX = questions.length * 3;

function verdict(score: number) {
  const pct = score / MAX;
  if (pct < 0.34)
    return {
      level: "Early stage",
      note: "You have the most to gain. Start with an audit to map the repetitive work and pick one high-ROI workflow to automate first.",
    };
  if (pct < 0.62)
    return {
      level: "Emerging",
      note: "You're building the foundations. An audit will pinpoint where an AI workforce delivers the fastest return and how to sequence it.",
    };
  if (pct < 0.84)
    return {
      level: "Ready",
      note: "You're well positioned. An audit will turn that readiness into a concrete AI workforce blueprint with projected ROI.",
    };
  return {
    level: "Advanced",
    note: "You're primed to scale. An audit will identify the highest-leverage automations to compound the gains you've already made.",
  };
}

export function ReadinessAssessment() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const done = step >= questions.length;

  const score = answers.reduce((s, a) => s + (a >= 0 ? a : 0), 0);
  const progress = Math.round((Math.min(step, questions.length) / questions.length) * 100);

  function choose(optScore: number) {
    setAnswers((prev) => {
      const next = [...prev];
      next[step] = optScore;
      return next;
    });
    setStep((s) => s + 1);
  }

  function reset() {
    setAnswers(Array(questions.length).fill(-1));
    setStep(0);
  }

  const v = verdict(score);

  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-line bg-surface p-6 shadow-subtle sm:p-8">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between text-caption text-muted">
          <span>{done ? "Complete" : `Question ${step + 1} of ${questions.length}`}</span>
          <span>{done ? "100%" : `${progress}%`}</span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cobalt-500 to-aqua-500 transition-all duration-500 ease-out-expo"
            style={{ width: `${done ? 100 : progress}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!done ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: reduce ? 0 : 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: reduce ? 0 : -24 }}
            transition={{ duration: reduce ? 0 : 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-subheading font-display font-semibold text-ink">
              {questions[step].q}
            </h2>
            <div className="mt-6 grid gap-3">
              {questions[step].options.map((o) => (
                <button
                  key={o.label}
                  type="button"
                  onClick={() => choose(o.score)}
                  className="group flex items-center justify-between rounded-xl border border-line bg-surface px-5 py-4 text-left text-body text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-cobalt-400 hover:bg-cobalt-50"
                >
                  {o.label}
                  <ArrowRightIcon className="size-4 text-cobalt-500 opacity-0 transition-opacity group-hover:opacity-100" />
                </button>
              ))}
            </div>
            {step > 0 ? (
              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                className="mt-6 text-small text-muted hover:text-ink"
              >
                ← Back
              </button>
            ) : null}
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: reduce ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <span className="mx-auto inline-flex size-12 items-center justify-center rounded-full bg-cobalt-500 text-white">
              <CheckIcon className="size-6" />
            </span>
            <p className="mt-5 eyebrow text-cobalt-600">Your AI readiness</p>
            <h2 className="mt-2 text-heading font-display font-bold text-ink">
              {v.level}
            </h2>
            <p className="mt-1 font-mono text-small text-muted">
              Score: {score} / {MAX}
            </p>
            <p className="mx-auto mt-4 max-w-md text-body text-muted">{v.note}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={siteConfig.cta.href}
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-cobalt-500 px-6 py-3.5 text-button text-white shadow-glow transition-all duration-200 hover:-translate-y-0.5 hover:bg-cobalt-600"
              >
                {siteConfig.cta.label}
                <ArrowUpRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <button
                type="button"
                onClick={reset}
                className="text-small text-muted hover:text-ink"
              >
                Retake assessment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
