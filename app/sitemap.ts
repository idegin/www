import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { getAllPosts } from "@/lib/posts";
import { industrySlugs } from "@/lib/industries";
import { getPlaybookSlugs } from "@/lib/playbooks";

type Entry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const staticEntries: Entry[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/solutions", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
  { path: "/industries", priority: 0.8, changeFrequency: "monthly" },
  { path: "/methodology", priority: 0.8, changeFrequency: "monthly" },
  { path: "/playbooks", priority: 0.8, changeFrequency: "monthly" },
  { path: "/roi-calculator", priority: 0.7, changeFrequency: "monthly" },
  { path: "/ai-readiness", priority: 0.7, changeFrequency: "monthly" },
  { path: "/resources", priority: 0.7, changeFrequency: "weekly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/ifeora-emeka", priority: 0.5, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = staticEntries.map((e) => ({
    url: `${siteConfig.url}${e.path}`,
    lastModified: now,
    changeFrequency: e.changeFrequency,
    priority: e.priority,
  }));

  const industries: MetadataRoute.Sitemap = industrySlugs().map((slug) => ({
    url: `${siteConfig.url}/industries/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const playbooks: MetadataRoute.Sitemap = getPlaybookSlugs().map((slug) => ({
    url: `${siteConfig.url}/playbooks/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const posts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/resources/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...pages, ...industries, ...playbooks, ...posts];
}
