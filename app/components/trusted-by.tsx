const CAPABILITIES = [
  "Custom AI Agents",
  "AI Employees",
  "Multi-Agent Systems",
  "Workflow Automation",
  "Enterprise Software",
  "Legacy Modernization",
  "Document Processing",
  "Knowledge Management",
];

const SIGNALS = [
  { v: "15", k: "Industries served" },
  { v: "15+", k: "AI employee roles" },
  { v: "6", k: "Step methodology" },
  { v: "1", k: "Discovery session" },
];

export function TrustedBy() {
  return (
    <section className="dark relative overflow-hidden border-b border-white/10 bg-midnight-950">
      <div className="relative overflow-hidden border-b border-white/10 py-4">
        <div className="flex w-max animate-marquee items-center gap-6 pr-6">
          {[...CAPABILITIES, ...CAPABILITIES].map((cap, index) => (
            <span
              key={`${cap}-${index}`}
              className="flex items-center gap-6 whitespace-nowrap font-mono text-2xs uppercase tracking-[0.2em] text-ink-400"
            >
              {cap}
              <span className="text-primary-500">/</span>
            </span>
          ))}
        </div>
      </div>

      <div className="shell py-12">
        <p className="text-center font-mono text-2xs uppercase tracking-[0.2em] text-ink-400">
          Built for operators who measure outcomes
        </p>
        <ul className="mt-8 grid grid-cols-2 gap-y-8 sm:grid-cols-4">
          {SIGNALS.map((signal) => (
            <li key={signal.k} className="text-center">
              <p className="font-display text-4xl font-semibold text-white tabular-nums sm:text-5xl">
                {signal.v}
              </p>
              <p className="mt-2 font-mono text-2xs uppercase tracking-wider text-ink-400">
                {signal.k}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
