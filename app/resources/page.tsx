import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "../components/page-hero";
import { Reveal } from "../components/reveal";
import { PostCard } from "../components/post-card";
import { JsonLd } from "../components/json-ld";
import { ArrowUpRightIcon } from "../components/icons";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/jsonld";
import { getAllPosts, getFeaturedPost } from "@/lib/posts";

export const metadata: Metadata = pageMetadata({
  title: "Insights",
  description:
    "Practical thinking on AI workforce transformation, automation, and business operations from the iDegin team.",
  path: "/resources",
  eyebrow: "Insights",
});

export default function ResourcesPage() {
  const featured = getFeaturedPost();
  const posts = getAllPosts().filter((p) => p.slug !== featured?.slug);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/resources" },
        ])}
      />
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Ideas for building an{" "}
            <span className="text-gradient-brand">AI-powered business</span>
          </>
        }
        lead="Practical thinking on AI workforce transformation, automation, and operations—no hype."
        cta={false}
      />

      <section className="bg-background pb-24">
        <div className="container-page">
          {/* Featured */}
          {featured ? (
            <Reveal>
              <Link
                href={`/resources/${featured.slug}`}
                className="group grid overflow-hidden rounded-3xl border border-line bg-surface transition-all duration-300 hover:border-cobalt-300 hover:shadow-elevated md:grid-cols-2"
              >
                <div className="relative aspect-16/10 md:aspect-auto">
                  <Image
                    src={featured.thumbnail}
                    alt={featured.thumbnailAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-10">
                  <span className="eyebrow text-cobalt-600">
                    Featured · {featured.category}
                  </span>
                  <h2 className="mt-4 text-heading font-display font-semibold text-ink">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-body text-muted">{featured.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-button text-cobalt-600">
                    Read insight
                    <ArrowUpRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ) : null}

          {/* Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} index={i % 3}>
                <PostCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
