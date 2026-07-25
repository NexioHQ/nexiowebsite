import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { jobListings, cultureValues } from "@/data/careers";
import { Globe, BookOpen, Rocket, Heart, MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";
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
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Join <span className="text-primary">Nexio</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Build the future of technology with a global team of passionate engineers, 
                designers, and strategists. We're always looking for exceptional talent.
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

        {/* Open Positions */}
        <section className="py-20 bg-gray-50/70 dark:bg-card/20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
              <p className="text-muted-foreground text-lg">
                Find your next role and grow with us.
              </p>
            </motion.div>

            <div className="space-y-4">
              {jobListings.map((job, i) => (
                <motion.div
                  key={job.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group bg-white dark:bg-card border border-gray-100 dark:border-gray-800 rounded-xl p-6 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">{job.description}</p>
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Briefcase size={12} />
                          {job.department}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <MapPin size={12} />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Clock size={12} />
                          {job.type} · {job.experience}
                        </span>
                      </div>
                    </div>
                    <Link href="/contact">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-200 whitespace-nowrap">
                        Apply Now
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Don't See Your Role?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                We're always looking for talented people. Send us your CV and tell us 
                how you'd like to contribute to Nexio.
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
