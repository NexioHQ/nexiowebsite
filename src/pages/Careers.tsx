import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cultureValues } from "@/data/careers";
import { Globe, BookOpen, Rocket, Heart, ArrowRight, Inbox } from "lucide-react";
import { Link } from "wouter";

const iconMap: Record<string, typeof Globe> = {
  globe: Globe,
  book: BookOpen,
  rocket: Rocket,
  heart: Heart,
};

export default function Careers() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-amber-500/5" />
          <div className="max-w-7xl mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Join <span className="text-primary">Nexio</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Build the future of technology with a global team of passionate engineers,
                designers, and strategists.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Culture Values */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              Why Work With Us
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cultureValues.map((value, i) => {
                const Icon = iconMap[value.icon] || Globe;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white dark:bg-card border border-gray-100 dark:border-gray-800 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon size={22} className="text-primary" strokeWidth={1.75} />
                    </div>
                    <h3 className="text-base font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* No Open Positions */}
        <section className="py-20 bg-gray-50/70 dark:bg-card/20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Inbox size={28} className="text-primary" strokeWidth={1.75} />
              </div>
              <h2 className="text-3xl font-bold mb-4">No Open Positions Right Now</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We don't have any active openings at the moment, but we're always interested
                in connecting with talented people. Drop us a message and let us know how
                you'd like to contribute to Nexio.
              </p>
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full font-medium transition-all hover:scale-105 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                  Get in Touch
                  <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
