import type { Metadata } from "next";
import { Hero } from "./components/hero";
import { TrustedBy } from "./components/trusted-by";
import { CostOfInefficiency } from "./components/cost-of-inefficiency";
import { Profitability } from "./components/profitability";
import { AiEmployees } from "./components/ai-employees";
import { AgentCollaboration } from "./components/agent-collaboration";
import { DiscoveryFramework } from "./components/discovery-framework";
import { BusinessBeforeTech } from "./components/business-before-tech";
import { SolutionsGrid } from "./components/solutions-grid";
import { BeforeAfter } from "./components/before-after";
import { Industries } from "./components/industries";
import { CaseStudies } from "./components/case-studies";
import { WhyChooseIdegin } from "./components/why-choose-idegin";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Build Your AI Workforce",
  description:
    "iDegin builds autonomous AI employees and custom software that automate operations, eliminate repetitive work, and help organizations scale without increasing headcount.",
  path: "/",
  kicker: "AI Transformation Partner",
});

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <CostOfInefficiency />
      <Profitability />
      <AiEmployees />
      <AgentCollaboration />
      <DiscoveryFramework />
      <BusinessBeforeTech />
      <SolutionsGrid />
      <BeforeAfter />
      <Industries />
      <CaseStudies />
      <WhyChooseIdegin />
    </>
  );
}
