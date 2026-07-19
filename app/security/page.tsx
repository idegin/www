import { LegalPage } from "../components/legal-page";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Security",
  description:
    "How iDegin Technologies protects data, controls access, and builds safeguards into the AI systems and custom software we deliver.",
  path: "/security",
  kicker: "Legal",
});

export default function Page() {
  return (
    <LegalPage
      title="Security"
      updated="July 2026"
      sections={[
        {
          heading: "Our approach",
          body: [
            "Security is a design requirement in every engagement, not an afterthought. iDegin Technologies Limited builds AI systems and custom software with layered controls, least privilege, and a bias toward reducing the data we hold.",
            "We continually review our practices against recognised standards and adapt them as threats and technologies evolve.",
          ],
        },
        {
          heading: "Data protection",
          body: [
            "We encrypt data in transit using modern protocols and protect data at rest on the infrastructure we operate. We minimise the personal and business data we collect and retain it only as long as needed.",
            "Client project data is segregated and handled under confidentiality obligations agreed in the relevant engagement.",
          ],
        },
        {
          heading: "Access controls",
          body: [
            "Access to systems and data follows the principle of least privilege, granted on a need-to-know basis and reviewed regularly. Administrative access is restricted and protected with strong authentication.",
            "We log and monitor access to sensitive systems so that unusual activity can be detected and investigated promptly.",
          ],
        },
        {
          heading: "AI system safeguards",
          body: [
            "The AI employees and agents we build ship with guardrails that constrain their actions to approved tasks, tools, and data sources. High-impact decisions are placed under human oversight and approval by design.",
            "We ground model outputs in verified sources and client knowledge to reduce hallucination, and we test systems against misuse before they go live.",
          ],
        },
        {
          heading: "Infrastructure",
          body: [
            "We host on reputable cloud providers with strong physical and network security, isolation between environments, and regular patching of the systems we manage.",
            "Backups and recovery procedures are designed to preserve availability and integrity of the systems we operate on behalf of clients.",
          ],
        },
        {
          heading: "Responsible disclosure",
          body: [
            "We welcome reports from security researchers who identify potential vulnerabilities in our website or services. Please report issues privately and give us reasonable time to investigate and remediate before any public disclosure.",
            "We will acknowledge valid reports and work in good faith to resolve confirmed issues quickly.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "To report a security concern or ask about our practices, get in touch.",
            `Reach our team at ${siteConfig.contact.email} and mark your message as security related.`,
          ],
        },
      ]}
    />
  );
}
