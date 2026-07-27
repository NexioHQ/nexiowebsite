import { motion } from "framer-motion";
import { BrainCircuit, MessageSquareText, Workflow, Bot, BarChart3, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { ContactForm } from "@/components/ContactForm";

const serviceGroups = [
  {
    title: "AI Assistants",
    icon: MessageSquareText,
    items: [
      "Chatbots",
      "AI assistants",
      "Document analysis",
      "Content generation tools",
      "Knowledge-base assistants",
      "AI search",
    ],
  },
  {
    title: "Intelligent Workflows",
    icon: Workflow,
    items: [
      "Workflow intelligence",
      "Recommendation systems",
      "AI integrations",
      "Lead automation",
      "CRM workflows",
      "Approvals & notifications",
    ],
  },
  {
    title: "Automation",
    icon: Bot,
    items: [
      "Data syncing",
      "Form automation",
      "Report automation",
      "Task automation",
      "Process digitization",
    ],
  },
  {
    title: "Analytics & Insights",
    icon: BarChart3,
    items: [
      "Predictive analytics",
      "Business intelligence dashboards",
      "Real-time reporting",
    ],
  },
];

const stats = [
  { value: "60%", label: "Average reduction in manual workflows" },
  { value: "4x", label: "Faster decision-making cycles" },
  { value: "30+", label: "AI integrations delivered" },
];

const process = [
  { step: "01", title: "Opportunity Assessment", desc: "We audit your workflows to identify where AI delivers measurable value versus where it adds unnecessary complexity." },
  { step: "02", title: "Data Readiness Review", desc: "Evaluating your existing data assets and identifying gaps before building any models." },
  { step: "03", title: "Proof of Concept", desc: "A focused two-week sprint to validate the approach with real data before committing to full development." },
  { step: "04", title: "Build and Integration", desc: "Production-grade development with full integration into your existing tools and systems." },
  { step: "05", title: "Monitor and Improve", desc: "Continuous model monitoring, retraining, and performance optimisation post-launch." },
];

const whyItems = [
  "Practical AI focus. We build tools that work, not demos that fail in production",
  "Experience across GPT, Claude, open-source, and fine-tuned models",
  "ROI-first framing: every project is justified by measurable business outcomes",
  "Ongoing model maintenance and performance monitoring included",
];

export default function AIAutomation() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-14 sm:pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-gradient-to-br from-violet-500 to-violet-600 opacity-10 rounded-full blur-[120px] pointer-events-none" />
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
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-violet-50 dark:bg-violet-500/10 mb-6">
              <BrainCircuit size={26} className="text-violet-600 dark:text-violet-400" strokeWidth={1.75} />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5">
              AI & Automation
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Intelligent systems that reduce manual effort, accelerate decisions, and create entirely new revenue opportunities for your organisation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-border bg-gray-50/50 dark:bg-card/20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-violet-500 to-violet-600 bg-clip-text text-transparent">
                  {stat.value}
                </p>
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
              <p className="text-muted-foreground leading-relaxed text-lg">
                We help businesses harness the power of artificial intelligence as a practical tool 
                that eliminates repetitive work, surfaces actionable insights, and enables products 
                that were previously impossible to build.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {whyItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white dark:bg-card border border-border rounded-xl">
                  <CheckCircle2 size={17} className="text-violet-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
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

          <div className="grid sm:grid-cols-2 gap-8">
            {serviceGroups.map((group, gi) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.1 }}
                className="bg-white dark:bg-card border border-border rounded-2xl p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-500/10 flex items-center justify-center">
                    <group.icon size={20} className="text-violet-600 dark:text-violet-400" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-xl font-bold">{group.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
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
            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 sm:gap-6 items-start p-5 sm:p-6 bg-white dark:bg-card border border-border rounded-2xl"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to automate your workflows?</h2>
          <p className="text-muted-foreground mb-8">
            Let's discuss how AI can transform your business operations and unlock new possibilities.
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
