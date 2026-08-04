import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FinalCta } from "../../components/final-cta";
import { JsonLd } from "../../components/json-ld";
import { Reveal } from "../../components/reveal";
import { ArrowRightIcon } from "../../components/icons";
import { CheckIcon, TargetIcon, GearIcon, BoltIcon } from "../../components/feature-icons";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/jsonld";
import { getPlaybook, getPlaybooks, getPlaybookSlugs } from "@/lib/playbooks";

export function generateStaticParams() {
  return getPlaybookSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getPlaybook(slug);
  if (!p) return {};
  return pageMetadata({
    title: p.title,
    description: p.excerpt,
    path: `/playbooks/${p.slug}`,
    eyebrow: p.industry,
  });
}

function ListBlock({
  label,
  items,
  icon: Icon,
  tone,
}: {
  label: string;
  items: string[];
  icon: typeof CheckIcon;
  tone: "warn" | "brand" | "signal";
}) {
  if (!items.length) return null;
  return (
    <div className="h-full rounded-2xl border border-line bg-surface p-6">
      <h2 className="eyebrow text-cobalt-600">{label}</h2>
      <ul className="mt-5 flex flex-col gap-3">
        {items.map((t) => (
          <li key={t} className="flex gap-3 text-small text-muted">
            <span
              className={`mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full ${
                tone === "warn"
                  ? "bg-amber-50 text-amber-700"
                  : tone === "signal"
                    ? "bg-lime-100 text-lime-700"
                    : "bg-cobalt-50 text-cobalt-600"
              }`}
            >
              <Icon className="size-3.5" />
            </span>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function PlaybookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getPlaybook(slug);
  if (!p) notFound();

  const others = getPlaybooks().filter((x) => x.slug !== p.slug);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Playbooks", path: "/playbooks" },
          { name: p.title, path: `/playbooks/${p.slug}` },
        ])}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-cobalt-950 pt-32 md:pt-40">
        <div className="absolute inset-0 -z-10" aria-hidden>
          <Image
            src={p.thumbnail}
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
              href="/playbooks"
              className="inline-flex items-center gap-2 text-small text-cobalt-100 hover:text-white"
            >
              <ArrowRightIcon className="size-4 rotate-180" />
              All playbooks
            </Link>
          </Reveal>
          <Reveal index={1}>
            <span className="mt-6 block eyebrow text-cobalt-100">
              Transformation Playbook · {p.industry}
            </span>
          </Reveal>
          <Reveal index={2}>
            <h1 className="mt-3 max-w-3xl text-display font-display font-bold text-white">
              {p.title}
            </h1>
          </Reveal>
          <Reveal index={3}>
            <p className="mt-5 max-w-2xl text-body-lg text-cobalt-100">{p.excerpt}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-20 md:py-24">
        <div className="container-page">
          {/* Overview */}
          <div
            className="prose-content max-w-3xl"
            dangerouslySetInnerHTML={{ __html: p.html }}
          />

          {/* Challenges / Workflows / Opportunities */}
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            <Reveal>
              <ListBlock label="Typical challenges" items={p.challenges} icon={TargetIcon} tone="warn" />
            </Reveal>
            <Reveal index={1}>
              <ListBlock label="Common manual workflows" items={p.workflows} icon={GearIcon} tone="brand" />
            </Reveal>
            <Reveal index={2}>
              <ListBlock label="AI opportunities" items={p.opportunities} icon={BoltIcon} tone="brand" />
            </Reveal>
          </div>

          {/* Recommended AI workforce */}
          {p.workforce.length ? (
            <div className="mt-16">
              <Reveal>
                <h2 className="text-subheading font-display font-semibold text-ink">
                  Recommended AI workforce
                </h2>
              </Reveal>
              <div className="mt-6 flex flex-wrap gap-3">
                {p.workforce.map((a, i) => (
                  <Reveal key={a} index={i % 4}>
                    <span className="inline-flex items-center gap-2 rounded-full border border-cobalt-200 bg-cobalt-50 px-4 py-2 text-small font-medium text-cobalt-700">
                      <span className="size-1.5 rounded-full bg-cobalt-500" aria-hidden />
                      {a}
                    </span>
                  </Reveal>
                ))}
              </div>
            </div>
          ) : null}

          {/* Outcomes */}
          {p.outcomes.length ? (
            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              <Reveal>
                <ListBlock label="Expected business outcomes" items={p.outcomes} icon={CheckIcon} tone="signal" />
              </Reveal>
              {/* Timeline */}
              {p.timeline.length ? (
                <Reveal index={1}>
                  <div className="h-full rounded-2xl border border-line bg-surface p-6">
                    <h2 className="eyebrow text-cobalt-600">Estimated timeline</h2>
                    <ol className="mt-5 flex flex-col gap-4">
                      {p.timeline.map((t) => (
                        <li key={t.week} className="flex items-baseline gap-4">
                          <span className="w-24 shrink-0 font-mono text-caption font-medium text-cobalt-600">
                            {t.week}
                          </span>
                          <span className="text-small text-ink">{t.label}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </Reveal>
              ) : null}
            </div>
          ) : null}

          {/* ROI note */}
          {p.roi ? (
            <Reveal className="mt-8">
              <p className="rounded-xl border border-cobalt-200 bg-cobalt-50 p-5 text-small text-cobalt-800">
                <span className="font-semibold">Potential ROI:</span> {p.roi}
              </p>
            </Reveal>
          ) : null}

          {/* Other playbooks */}
          <div className="mt-16 border-t border-line pt-10">
            <h2 className="text-small font-semibold text-ink">Other playbooks</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/playbooks/${o.slug}`}
                  className="rounded-full border border-line bg-surface px-4 py-2 text-small text-muted transition-colors hover:border-cobalt-400 hover:text-cobalt-600"
                >
                  {o.industry}
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
