import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const DIR = path.join(process.cwd(), "content", "people");

export type Education = { degree: string; school: string };
export type Experience = { role: string; company: string; note?: string };

export type PersonMeta = {
  slug: string;
  name: string;
  role: string;
  company: string;
  companyUrl: string;
  tagline: string;
  image: string;
  born: { date: string; place: string };
  education: Education[];
  experience: Experience[];
  focus: string[];
  socials: { linkedin?: string; github?: string; website?: string };
};

export type Person = PersonMeta & { bio: string; html: string };

function objArr<T extends Record<string, string>>(
  v: unknown,
  keys: string[],
): T[] {
  if (!Array.isArray(v)) return [];
  return v.map((item) => {
    const o = {} as Record<string, string>;
    for (const k of keys) if (item?.[k] != null) o[k] = String(item[k]);
    return o as T;
  });
}

function files(): string[] {
  if (!fs.existsSync(DIR)) return [];
  return fs.readdirSync(DIR).filter((f) => /\.mdx?$/.test(f));
}

export function getPerson(slug: string): Person | null {
  const file = files().find((f) => f.replace(/\.mdx?$/, "") === slug);
  if (!file) return null;
  const { data, content } = matter(
    fs.readFileSync(path.join(DIR, file), "utf8"),
  );
  const born = (data.born ?? {}) as { date?: string; place?: string };
  return {
    slug,
    name: String(data.name ?? slug),
    role: String(data.role ?? ""),
    company: String(data.company ?? ""),
    companyUrl: String(data.companyUrl ?? ""),
    tagline: String(data.tagline ?? ""),
    image: String(data.image ?? ""),
    born: { date: String(born.date ?? ""), place: String(born.place ?? "") },
    education: objArr<Education>(data.education, ["degree", "school"]),
    experience: objArr<Experience>(data.experience, ["role", "company", "note"]),
    focus: Array.isArray(data.focus) ? data.focus.map(String) : [],
    socials: {
      ...(data.socials?.linkedin ? { linkedin: String(data.socials.linkedin) } : {}),
      ...(data.socials?.github ? { github: String(data.socials.github) } : {}),
      ...(data.socials?.website ? { website: String(data.socials.website) } : {}),
    },
    bio: content.trim(),
    html: marked.parse(content, { async: false }) as string,
  };
}

export function getPeopleSlugs(): string[] {
  return files().map((f) => f.replace(/\.mdx?$/, ""));
}
