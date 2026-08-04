import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const DIR = path.join(process.cwd(), "content", "playbooks");

export type TimelineStep = { week: string; label: string };

export type PlaybookMeta = {
  slug: string;
  title: string;
  industry: string;
  excerpt: string;
  thumbnail: string;
  thumbnailAlt: string;
  order: number;
  challenges: string[];
  workflows: string[];
  opportunities: string[];
  workforce: string[];
  outcomes: string[];
  timeline: TimelineStep[];
  roi: string;
};

export type Playbook = PlaybookMeta & { html: string };

function arr(v: unknown): string[] {
  return Array.isArray(v) ? v.map(String) : [];
}

function timeline(v: unknown): TimelineStep[] {
  if (!Array.isArray(v)) return [];
  return v
    .map((t) => ({ week: String(t?.week ?? ""), label: String(t?.label ?? "") }))
    .filter((t) => t.week && t.label);
}

function files(): string[] {
  if (!fs.existsSync(DIR)) return [];
  return fs.readdirSync(DIR).filter((f) => /\.mdx?$/.test(f));
}

function read(file: string): { meta: PlaybookMeta; content: string } {
  const slug = file.replace(/\.mdx?$/, "");
  const { data, content } = matter(fs.readFileSync(path.join(DIR, file), "utf8"));
  return {
    content,
    meta: {
      slug,
      title: String(data.title ?? slug),
      industry: String(data.industry ?? ""),
      excerpt: String(data.excerpt ?? ""),
      thumbnail: String(data.thumbnail ?? ""),
      thumbnailAlt: String(data.thumbnailAlt ?? data.title ?? ""),
      order: Number(data.order ?? 99),
      challenges: arr(data.challenges),
      workflows: arr(data.workflows),
      opportunities: arr(data.opportunities),
      workforce: arr(data.workforce),
      outcomes: arr(data.outcomes),
      timeline: timeline(data.timeline),
      roi: String(data.roi ?? ""),
    },
  };
}

export function getPlaybooks(): PlaybookMeta[] {
  return files()
    .map((f) => read(f).meta)
    .sort((a, b) => a.order - b.order);
}

export function getPlaybookSlugs(): string[] {
  return files().map((f) => f.replace(/\.mdx?$/, ""));
}

export function getPlaybook(slug: string): Playbook | null {
  const file = files().find((f) => f.replace(/\.mdx?$/, "") === slug);
  if (!file) return null;
  const { meta, content } = read(file);
  return { ...meta, html: marked.parse(content, { async: false }) as string };
}
