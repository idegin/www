"use client";

import { useState } from "react";
import { IconArrowRight } from "./icons";

const INDUSTRIES = [
  "Healthcare",
  "Financial Services",
  "Government",
  "Manufacturing",
  "Retail",
  "Education",
  "Construction",
  "Logistics",
  "Professional Services",
  "Other",
];

const SIZES = ["1–10", "11–50", "51–200", "201–1,000", "1,000+"];

const TIMES = ["This week", "Next week", "This month", "Just exploring"];

const inputClass =
  "mt-2 h-11 w-full rounded-md border border-border bg-surface px-3.5 text-sm text-strong outline-none transition focus:border-brand focus:ring-2 focus:ring-ring";

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    setError(null);
    setPending(true);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setPending(false);
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex h-full flex-col items-start justify-center rounded-2xl border border-border bg-surface p-8 sm:p-10"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-success-50 text-success-700">
          <IconArrowRight className="h-5 w-5" />
        </span>
        <h2 className="mt-6 font-display text-2xl font-semibold text-strong">
          Request received
        </h2>
        <p className="mt-3 text-muted">
          Thank you. An iDegin engineer will reach out within one business day to
          schedule your AI Discovery Session.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setError(null);
          }}
          className="mt-6 font-mono text-2xs uppercase tracking-wider text-brand"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="text-sm font-medium text-strong">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={inputClass}
          />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="email" className="text-sm font-medium text-strong">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={inputClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="company" className="text-sm font-medium text-strong">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="industry" className="text-sm font-medium text-strong">
            Industry
          </label>
          <select id="industry" name="industry" className={inputClass}>
            {INDUSTRIES.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="size" className="text-sm font-medium text-strong">
            Team size
          </label>
          <select id="size" name="size" className={inputClass}>
            {SIZES.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="challenge" className="text-sm font-medium text-strong">
            Your biggest operational challenge
          </label>
          <textarea
            id="challenge"
            name="challenge"
            rows={4}
            className="mt-2 w-full rounded-md border border-border bg-surface px-3.5 py-3 text-sm text-strong outline-none transition focus:border-brand focus:ring-2 focus:ring-ring"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="time" className="text-sm font-medium text-strong">
            Preferred timing
          </label>
          <select id="time" name="time" className={inputClass}>
            {TIMES.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>

      {error ? (
        <p
          role="alert"
          className="mt-6 rounded-md border border-danger-500/30 bg-danger-50 px-4 py-3 text-sm text-danger-700"
        >
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        aria-busy={pending}
        className="group mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-brand px-5 text-sm font-medium text-on-brand shadow-sm transition duration-200 hover:bg-brand-hover hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {pending ? "Submitting…" : "Book my AI Discovery Session"}
        {pending ? null : (
          <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        )}
      </button>
      <p className="mt-4 font-mono text-2xs uppercase tracking-wider text-muted">
        No cost · No obligation · 30 minutes
      </p>
    </form>
  );
}
