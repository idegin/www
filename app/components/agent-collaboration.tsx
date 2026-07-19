import { AgentGraph } from "./agent-graph";
import { SectionHeader } from "./section-header";

const LAYERS = [
  { k: "Direct", v: "A human manager sets goals and guardrails — and stays in control." },
  { k: "Delegate", v: "Domain AI employees own their function and escalate only when needed." },
  { k: "Collaborate", v: "Agents share context and hand off work between departments automatically." },
  { k: "Report", v: "Analytics AI keeps every decision visible in real time." },
];

export function AgentCollaboration() {
  return (
    <section className="relative bg-background">
      <div className="shell grid gap-12 py-section lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <SectionHeader
            index="05"
            kicker="Agent collaboration"
            title="Not a chatbot. An orchestrated team that runs itself"
            intro="Your AI employees don't work in isolation. They coordinate like a real org chart — with a human firmly at the top."
          />
          <ul className="mt-10 space-y-6">
            {LAYERS.map((layer, index) => (
              <li key={layer.k} className="flex gap-5">
                <span className="mt-0.5 font-mono text-2xs text-brand tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="border-l border-border pl-5">
                  <p className="font-display text-lg font-semibold text-strong">
                    {layer.k}
                  </p>
                  <p className="mt-1 text-sm text-muted">{layer.v}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="dark relative overflow-hidden rounded-2xl border border-white/10 bg-depth p-6 shadow-2xl grain sm:p-8">
          <div
            className="pointer-events-none absolute inset-0 blueprint-grid opacity-40"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-sm">
            <AgentGraph bare gradientId="collab-edge" />
          </div>
        </div>
      </div>
    </section>
  );
}
