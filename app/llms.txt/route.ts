import { siteConfig, primaryNav } from "@/lib/site-config";
import { getAllPosts } from "@/lib/posts";

const industries = [
  "Professional Services",
  "Logistics & Transport",
  "Healthcare",
  "Manufacturing",
  "Financial Services",
  "Real Estate",
  "Education",
  "Retail",
];

/**
 * /llms.txt — structured summary for LLM agents, following the llmstxt.org
 * convention: H1 title, blockquote summary, free-text details, then
 * "## Section" headers containing markdown link lists.
 */
export function GET() {
  const posts = getAllPosts();
  const u = (p: string) => `${siteConfig.url}${p}`;

  const body = `# ${siteConfig.name}

> ${siteConfig.description}

${siteConfig.legalName} is an AI Workforce Transformation company based in ${siteConfig.contact.address.full}. We design, deploy, and continuously optimize autonomous AI employees that automate operations and help organizations scale output without increasing headcount. Our services span AI Workforce Transformation, AI Workflow Audits, AI Agent Development, Systems Integration, Training, and Continuous Optimization. Our four-phase methodology is Discover, Design, Deploy, and Optimize. We serve ${industries.join(", ")}.

## Key pages
${primaryNav.map((n) => `- [${n.label}](${u(n.href)})`).join("\n")}
- [Contact](${u("/contact")})
- [Book an AI Workflow Audit](${u(siteConfig.cta.href)}): the primary call to action

## Insights
${posts.map((p) => `- [${p.title}](${u(`/resources/${p.slug}`)}): ${p.excerpt}`).join("\n")}

## Contact
- [Email ${siteConfig.contact.email}](mailto:${siteConfig.contact.email})
- [Website](${siteConfig.url})

## Optional
- [Privacy Policy](${u("/privacy")})
- [Terms of Service](${u("/terms")})
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
