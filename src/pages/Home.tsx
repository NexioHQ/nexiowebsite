import { lazy, Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { useSeo } from "@/lib/seo";
import { organizationSchema, websiteSchema } from "@/lib/schema";

const ServicesSection = lazy(() => import("@/components/ServicesSection").then((module) => ({ default: module.ServicesSection })));
const FeaturedWork = lazy(() => import("@/components/FeaturedWork").then((module) => ({ default: module.FeaturedWork })));
const MarqueeTech = lazy(() => import("@/components/MarqueeTech").then((module) => ({ default: module.MarqueeTech })));
const WhyNexio = lazy(() => import("@/components/WhyNexio").then((module) => ({ default: module.WhyNexio })));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection").then((module) => ({ default: module.TestimonialsSection })));
const CTASection = lazy(() => import("@/components/CTASection").then((module) => ({ default: module.CTASection })));
const Footer = lazy(() => import("@/components/Footer").then((module) => ({ default: module.Footer })));

function SectionLoader() {
  return <div className="min-h-[40vh] w-full" aria-hidden="true" />;
}

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
        <Suspense fallback={<SectionLoader />}>
          <ServicesSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FeaturedWork />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <MarqueeTech />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <WhyNexio />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <CTASection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
