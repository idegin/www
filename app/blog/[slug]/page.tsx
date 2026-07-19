import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getPostSlugs } from "@/lib/posts";
import {
  buildMetadata,
  breadcrumbJsonLd,
  jsonLdScript,
  ogImageUrl,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { PostCover } from "../../components/post-cover";
import { CtaBand } from "../../components/cta-band";
import { Reveal } from "../../components/reveal";
import { IconArrowRight } from "../../components/icons";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    ogType: "article",
    publishedTime: post.date,
    tags: post.tags,
    ogImage: post.thumbnail || ogImageUrl({ title: post.title, kicker: post.category }),
  });
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getAllPosts()
    .filter((item) => item.slug !== post.slug)
    .slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    image: post.thumbnail
      ? `${siteConfig.url}${post.thumbnail}`
      : `${siteConfig.url}${ogImageUrl({ title: post.title, kicker: post.category })}`,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole,
      worksFor: { "@type": "Organization", name: siteConfig.legalName },
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/icon-512.png`,
      },
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(articleJsonLd)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ])
        )}
      />

      <article>
        <header
          data-hero-tone="light"
          className="relative bg-surface-sunken pb-8 pt-32 lg:pt-40"
        >
          <div
            className="pointer-events-none absolute inset-0 blueprint-dots opacity-40"
            aria-hidden="true"
          />
          <div className="shell relative max-w-3xl">
            <Link
              href="/blog"
              className="link-line font-mono text-2xs uppercase tracking-wider text-muted"
            >
              ← Insights
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-2xs uppercase tracking-wider text-muted">
              <span className="text-brand">{post.category}</span>
              <span>·</span>
              <span>{post.formattedDate}</span>
              <span>·</span>
              <span>{post.readingMinutes} min read</span>
            </div>
            <h1 className="mt-5 font-display text-4xl font-semibold text-strong sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-6 text-xl text-muted">{post.excerpt}</p>
            <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 font-mono text-2xs text-brand">
                iD
              </div>
              <div>
                <p className="text-sm font-medium text-strong">{post.author}</p>
                <p className="font-mono text-2xs uppercase tracking-wider text-muted">
                  {post.authorRole}
                </p>
              </div>
            </div>
          </div>
        </header>

        <div className="relative bg-background">
          <div className="shell py-section-sm">
            <PostCover
              title={post.title}
              category={post.category}
              thumbnail={post.thumbnail || undefined}
              className="mx-auto aspect-video max-w-4xl rounded-2xl"
              priority
            />
            <div
              className="prose mx-auto mt-14 max-w-3xl"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            <div className="mx-auto mt-12 max-w-3xl border-t border-border pt-8">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-border bg-surface-sunken px-3 py-1 font-mono text-2xs uppercase tracking-wider text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {related.length ? (
          <section className="relative bg-surface-sunken">
            <div className="shell py-section">
              <p className="kicker">Keep reading</p>
              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                {related.map((item) => (
                  <Reveal key={item.slug}>
                    <Link
                      href={`/blog/${item.slug}`}
                      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition hover:-translate-y-1 hover:shadow-lg"
                    >
                      <PostCover
                        title={item.title}
                        category={item.category}
                        thumbnail={item.thumbnail || undefined}
                        className="aspect-video"
                      />
                      <div className="p-6">
                        <h3 className="font-display text-lg font-semibold text-strong">
                          {item.title}
                        </h3>
                        <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand">
                          Read
                          <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </article>

      <CtaBand />
    </>
  );
}
