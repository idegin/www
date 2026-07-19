import { LegalPage } from "../components/legal-page";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How iDegin Technologies collects, uses, and protects information across our website, AI transformation engagements, and custom software work.",
  path: "/privacy",
  kicker: "Legal",
});

export default function Page() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="July 2026"
      sections={[
        {
          heading: "Introduction",
          body: [
            "iDegin Technologies Limited (\"iDegin\", \"we\", \"us\") is an AI transformation and custom software partner based in Abuja, Nigeria. This policy explains how we handle information when you visit our website, contact us, or work with us on an engagement.",
            "We only collect what we need to run our business responsibly, and we treat client and prospect information as confidential by default. By using this site or engaging our services, you agree to the practices described here.",
          ],
        },
        {
          heading: "Information we collect",
          body: [
            "We collect information you provide directly, such as your name, work email, company, role, and the details you share when you book a discovery session or submit a form.",
            "We also collect limited technical information automatically, including IP address, browser type, and pages visited, using cookies and similar technologies. During engagements we may process business data you provide so we can design, build, and operate AI and software systems on your behalf.",
          ],
        },
        {
          heading: "How we use information",
          body: [
            "We use information to respond to enquiries, scope and deliver engagements, operate and improve our website, and communicate about work in progress.",
            "For prospects and clients we may send relevant updates about our services. We process data to meet our legitimate business interests, to perform contracts with clients, and to comply with applicable law.",
          ],
        },
        {
          heading: "Data sharing",
          body: [
            "We do not sell your personal information. We share it only with trusted service providers, such as hosting, analytics, and communication platforms, who process it on our behalf under appropriate confidentiality and security obligations.",
            "We may also disclose information where required by law, to protect our rights, or as part of a corporate transaction. Client project data is never shared beyond what is necessary to deliver the agreed engagement.",
          ],
        },
        {
          heading: "Cookies",
          body: [
            "Our website uses cookies to keep the site working, remember preferences, and understand how visitors use our pages so we can improve them.",
            "You can control or disable cookies through your browser settings. Some features of the site may not function correctly if certain cookies are turned off.",
          ],
        },
        {
          heading: "Data security",
          body: [
            "We apply administrative, technical, and organisational safeguards designed to protect information against unauthorised access, loss, or misuse. These include access controls, encryption in transit, and the principle of least privilege.",
            "No method of transmission or storage is completely secure, but we continually review and improve our controls to reduce risk across our systems and the systems we build for clients.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "Depending on your location, you may have the right to access, correct, delete, or restrict the use of your personal information, and to object to certain processing.",
            "To exercise any of these rights, contact us using the details below. We will respond within a reasonable timeframe and in line with applicable data protection law.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "Questions about this policy or how we handle your information are welcome.",
            `Reach us at ${siteConfig.contact.email} and we will route your request to the right team.`,
          ],
        },
      ]}
    />
  );
}
