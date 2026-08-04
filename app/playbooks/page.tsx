import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "../components/page-hero";
import { Reveal } from "../components/reveal";
import { FinalCta } from "../components/final-cta";
import { JsonLd } from "../components/json-ld";
import { ArrowUpRightIcon } from "../components/icons";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/jsonld";
import { getPlaybooks } from "@/lib/playbooks";

export const metadata: Metadata = pageMetadata({
  title: "Transformation Playbooks",
  description:
    "See exactly how AI Workforce Transformation would work in your industry—challenges, AI workforce, expected outcomes, and timeline. Practical blueprints from the iDegin team.",
  path: "/playbooks",
  eyebrow: "Playbooks",
});

export default function PlaybooksPage() {
  const playbooks = getPlaybooks();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Playbooks", path: "/playbooks" },
        ])}
      />
      <PageHero
        eyebrow="Transformation Playbooks"
        title={
          <>
            See exactly how we&apos;d{" "}
            <span className="text-gradient-brand">transform your business</span>
          </>
        }
        lead="We're a young company building in the open. Rather than dress up thin case studies, here's precisely how we'd approach an AI Workforce Transformation in your industry—the same rigor we bring to every engagement."
      />

      <section className="bg-background pb-8">
        <div className="container-page">
          <Reveal>
            <p className="rounded-xl border border-line bg-surface-alt p-5 text-small text-muted">
              <span className="font-semibold text-ink">A note on transparency:</span>{" "}
              these are illustrative playbooks, not client case studies. As we
              complete engagements, we&apos;ll publish real, measurable results
              here—with our clients&apos; permission.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background pb-24">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {playbooks.map((p, i) => (
            <Reveal key={p.slug} index={i % 3}>
              <Link
                href={`/playbooks/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-cobalt-300 hover:shadow-elevated focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt-500"
              >
                <div className="relative aspect-16/10 overflow-hidden">
                  <Image
                    src={p.thumbnail}
                    alt={p.thumbnailAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 font-mono text-caption font-medium uppercase tracking-wider text-cobalt-700 backdrop-blur">
                    {p.industry}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-subheading font-display font-semibold text-ink transition-colors group-hover:text-cobalt-600">
                    {p.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 text-small text-muted">
                    {p.excerpt}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 text-button text-cobalt-600">
                    Read the playbook
                    <ArrowUpRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
