import Link from "next/link";
import { BookCta } from "./book-cta";

type PageHeroProps = {
  code?: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  aside?: React.ReactNode;
  cta?: boolean;
  ctaLabel?: string;
  secondary?: { label: string; href: string };
};

export function PageHero({
  code,
  eyebrow,
  title,
  description,
  tone = "dark",
  align = "left",
  aside,
  cta = false,
  ctaLabel,
  secondary,
}: PageHeroProps) {
  const dark = tone === "dark";
  const centered = align === "center" && !aside;

  return (
    <section
      className={`relative isolate overflow-hidden ${
        dark ? "dark bg-depth grain" : "bg-surface-sunken"
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-0 ${
          dark ? "blueprint-grid opacity-50" : "blueprint-dots opacity-40"
        }`}
        aria-hidden="true"
      />
      {dark ? (
        <div className="pointer-events-none absolute inset-0 bg-aurora" aria-hidden="true" />
      ) : null}
      <span className="reg-mark left-5 top-28 sm:left-8" aria-hidden="true" />
      <span className="reg-mark right-5 top-28 sm:right-8" aria-hidden="true" />

      <div
        className={`shell relative grid gap-12 pb-16 pt-32 lg:pb-24 lg:pt-40 ${
          aside ? "lg:grid-cols-12 lg:items-center" : ""
        }`}
      >
        <div
          className={`${aside ? "lg:col-span-7" : ""} ${
            centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
          }`}
        >
          {code ? (
            <p className="font-mono text-2xs uppercase tracking-[0.2em] text-muted">
              {code}
            </p>
          ) : null}
          <p
            className={`kicker mt-4 inline-flex items-center gap-2 ${
              dark ? "text-primary-400" : ""
            } ${centered ? "justify-center" : ""}`}
          >
            <span
              className={`inline-block h-1.5 w-1.5 rounded-full animate-pulse-ring ${
                dark ? "bg-primary-400" : "bg-brand"
              }`}
            />
            {eyebrow}
          </p>
          <h1
            className={`mt-6 font-display text-4xl font-semibold sm:text-5xl lg:text-6xl ${
              dark ? "text-white" : "text-strong"
            }`}
          >
            {title}
          </h1>
          {description ? (
            <p
              className={`mt-6 text-lg ${centered ? "mx-auto" : ""} max-w-xl ${
                dark ? "text-ink-300" : "text-muted"
              }`}
            >
              {description}
            </p>
          ) : null}
          {cta ? (
            <div
              className={`mt-9 flex flex-col gap-3 sm:flex-row sm:items-center ${
                centered ? "justify-center" : ""
              }`}
            >
              <BookCta size="lg">{ctaLabel ?? "Book Discovery"}</BookCta>
              {secondary ? (
                <Link
                  href={secondary.href}
                  className={`inline-flex h-13 items-center gap-2 rounded-md px-4 text-base font-medium transition ${
                    dark
                      ? "text-ink-200 hover:text-white"
                      : "text-body hover:text-strong"
                  }`}
                >
                  {secondary.label}
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>

        {aside ? <div className="lg:col-span-5">{aside}</div> : null}
      </div>
    </section>
  );
}
