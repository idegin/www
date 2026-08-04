"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "./reveal";
import { ArrowRightIcon } from "./icons";
import { BoltIcon, ShieldIcon, RepeatIcon } from "./feature-icons";

const points = [
  {
    icon: RepeatIcon,
    title: "Works alongside your team",
    body: "AI employees take the repetitive load so people focus on judgment, relationships, and growth.",
  },
  {
    icon: BoltIcon,
    title: "Runs 24/7, end to end",
    body: "Agents execute real workflows across your existing tools—not just chat, actual work.",
  },
  {
    icon: ShieldIcon,
    title: "Built on your operations",
    body: "We start with how your business actually runs, then design AI around it—securely.",
  },
];

export function TransformationIntro() {
  const reduce = useReducedMotion();
  const float = (delay: number) =>
    reduce
      ? {}
      : {
          animate: { y: [0, -10, 0] },
          transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay,
          },
        };

  return (
    <section
      aria-labelledby="intro-heading"
      className="relative overflow-hidden bg-surface-alt py-20 md:py-28"
    >
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div>
          <Reveal>
            <span className="eyebrow inline-flex items-center gap-2 text-cobalt-600">
              <span className="h-px w-6 bg-cobalt-400" aria-hidden />
              The shift
            </span>
          </Reveal>
          <Reveal index={1}>
            <h2
              id="intro-heading"
              className="mt-4 text-heading font-display font-semibold text-ink"
            >
              Introducing{" "}
              <span className="text-gradient-brand">
                AI Workforce Transformation
              </span>
            </h2>
          </Reveal>
          <Reveal index={2}>
            <p className="mt-4 max-w-xl text-body-lg text-muted">
              Not a chatbot. Not another tool. A workforce of AI employees that
              integrate into your operations—automating tasks, assisting
              decisions, and running workflows so you scale output, not
              headcount.
            </p>
          </Reveal>

          <ul className="mt-8 flex flex-col gap-5">
            {points.map((p, i) => (
              <li key={p.title}>
                <Reveal index={i}>
                  <div className="flex gap-4">
                    <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-cobalt-50 text-cobalt-600">
                      <p.icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-subheading font-display font-semibold text-ink">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-small text-muted">{p.body}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal index={3} className="mt-8">
            <Link
              href="/solutions"
              className="group inline-flex items-center gap-2 text-button text-cobalt-600 transition-colors hover:text-cobalt-700"
            >
              Explore the solution
              <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal y={32}>
          <div className="relative">
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-line shadow-elevated">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70"
                alt="An operations dashboard tracking automated workflows in real time"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-tr from-cobalt-600/40 via-transparent to-transparent"
                aria-hidden
              />
            </div>

            {/* Floating glass cards */}
            <motion.div
              {...float(0)}
              className="glass-light absolute -left-4 top-8 rounded-xl border border-line bg-white/80 px-4 py-3 shadow-raised sm:-left-6"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-node-pulse rounded-full bg-success-500" />
                  <span className="relative inline-flex size-2 rounded-full bg-success-500" />
                </span>
                <span className="text-small font-semibold text-ink">
                  Sales Agent
                </span>
              </div>
              <p className="mt-1 text-caption text-muted">
                42 follow-ups sent today
              </p>
            </motion.div>

            <motion.div
              {...float(1.2)}
              className="glass-light absolute -right-4 bottom-10 rounded-xl border border-line bg-white/80 px-4 py-3 shadow-raised sm:-right-6"
            >
              <p className="font-display text-2xl font-bold text-cobalt-600">
                24/7
              </p>
              <p className="text-caption text-muted">Autonomous coverage</p>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
