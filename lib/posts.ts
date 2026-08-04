import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import readingTime from "reading-time";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  formattedDate: string;
  thumbnail: string;
  thumbnailAlt: string;
  category: string;
  tags: string[];
  author: string;
  authorRole: string;
  readingMinutes: number;
  featured: boolean;
};

export type Post = PostMeta & { html: string };

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function readPost(fileName: string): { meta: PostMeta; content: string } {
  const slug = fileName.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, fileName), "utf8");
  const { data, content } = matter(raw);

  const meta: PostMeta = {
    slug,
    title: String(data.title ?? slug),
    excerpt: String(data.excerpt ?? ""),
    date: String(data.date ?? ""),
    formattedDate: data.date ? formatDate(String(data.date)) : "",
    thumbnail: String(data.thumbnail ?? ""),
    thumbnailAlt: String(data.thumbnailAlt ?? data.title ?? ""),
    category: String(data.category ?? "Insights"),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    author: String(data.author ?? "iDegin Team"),
    authorRole: String(data.authorRole ?? "AI Workforce Strategists"),
    readingMinutes: Math.max(1, Math.round(readingTime(content).minutes)),
    featured: Boolean(data.featured),
  };

  return { meta, content };
}

function postFiles(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs.readdirSync(POSTS_DIR).filter((f) => /\.mdx?$/.test(f));
}

export function getAllPosts(): PostMeta[] {
  return postFiles()
    .map((f) => readPost(f).meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllSlugs(): string[] {
  return postFiles().map((f) => f.replace(/\.mdx?$/, ""));
}

export function getPost(slug: string): Post | null {
  const file = postFiles().find((f) => f.replace(/\.mdx?$/, "") === slug);
  if (!file) return null;
  const { meta, content } = readPost(file);
  const html = marked.parse(content, { async: false }) as string;
  return { ...meta, html };
}

export function getFeaturedPost(): PostMeta | null {
  const posts = getAllPosts();
  return posts.find((p) => p.featured) ?? posts[0] ?? null;
}

export function getCategories(): string[] {
  return [...new Set(getAllPosts().map((p) => p.category))];
}
