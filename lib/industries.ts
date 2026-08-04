import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const DIR = path.join(process.cwd(), "content", "industries");

export type Industry = {
  slug: string;
  name: string;
  short: string;
  tagline: string;
  order: number;
  image: string;
  challenges: string[];
  opportunities: string[];
  agents: string[];
  results: string[];
  /** Rendered overview prose from the markdown body. */
  html: string;
};

function toArray(v: unknown): string[] {
  return Array.isArray(v) ? v.map(String) : [];
}

function files(): string[] {
  if (!fs.existsSync(DIR)) return [];
  return fs.readdirSync(DIR).filter((f) => /\.mdx?$/.test(f));
}

function read(file: string): Industry {
  const slug = file.replace(/\.mdx?$/, "");
  const { data, content } = matter(fs.readFileSync(path.join(DIR, file), "utf8"));
  return {
    slug,
    name: String(data.name ?? slug),
    short: String(data.short ?? data.name ?? slug),
    tagline: String(data.tagline ?? ""),
    order: Number(data.order ?? 99),
    image: String(data.image ?? ""),
    challenges: toArray(data.challenges),
    opportunities: toArray(data.opportunities),
    agents: toArray(data.agents),
    results: toArray(data.results),
    html: marked.parse(content, { async: false }) as string,
  };
}

export function getIndustries(): Industry[] {
  return files()
    .map(read)
    .sort((a, b) => a.order - b.order);
}

export function getIndustry(slug: string): Industry | undefined {
  const file = files().find((f) => f.replace(/\.mdx?$/, "") === slug);
  return file ? read(file) : undefined;
}

export function industrySlugs(): string[] {
  return files().map((f) => f.replace(/\.mdx?$/, ""));
}
