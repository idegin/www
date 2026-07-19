import { LegalPage } from "../components/legal-page";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Accessibility",
  description:
    "How iDegin Technologies works to make our website usable for everyone, guided by the WCAG 2.2 AA standard.",
  path: "/accessibility",
  kicker: "Legal",
});

export default function Page() {
  return (
    <LegalPage
      title="Accessibility"
      updated="July 2026"
      sections={[
        {
          heading: "Our commitment",
          body: [
            "iDegin Technologies Limited is committed to making our website usable for as many people as possible, regardless of ability or technology. We treat accessibility as a baseline of good engineering, not an optional extra.",
            "We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA across our website.",
          ],
        },
        {
          heading: "Measures we take",
          body: [
            "We build with semantic HTML, clear heading structure, and sufficient colour contrast, and we ensure interactive elements are reachable and operable by keyboard.",
            "We provide visible focus states, meaningful alternative text for images, and respect user preferences such as reduced motion.",
          ],
        },
        {
          heading: "Compatibility",
          body: [
            "Our site is designed to work with current versions of major browsers and to be compatible with common assistive technologies, including screen readers and keyboard navigation.",
            "We test across a range of screen sizes so the experience remains usable on phones, tablets, and desktops.",
          ],
        },
        {
          heading: "Known limitations",
          body: [
            "Despite our efforts, some content or third-party components may not yet fully meet our accessibility targets. We track these gaps and work to resolve them over time.",
            "If you encounter a barrier, please tell us so we can prioritise a fix and offer an alternative where possible.",
          ],
        },
        {
          heading: "Feedback",
          body: [
            "We welcome feedback on the accessibility of our website. Your input helps us find issues we may have missed and improve the experience for everyone.",
            "Please include the page, the issue you experienced, and the assistive technology or browser you were using, if relevant.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "To share accessibility feedback or request assistance, get in touch.",
            `Reach us at ${siteConfig.contact.email} and we will respond promptly.`,
          ],
        },
      ]}
    />
  );
}
