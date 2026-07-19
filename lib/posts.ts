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
  category: string;
  tags: string[];
  author: string;
  authorRole: string;
  readingMinutes: number;
  featured: boolean;
};

export type Post = PostMeta & { html: string };

function ensureDir() {
  return fs.existsSync(POSTS_DIR);
}

function toMeta(fileName: string): PostMeta & { raw: string } {
  const slug = fileName.replace(/\.md$/, "");
  const fullPath = path.join(POSTS_DIR, fileName);
  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);
  const date = String(data.date ?? "1970-01-01");

  return {
    slug,
    title: String(data.title ?? slug),
    excerpt: String(data.excerpt ?? ""),
    date,
    formattedDate: new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    thumbnail: String(data.thumbnail ?? ""),
    category: String(data.category ?? "Insights"),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    author: String(data.author ?? "iDegin Team"),
    authorRole: String(data.authorRole ?? "AI Transformation"),
    readingMinutes: Math.max(1, Math.round(readingTime(content).minutes)),
    featured: Boolean(data.featured ?? false),
    raw: content,
  };
}

export function getAllPosts(): PostMeta[] {
  if (!ensureDir()) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const { raw, ...meta } = toMeta(file);
      void raw;
      return meta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostSlugs(): string[] {
  if (!ensureDir()) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getPostBySlug(slug: string): Post | null {
  if (!ensureDir()) return null;
  const fileName = `${slug}.md`;
  if (!fs.existsSync(path.join(POSTS_DIR, fileName))) return null;
  const { raw, ...meta } = toMeta(fileName);
  return { ...meta, html: marked.parse(raw) as string };
}

export function getAllCategories(): string[] {
  return [...new Set(getAllPosts().map((p) => p.category))];
}
