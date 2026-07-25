import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Monitor, Cpu, Cloud, ShieldCheck, BarChart3, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const solutions = [
  {
    icon: Monitor,
    title: "Digital Solutions",
    description: "We design and build high-performance web applications, SaaS platforms, and enterprise software tailored to your business model.",
    features: ["Custom web and mobile applications", "SaaS platform architecture", "Legacy system modernisation", "API design and integration"],
    accent: "from-blue-500 to-blue-600",
    iconBg: "bg-blue-50 dark:bg-blue-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
    href: "/solutions/digital-solutions",
  },
  {
    icon: Cpu,
    title: "AI and Automation",
    description: "Intelligent systems that reduce manual effort, accelerate decisions, and unlock new revenue streams for your organisation.",
    features: ["AI-powered workflow automation", "Custom LLM integrations", "Predictive analytics solutions", "Natural language processing"],
    accent: "from-violet-500 to-violet-600",
    iconBg: "bg-violet-50 dark:bg-violet-500/10",
    iconColor: "text-violet-600 dark:text-violet-400",
    href: "/solutions/ai-automation",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Cloud infrastructure that scales with your ambitions. We architect, migrate, and manage cloud environments built for performance.",
    features: ["Multi-cloud architecture design", "DevOps and CI/CD pipelines", "Managed hosting and monitoring", "Cost optimisation"],
    accent: "from-cyan-500 to-cyan-600",
    iconBg: "bg-cyan-50 dark:bg-cyan-500/10",
    iconColor: "text-cyan-600 dark:text-cyan-400",
    href: "/solutions/cloud-solutions",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description: "Proactive security strategies that protect your business, meet compliance requirements, and keep your customers' trust intact.",
    features: ["Penetration testing and audits", "Compliance consulting (ISO, SOC2)", "Managed security operations", "Incident response planning"],
    accent: "from-emerald-500 to-emerald-600",
    iconBg: "bg-emerald-50 dark:bg-emerald-500/10",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    href: "/solutions/cybersecurity",
  },
  {
    icon: BarChart3,
    title: "Technology Consulting",
    description: "Strategic guidance to align your technology investments with business outcomes, from roadmaps to execution.",
    features: ["Digital transformation roadmaps", "Technology stack evaluation", "CTO advisory and team scaling", "Vendor selection support"],
    accent: "from-amber-500 to-orange-500",
    iconBg: "bg-amber-50 dark:bg-amber-500/10",
    iconColor: "text-amber-600 dark:text-amber-400",
    href: "/solutions/technology-consulting",
  },
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5" />
          <div className="max-w-7xl mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Our <span className="text-primary">Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Comprehensive technology capabilities to power your digital transformation journey, 
                from concept to enterprise scale.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="space-y-8">
              {solutions.map((solution, i) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Link href={solution.href}>
                    <div className="group bg-white dark:bg-card border border-gray-100 dark:border-gray-800 rounded-2xl p-8 md:p-10 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden">
                      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${solution.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      
                      <div className="flex flex-col md:flex-row md:items-start gap-6">
                        <div className={`w-14 h-14 rounded-xl ${solution.iconBg} flex items-center justify-center flex-shrink-0`}>
                          <solution.icon size={26} className={solution.iconColor} strokeWidth={1.75} />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-3 text-foreground">{solution.title}</h3>
                          <p className="text-muted-foreground leading-relaxed mb-5">{solution.description}</p>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                            {solution.features.map((feature) => (
                              <div key={feature} className="flex items-center gap-2 text-sm text-foreground/70">
                                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${solution.accent} flex-shrink-0`} />
                                {feature}
                              </div>
                            ))}
                          </div>
                          
                          <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-200">
                            Learn more
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
