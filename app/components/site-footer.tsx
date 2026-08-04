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
    <footer className="bg-surface-alt text-ink">
      {/* CTA band — solid brand blue */}
      <div className="container-page pt-16 md:pt-20">
        <motion.section
          initial={{ opacity: 0, y: reduce ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: reduce ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative isolate overflow-hidden rounded-3xl bg-cobalt-500 px-6 py-16 text-center text-white shadow-glow md:px-12 md:py-20"
        >
          <div
            className="absolute inset-0 -z-10 opacity-40 [background:radial-gradient(60%_120%_at_50%_-20%,rgba(255,255,255,0.35),transparent_60%)]"
            aria-hidden
          />
          <div
            className="bg-grid absolute inset-0 -z-10 text-white/70 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
            aria-hidden
          />
          <span className="eyebrow text-cobalt-100">{siteConfig.cta.note}</span>
          <h2 className="mx-auto mt-5 max-w-3xl text-display font-display font-bold">
            Book your AI Workflow Audit
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-body-lg text-cobalt-100">
            A focused session to map your operations, surface high-ROI
            automation, and show exactly where an AI workforce pays off.
          </p>
          <Link
            href={siteConfig.cta.href}
            className="group mt-9 inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-4 text-button text-cobalt-700 shadow-raised transition-all duration-200 hover:-translate-y-0.5 hover:bg-cobalt-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {siteConfig.cta.label}
            <ArrowUpRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.section>
      </div>

      {/* Link columns */}
      <div className="container-page grid grid-cols-2 gap-x-8 gap-y-12 py-16 md:grid-cols-3 lg:grid-cols-6">
        {/* Brand block */}
        <div className="col-span-2 lg:col-span-2">
          <Logo onDark={false} />
          <p className="mt-5 max-w-xs text-small text-muted">
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
                    className="inline-flex size-10 items-center justify-center rounded-md border border-line bg-surface text-muted transition-colors duration-200 hover:border-cobalt-400 hover:text-cobalt-600"
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
            <h3 className="eyebrow text-placeholder">{heading}</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-small text-muted transition-colors duration-200 hover:text-cobalt-600"
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
      <div className="border-t border-line">
        <div className="container-page flex flex-col items-start justify-between gap-4 py-6 text-caption text-muted sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="transition-colors hover:text-cobalt-600"
            >
              {siteConfig.contact.email}
            </a>
            <span aria-hidden className="hidden text-line sm:inline">
              •
            </span>
            <span>Built in {siteConfig.contact.address.full}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
