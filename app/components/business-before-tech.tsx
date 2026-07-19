const ACTIVITIES = [
  "Employee & leadership interviews",
  "Shadowing how work really happens",
  "Process & workflow mapping",
  "Pain-point identification",
  "Knowledge extraction",
  "A prioritized automation roadmap",
];

export function BusinessBeforeTech() {
  return (
    <section className="dark relative overflow-hidden bg-midnight-950 grain">
      <div
        className="pointer-events-none absolute inset-0 blueprint-dots opacity-30"
        aria-hidden="true"
      />
      <div className="shell relative grid gap-12 py-section lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="kicker text-primary-400">Business before technology</p>
          <blockquote className="mt-6 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
            &ldquo;We never begin with AI.
            <br />
            We begin with your business
            <span className="caret text-gold-400" aria-hidden="true" />&rdquo;
          </blockquote>
          <p className="mt-6 max-w-lg text-lg text-ink-300">
            Technology should adapt to how your organization works — not force
            your people to change how they work. So we learn the business
            first, then engineer around it.
          </p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {ACTIVITIES.map((activity, index) => (
            <li
              key={activity}
              className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-4"
            >
              <span className="mt-0.5 font-mono text-2xs text-primary-300 tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm text-ink-200">{activity}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
