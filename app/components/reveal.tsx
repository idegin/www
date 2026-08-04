"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger index — multiplies the base delay. */
  index?: number;
  delay?: number;
  y?: number;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "children">;

/** Scroll-triggered reveal (opacity + rise). Honors reduced motion. */
export function Reveal({
  children,
  index = 0,
  delay = 0,
  y = 24,
  className,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: reduce ? 0 : 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: reduce ? 0 : delay + index * 0.08,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Simple section heading block (eyebrow + title + optional lead). */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className ?? ""}`}
    >
      <Reveal>
        <span className="eyebrow inline-flex items-center gap-2 text-cobalt-600">
          <span className="h-px w-6 bg-cobalt-400" aria-hidden />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal index={1}>
        <h2 className="mt-4 text-heading font-display font-semibold text-ink">
          {title}
        </h2>
      </Reveal>
      {lead ? (
        <Reveal index={2}>
          <p className="mt-4 text-body-lg text-muted">{lead}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
