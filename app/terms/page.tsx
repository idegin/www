import type { Metadata } from "next";
import { LegalPage } from "../components/legal-page";
import { JsonLd } from "../components/json-ld";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/jsonld";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description: `The terms that govern your use of the ${siteConfig.name} website and services.`,
  path: "/terms",
  eyebrow: "Terms of Service",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms" },
        ])}
      />
      <LegalPage
        title="Terms of Service"
        updated="February 2026"
        intro={`These terms govern your access to and use of the ${siteConfig.name} website and services.`}
        sections={[
          {
            heading: "Acceptance of terms",
            body: [
              `By accessing this website or engaging ${siteConfig.legalName} for services, you agree to these terms. If you do not agree, please do not use the website or our services.`,
            ],
          },
          {
            heading: "Use of the website",
            body: [
              "You agree to use this website lawfully and not to interfere with its operation, security, or availability. Content on this site is provided for general information and may change without notice.",
            ],
          },
          {
            heading: "Services and engagements",
            body: [
              "The specific scope, deliverables, fees, and timelines of any engagement are defined in a separate written agreement. In the event of a conflict, that agreement governs the engagement.",
            ],
          },
          {
            heading: "Intellectual property",
            body: [
              "The website, brand, and its content are owned by us or our licensors and are protected by applicable intellectual-property laws. Ownership of deliverables created during an engagement is defined in your engagement agreement.",
            ],
          },
          {
            heading: "Limitation of liability",
            body: [
              "To the maximum extent permitted by law, we are not liable for indirect, incidental, or consequential damages arising from your use of this website. Our total liability under any engagement is defined in your engagement agreement.",
            ],
          },
          {
            heading: "Contact",
            body: [
              `Questions about these terms can be sent to ${siteConfig.contact.email}.`,
            ],
          },
        ]}
      />
    </>
  );
}
