import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FinalCta } from "../components/final-cta";
import { JsonLd } from "../components/json-ld";
import { LinkedInIcon, GitHubIcon, ArrowUpRightIcon } from "../components/icons";
import { pageMetadata } from "@/lib/seo";
import { personSchema, breadcrumbSchema } from "@/lib/jsonld";
import { getPerson } from "@/lib/people";

const SLUG = "ifeora-emeka";

export function generateMetadata(): Metadata {
  const p = getPerson(SLUG);
  if (!p) return {};
  return pageMetadata({
    title: `${p.name} — ${p.role}`,
    description: `${p.name} is the founder & CEO of Onita AI, building the AI workforce for African businesses. Born in ${p.born.place}, he builds autonomous AI agents, complex workflows, and ERP systems.`,
    path: `/${SLUG}`,
    eyebrow: "Founder",
    tags: p.focus,
  });
}

export default function FounderPage() {
  const p = getPerson(SLUG);
  if (!p) notFound();

  const bornDate = new Date(p.born.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <JsonLd
        data={[
          personSchema(p),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: p.name, path: `/${SLUG}` },
          ]),
        ]}
      />

      {/* Subtle brand backdrop */}
      <section className="relative isolate overflow-hidden bg-background pt-32 md:pt-40">
        <div
          className="bg-brand-mesh absolute inset-0 -z-10 opacity-50 blur-3xl"
          aria-hidden
        />
        <div
          className="bg-grid absolute inset-0 -z-10 text-cobalt-500/40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_65%)]"
          aria-hidden
        />

        <article className="container-page grid gap-10 pb-20 lg:grid-cols-[340px_1fr] lg:gap-16">
          {/* Sidebar: photo + facts */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-3xl border border-line bg-surface shadow-elevated">
              <div className="relative aspect-square">
                <Image
                  src={p.image}
                  alt={`Portrait of ${p.name}, ${p.role}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 340px"
                  priority
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <dl className="flex flex-col gap-4 text-small">
                  <div>
                    <dt className="eyebrow text-muted">Born</dt>
                    <dd className="mt-1 text-ink">
                      {bornDate} · {p.born.place}
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-muted">Education</dt>
                    {p.education.map((e) => (
                      <dd key={e.school} className="mt-1 text-ink">
                        {e.degree} — {e.school}
                      </dd>
                    ))}
                  </div>
                  <div>
                    <dt className="eyebrow text-muted">Company</dt>
                    <dd className="mt-1">
                      <a
                        href={p.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-cobalt-600 hover:text-cobalt-700"
                      >
                        {p.company}
                        <ArrowUpRightIcon className="size-3.5" />
                      </a>
                    </dd>
                  </div>
                </dl>

                {/* Socials */}
                <ul className="mt-6 flex items-center gap-2">
                  {p.socials.linkedin ? (
                    <li>
                      <a
                        href={p.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${p.name} on LinkedIn`}
                        className="inline-flex size-10 items-center justify-center rounded-md border border-line bg-surface text-muted transition-colors hover:border-cobalt-400 hover:text-cobalt-600"
                      >
                        <LinkedInIcon className="size-4" />
                      </a>
                    </li>
                  ) : null}
                  {p.socials.github ? (
                    <li>
                      <a
                        href={p.socials.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${p.name} on GitHub`}
                        className="inline-flex size-10 items-center justify-center rounded-md border border-line bg-surface text-muted transition-colors hover:border-cobalt-400 hover:text-cobalt-600"
                      >
                        <GitHubIcon className="size-4" />
                      </a>
                    </li>
                  ) : null}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main: identity + bio */}
          <div>
            <span className="eyebrow inline-flex items-center gap-2 text-cobalt-600">
              <span className="h-px w-6 bg-cobalt-400" aria-hidden />
              Founder
            </span>
            <h1 className="mt-4 text-display font-display font-bold text-ink">
              {p.name}
            </h1>
            <p className="mt-2 text-subheading font-display font-semibold text-cobalt-600">
              {p.role}
            </p>
            <p className="mt-4 max-w-2xl text-body-lg text-muted">{p.tagline}</p>

            {/* Focus tags */}
            <ul className="mt-6 flex flex-wrap gap-2">
              {p.focus.map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-line bg-surface-alt px-3 py-1 text-caption text-muted"
                >
                  {f}
                </li>
              ))}
            </ul>

            {/* Biography */}
            <div
              className="prose-content mt-10"
              dangerouslySetInnerHTML={{ __html: p.html }}
            />

            {/* Experience */}
            <div className="mt-12 border-t border-line pt-8">
              <h2 className="text-subheading font-display font-semibold text-ink">
                Experience
              </h2>
              <ol className="mt-6 flex flex-col gap-5">
                {p.experience.map((x) => (
                  <li key={`${x.company}-${x.role}`} className="flex gap-4">
                    <span className="mt-1.5 size-2.5 shrink-0 rounded-full bg-cobalt-500" aria-hidden />
                    <div>
                      <p className="text-body font-semibold text-ink">
                        {x.role} · {x.company}
                      </p>
                      {x.note ? (
                        <p className="mt-1 text-small text-muted">{x.note}</p>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <p className="mt-10 text-small text-muted">
              Machine-readable profile:{" "}
              <Link
                href={`/api/${SLUG}`}
                className="text-cobalt-600 underline underline-offset-2 hover:text-cobalt-700"
              >
                /api/{SLUG}
              </Link>
            </p>
          </div>
        </article>
      </section>

      <FinalCta />
    </>
  );
}
