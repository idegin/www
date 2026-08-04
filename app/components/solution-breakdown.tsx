import { Reveal, SectionHeading } from "./reveal";
import {
  SearchIcon,
  TargetIcon,
  BoltIcon,
  RocketIcon,
  LayersIcon,
  UsersIcon,
  GearIcon,
  type IconType,
} from "./feature-icons";

const parts: { icon: IconType; title: string; body: string }[] = [
  { icon: SearchIcon, title: "Workflow Audit", body: "We map how work actually happens and where AI pays off first." },
  { icon: TargetIcon, title: "AI Strategy", body: "A prioritized blueprint and roadmap tied to business outcomes." },
  { icon: BoltIcon, title: "AI Agent Design", body: "We design the specific AI employees your workflows need." },
  { icon: RocketIcon, title: "Implementation", body: "We build and deploy agents into your live operations." },
  { icon: LayersIcon, title: "Integration", body: "Agents work inside your existing tools—CRM, email, ERPs." },
  { icon: UsersIcon, title: "Training", body: "Change management so your team adopts and trusts the workforce." },
  { icon: GearIcon, title: "Optimization", body: "Continuous monitoring and improvement after launch." },
];

export function SolutionBreakdown() {
  return (
    <section
      aria-labelledby="components-heading"
      className="relative bg-background py-20 md:py-28"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="What's included"
          title={<span id="components-heading">One engagement, end to end</span>}
          lead="AI Workforce Transformation is a complete service—from first audit to continuous optimization."
          align="center"
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {parts.map((p, i) => (
            <Reveal key={p.title} index={i % 3}>
              <article className="group relative h-full rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cobalt-300 hover:shadow-elevated">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-cobalt-50 text-cobalt-600 transition-colors duration-300 group-hover:bg-cobalt-500 group-hover:text-white">
                    <p.icon className="size-5" />
                  </span>
                  <span className="font-mono text-caption text-neutral-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 text-subheading font-display font-semibold text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-small text-muted">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
