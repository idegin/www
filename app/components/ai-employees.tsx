"use client";

import { useState } from "react";
import { SectionHeader } from "./section-header";

const EMPLOYEES = [
  {
    role: "Sales AI",
    dept: "Revenue",
    summary: "Qualifies inbound leads, books meetings, and keeps every opportunity warm.",
    tasks: ["Lead qualification & routing", "Follow-up sequences", "CRM hygiene & enrichment", "Meeting scheduling"],
  },
  {
    role: "Customer Support AI",
    dept: "Experience",
    summary: "Resolves tickets on your policies and product knowledge, 24/7, in any language.",
    tasks: ["Tier-1 resolution", "Order & account lookups", "Escalation with context", "CSAT follow-up"],
  },
  {
    role: "Finance AI",
    dept: "Finance",
    summary: "Handles invoices, reconciliations, and reporting without the month-end scramble.",
    tasks: ["Invoice processing", "Reconciliation", "Expense checks", "Cashflow reporting"],
  },
  {
    role: "Operations AI",
    dept: "Operations",
    summary: "Orchestrates approvals and handoffs so work never stalls in someone's inbox.",
    tasks: ["Approval routing", "SLA monitoring", "Vendor coordination", "Exception handling"],
  },
  {
    role: "HR AI",
    dept: "People",
    summary: "Runs onboarding, answers policy questions, and keeps records current.",
    tasks: ["Onboarding workflows", "Policy Q&A", "Leave management", "Document collection"],
  },
  {
    role: "Executive Assistant AI",
    dept: "Leadership",
    summary: "Prepares briefings, manages calendars, and turns meetings into action items.",
    tasks: ["Calendar management", "Briefing prep", "Inbox triage", "Action tracking"],
  },
  {
    role: "Research Analyst AI",
    dept: "Strategy",
    summary: "Gathers, synthesizes, and cites the market and competitive intelligence you need.",
    tasks: ["Market scans", "Competitor tracking", "Cited synthesis", "Trend alerts"],
  },
  {
    role: "Knowledge AI",
    dept: "Enablement",
    summary: "Turns scattered documents into an instant, trustworthy answer for your team.",
    tasks: ["Document retrieval", "Policy grounding", "Instant answers", "Source citations"],
  },
];

export function AiEmployees() {
  const [active, setActive] = useState(0);
  const employee = EMPLOYEES[active];

  return (
    <section id="ai-employees" className="dark relative bg-depth">
      <div
        className="pointer-events-none absolute inset-0 blueprint-grid opacity-30"
        aria-hidden="true"
      />
      <div className="shell relative py-section">
        <SectionHeader
          index="04"
          kicker="Your AI workforce"
          title="Meet the employees you don't have to hire"
          intro="Each one is trained on your policies, workflows, and knowledge — then deployed to run a function end to end."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-2">
              {EMPLOYEES.map((item, index) => {
                const selected = index === active;
                return (
                  <li key={item.role}>
                    <button
                      type="button"
                      onClick={() => setActive(index)}
                      aria-pressed={selected}
                      className={`flex w-full flex-col items-start rounded-lg border px-4 py-3 text-left transition ${
                        selected
                          ? "border-primary-500/60 bg-primary-600/10"
                          : "border-white/10 hover:border-white/25 hover:bg-white/5"
                      }`}
                    >
                      <span className="font-mono text-[10px] uppercase tracking-wider text-ink-400">
                        {item.dept}
                      </span>
                      <span
                        className={`mt-1 text-sm font-medium ${
                          selected ? "text-white" : "text-ink-200"
                        }`}
                      >
                        {item.role}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-midnight-900/60 p-8 sm:p-10">
              <span className="reg-mark right-4 top-4" aria-hidden="true" />
              <p className="font-mono text-2xs uppercase tracking-[0.2em] text-primary-300">
                {employee.dept} · always on
              </p>
              <h3 className="mt-4 font-display text-3xl font-semibold text-white">
                {employee.role}
              </h3>
              <p className="mt-4 max-w-lg text-lg text-ink-300">
                {employee.summary}
              </p>

              <p className="mt-8 font-mono text-2xs uppercase tracking-wider text-ink-400">
                Handles
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {employee.tasks.map((task) => (
                  <li
                    key={task}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink-200"
                  >
                    <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400" />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
