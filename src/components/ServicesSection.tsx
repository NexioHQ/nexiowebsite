import { motion } from "framer-motion";
import { Monitor, Cpu, Cloud, ShieldCheck, BarChart3, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    num: "01",
    Icon: Monitor,
    title: "Digital Solutions",
    desc: "We design and build high-performance web applications, SaaS platforms, and enterprise software tailored to your business model.",
    points: ["Custom web and mobile applications", "SaaS platform architecture", "Legacy system modernisation"],
    accent: "from-blue-500 to-blue-600",
    iconBg: "bg-blue-50 dark:bg-blue-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
    borderTop: "border-t-blue-500",
    href: "/services/digital-solutions",
    span: "lg:col-span-2",
  },
  {
    num: "02",
    Icon: Cpu,
    title: "AI and Automation",
    desc: "Intelligent systems that reduce manual effort, accelerate decisions, and unlock new revenue streams for your organisation.",
    points: ["AI-powered workflow automation", "Custom LLM integrations", "Predictive analytics solutions"],
    accent: "from-violet-500 to-violet-600",
    iconBg: "bg-violet-50 dark:bg-violet-500/10",
    iconColor: "text-violet-600 dark:text-violet-400",
    borderTop: "border-t-violet-500",
    href: "/services/ai-automation",
    span: "lg:col-span-1",
  },
  {
    num: "03",
    Icon: Cloud,
    title: "Cloud Solutions",
    desc: "Cloud infrastructure that scales with your ambitions. We architect, migrate, and manage cloud environments built for performance.",
    points: ["Multi-cloud architecture design", "DevOps and CI/CD pipelines", "Managed hosting and monitoring"],
    accent: "from-cyan-500 to-cyan-600",
    iconBg: "bg-cyan-50 dark:bg-cyan-500/10",
    iconColor: "text-cyan-600 dark:text-cyan-400",
    borderTop: "border-t-cyan-500",
    href: "/services/cloud-solutions",
    span: "lg:col-span-1",
  },
  {
    num: "04",
    Icon: ShieldCheck,
    title: "Cybersecurity",
    desc: "Proactive security strategies that protect your business, meet compliance requirements, and keep your customers' trust intact.",
    points: ["Penetration testing and audits", "Compliance consulting (ISO, SOC2)", "Managed security operations"],
    accent: "from-emerald-500 to-emerald-600",
    iconBg: "bg-emerald-50 dark:bg-emerald-500/10",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    borderTop: "border-t-emerald-500",
    href: "/services/cybersecurity",
    span: "lg:col-span-1",
  },
  {
    num: "05",
    Icon: BarChart3,
    title: "Technology Consulting",
    desc: "Strategic guidance to align your technology investments with business outcomes, from roadmaps to execution.",
    points: ["Digital transformation roadmaps", "Technology stack evaluation", "CTO advisory and team scaling"],
    accent: "from-amber-500 to-orange-500",
    iconBg: "bg-amber-50 dark:bg-amber-500/10",
    iconColor: "text-amber-600 dark:text-amber-400",
    borderTop: "border-t-amber-500",
    href: "/services/technology-consulting",
    span: "lg:col-span-1",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group ${service.span}`}
    >
      <Link href={service.href}>
        <div className="h-full bg-white dark:bg-card border border-gray-100 dark:border-gray-800 rounded-2xl p-8 flex flex-col hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden">
          {/* Coloured top accent */}
          <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

          {/* Header row */}
          <div className="flex items-start justify-between mb-6">
            <div className={`w-11 h-11 rounded-xl ${service.iconBg} flex items-center justify-center`}>
              <service.Icon size={20} className={service.iconColor} strokeWidth={1.75} />
            </div>
            <span className="text-xs font-semibold text-muted-foreground/50 tabular-nums tracking-wider">{service.num}</span>
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.desc}</p>

          {/* Points */}
          <ul className="space-y-2 mb-8 flex-1">
            {service.points.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-foreground/70">
                <span className={`w-1 h-1 rounded-full bg-gradient-to-r ${service.accent} flex-shrink-0`} />
                {point}
              </li>
            ))}
          </ul>

          {/* Link */}
          <div className="flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all duration-200">
            Explore service
            <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section className="py-24 bg-gray-50/70 dark:bg-card/20 relative" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Everything You Need to Scale
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive technology capabilities to power your digital
            transformation journey, from concept to enterprise scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.num} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
