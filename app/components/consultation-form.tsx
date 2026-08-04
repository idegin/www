"use client";

import { useState } from "react";
import { industries } from "@/lib/site-config";
import { ArrowUpRightIcon } from "./icons";
import { CheckIcon } from "./feature-icons";

const teamSizes = ["1–10", "11–50", "51–200", "201–500", "500+"];

type Status = "idle" | "submitting" | "success" | "error";

const fieldBase =
  "w-full rounded-md border border-line bg-surface px-4 py-3 text-body text-ink placeholder:text-placeholder transition-colors duration-150 focus:border-cobalt-500 focus:outline-none focus:ring-3 focus:ring-cobalt-500/25";

export function ConsultationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong. Please email us at hello@idegin.com.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-success-200 bg-success-50 p-8 text-center">
        <span className="mx-auto inline-flex size-12 items-center justify-center rounded-full bg-success-500 text-white">
          <CheckIcon className="size-6" />
        </span>
        <h3 className="mt-4 text-subheading font-display font-semibold text-ink">
          Request received
        </h3>
        <p className="mt-2 text-small text-muted">
          Thanks for reaching out. Our team will be in touch within one business
          day to schedule your AI Workflow Audit.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-line bg-surface p-6 shadow-subtle sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required autoComplete="name" />
        <Field label="Company" name="company" required autoComplete="organization" />
        <Field label="Work email" name="email" type="email" required autoComplete="email" />
        <Field label="Role" name="role" autoComplete="organization-title" />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
        <Select label="Team size" name="teamSize" options={teamSizes} />
        <Select
          label="Industry"
          name="industry"
          options={[...industries]}
          className="sm:col-span-2"
        />
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-small font-medium text-ink">
            What are you hoping to automate?
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={fieldBase}
            placeholder="Tell us about the repetitive work slowing your team down…"
          />
        </div>
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-4 text-small text-danger-600">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-cobalt-500 px-6 py-3.5 text-button text-white shadow-glow transition-all duration-200 hover:-translate-y-0.5 hover:bg-cobalt-600 hover:shadow-glow-strong disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Book my AI Workflow Audit"}
        <ArrowUpRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
      <p className="mt-4 text-caption text-muted">
        We&apos;ll only use your details to respond to your request. No spam.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-small font-medium text-ink">
        {label}
        {required ? <span className="text-cobalt-600"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className={fieldBase}
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
  className,
}: {
  label: string;
  name: string;
  options: string[];
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1.5 block text-small font-medium text-ink">
        {label}
      </label>
      <select id={name} name={name} defaultValue="" className={fieldBase}>
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
