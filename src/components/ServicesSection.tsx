import { motion } from "framer-motion";
import { Code2, Cpu, ShieldCheck, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    Icon: ShieldCheck,
    title: "Cyber Security",
    desc: "Security assessments and practical protection that help keep your applications, data, and operations resilient.",
    tags: ["Security Assessments & Penetration Testing", "GRC Compliance Review", "Vulnerability Management"],
    accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
    borderGlow: "group-hover:border-emerald-500/40",
    iconBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]",
    tagBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    href: "/solutions/cybersecurity",
  },
  {
    Icon: Code2,
    title: "Digital Solutions",
    desc: "High-performance websites, enterprise web apps, native mobile applications, and scalable cloud architectures tailored for high growth.",
    tags: ["Websites & Digital Products", "Custom Software & Business Systems", "Mobile App Development"],
    accent: "from-blue-500/20 via-sky-500/10 to-transparent",
    borderGlow: "group-hover:border-blue-500/40",
    iconBg: "bg-blue-500/10 border-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]",
    tagBg: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    href: "/solutions/digital-solutions",
  },
  {
    Icon: Cpu,
    title: "AI & Automation",
    desc: "Intelligent autonomous workflows,  AI assistants, and predictive systems that eliminate repetitive tasks and unlock new revenue.",
    tags: ["Workflow Automation", "AI Assistants and Content Tools", "CRM & Lead Automation"],
    accent: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
    borderGlow: "group-hover:border-violet-500/40",
    iconBg: "bg-violet-500/10 border-violet-500/20 text-violet-400 group-hover:bg-violet-500 group-hover:text-white group-hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]",
    tagBg: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    href: "/solutions/ai-automation",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-[#0B1120] rounded-b-[48px]" id="services">
      {/* Soft Ambient Background Lighting Effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 sm:mb-12 text-center max-w-3xl mx-auto"
        >

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
            Our Technology Services
          </h2>
          <p className="text-base sm:text-lg text-blue-100/60 leading-relaxed max-w-2xl mx-auto">
            Build. Automate. Stay secure.
          </p>
        </motion.div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Link href={service.href}>
                <div
                  className={`group relative h-full bg-slate-900/60 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 cursor-pointer overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${service.borderGlow}`}
                >
                  {/* Subtle Background Soft Glow on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
                  />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.03] rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-700" />

                  <div>
                    {/* Header Icon & Category Badge */}
                    <div className="flex items-center justify-between mb-6 relative z-10">
                      <div
                        className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all duration-300 ${service.iconBg}`}
                      >
                        <service.Icon size={26} strokeWidth={1.75} className="transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-display tracking-tight group-hover:text-blue-200 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-blue-100/60 text-sm sm:text-base leading-relaxed mb-6">
                      {service.desc}
                    </p>

                    {/* Service Feature Tags */}
                    <div className="space-y-2 mb-8 relative z-10">
                      {service.tags.map((tag) => (
                        <div key={tag} className="flex items-center gap-2 text-xs font-medium text-gray-300">
                          <CheckCircle2 size={14} className="text-blue-400 flex-shrink-0" />
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between relative z-10">
                    <span className="text-sm font-semibold text-blue-400 group-hover:text-white transition-colors duration-200">
                      Explore Solution
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300">
                      <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

