import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { buildMetadata, breadcrumbJsonLd, jsonLdScript } from "@/lib/seo";
import { PageHero } from "../components/page-hero";
import { SectionHeader } from "../components/section-header";
import { Reveal } from "../components/reveal";
import { CtaBand } from "../components/cta-band";
import { NewsletterForm } from "../components/newsletter-form";
import { PostCover } from "../components/post-cover";
import { IconArrowRight, IconArrowUpRight } from "../components/icons";

export const metadata: Metadata = buildMetadata({
  title: "Resources",
  description:
    "The iDegin resource hub — articles, playbooks, guides, whitepapers, and interactive tools to help you plan, cost, and execute your AI transformation.",
  path: "/resources",
  kicker: "Resource hub",
});

type ResourceCategory = {
  code: string;
  title: string;
  line: string;
  href: string;
  external?: boolean;
};

const categories: ResourceCategory[] = [
  {
    code: "RES.01",
    title: "Articles",
    line: "Field notes on AI employees, automation, and operations that run themselves.",
    href: "/blog",
  },
  {
    code: "RES.02",
    title: "Playbooks",
    line: "Step-by-step operating manuals for rolling out AI across a department.",
    href: "/blog",
  },
  {
    code: "RES.03",
    title: "Implementation guides",
    line: "Technical walkthroughs for wiring AI into the systems you already run.",
    href: "/blog",
  },
  {
    code: "RES.04",
    title: "Whitepapers",
    line: "Deep research on the economics and architecture of autonomous operations.",
    href: "/blog",
  },
  {
    code: "RES.05",
    title: "ROI calculator",
    line: "Model the cost of manual work and the payback of automating it.",
    href: "/#cost",
  },
  {
    code: "RES.06",
    title: "AI readiness assessment",
    line: "A short diagnostic that scores where your operations are ready to automate.",
    href: "/contact",
  },
  {
    code: "RES.07",
    title: "Templates",
    line: "Ready-to-use process maps, briefs, and rollout checklists for your team.",
    href: "/blog",
  },
  {
    code: "RES.08",
    title: "Videos",
    line: "Recorded walkthroughs and teardowns of real AI workforce builds.",
    href: "/blog",
  },
];

export default function ResourcesPage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
          ])
        )}
      />
      <PageHero
        tone="light"
        code="SEC.RES — Resources / Knowledge"
        eyebrow="Resource hub"
        title="Everything you need to plan your AI transformation"
        description="Guides, playbooks, research, and interactive tools — the working knowledge we use with clients, gathered in one place so you can plan with evidence, not guesswork."
        cta={false}
      />

      <section className="relative bg-background">
        <div className="shell py-section">
          <Reveal>
            <SectionHeader
              index="01 / 03"
              kicker="Browse by type"
              title="Start where you are"
              intro="Pick the format that matches how you work — from quick reads to hands-on tools that turn thinking into a plan."
            />
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <Reveal key={category.code} delay={(index % 4) * 60}>
                <Link
                  href={category.href}
                  className="group flex h-full flex-col justify-between gap-8 bg-surface p-6 transition duration-200 hover:bg-surface-sunken"
                >
                  <div>
                    <p className="font-mono text-2xs uppercase tracking-wider text-muted tabular-nums">
                      {category.code}
                    </p>
                    <h3 className="mt-5 font-display text-xl font-semibold text-strong">
                      {category.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted">{category.line}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-brand">
                    Explore
                    <IconArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-surface-sunken">
        <div className="shell py-section">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeader
                index="02 / 03"
                kicker="Latest from the blog"
                title="Fresh thinking on running operations with AI"
                intro="The most recent field notes from our engineers and strategists."
              />
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 text-sm font-medium text-brand"
              >
                View all articles
                <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <Reveal key={post.slug} delay={(index % 3) * 80}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition duration-200 hover:-translate-y-1 hover:shadow-lg"
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
                      <span className="tabular-nums">{post.readingMinutes} min</span>
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

      <section className="dark relative isolate overflow-hidden bg-depth grain">
        <div
          className="pointer-events-none absolute inset-0 blueprint-grid opacity-40"
          aria-hidden="true"
        />
        <span className="reg-mark left-5 top-6 sm:left-8" aria-hidden="true" />
        <span className="reg-mark right-5 bottom-6 sm:right-8" aria-hidden="true" />
        <div className="shell relative grid gap-10 py-section lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-6">
            <p className="kicker text-primary-400">Stay in the loop</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
              New playbooks and research, straight to your inbox
            </h2>
            <p className="mt-5 max-w-xl text-lg text-ink-300">
              One considered email a month — what we are building, what is
              working with clients, and the tools we ship. No noise, unsubscribe
              anytime.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-6" delay={80}>
            <NewsletterForm />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
