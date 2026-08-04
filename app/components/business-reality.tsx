import { Reveal, SectionHeading } from "./reveal";
import {
  ClockIcon,
  RepeatIcon,
  MailIcon,
  DatabaseIcon,
  LayersIcon,
  UsersIcon,
  type IconType,
} from "./feature-icons";

const pains: { icon: IconType; title: string; body: string }[] = [
  {
    icon: DatabaseIcon,
    title: "Manual data entry",
    body: "Hours lost copying information between systems that should talk to each other.",
  },
  {
    icon: ClockIcon,
    title: "Slow approvals",
    body: "Requests sit in inboxes while work—and revenue—waits on a signature.",
  },
  {
    icon: RepeatIcon,
    title: "Repetitive processes",
    body: "The same tasks, done by hand, every single day, across every team.",
  },
  {
    icon: MailIcon,
    title: "Endless follow-ups",
    body: "Leads go cold and customers wait because no one had time to reply.",
  },
  {
    icon: UsersIcon,
    title: "Hiring to scale",
    body: "Growth means more headcount, more overhead, and more coordination.",
  },
  {
    icon: LayersIcon,
    title: "Scattered knowledge",
    body: "Answers are trapped across tools, docs, and the people who happen to know.",
  },
];

export function BusinessReality() {
  return (
    <section
      aria-labelledby="reality-heading"
      className="relative bg-background py-20 md:py-28"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="The business reality"
          title={
            <span id="reality-heading">
              Your team is drowning in work software should handle
            </span>
          }
          lead="As businesses grow, inefficiencies multiply—slower operations, higher costs, burnout, and missed opportunities. The bottleneck isn't your people. It's the manual work around them."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((p, i) => (
            <Reveal key={p.title} index={i % 3}>
              <article className="group h-full rounded-xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-elevated">
                <span className="inline-flex size-11 items-center justify-center rounded-lg bg-amber-50 text-amber-700 transition-colors duration-300 group-hover:bg-amber-100">
                  <p.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-subheading font-display font-semibold text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-small text-muted">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal index={1} className="mt-10">
          <p className="text-body text-muted">
            <span className="font-semibold text-ink">
              The result: work slows down as you grow.
            </span>{" "}
            There is a better way to scale.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
