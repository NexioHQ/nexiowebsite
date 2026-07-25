import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, type LucideIcon } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useState } from "react";
import { ContactForm } from "./ContactForm";

export interface ServiceData {
  title: string;
  tagline: string;
  description: string;
  Icon: LucideIcon;
  accent: string;
  iconBg: string;
  iconColor: string;
  features: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  stats: { value: string; label: string }[];
  why: string[];
}

export function ServicePage({ data }: { data: ServiceData }) {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-14 sm:pb-20 relative overflow-hidden">
        <div className={`absolute top-0 left-0 w-[600px] h-[400px] bg-gradient-to-br ${data.accent} opacity-10 rounded-full blur-[120px] pointer-events-none`} />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <Link href="/">
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft size={15} />
              Back to home
            </button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${data.iconBg} mb-6`}>
              <data.Icon size={26} className={data.iconColor} strokeWidth={1.75} />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5">{data.title}</h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">{data.tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-border bg-gray-50/50 dark:bg-card/20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
            {data.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${data.accent} bg-clip-text text-transparent`}>{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-5">What We Do</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{data.description}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {data.why.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white dark:bg-card border border-border rounded-xl">
                  <CheckCircle2 size={17} className="text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50/70 dark:bg-card/20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-10"
          >
            Our Capabilities
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white dark:bg-card border border-border rounded-xl p-6"
              >
                <div className={`w-8 h-1 bg-gradient-to-r ${data.accent} rounded-full mb-4`} />
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-10"
          >
            How We Work
          </motion.h2>
          <div className="space-y-4">
            {data.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 sm:gap-6 items-start p-5 sm:p-6 bg-white dark:bg-card border border-border rounded-2xl"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${data.accent} flex items-center justify-center flex-shrink-0 text-white font-bold text-sm`}>
                  {step.step}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground mb-8">
            Let's discuss your project and explore how Nexio can help you achieve your goals.
          </p>
          <button
            onClick={() => setFormOpen(true)}
            className="bg-primary text-white px-10 py-4 rounded-full font-semibold hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/20"
          >
            Let's Talk
          </button>
        </div>
      </section>

      <Footer />
      <ContactForm open={formOpen} onClose={() => setFormOpen(false)} />
    </div>
  );
}
