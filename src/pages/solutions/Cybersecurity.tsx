import { motion } from "framer-motion";
import { ShieldHalf, Search, Lock, GraduationCap, ClipboardCheck, ArrowLeft, CheckCircle2, ChevronDown } from "lucide-react";
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
    title: "Security Assessments",
    icon: Search,
    items: [
      "Security audits",
      "Vulnerability assessment",
      "Penetration testing",
    ],
  },
  {
    title: "Hardening & Protection",
    icon: Lock,
    items: [
      "Website hardening",
      "Network security",
      "Cloud security configuration",
    ],
  },
  {
    title: "Training & Compliance",
    icon: GraduationCap,
    items: [
      "Security awareness training",
      "GRC compliance review",
      "Policy development",
    ],
  },
  {
    title: "Governance & Reporting",
    icon: ClipboardCheck,
    items: [
      "Compliance documentation",
      "Risk assessment reports",
      "Security roadmap planning",
    ],
  },
];

const stats = [
  { value: "100%", label: "Compliance target achievement rate" },
  { value: "6 wks", label: "Average time to compliance readiness" },
  { value: "0", label: "Post-engagement breaches reported" },
];

const process = [
  { step: "01", title: "Security Assessment", desc: "An initial review of your current environment, identifying your most critical assets and likely threat vectors." },
  { step: "02", title: "Threat Modelling", desc: "Systematic analysis of how attackers could target your systems, prioritised by likelihood and business impact." },
  { step: "03", title: "Active Testing", desc: "Hands-on penetration testing and vulnerability scanning across all identified attack surfaces." },
  { step: "04", title: "Remediation", desc: "Detailed remediation guidance with prioritised fixes and direct engineering support to close identified gaps." },
  { step: "05", title: "Ongoing Monitoring", desc: "Continuous security monitoring, scheduled re-testing, and regular reporting to your leadership team." },
];

const whyItems = [
  "Certified ethical hackers and CISSP-qualified security architects",
  "Industry-specific experience across fintech, healthcare, and enterprise environments",
  "Clear, actionable reports written for both technical and non-technical stakeholders",
  "Ongoing monitoring partnerships available post-assessment",
];

const faqs = [
  {
    question: "What cybersecurity services do you offer?",
    answer:
      "We provide security assessments, penetration testing, vulnerability management, website and network hardening, GRC compliance reviews, security awareness training, and ongoing security monitoring.",
  },
  {
    question: "How long does a security assessment take?",
    answer:
      "A typical security assessment takes 2–6 weeks depending on the size and complexity of your environment. We provide a detailed timeline after the initial scoping call.",
  },
  {
    question: "Do you help with compliance requirements like ISO 27001 or GDPR?",
    answer:
      "Yes. Our GRC compliance review covers ISO 27001, GDPR, and other relevant frameworks. We assess your current posture, identify gaps, and provide a roadmap to achieve compliance.",
  },
  {
    question: "What happens after a vulnerability is found?",
    answer:
      "We provide prioritised remediation guidance with clear technical instructions. For critical issues, we can also provide direct engineering support to fix vulnerabilities quickly.",
  },
];

export default function Cybersecurity() {
  const [formOpen, setFormOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useSeo({
    title: "Cybersecurity",
    description:
      "Enterprise-grade cybersecurity from Nexio Global — penetration testing, vulnerability management, GRC compliance, security hardening, and ongoing monitoring to protect your business.",
    path: "/solutions/cybersecurity",
    schema: [
      serviceSchema({
        name: "Cybersecurity",
        description:
          "Enterprise-grade cybersecurity including penetration testing, vulnerability management, GRC compliance, security hardening, and ongoing monitoring.",
        path: "/solutions/cybersecurity",
        offers: true,
      }),
      faqSchema(faqs),
      webPageSchema({
        name: "Cybersecurity — Nexio Global",
        description:
          "Enterprise-grade cybersecurity from Nexio Global — penetration testing, vulnerability management, GRC compliance, security hardening, and ongoing monitoring.",
        path: "/solutions/cybersecurity",
        breadcrumbs: [
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
          { name: "Cybersecurity", path: "/solutions/cybersecurity" },
        ],
      }),
    ],
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main id="main-content">

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-14 sm:pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-gradient-to-br from-emerald-500 to-emerald-600 opacity-10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <Breadcrumbs
            items={[
              { name: "Solutions", path: "/solutions" },
              { name: "Cybersecurity", path: "/solutions/cybersecurity" },
            ]}
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
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 mb-6">
              <ShieldHalf size={26} className="text-emerald-600 dark:text-emerald-400" strokeWidth={1.75} />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5">
              Cybersecurity
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Proactive security strategies that protect your business, meet compliance requirements, and keep your customers' trust intact.
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
                <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
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
              <h2 className="text-2xl sm:text-3xl font-bold mb-5">What We Do</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                In a world where breaches make headlines daily, security cannot be an afterthought. 
                Our team of certified security professionals embeds enterprise-grade protection into 
                your systems and processes before attackers find the gaps you don't know exist.
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
                  <CheckCircle2 size={17} className="text-emerald-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
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
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center">
                    <group.icon size={20} className="text-emerald-600 dark:text-emerald-400" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-xl font-bold">{group.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
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
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to secure your business?</h2>
          <p className="text-muted-foreground mb-8">
            Let's discuss how Nexio can help protect your systems and meet your compliance goals.
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
