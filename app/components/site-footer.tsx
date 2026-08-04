import Link from "next/link";
import { Logo } from "./logo";
import { socialIcons } from "./icons";
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
  return (
    <footer className="border-t border-line bg-surface-alt text-ink">
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
            <h3 className="eyebrow text-muted">{heading}</h3>
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
