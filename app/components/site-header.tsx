"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./logo";
import { BookCta } from "./book-cta";
import { IconChevronDown, IconClose, IconMenu, IconSearch } from "./icons";

const NAV = [
  { label: "Solutions", href: "/solutions", mega: true },
  { label: "Industries", href: "/industries", mega: false },
  { label: "Case Studies", href: "/case-studies", mega: false },
  { label: "Methodology", href: "/methodology", mega: false },
  { label: "Resources", href: "/resources", mega: false },
  { label: "About", href: "/about", mega: false },
];

const SOLUTIONS = [
  {
    title: "AI Transformation",
    items: ["AI Strategy", "Readiness Assessment", "Process Analysis", "Digital Transformation"],
  },
  {
    title: "AI Employees",
    items: ["Customer Support", "Sales", "Finance", "Operations", "Executive Assistant"],
  },
  {
    title: "AI Agents",
    items: ["Domain Experts", "Multi-Agent Systems", "Workflow Agents", "Research Agents"],
  },
  {
    title: "Engineering",
    items: ["Enterprise Software", "Internal Tools", "ERP & CRM", "Mobile Apps"],
  },
  {
    title: "Automation",
    items: ["Workflow Automation", "Document Processing", "Integrations", "Legacy Modernization"],
  },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const solid = scrolled || solutionsOpen;
  const onDark = !solid;

  return (
    <header
      onMouseLeave={() => setSolutionsOpen(false)}
      onKeyDown={(event) => {
        if (event.key === "Escape") setSolutionsOpen(false);
      }}
      className={`fixed inset-x-0 top-0 z-[200] transition duration-200 ${
        solid ? "glass border-b border-border" : "border-b border-transparent"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between lg:h-20">
        <Link href="/" aria-label="iDegin home" className="relative z-[10] shrink-0">
          <Logo
            variant={onDark ? "dark" : "light"}
            priority
            className="h-7 w-auto lg:h-8"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) =>
            item.mega ? (
              <button
                key={item.label}
                type="button"
                aria-expanded={solutionsOpen}
                aria-controls="solutions-menu"
                onMouseEnter={() => setSolutionsOpen(true)}
                onClick={() => setSolutionsOpen((open) => !open)}
                className={`link-line inline-flex items-center gap-1 text-sm transition ${
                  onDark ? "text-ink-200 hover:text-white" : "text-body hover:text-strong"
                }`}
                data-active={solutionsOpen}
              >
                {item.label}
                <IconChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    solutionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onMouseEnter={() => setSolutionsOpen(false)}
                className={`link-line text-sm transition ${
                  onDark ? "text-ink-200 hover:text-white" : "text-body hover:text-strong"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-3">
          <Link
            href="/search"
            aria-label="Search"
            className={`hidden h-10 w-10 items-center justify-center rounded-md transition sm:inline-flex ${
              onDark
                ? "text-ink-200 hover:bg-white/10 hover:text-white"
                : "text-body hover:bg-surface-sunken hover:text-strong"
            }`}
          >
            <IconSearch className="h-5 w-5" />
          </Link>

          <BookCta className="hidden sm:inline-flex" />

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-md transition lg:hidden ${
              onDark
                ? "text-white hover:bg-white/10"
                : "text-strong hover:bg-surface-sunken"
            }`}
          >
            {mobileOpen ? (
              <IconClose className="h-6 w-6" />
            ) : (
              <IconMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {solutionsOpen ? (
        <div
          id="solutions-menu"
          className="absolute inset-x-0 top-full hidden border-b border-border bg-surface shadow-xl lg:block"
        >
          <div className="pointer-events-none absolute inset-0 blueprint-dots opacity-40" aria-hidden="true" />
          <div className="shell relative grid grid-cols-6 gap-8 py-10">
            {SOLUTIONS.map((group) => (
              <div key={group.title}>
                <p className="kicker mb-4">{group.title}</p>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Link
                        href="/solutions"
                        onClick={() => setSolutionsOpen(false)}
                        className="link-line text-sm text-body transition hover:text-strong"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="rounded-xl border border-border bg-surface-sunken p-5">
              <p className="kicker">Ready?</p>
              <p className="mt-3 font-display text-lg font-semibold text-strong">
                Book an AI Discovery Session
              </p>
              <p className="mt-2 text-sm text-muted">
                A 30-minute call to map your highest-ROI automation opportunity.
              </p>
              <BookCta
                className="mt-4 w-full"
                onClick={() => setSolutionsOpen(false)}
              />
            </div>
          </div>
        </div>
      ) : null}

      {mobileOpen ? (
        <div className="dark fixed inset-0 top-16 z-[900] overflow-y-auto bg-midnight-950 grain lg:hidden">
          <div
            className="pointer-events-none absolute inset-0 blueprint-grid opacity-50"
            aria-hidden="true"
          />
          <nav aria-label="Mobile" className="shell relative flex flex-col py-6">
            {NAV.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-baseline justify-between border-b border-white/10 py-4"
              >
                <span className="font-display text-2xl font-semibold text-white">
                  {item.label}
                </span>
                <span className="font-mono text-2xs text-ink-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </Link>
            ))}
            <div className="mt-8 flex flex-col gap-3">
              <BookCta
                size="lg"
                className="w-full"
                onClick={() => setMobileOpen(false)}
              />
              <Link
                href="/search"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-13 items-center justify-center gap-2 rounded-md border border-border-strong px-5 text-base font-medium text-strong"
              >
                <IconSearch className="h-5 w-5" />
                Search
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
