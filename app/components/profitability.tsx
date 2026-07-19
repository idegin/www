import { SectionHeader } from "./section-header";

const CARDS = [
  {
    n: "01",
    title: "Increase revenue",
    body: "AI employees that never sleep — qualifying leads, following up, and closing gaps in your sales and support motion around the clock.",
  },
  {
    n: "02",
    title: "Reduce operating cost",
    body: "Automate the repetitive, rules-based work that consumes payroll, so your team spends its hours on judgement, not busywork.",
  },
  {
    n: "03",
    title: "Improve productivity",
    body: "Connect disconnected tools into one orchestrated system where information flows and decisions happen in real time.",
  },
  {
    n: "04",
    title: "Scale operations",
    body: "Grow output without growing headcount. Add capacity by deploying another AI employee, not another hire.",
  },
];

export function Profitability() {
  return (
    <section className="relative bg-background">
      <div className="shell py-section">
        <SectionHeader
          index="03"
          kicker="Why it pays"
          title="How we make businesses measurably more profitable"
          intro="We never automate for its own sake. Every engagement is judged against one of four business outcomes."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card) => (
            <div
              key={card.n}
              className="group relative flex flex-col bg-surface p-7 transition hover:bg-surface-sunken"
            >
              <span className="font-mono text-2xs uppercase tracking-[0.2em] text-brand">
                {card.n}
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold text-strong">
                {card.title}
              </h3>
              <p className="mt-3 text-sm text-muted">{card.body}</p>
              <span
                className="mt-6 h-px w-10 bg-border-strong transition-all duration-300 group-hover:w-full group-hover:bg-brand"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
