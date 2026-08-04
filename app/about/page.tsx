import type { Metadata } from "next";
import { PageHero } from "../components/page-hero";
import { Reveal, SectionHeading } from "../components/reveal";
import { FinalCta } from "../components/final-cta";
import { JsonLd } from "../components/json-ld";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = pageMetadata({
  title: "About iDegin",
  description:
    "iDegin Technologies is an AI Workforce Transformation company helping Nigerian businesses scale output without scaling headcount. Our story, mission, and values.",
  path: "/about",
  eyebrow: "About Us",
});

const values = [
  { title: "Business First", body: "Technology exists to solve business problems—never the other way around." },
  { title: "Ownership", body: "We own outcomes, not just deliverables." },
  { title: "Simplicity", body: "The best solutions are easy to understand and use." },
  { title: "Excellence", body: "We build reliable, production-ready systems." },
  { title: "Partnership", body: "We work with clients, not just for them." },
  { title: "Continuous Improvement", body: "Every deployment gets better over time." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        eyebrow="About us"
        title={
          <>
            We help businesses grow by getting{" "}
            <span className="text-gradient-brand">more productive</span>
          </>
        }
        lead="iDegin Technologies is an AI Workforce Transformation company. We don't just build software—we transform how businesses operate."
      />

      {/* Belief / story */}
      <section className="bg-background py-20 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="Why we exist"
            title="Businesses should grow because they get more productive—not because they hire more people."
          />
          <div className="flex flex-col gap-4 text-body text-muted lg:pt-14">
            <Reveal>
              <p>
                Most Nigerian businesses still run on manual processes. Teams
                spend hours every day copying data, chasing approvals, and
                answering the same questions. As the business grows, those
                inefficiencies multiply.
              </p>
            </Reveal>
            <Reveal index={1}>
              <p>
                We believe people should spend their time solving problems,
                building relationships, and creating value—not doing repetitive
                administrative work. AI should amplify people, not replace them.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-surface-alt py-20 md:py-24">
        <div className="container-page grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-line bg-surface p-8">
              <h2 className="eyebrow text-cobalt-600">Our Mission</h2>
              <p className="mt-4 text-subheading font-display font-semibold text-ink">
                To help businesses unlock exponential growth by turning manual
                operations into intelligent, AI-powered workflows.
              </p>
            </div>
          </Reveal>
          <Reveal index={1}>
            <div className="h-full rounded-2xl border border-cobalt-300 bg-surface p-8 shadow-glow">
              <h2 className="eyebrow text-cobalt-600">Our Vision</h2>
              <p className="mt-4 text-subheading font-display font-semibold text-ink">
                To become Nigeria&apos;s most trusted AI Workforce Transformation
                company, and a recognized African leader in embedding AI into
                real business operations.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-20 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our values"
            title="What we stand for"
            align="center"
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} index={i % 3}>
                <div className="h-full rounded-2xl border border-line bg-surface p-6">
                  <h3 className="text-subheading font-display font-semibold text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-small text-muted">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Nigeria */}
      <section className="bg-surface-alt py-20 md:py-24">
        <div className="container-page max-w-3xl">
          <SectionHeading
            eyebrow="Why Nigeria"
            title="The opportunity is here, and it's now"
          />
          <Reveal index={2}>
            <p className="mt-4 text-body-lg text-muted">
              Nigeria&apos;s businesses are ambitious and growing fast—but
              productivity, not headcount, will decide who leads. By embedding AI
              into real operations, we help local companies operate with
              world-class efficiency and compete on a bigger stage.
            </p>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
