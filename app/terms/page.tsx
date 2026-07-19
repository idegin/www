import { LegalPage } from "../components/legal-page";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "The terms that govern your use of the iDegin Technologies website and the basis on which we scope and deliver AI transformation and software engagements.",
  path: "/terms",
  kicker: "Legal",
});

export default function Page() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="July 2026"
      sections={[
        {
          heading: "Acceptance",
          body: [
            "These terms govern your access to and use of the website operated by iDegin Technologies Limited (\"iDegin\", \"we\", \"us\"). By using this site you agree to these terms.",
            "If you do not agree, please do not use the site. We may update these terms from time to time, and continued use after changes means you accept the revised version.",
          ],
        },
        {
          heading: "Use of the site",
          body: [
            "You may use this website for lawful purposes only and must not attempt to disrupt, probe, or gain unauthorised access to any part of it or its underlying systems.",
            "You agree not to misuse the site, upload malicious content, or use it in any way that infringes the rights of others or violates applicable law.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            "All content on this site, including text, branding, graphics, and code, is owned by iDegin or its licensors and is protected by applicable intellectual property laws.",
            "You may not reproduce, distribute, or create derivative works from our content without prior written permission, except as permitted for ordinary personal or internal business review.",
          ],
        },
        {
          heading: "Engagements & proposals",
          body: [
            "Information on this site is for general purposes and does not constitute an offer or binding commitment. Any engagement is governed by a separate written agreement setting out scope, fees, timelines, and deliverables.",
            "Proposals and estimates are indicative until confirmed in a signed statement of work. In the event of a conflict, the terms of the signed agreement take precedence over these website terms.",
          ],
        },
        {
          heading: "Disclaimers",
          body: [
            "The website is provided on an \"as is\" and \"as available\" basis without warranties of any kind, whether express or implied, including fitness for a particular purpose.",
            "We do not warrant that the site will be uninterrupted, error free, or free of harmful components, and any reliance you place on the content is at your own risk.",
          ],
        },
        {
          heading: "Limitation of liability",
          body: [
            "To the fullest extent permitted by law, iDegin will not be liable for any indirect, incidental, or consequential loss arising from your use of this website.",
            "Nothing in these terms excludes or limits liability that cannot be excluded or limited under applicable law. Liability arising from an engagement is governed by the relevant signed agreement.",
          ],
        },
        {
          heading: "Governing law",
          body: [
            "These terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria.",
            "Any dispute arising out of or in connection with these terms is subject to the exclusive jurisdiction of the courts of Nigeria.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "If you have questions about these terms, we are happy to help.",
            `Reach us at ${siteConfig.contact.email} and we will respond as soon as we can.`,
          ],
        },
      ]}
    />
  );
}
