import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustSection } from "@/components/TrustSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyNexio } from "@/components/WhyNexio";
import { ProcessSection } from "@/components/ProcessSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <ServicesSection />
        <WhyNexio />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
