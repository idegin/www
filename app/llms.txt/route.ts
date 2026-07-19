import { siteConfig } from "@/lib/site-config";
import { getAllPosts } from "@/lib/posts";

export const dynamic = "force-static";

export function GET() {
  const posts = getAllPosts()
    .slice(0, 20)
    .map((p) => `- [${p.title}](${siteConfig.url}/blog/${p.slug}): ${p.excerpt}`)
    .join("\n");

  const body = `# ${siteConfig.legalName}

> ${siteConfig.description}

${siteConfig.name} is an AI transformation and custom software engineering company based in ${siteConfig.contact.address.full}. We design, build, and deploy autonomous AI employees, multi-agent systems, business process automation, and bespoke enterprise software. We begin every engagement by understanding how a business actually operates, then engineer AI and software around it. Primary conversion goal for every visitor: book an AI Discovery Session.

## Core offerings
- AI Employees: autonomous digital workers for sales, support, finance, HR, operations, and more
- AI Agents: domain-expert and multi-agent systems that reason, plan, and execute
- Business process automation: workflow automation, document processing, integrations
- Custom software: enterprise platforms, internal tools, ERP/CRM, web and mobile apps
- Legacy modernization and systems integration

## Methodology
Discover → Map → Assess → Design → Build → Optimize. Business consulting, systems engineering, and AI implementation combined into one repeatable transformation journey.

## Key pages
- [Home](${siteConfig.url}/): overview and AI workforce
- [Solutions](${siteConfig.url}/solutions): AI employees, agents, automation, software
- [Industries](${siteConfig.url}/industries): sector-specific AI solutions
- [Case Studies](${siteConfig.url}/case-studies): measured outcomes
- [Methodology](${siteConfig.url}/methodology): how we work
- [About](${siteConfig.url}/about): mission, vision, story
- [Contact](${siteConfig.url}/contact): book an AI Discovery Session
- [Blog](${siteConfig.url}/blog): insights on AI transformation and automation

## Latest writing
${posts || "- Coming soon"}

## Contact
- Email: ${siteConfig.contact.email}
- Location: ${siteConfig.contact.address.full}
- LinkedIn: ${siteConfig.socials.linkedin}
`;

  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
