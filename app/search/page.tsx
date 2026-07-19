import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "../components/page-hero";
import { SiteSearch, type SearchItem } from "../components/site-search";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Search",
    description: "Search iDegin solutions, industries, case studies, and insights.",
    path: "/search",
    kicker: "Search",
  }),
  robots: { index: false, follow: true },
};

const PAGES: SearchItem[] = [
  { title: "Solutions", href: "/solutions", type: "Page", description: "AI employees, agents, automation, and custom software." },
  { title: "Industries", href: "/industries", type: "Page", description: "AI tailored to how your sector operates." },
  { title: "Case Studies", href: "/case-studies", type: "Page", description: "Measured outcomes we've engineered." },
  { title: "Methodology", href: "/methodology", type: "Page", description: "Discover, map, assess, design, build, optimize." },
  { title: "About", href: "/about", type: "Page", description: "Who we are and what we believe." },
  { title: "Contact", href: "/contact", type: "Page", description: "Book an AI Discovery Session." },
  { title: "Resources", href: "/resources", type: "Page", description: "Guides, playbooks, and tools." },
  { title: "Blog", href: "/blog", type: "Page", description: "Insights on AI transformation and automation." },
];

export default function SearchPage() {
  const posts: SearchItem[] = getAllPosts().map((post) => ({
    title: post.title,
    href: `/blog/${post.slug}`,
    type: "Article",
    description: post.excerpt,
  }));

  return (
    <>
      <PageHero
        tone="light"
        code="SEC.SEARCH — Index"
        eyebrow="Search"
        title="Find what you need"
        description="Search across solutions, industries, case studies, and every article."
      />

      <section className="relative bg-background">
        <div className="shell py-section-sm">
          <div className="mx-auto max-w-3xl">
            <SiteSearch items={[...PAGES, ...posts]} />
          </div>
        </div>
      </section>
    </>
  );
}
