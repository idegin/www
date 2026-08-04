"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Logo } from "./logo";
import { ArrowUpRightIcon, socialIcons } from "./icons";
import { footerNav, siteConfig } from "@/lib/site-config";

const year = new Date().getFullYear();

const socialLabels: Record<keyof typeof siteConfig.socials, string> = {
  linkedin: "LinkedIn",
  x: "X",
  github: "GitHub",
  youtube: "YouTube",
  instagram: "Instagram",
};

export function SiteFooter() {
  const reduce = useReducedMotion();

  return (
    <footer className="bg-void-radial relative isolate overflow-hidden text-on-dark">
      <div
        className="bg-brand-mesh absolute inset-0 -z-10 opacity-40 blur-3xl"
        aria-hidden
      />
      <div
        className="bg-grid absolute inset-0 -z-10 text-white/40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
        aria-hidden
      />

      {/* CTA band */}
      <motion.section
        initial={{ opacity: 0, y: reduce ? 0 : 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: reduce ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="container-page border-b border-white/10 py-20 text-center md:py-28"
      >
        <span className="eyebrow text-on-dark-muted">
          {siteConfig.cta.note}
        </span>
        <h2 className="mx-auto mt-5 max-w-3xl text-display font-display font-bold">
          Book your{" "}
          <span className="text-gradient-brand">AI Workflow Audit</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-body-lg text-on-dark-muted">
          A focused session to map your operations, surface high-ROI automation,
          and show exactly where an AI workforce pays off.
        </p>
        <Link
          href={siteConfig.cta.href}
          className="group mt-9 inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-4 text-button text-ink shadow-glow transition-all duration-200 hover:-translate-y-0.5 hover:shadow-glow-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt-300"
        >
          {siteConfig.cta.label}
          <ArrowUpRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </motion.section>

      {/* Link columns */}
      <div className="container-page grid grid-cols-2 gap-x-8 gap-y-12 py-16 md:grid-cols-3 lg:grid-cols-6">
        {/* Brand block */}
        <div className="col-span-2 lg:col-span-2">
          <Logo onDark />
          <p className="mt-5 max-w-xs text-small text-on-dark-muted">
            {siteConfig.tagline}. AI Workforce Transformation for
            Nigeria&apos;s fastest-moving businesses.
          </p>
          <ul className="mt-6 flex items-center gap-2">
            {(
              Object.keys(siteConfig.socials) as Array<
                keyof typeof siteConfig.socials
              >
            ).map((key) => {
              const Icon = socialIcons[key];
              return (
                <li key={key}>
                  <a
                    href={siteConfig.socials[key]}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={socialLabels[key]}
                    className="inline-flex size-10 items-center justify-center rounded-md border border-white/10 text-on-dark-muted transition-colors duration-200 hover:border-cobalt-400 hover:text-on-dark hover:bg-white/5"
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Nav columns */}
        {Object.entries(footerNav).map(([heading, links]) => (
          <nav key={heading} aria-label={heading}>
            <h3 className="eyebrow text-on-dark-muted">{heading}</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-small text-on-dark-muted transition-colors duration-200 hover:text-on-dark"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-start justify-between gap-4 py-6 text-caption text-on-dark-muted sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="transition-colors hover:text-on-dark"
            >
              {siteConfig.contact.email}
            </a>
            <span aria-hidden className="hidden sm:inline text-white/20">
              •
            </span>
            <span>Built in {siteConfig.contact.address.full}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
