import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PostCard } from "../../components/post-card";
import { JsonLd } from "../../components/json-ld";
import { Reveal } from "../../components/reveal";
import { ArrowRightIcon } from "../../components/icons";
import { pageMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema } from "@/lib/jsonld";
import { getAllPosts, getAllSlugs, getPost } from "@/lib/posts";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/resources/${post.slug}`,
    eyebrow: post.category,
    ogType: "article",
    publishedTime: post.date,
    tags: post.tags,
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          articleSchema(post),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/resources" },
            { name: post.title, path: `/resources/${post.slug}` },
          ]),
        ]}
      />

      <article className="bg-background pb-24 pt-32 md:pt-40">
        <div className="container-page">
          {/* Header */}
          <div className="mx-auto max-w-3xl">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-small text-cobalt-600 hover:text-cobalt-700"
            >
              <ArrowRightIcon className="size-4 rotate-180" />
              All insights
            </Link>
            <span className="mt-6 block eyebrow text-cobalt-600">
              {post.category}
            </span>
            <h1 className="mt-3 text-display font-display font-bold text-ink">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-small text-muted">
              <span className="text-ink-secondary">{post.author}</span>
              <span aria-hidden>•</span>
              <span>{post.formattedDate}</span>
              <span aria-hidden>•</span>
              <span>{post.readingMinutes} min read</span>
            </div>
          </div>

          {/* Cover */}
          <div className="relative mx-auto mt-10 aspect-16/9 max-w-4xl overflow-hidden rounded-3xl border border-line">
            <Image
              src={post.thumbnail}
              alt={post.thumbnailAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              priority
              className="object-cover"
            />
          </div>

          {/* Body */}
          <div
            className="prose-content mx-auto mt-12"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          {/* Tags */}
          {post.tags.length ? (
            <div className="mx-auto mt-10 flex max-w-3xl flex-wrap gap-2">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line bg-surface-alt px-3 py-1 text-caption text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}

          {/* CTA */}
          <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-cobalt-300 bg-surface p-8 text-center shadow-glow">
            <h2 className="text-subheading font-display font-semibold text-ink">
              Ready to put this into practice?
            </h2>
            <p className="mt-2 text-small text-muted">
              Book an AI Workflow Audit and see where an AI workforce pays off in
              your business.
            </p>
            <Link
              href={siteConfig.cta.href}
              className="group mt-5 inline-flex items-center gap-2 rounded-md bg-cobalt-500 px-6 py-3 text-button text-white shadow-glow transition-all duration-200 hover:-translate-y-0.5 hover:bg-cobalt-600"
            >
              {siteConfig.cta.label}
              <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length ? (
        <section className="border-t border-line bg-surface-alt py-20">
          <div className="container-page">
            <h2 className="text-subheading font-display font-semibold text-ink">
              More insights
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.slug} index={i % 3}>
                  <PostCard post={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
