import { motion } from "framer-motion";
import { Laptop, Cpu, Cloud, Lock, LineChart, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Laptop,
    title: "Digital Solutions",
    desc: "Corporate sites, robust web apps, scalable SaaS platforms, and custom enterprise software.",
    colSpan: "lg:col-span-2",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    desc: "AI assistants, intelligent business automation, workflow optimization, and bespoke AI integrations.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Cloud infrastructure architecture, seamless deployment, DevOps, and managed high-performance hosting.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    desc: "Comprehensive security assessments, penetration testing, compliance consulting, and managed security.",
    colSpan: "lg:col-span-1",
  },
  {
    icon: LineChart,
    title: "Technology Consulting",
    desc: "Strategic digital roadmaps, technology stack evaluation, process optimization, and leadership consulting.",
    colSpan: "lg:col-span-1",
  }
];

export function ServicesSection() {
  return (
    <section className="py-32 bg-gray-50 dark:bg-card/30 relative" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Everything You Need to Scale
            </h2>
            <p className="text-lg text-muted-foreground">
              We provide comprehensive technology capabilities to power your digital transformation journey from concept to enterprise scale.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card rounded-[24px] p-8 md:p-10 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${service.colSpan}`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 transition-transform duration-500 group-hover:scale-150" />
              
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center mb-8">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {service.desc}
              </p>
              
              <div className="mt-auto flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
