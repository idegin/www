import { NextResponse } from "next/server";
import { getPerson } from "@/lib/people";
import { siteConfig } from "@/lib/site-config";

/**
 * GET /api/ifeora-emeka
 * Returns Ifeora Emeka's profile as structured JSON (single source of truth:
 * content/people/ifeora-emeka.md). Useful for LLM agents and integrations.
 */
export function GET() {
  const p = getPerson("ifeora-emeka");
  if (!p) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(
    {
      slug: p.slug,
      name: p.name,
      role: p.role,
      company: p.company,
      companyUrl: p.companyUrl,
      tagline: p.tagline,
      image: `${siteConfig.url}${p.image}`,
      url: `${siteConfig.url}/${p.slug}`,
      born: p.born,
      nationality: "Nigerian",
      education: p.education,
      experience: p.experience,
      focus: p.focus,
      socials: p.socials,
      bio: p.bio,
    },
    {
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=604800",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );
}
