"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Reveal } from "./reveal";
import { siteConfig } from "@/lib/site-config";
import { faqs } from "@/lib/faqs";

function Item({
  faq,
  open,
  onToggle,
  id,
}: {
  faq: { q: string; a: string };
  open: boolean;
  onToggle: () => void;
  id: string;
}) {
  const reduce = useReducedMotion();
  return (
    <div className="border-b border-line">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-btn`}
          className="flex w-full items-center justify-between gap-4 py-5 text-left"
        >
          <span className="text-body font-medium text-ink">{faq.q}</span>
          <span
            className={`relative inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-line text-cobalt-600 transition-colors duration-200 ${
              open ? "bg-cobalt-500 text-white" : "bg-surface"
            }`}
            aria-hidden
          >
            <span className="absolute h-0.5 w-3.5 rounded bg-current" />
            <span
              className={`absolute h-3.5 w-0.5 rounded bg-current transition-transform duration-300 ${
                open ? "rotate-90 scale-0" : ""
              }`}
            />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-btn`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-prose pb-6 text-small text-muted">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      aria-labelledby="faq-heading"
      className="relative bg-surface-alt py-20 md:py-28"
    >
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <Reveal>
            <span className="eyebrow inline-flex items-center gap-2 text-cobalt-600">
              <span className="h-px w-6 bg-cobalt-400" aria-hidden />
              FAQ
            </span>
          </Reveal>
          <Reveal index={1}>
            <h2
              id="faq-heading"
              className="mt-4 text-heading font-display font-semibold text-ink"
            >
              Questions, answered
            </h2>
          </Reveal>
          <Reveal index={2}>
            <p className="mt-4 text-body-lg text-muted">
              Everything you need to know before your AI Workflow Audit.
            </p>
          </Reveal>
          <Reveal index={3}>
            <Link
              href={siteConfig.cta.href}
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-cobalt-500 px-5 py-3 text-button text-white shadow-glow transition-all duration-200 hover:-translate-y-0.5 hover:bg-cobalt-600"
            >
              Still have questions? Talk to us
            </Link>
          </Reveal>
        </div>

        <Reveal y={16}>
          <div className="rounded-2xl border border-line bg-surface px-6 shadow-subtle">
            {faqs.map((f, i) => (
              <Item
                key={f.q}
                id={`faq-${i}`}
                faq={f}
                open={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
