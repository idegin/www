import Link from "next/link";
import { primaryNav, siteConfig } from "@/lib/site-config";
import { ArrowRightIcon } from "./components/icons";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80svh] items-center overflow-hidden bg-background">
      <div
        className="bg-brand-mesh absolute inset-0 -z-10 opacity-60 blur-3xl"
        aria-hidden
      />
      <div
        className="bg-grid absolute inset-0 -z-10 text-cobalt-500/50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
        aria-hidden
      />
      <div className="container-page text-center">
        <p className="font-mono text-metric font-bold text-cobalt-500">404</p>
        <h1 className="mt-4 text-heading font-display font-semibold text-ink">
          This page took the day off
        </h1>
        <p className="mx-auto mt-4 max-w-md text-body-lg text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-cobalt-500 px-6 py-3.5 text-button text-white shadow-glow transition-all duration-200 hover:-translate-y-0.5 hover:bg-cobalt-600"
          >
            Back home
          </Link>
          <Link
            href={siteConfig.cta.href}
            className="group inline-flex items-center justify-center gap-2 rounded-md border border-line bg-white px-6 py-3.5 text-button text-ink transition-colors hover:border-cobalt-400 hover:bg-cobalt-50"
          >
            {siteConfig.cta.label}
            <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
        <nav
          aria-label="Helpful links"
          className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 text-small"
        >
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted transition-colors hover:text-cobalt-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
