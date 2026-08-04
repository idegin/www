import { siteConfig } from "@/lib/site-config";

/**
 * GET /api/idegin.md
 * Returns a Markdown profile of iDegin Technologies. Intended to be fetched and
 * rendered by partner/related sites (with attribution links back to idegin.com).
 */
export function GET() {
  const url = siteConfig.url;
  const md = `# iDegin Technologies

${siteConfig.description}

${siteConfig.legalName} is an **AI Workforce Transformation** company based in ${siteConfig.contact.address.full}. We design, deploy, and continuously optimize autonomous AI employees that automate operations and help organizations scale output without increasing headcount. Learn more at [idegin.com](${url}).

## What we do
- **AI Workforce Transformation** — a complete, end-to-end engagement.
- **AI Workflow Audit** — the recommended first step. [Book one](${url}/contact).
- **AI Agent Development** — custom AI employees for your workflows.
- **Systems Integration** — agents that work inside your existing tools.

## Our methodology
Discover → Design → Deploy → Optimize. We start with how your business actually runs, then build the AI around it.

## Industries we serve
Professional Services, Logistics & Transport, Healthcare, Manufacturing, Financial Services, Real Estate, Education, and Retail. See [industries](${url}/industries).

## Founder
iDegin Technologies is founded and led by [Ifeora Emeka](${url}/ifeora-emeka), founder & CEO of Onita AI, who is helping lead the agentic AI movement across Africa.

## Links
- Website: [${siteConfig.domain}](${url})
- Solutions: [${url}/solutions](${url}/solutions)
- Methodology: [${url}/methodology](${url}/methodology)
- Insights: [${url}/resources](${url}/resources)
- Contact: [${url}/contact](${url}/contact)

---
Source: ${url} · © ${siteConfig.legalName}
`;

  return new Response(md, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=604800",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
