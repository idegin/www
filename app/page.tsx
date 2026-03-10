import { Navbar } from "@/components/Navbar";
import { HeroCarousel } from "@/components/HeroCarousel";
import { TrustSection } from "@/components/TrustSection";
import { ProblemSolution } from "@/components/ProblemSolution";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ImpactSection } from "@/components/ImpactSection";
import { SolutionsShowcase } from "@/components/SolutionsShowcase";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AboutUs } from "@/components/AboutUs";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <HeroCarousel />
      <TrustSection />
      <ProblemSolution />
      <ServicesSection />
      <ProcessSection />
      <ImpactSection />
      <SolutionsShowcase />
      <TestimonialsSection />
      <AboutUs />
      <CTASection />
      <Footer />
    </main>
  );
}
