import Link from "next/link";
import { Logo } from "./logo";
import { BookCta } from "./book-cta";
import { IconGitHub, IconLinkedIn, IconX } from "./icons";

const COLUMNS = [
  {
    title: "Company",
    links: ["About", "Careers", "Partners", "News", "Contact"],
  },
  {
    title: "Solutions",
    links: ["AI Employees", "AI Agents", "Automation", "Custom Software", "Enterprise AI"],
  },
  {
    title: "Industries",
    links: ["Healthcare", "Finance", "Government", "Manufacturing", "Retail", "Education"],
  },
  {
    title: "Resources",
    links: ["Blog", "Case Studies", "Playbooks", "Whitepapers", "ROI Calculator"],
  },
];

const LEGAL = ["Privacy", "Terms", "Security", "Accessibility"];

const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com", Icon: IconLinkedIn },
  { label: "X", href: "https://x.com", Icon: IconX },
  { label: "GitHub", href: "https://github.com", Icon: IconGitHub },
];

export function SiteFooter() {
  return (
    <footer className="dark relative isolate overflow-hidden bg-midnight-950 text-body">
      <div
        className="pointer-events-none absolute inset-0 blueprint-grid opacity-40"
        aria-hidden="true"
      />

      <section className="relative border-b border-white/10 bg-depth grain">
        <span className="reg-mark left-5 top-5 sm:left-8" aria-hidden="true" />
        <span className="reg-mark right-5 top-5 sm:right-8" aria-hidden="true" />
        <div className="shell relative flex flex-col items-start gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
          <div className="max-w-2xl">
            <p className="kicker text-primary-400">Ready?</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">
              Ready to turn your business into an AI-powered organization
              <span className="caret text-gold-400" aria-hidden="true" />
            </h2>
            <p className="mt-5 max-w-xl text-lg text-ink-300">
              We never begin with AI. We begin with your business. Book a
              discovery session and we&rsquo;ll map your highest-ROI automation
              opportunity.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <BookCta size="lg" />
            <BookCta
              href="/contact"
              variant="outline"
              size="lg"
              showArrow={false}
            >
              Talk to an engineer
            </BookCta>
          </div>
        </div>
      </section>

      <div className="shell relative grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Logo variant="dark" className="h-8 w-auto" />
          <p className="mt-5 max-w-xs text-sm text-ink-400">
            AI transformation and custom software engineering. If the software
            your business needs doesn&rsquo;t exist, we build it.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 font-mono text-2xs uppercase tracking-wider text-ink-400">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-success-500 animate-pulse-ring" />
            All systems operational · Abuja, NG
          </p>
          <div className="mt-6 flex items-center gap-2">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-ink-300 transition hover:border-white/25 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
          {COLUMNS.map((column) => (
            <div key={column.title}>
              <p className="kicker mb-4 text-ink-400">{column.title}</p>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="/"
                      className="link-line text-sm text-ink-300 transition hover:text-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="shell flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-2xs uppercase tracking-wider text-ink-400">
            © 2026 iDegin Technologies Ltd — Engineered in Abuja, Nigeria
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {LEGAL.map((item) => (
              <li key={item}>
                <Link
                  href="/"
                  className="font-mono text-2xs uppercase tracking-wider text-ink-400 transition hover:text-ink-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
