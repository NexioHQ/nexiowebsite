import { motion } from "framer-motion";
import { Code2, BrainCircuit, ShieldHalf, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    Icon: Code2,
    title: "Digital Solutions",
    desc: "High-performance websites, web applications, mobile apps, and enterprise software built to scale.",
    accent: "from-blue-500 to-blue-600",
    iconColor: "text-blue-400",
    href: "/solutions/digital-solutions",
  },
  {
    Icon: BrainCircuit,
    title: "AI and Automation",
    desc: "Intelligent systems that reduce manual effort, accelerate decisions, and unlock new revenue streams.",
    accent: "from-violet-500 to-violet-600",
    iconColor: "text-violet-400",
    href: "/solutions/ai-automation",
  },
  {
    Icon: ShieldHalf,
    title: "Cybersecurity",
    desc: "Proactive security strategies that protect your business, meet compliance, and keep trust intact.",
    accent: "from-emerald-500 to-emerald-600",
    iconColor: "text-emerald-400",
    href: "/solutions/cybersecurity",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0B1120]" id="services">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
            Everything You Need to Scale
          </h2>
          <p className="text-base sm:text-lg text-blue-100/50">
            Comprehensive technology capabilities to power your digital transformation journey, from concept to enterprise scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={service.href}>
                <div className="group h-full bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/[0.08] rounded-2xl p-8 flex flex-col hover:border-white/[0.15] hover:bg-white/[0.10] transition-all duration-500 cursor-pointer relative overflow-hidden">
                  <div className={"absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br " + service.accent + " opacity-0 group-hover:opacity-10 blur-3xl rounded-full transition-opacity duration-500"}></div>
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.08] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.Icon size={22} className={service.iconColor} strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-display">{service.title}</h3>
                  <p className="text-blue-100/50 text-sm leading-relaxed mb-8 flex-1">{service.desc}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-blue-400 group-hover:gap-3 transition-all duration-200">
                    Explore service
                    <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
