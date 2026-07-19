import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "../components/page-hero";
import { PostCover } from "../components/post-cover";
import { Reveal } from "../components/reveal";
import { CtaBand } from "../components/cta-band";
import { IconArrowRight } from "../components/icons";

export const metadata: Metadata = buildMetadata({
  title: "Insights",
  description:
    "Field notes on AI transformation, autonomous AI employees, automation, and building operations that run themselves.",
  path: "/blog",
  kicker: "The iDegin Blog",
});

export default function BlogIndex() {
  const posts = getAllPosts();
  const featured = posts.find((post) => post.featured) ?? posts[0];
  const rest = posts.filter((post) => post.slug !== featured?.slug);

  return (
    <>
      <PageHero
        code="SEC.BLOG — Insights / Field notes"
        eyebrow="The iDegin Blog"
        title="Ideas on making operations run themselves"
        description="Practical thinking on AI employees, automation, and the discipline of building technology around the business — not the other way around."
      />

      {featured ? (
        <section className="relative bg-background">
          <div className="shell py-section-sm">
            <Reveal>
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid overflow-hidden rounded-2xl border border-border bg-surface transition hover:shadow-lg lg:grid-cols-2"
              >
                <PostCover
                  title={featured.title}
                  category={featured.category}
                  thumbnail={featured.thumbnail || undefined}
                  className="aspect-video lg:aspect-auto lg:min-h-[22rem]"
                  priority
                />
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <div className="flex items-center gap-3 font-mono text-2xs uppercase tracking-wider text-muted">
                    <span className="text-brand">Featured</span>
                    <span>·</span>
                    <span>{featured.category}</span>
                    <span>·</span>
                    <span>{featured.readingMinutes} min</span>
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-semibold text-strong sm:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-muted">{featured.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand">
                    Read the article
                    <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      ) : null}

      <section className="relative bg-surface-sunken">
        <div className="shell py-section">
          <p className="kicker">All articles</p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, index) => (
              <Reveal key={post.slug} delay={(index % 3) * 80}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <PostCover
                    title={post.title}
                    category={post.category}
                    thumbnail={post.thumbnail || undefined}
                    className="aspect-video"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 font-mono text-2xs uppercase tracking-wider text-muted">
                      <span>{post.category}</span>
                      <span>·</span>
                      <span>{post.readingMinutes} min</span>
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-strong">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm text-muted">{post.excerpt}</p>
                    <span className="mt-5 font-mono text-2xs uppercase tracking-wider text-brand">
                      {post.formattedDate}
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
