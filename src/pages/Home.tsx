import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { FeaturedWork } from "@/components/FeaturedWork";
import { MarqueeTech } from "@/components/MarqueeTech";
import { WhyNexio } from "@/components/WhyNexio";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { useSeo } from "@/lib/seo";
import { organizationSchema, websiteSchema } from "@/lib/schema";

export default function Home() {
  useSeo({
    title: "Nexio Global | Digital Solutions, AI Automation & Cybersecurity",
    description:
      "Nexio Global transforms businesses through technology. We deliver enterprise-grade digital solutions, AI automation, cloud infrastructure, and cybersecurity services.",
    path: "/",
    schema: [organizationSchema(), websiteSchema()],
  });

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <Navbar />
      <main id="main-content">
        <Hero />
        <ServicesSection />
        <FeaturedWork />
        <MarqueeTech />
        <WhyNexio />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
