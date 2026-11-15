import { motion } from "framer-motion";
import { Code2, Globe, Monitor, Smartphone, LayoutDashboard, ArrowLeft, CheckCircle2, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useState } from "react";
import { ContactForm } from "@/components/ContactForm";
import { useSeo } from "@/lib/seo";
import { serviceSchema, faqSchema, webPageSchema } from "@/lib/schema";

const serviceGroups = [
  {
    title: "Websites",
    icon: Globe,
    items: [
      "Website design",
      "Website development",
      "Landing pages",
      "Corporate websites",
      "Portfolio sites",
      "E-commerce sites",
      "CMS-based sites",
    ],
  },
  {
    title: "Web Applications",
    icon: Monitor,
    items: [
      "Booking systems",
      "Web portals",
      "Web apps",
      "Progressive web apps",
      "E-commerce solutions",
      "Admin panels",
      "Dashboards",
    ],
  },
  {
    title: "Business Software",
    icon: LayoutDashboard,
    items: [
      "Business software",
      "SaaS products",
      "Internal tools",
      "Workflow systems",
      "Customer portals",
      "Backend systems",
      "System integrations",
    ],
  },
  {
    title: "Mobile & UI/UX",
    icon: Smartphone,
    items: [
      "UI/UX design",
      "Android/iOS apps",
      "Cross-platform apps",
      "Business apps",
      "Companion apps",
      "Service apps",
      "Customer apps",
    ],
  },
];

const stats = [
  { value: "30+", label: "Digital products shipped" },
  { value: "100%", label: "On-time delivery rate" },
  { value: "3x", label: "Average performance improvement" },
];

const process = [
  { step: "01", title: "Discovery & Planning", desc: "We dive deep into your business goals, user needs, and technical requirements to define a clear roadmap." },
  { step: "02", title: "Design & Prototyping", desc: "Our designers create wireframes and high-fidelity prototypes, iterating with your feedback before development begins." },
  { step: "03", title: "Agile Development", desc: "We build in two-week sprints with regular demos, ensuring full visibility and the ability to course-correct early." },
  { step: "04", title: "Testing & QA", desc: "Rigorous automated and manual testing across all browsers, devices, and user scenarios." },
  { step: "05", title: "Launch & Support", desc: "We handle deployment, documentation, and ongoing support so your team is empowered from day one." },
];

const whyItems = [
  "Senior engineers with 5+ years of production experience on every project",
  "Modern stack choices that balance speed with long-term maintainability",
  "Transparent project management with weekly stakeholder updates",
  "Post-launch support and iterative improvement included",
];

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Solutions", path: "/solutions" },
  { name: "Digital Solutions", path: "/solutions/digital-solutions" },
];

const faqs = [
  {
    question: "How long does it take to build a website or web application?",
    answer:
      "A standard corporate website typically takes 3–6 weeks. Web applications and custom business software usually take 8–16 weeks depending on complexity. We provide a detailed timeline after the discovery phase.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. Every project includes a post-launch support period, and we offer ongoing maintenance plans for updates, monitoring, security patches, and feature enhancements.",
  },
  {
    question: "What technology stack do you use?",
    answer:
      "We use modern, battle-tested technologies including React, TypeScript, Node.js, Python, and cloud platforms like AWS and Firebase. The stack is chosen based on your project's specific needs and long-term maintainability.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer:
      "Absolutely. We regularly integrate with CRMs, ERPs, payment gateways, and third-party APIs. Our team ensures seamless data flow between your new digital product and existing infrastructure.",
  },
];

export default function DigitalSolutions() {
  const [formOpen, setFormOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useSeo({
    title: "Digital Solutions & Custom Software Development",
    description:
      "Nexio Global builds high-performance websites, web applications, mobile apps, SaaS products, and custom enterprise software that scales with your business.",
    path: "/solutions/digital-solutions",
    keywords: [
      "Digital Solutions",
      "Custom Software Development",
      "Web Application Development",
      "Website Development",
      "SaaS Product Development",
      "Mobile App Development",
      "Enterprise Software",
    ],
    schema: [
      serviceSchema({
        name: "Digital Solutions & Custom Software Development",
        description:
          "High-performance websites, web applications, mobile apps, SaaS products, and custom enterprise software built by Nexio Global.",
        path: "/solutions/digital-solutions",
      }),
      faqSchema(faqs),
      webPageSchema({
        name: "Digital Solutions & Custom Software Development — Nexio Global",
        description:
          "Nexio Global builds high-performance websites, web applications, mobile apps, SaaS products, and custom enterprise software that scales with your business.",
        path: "/solutions/digital-solutions",
        breadcrumbs,
      }),
    ],
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main id="main-content">

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-14 sm:pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-gradient-to-br from-blue-500 to-blue-600 opacity-10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <Breadcrumbs
            items={breadcrumbs.slice(1)}
          />
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
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-500/10 mb-6">
              <Code2 size={26} className="text-blue-600 dark:text-blue-400" strokeWidth={1.75} />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5">
              Digital Solutions
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              We design and build high-performance websites, web applications, mobile apps, and enterprise software that scale with your business.
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
                <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
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
<div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-5">What We Build</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                From simple landing pages to complex enterprise platforms, our team delivers 
                polished digital products across web, mobile, and backend systems. We specialise 
                in creating experiences that are fast, intuitive, and built to last.
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
                  <CheckCircle2 size={17} className="text-blue-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
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
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center">
                    <group.icon size={20} className="text-blue-600 dark:text-blue-400" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-xl font-bold">{group.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
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
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
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

      {/* FAQ */}
      <section className="py-20 bg-gray-50/70 dark:bg-card/20">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-10 text-center"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white dark:bg-card border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold hover:bg-gray-50 dark:hover:bg-card/60 transition-colors"
                  aria-expanded={openFaq === i}
                >
                  {faq.question}
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 text-muted-foreground transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to build something great?</h2>
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

      </main>
      <Footer />
      <ContactForm open={formOpen} onClose={() => setFormOpen(false)} />
    </div>
  );
}
