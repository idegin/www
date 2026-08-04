import type { Metadata } from "next";
import { LegalPage } from "../components/legal-page";
import { JsonLd } from "../components/json-ld";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/jsonld";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects your information.`,
  path: "/privacy",
  eyebrow: "Privacy Policy",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />
      <LegalPage
        title="Privacy Policy"
        updated="February 2026"
        intro={`This policy explains how ${siteConfig.legalName} collects, uses, and safeguards the information you share with us.`}
        sections={[
          {
            heading: "Information we collect",
            body: [
              "We collect information you provide directly—such as your name, company, role, email, phone number, and any details you include when you book an audit or contact us.",
              "We also collect limited technical data automatically, such as your device type, browser, and pages visited, to understand how our website is used and improve it.",
            ],
          },
          {
            heading: "How we use your information",
            body: [
              "We use your information to respond to your requests, schedule and deliver AI Workflow Audits, provide our services, and communicate with you about your engagement.",
              "We do not sell your personal information. We only use it for the purposes described in this policy.",
            ],
          },
          {
            heading: "Data security",
            body: [
              "We apply appropriate technical and organizational measures to protect your information against unauthorized access, loss, or misuse. When we work inside your systems, we use least-privilege access and never train shared models on your private data.",
            ],
          },
          {
            heading: "Third-party services",
            body: [
              "We may use trusted third-party providers (for example, analytics and communication tools) that process data on our behalf under appropriate safeguards.",
            ],
          },
          {
            heading: "Your rights",
            body: [
              "You may request access to, correction of, or deletion of your personal information at any time by contacting us at " + siteConfig.contact.email + ".",
            ],
          },
          {
            heading: "Contact us",
            body: [
              `If you have questions about this policy, email us at ${siteConfig.contact.email} or write to us in ${siteConfig.contact.address.full}.`,
            ],
          },
        ]}
      />
    </>
  );
}
