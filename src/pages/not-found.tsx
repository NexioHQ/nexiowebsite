import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useSeo } from "@/lib/seo";
import { Link } from "wouter";
import { Home, ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  useSeo({
    title: "404 — Page Not Found",
    description:
      "The page you are looking for could not be found. Return to the Nexio Global homepage to explore our digital solutions, AI automation, and cybersecurity services.",
    path: "/404",
    noindex: true,
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main id="main-content">
        <section className="pt-32 pb-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-violet-500/5" />
          <div className="max-w-3xl mx-auto text-center relative">
            <p className="text-7xl sm:text-8xl md:text-9xl font-bold text-primary/20 leading-none mb-6">
              404
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Page Not Found
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
              The page you are looking for doesn't exist or may have been moved.
              Let's get you back on track.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/20 w-full sm:w-auto justify-center"
              >
                <Home size={18} />
                Back to Home
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-border bg-white dark:bg-card px-8 py-4 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-card/60 transition-colors w-full sm:w-auto justify-center"
              >
                <Compass size={18} />
                Contact Us
              </Link>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 mt-8 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={16} />
              Return to Nexio Global
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
