import { useState } from "react";
import { Link } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  Braces,
  Check,
  ChevronDown,
  ChevronRight,
  ClipboardCheck,
  FileCheck2,
  GlobeLock,
  GraduationCap,
  LockKeyhole,
  ScanEye,
  SearchCheck,
  Settings2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import {
  AssessmentStackVisual,
  CtaGeometry,
  HeroArchitectureVisual,
} from "@/components/cybersecurity/CyberVisuals";
import { useSeo } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema, webPageSchema } from "@/lib/schema";


/* -------------------------------------------------------------------------- */
/*  Primitives                                                                 */
/* -------------------------------------------------------------------------- */

const EASE = [0.22, 1, 0.36, 1] as const;

function Reveal({
  children,
  delay = 0,
  y = 22,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({
  children,
  dark = false,
  className = "",
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] ${
        dark ? "text-blue-300" : "text-blue-700"
      } ${className}`}
    >
      <span className={`h-px w-8 ${dark ? "bg-blue-400/60" : "bg-blue-600/50"}`} aria-hidden="true" />
      {children}
    </p>
  );
}

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-6 ${className}`}>{children}</div>;
}

const BTN_PRIMARY =
  "inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30";
const BTN_PRIMARY_DARK =
  "inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#0B1120] shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50";
const BTN_GHOST =
  "inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/70 px-7 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700";
const BTN_GHOST_DARK =
  "inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-blue-50 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/5";

const audience = [
  "Applications built with AI coding assistants",
  "Websites made with AI development platforms",
  "SaaS products and business applications",
  "AI-assisted dashboards, portals and systems",
  "Agency-built applications using AI workflows",
];

/* -------------------------------------------------------------------------- */
/*  Hero                                                                       */
/* -------------------------------------------------------------------------- */

function Hero({ onRequest }: { onRequest: () => void }) {
  return (
    <section className="nri-hero" id="overview">
      <div className="nri-hero-shell">
        <div className="nri-breadcrumb">
          <a href="/">Home</a><ChevronRight size={12} />
          <a href="/solutions">Solutions</a><ChevronRight size={12} />
          <span>Cybersecurity</span>
        </div>
        <div className="nri-hero-grid">
          <div className="nri-hero-copy">
            <h1>Your application works. <em>But is it <span className="nri-secure-badge">secure?</span></em></h1>
            <p>Nexio&rsquo;s security assessments help find weaknesses before attackers do.</p>
            <div className="nri-actions">
              <button type="button" onClick={onRequest} className="nri-button nri-button-blue">
                Request a Security Assessment <ArrowRight size={16} />
              </button>
              <a href="#security-services" className="nri-button nri-button-quiet">
                Explore our services
              </a>
            </div>
          </div>

          <div className="nri-hero-art">
            <img
              className="nri-hero-image"
              src="/cybersecurity-hero.png"
              alt="A protected web application connected to APIs and data during a security assessment"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Featured service — Vibe-Coded Application Security Assessment              */
/* -------------------------------------------------------------------------- */

function FeaturedAssessment({ onRequest }: { onRequest: () => void }) {
  return (
    <section className="nri-feature-section" id="featured-assessment">
      <div className="nri-feature-wrap">
        <div className="nri-feature-panel">
          <div className="nri-feature-grid">
            <div className="nri-feature-copy">
              <h2>Security Assessment for AI Generated Applications</h2>
              <h3>Built with AI?    Get tested by people!</h3>
              <p>
                Our human-led security testing reveals what vibe coded applications can hide,
                helping you see and fix risks.
              </p>
              <button type="button" onClick={onRequest} className="nri-button nri-button-white">
                Get Your Application Assessed <ArrowRight size={16} />
              </button>
            </div>
            <aside className="nri-audience">
              <div className="nri-audience-heading">
                <span>Suitable for Developers and Agencies</span>
              </div>
              <ul>
                {audience.map((item) => (
                  <li key={item}>
                    <Check size={15} />
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
        <div className="nri-feature-shadow" aria-hidden="true" />
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Audience                                                                   */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*  What we look for                                                           */
/* -------------------------------------------------------------------------- */

const ASSESSMENT_AREAS: { icon: LucideIcon; title: string; items: string[] }[] = [
  {
    icon: LockKeyhole,
    title: "Authentication & Access Control",
    items: [
      "Authentication weaknesses",
      "Broken access control",
      "Privilege escalation",
      "Unauthorized account access",
      "Session security",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Application Security",
    items: [
      "Input validation",
      "Injection vulnerabilities",
      "Business logic flaws",
      "Insecure functionality",
      "Sensitive information exposure",
    ],
  },
  {
    icon: Braces,
    title: "API Security",
    items: [
      "API authorization",
      "Authentication controls",
      "Excessive data exposure",
      "Endpoint security",
      "Access control",
    ],
  },
  {
    icon: Settings2,
    title: "Secrets & Configuration",
    items: [
      "Exposed API keys",
      "Hardcoded credentials",
      "Environment configuration",
      "Security headers",
      "CORS configuration",
    ],
  },
  {
    icon: ScanEye,
    title: "Database & Data Security",
    items: [
      "Database access controls",
      "Storage permissions",
      "Sensitive data exposure",
      "Excessive privileges",
      "Data access boundaries",
    ],
  },
  {
    icon: GlobeLock,
    title: "Dependencies & Infrastructure",
    items: [
      "Vulnerable dependencies",
      "Misconfigurations",
      "Deployment security",
      "Cloud configuration",
      "External service exposure",
    ],
  },
];

function WhatWeAssess() {
  return (
    <section id="what-we-assess" className="relative scroll-mt-32 bg-[#F7F9FC] py-20 dark:bg-[#0A1022] lg:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            What We Look For
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            We go beyond whether the application works. We examine how securely it works.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ASSESSMENT_AREAS.map((area, i) => (
            <Reveal key={area.title} delay={i * 0.05} className="h-full">
              <div className="sec-card flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-7 dark:border-white/10 dark:bg-white/[0.03]">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
                  <area.icon className="h-5 w-5" strokeWidth={1.7} />
                </span>
                <h3 className="mt-4 text-lg font-semibold leading-snug text-slate-900 dark:text-white">
                  {area.title}
                </h3>
                <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5 dark:border-white/10">
                  {area.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                    >
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-blue-400" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Functional is not secure                                                   */
/* -------------------------------------------------------------------------- */

function FunctionalNotSecure() {
  return (
    <section className="relative overflow-hidden bg-[#0B1120] py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-4 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-blue-700/20 blur-[150px]" />
      </div>

      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            Functional <span className="text-blue-400">&ne;</span> Secure
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-blue-100/70 sm:text-lg">
            Functionality means nothing without security. It can work as intended and still leave
            the door wide open to attackers, which is why <br />
            <strong className="text-lg font-semibold text-white">
              security must always come first.
            </strong>
          </p>
        </Reveal>

      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Security services                                                          */
/* -------------------------------------------------------------------------- */

const SECURITY_SERVICES: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: ClipboardCheck,
    title: "Security Audits",
    desc: "Review controls and configurations to uncover security gaps.",
  },
  {
    icon: GlobeLock,
    title: "Web Application Security Testing",
    desc: "Test access, authentication, input handling and business logic.",
  },
  {
    icon: SearchCheck,
    title: "Vulnerability Assessment",
    desc: "Find and prioritize weaknesses across your environment.",
  },
  {
    icon: Braces,
    title: "API Security Assessment",
    desc: "Check API access, authorization and data exposure.",
  },
  {
    icon: LockKeyhole,
    title: "Website Hardening",
    desc: "Harden configurations and defenses against common attacks.",
  },
  {
    icon: Settings2,
    title: "Security Configuration Review",
    desc: "Find risky settings across apps, servers and cloud.",
  },
  {
    icon: GraduationCap,
    title: "Security Awareness Training",
    desc: "Help teams recognize risks and practice safer habits.",
  },
  {
    icon: FileCheck2,
    title: "GRC & Compliance Review",
    desc: "Align policies and controls with compliance requirements.",
  },
];

function SecurityServices({ onRequest }: { onRequest: () => void }) {
  return (
    <section
      id="security-services"
      className="relative scroll-mt-32 bg-[#F4F7FD] py-20 dark:bg-[#0A1024] lg:py-28"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Cybersecurity Services for Modern Digital Products
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Human-led security testing and practical protection for websites, applications, APIs
            and the business environments they support.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SECURITY_SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 4) * 0.05} className="h-full">
              <div className="sec-card flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
                  <service.icon className="h-5 w-5" strokeWidth={1.7} />
                </span>
                <h3 className="mt-6 text-base font-semibold leading-snug text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {service.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl border border-slate-200/80 bg-white p-7 dark:border-white/10 dark:bg-white/[0.03] sm:flex-row sm:items-center">
            <div>
              <p className="text-base font-semibold text-slate-900 dark:text-white">
                Not sure which assessment your application needs?
              </p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Tell us what you have built and we will recommend the right scope.
              </p>
            </div>
            <button type="button" onClick={onRequest} className={`${BTN_PRIMARY} shrink-0`}>
              Request a Security Assessment
            </button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Why Nexio                                                                  */
/* -------------------------------------------------------------------------- */

const PRINCIPLES = [
  {
    title: "Human-led Assessments",
    desc: "We validate what attackers could actually reach.",
  },
  {
    title: "Optimized for Modern Applications",
    desc: "We understand AI-built websites, SaaS products, APIs, dashboards and the integrations behind them.",
  },
  {
    title: "Clear priorities & Actionable Remediation",
    desc: "You get severity ranked findings, evidence and context with practical guidance on remidiation.",
  },
  {
    title: "Confidence to Launch",
    desc: "Understand your highest-impact risks before customers, users or production are exposed.",
  },
];

function WhyNexio() {
  return (
    <section
      id="why-nexio"
      className="relative scroll-mt-32 border-t border-slate-100 bg-white py-20 dark:border-white/10 dark:bg-[#0B1120] lg:py-28"
    >
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div className="lg:self-center">
            
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Why Choose <span className="text-blue-600 dark:text-blue-400">Nexio?</span> 
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Your application is unique, so your security assessment should be too. Nexio combines
              hands-on application security expertise with practical technology experience.
            </p>
          </div>

          <ul>
            {PRINCIPLES.map((principle, i) => (
              <li key={principle.title}>
                <Reveal delay={i * 0.06}>
                  <div
                    className={`border-b border-slate-100 dark:border-white/10 ${
                      i === 0 ? "pb-3" : "py-3"
                    }`}
                  >
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                      {principle.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {principle.desc}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  FAQ                                                                        */
/* -------------------------------------------------------------------------- */

const FAQS = [
  {
    q: "Our application works well. Why does it need a security assessment?",
    a: "Functionality and security are separate concerns. An application can work exactly as designed while still letting users reach data or actions they should not have access to. An assessment tests what normal usage never touches.",
  },
  {
    q: "Does an AI-built application need different testing?",
    a: "The method is the same, but AI-built applications often share patterns worth reviewing closely, such as exposed keys, permissive access rules and endpoints that were never intended to be public. We know where to look.",
  },
  {
    q: "Do you only provide security services for AI-generated applications?",
    a: "No. Nexio assesses and protects traditional and AI-assisted applications, websites, APIs, SaaS products, internal systems, cloud environments and broader business technology.",
  },
  {
    q: "What do we receive after the assessment?",
    a: "A written report covering findings, severity, affected areas, technical evidence, remediation guidance and an executive summary for decision makers.",
  },
  {
    q: "How long does an assessment take?",
    a: "Scope is confirmed after a short call. Most web application and API assessments are completed within one to two weeks, depending on size and complexity.",
  },
];

function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#F7F9FC] py-20 dark:bg-[#0A1022] lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Before You Book an Assessment <span className="text-blue-600 dark:text-blue-400">(FAQs)</span>
          </h2>

          <div className="mt-10 border-y border-slate-200/80 dark:border-white/10">
            {FAQS.map((item, i) => (
              <div
                key={item.q}
                className="border-b border-slate-200/80 last:border-b-0 dark:border-white/10"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-base font-medium text-slate-900 dark:text-white">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 ${
                        open === i ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 pr-10 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Closing CTA                                                                */
/* -------------------------------------------------------------------------- */

function FinalCta({ onRequest }: { onRequest: () => void }) {
  return (
    <section id="contact" className="relative scroll-mt-32 overflow-hidden bg-[#0B1120] py-20 lg:py-28">
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-[#0C1830] to-[#12295A]"
        aria-hidden="true"
      />
      <CtaGeometry />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.85rem]">
              Built Something With AI?
              <span className="mt-1 block text-blue-300">Let&rsquo;s Check it's Security</span>
            </h2>
            

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <button type="button" onClick={onRequest} className={BTN_PRIMARY_DARK}>
                Request a Security Assessment
              </button>
              <Link href="/contact" className={BTN_GHOST_DARK}>
                Talk to Nexio
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

const PAGE_DESCRIPTION =
  "Nexio Global provides cybersecurity services, application security testing, vulnerability assessments, API security testing and practical protection for modern digital products.";

export default function Cybersecurity() {
  const [formOpen, setFormOpen] = useState(false);
  const openForm = () => setFormOpen(true);

  useSeo({
    title: "Cybersecurity Services & Application Security Testing",
    description: PAGE_DESCRIPTION,
    path: "/solutions/cybersecurity",
    keywords: [
      "Cybersecurity Services",
      "Application Security",
      "Web Application Security Testing",
      "Vulnerability Assessment",
      "API Security",
      "Website Security",
      "AI-Built Applications",
      "Vibe-Coded Application Security Assessment",
      "Security Assessment",
      "Penetration Testing",
      "API Security Assessment",
      "Application Security Assessment",
    ],
    schema: [
      serviceSchema({
        name: "Cybersecurity Services & Application Security Testing",
        description: PAGE_DESCRIPTION,
        path: "/solutions/cybersecurity",
      }),
      faqSchema(FAQS.map(({ q, a }) => ({ question: q, answer: a }))),
      webPageSchema({
        name: "Cybersecurity Services & Application Security Testing — Nexio Global",
        description: PAGE_DESCRIPTION,
        path: "/solutions/cybersecurity",
        breadcrumbs: [
          { name: "Home", path: "/" },
          { name: "Cybersecurity", path: "/solutions/cybersecurity" },
        ],
      }),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Cybersecurity", path: "/solutions/cybersecurity" },
      ]),
    ],
  });

  return (
    <div className="min-h-screen bg-white font-display text-slate-900 dark:bg-[#0B1120] dark:text-slate-100">
      <Navbar />

      <main id="main-content">
        <Hero onRequest={openForm} />
        <FeaturedAssessment onRequest={openForm} />
        <WhatWeAssess />
        <FunctionalNotSecure />
        <SecurityServices onRequest={openForm} />
        <WhyNexio />
        <FaqSection />
        <FinalCta onRequest={openForm} />
      </main>

      <Footer />
      <ContactForm open={formOpen} onClose={() => setFormOpen(false)} defaultService="Cybersecurity" />
    </div>
  );
}
