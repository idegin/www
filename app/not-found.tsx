"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { BookCta } from "./components/book-cta";
import { IconArrowRight, IconArrowUpRight } from "./components/icons";

const QUICK_LINKS = [
  { label: "Solutions", href: "/solutions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Methodology", href: "/methodology" },
  { label: "Resources", href: "/resources" },
];

export default function NotFound() {
  const scope = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = scope.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const targets = el.querySelectorAll<HTMLElement>("[data-reveal]");
    if (reduceMotion) {
      gsap.set(targets, { autoAlpha: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(targets, { autoAlpha: 0, y: 22 });
      gsap
        .timeline({ defaults: { ease: "expo.out", duration: 0.8 } })
        .to(targets, { autoAlpha: 1, y: 0, stagger: 0.09 })
        .from(
          "[data-glyph]",
          { scale: 0.94, autoAlpha: 0, duration: 1, ease: "power3.out" },
          0
        );
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={scope}
      className="dark relative isolate flex min-h-[80vh] items-center overflow-hidden bg-depth grain"
    >
      <div
        className="pointer-events-none absolute inset-0 blueprint-grid opacity-40"
        aria-hidden="true"
      />
      <span className="reg-mark left-5 top-6 sm:left-8" aria-hidden="true" />
      <span className="reg-mark right-5 bottom-6 sm:right-8" aria-hidden="true" />

      <div
        data-glyph
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 select-none text-center font-display text-[34vw] font-bold leading-none tracking-tighter text-white/[0.04] sm:text-[26vw]"
      >
        404
      </div>

      <div className="shell relative py-section">
        <div className="max-w-2xl">
          <p data-reveal className="kicker text-primary-400">
            Error 404 — Route not found
          </p>
          <h1
            data-reveal
            className="mt-5 font-display text-4xl font-semibold text-white sm:text-6xl"
          >
            This page went off the map
          </h1>
          <p data-reveal className="mt-6 max-w-xl text-lg text-ink-300">
            The link is broken or the page has moved. Nothing is lost — let&apos;s
            get you back to work. Book a discovery session or jump to one of the
            pages below.
          </p>

          <div
            data-reveal
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <BookCta variant="solid" size="lg" />
            <Link
              href="/"
              className="group inline-flex h-13 items-center gap-2 rounded-md px-4 text-base font-medium text-ink-200 transition hover:text-white"
            >
              Back to home
              <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <nav
            data-reveal
            aria-label="Popular pages"
            className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2"
          >
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between gap-4 bg-depth p-5 transition hover:bg-white/5"
              >
                <span className="font-medium text-ink-100">{link.label}</span>
                <IconArrowUpRight className="h-4 w-4 text-ink-400 transition-colors group-hover:text-primary-400" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
