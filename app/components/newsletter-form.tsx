"use client";

import { useState } from "react";
import { BookCta } from "./book-cta";
import { IconArrowRight } from "./icons";

export function NewsletterForm() {
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    setError(null);
    setPending(true);

    const email = new FormData(event.currentTarget).get("email");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error ?? "Please try again.");
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8"
    >
      <label
        htmlFor="newsletter-email"
        className="font-mono text-2xs uppercase tracking-wider text-primary-400"
      >
        Work email
      </label>
      {done ? (
        <p role="status" className="mt-4 text-base text-white">
          You&apos;re in. Watch your inbox for the next playbook.
        </p>
      ) : (
        <>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <input
              id="newsletter-email"
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              className="h-13 flex-1 rounded-md border border-white/10 bg-depth px-3.5 text-base text-white placeholder:text-ink-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              disabled={pending}
              aria-busy={pending}
              className="group inline-flex h-13 items-center justify-center gap-2 rounded-md bg-brand px-6 text-base font-medium text-on-brand shadow-sm transition duration-200 hover:bg-brand-hover hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-70"
            >
              {pending ? "Subscribing…" : "Subscribe"}
              {pending ? null : (
                <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              )}
            </button>
          </div>
          {error ? (
            <p role="alert" className="mt-3 text-sm text-danger-500">
              {error}
            </p>
          ) : null}
        </>
      )}
      <p className="mt-4 text-sm text-ink-300">
        Prefer to talk it through first? Book a discovery session and skip the
        queue.
      </p>
      <div className="mt-5">
        <BookCta href="/contact" variant="outline" size="md">
          Book a discovery session
        </BookCta>
      </div>
    </form>
  );
}
