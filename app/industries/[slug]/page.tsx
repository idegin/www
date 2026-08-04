import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FinalCta } from "../../components/final-cta";
import { JsonLd } from "../../components/json-ld";
import { Reveal } from "../../components/reveal";
import { CheckIcon, BoltIcon, TargetIcon } from "../../components/feature-icons";
import { ArrowRightIcon } from "../../components/icons";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/jsonld";
import { getIndustries, getIndustry, industrySlugs } from "@/lib/industries";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return industrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) return {};
  return pageMetadata({
    title: `AI Workforce for ${ind.name}`,
    description: `${ind.tagline} How iDegin brings AI Workforce Transformation to ${ind.name.toLowerCase()}: challenges, opportunities, AI agents, and expected results.`,
    path: `/industries/${ind.slug}`,
    eyebrow: ind.name,
  });
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) notFound();

  const others = getIndustries().filter((i) => i.slug !== ind.slug);

  const blocks = [
    { key: "challenges", label: "The challenges", items: ind.challenges, tone: "warn" as const },
    { key: "opportunities", label: "The opportunities", items: ind.opportunities, tone: "brand" as const },
    { key: "results", label: "Expected results", items: ind.results, tone: "signal" as const },
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: ind.name, path: `/industries/${ind.slug}` },
        ])}
      />

      {/* Hero with cover image */}
      <section className="relative isolate overflow-hidden bg-cobalt-950 pt-32 md:pt-40">
        <div className="absolute inset-0 -z-10" aria-hidden>
          <Image
            src={ind.image}
            alt=""
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          {/* Directional scrim: dark on the left (behind text) so the image stays visible center/right */}
          <div className="absolute inset-0 bg-gradient-to-r from-cobalt-950/90 via-cobalt-950/60 to-cobalt-950/30" />
          {/* Ground only the bottom edge into the next section */}
          <div className="absolute inset-0 bg-gradient-to-t from-cobalt-950/85 via-transparent to-transparent" />
        </div>
        <div className="container-page pb-16 md:pb-20">
          <Reveal>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-small text-cobalt-100 hover:text-white"
            >
              <ArrowRightIcon className="size-4 rotate-180" />
              All industries
            </Link>
          </Reveal>
          <Reveal index={1}>
            <span className="mt-6 block eyebrow text-cobalt-100">Industry</span>
          </Reveal>
          <Reveal index={2}>
            <h1 className="mt-3 max-w-3xl text-display font-display font-bold text-white">
              AI Workforce for {ind.name}
            </h1>
          </Reveal>
          <Reveal index={3}>
            <p className="mt-5 max-w-2xl text-body-lg text-cobalt-100">
              {ind.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Overview + challenges/opportunities/results */}
      <section className="bg-background py-20 md:py-24">
        <div className="container-page">
          <div
            className="prose-content max-w-3xl"
            dangerouslySetInnerHTML={{ __html: ind.html }}
          />

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {blocks.map((b, i) => (
              <Reveal key={b.key} index={i}>
                <div className="h-full rounded-2xl border border-line bg-surface p-6">
                  <h2 className="eyebrow text-cobalt-600">{b.label}</h2>
                  <ul className="mt-5 flex flex-col gap-3">
                    {b.items.map((t) => (
                      <li key={t} className="flex gap-3 text-small text-muted">
                        <span
                          className={`mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full ${
                            b.tone === "warn"
                              ? "bg-amber-50 text-amber-700"
                              : b.tone === "signal"
                                ? "bg-lime-100 text-lime-700"
                                : "bg-cobalt-50 text-cobalt-600"
                          }`}
                        >
                          {b.tone === "warn" ? (
                            <TargetIcon className="size-3.5" />
                          ) : b.tone === "signal" ? (
                            <CheckIcon className="size-3.5" />
                          ) : (
                            <BoltIcon className="size-3.5" />
                          )}
                        </span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Possible AI agents */}
          <div className="mt-16">
            <Reveal>
              <h2 className="text-subheading font-display font-semibold text-ink">
                Possible AI agents
              </h2>
            </Reveal>
            <div className="mt-6 flex flex-wrap gap-3">
              {ind.agents.map((a, i) => (
                <Reveal key={a} index={i % 4}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-cobalt-200 bg-cobalt-50 px-4 py-2 text-small font-medium text-cobalt-700">
                    <span className="size-1.5 rounded-full bg-cobalt-500" aria-hidden />
                    {a}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Other industries */}
          <div className="mt-16 border-t border-line pt-10">
            <h2 className="text-small font-semibold text-ink">Other industries</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/industries/${o.slug}`}
                  className="rounded-full border border-line bg-surface px-4 py-2 text-small text-muted transition-colors hover:border-cobalt-400 hover:text-cobalt-600"
                >
                  {o.short}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
