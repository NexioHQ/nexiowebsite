import { motion } from "framer-motion";
import { Globe2, Code2, Lock, Cpu, Target, Users } from "lucide-react";

const reasons = [
  {
    Icon: Globe2,
    title: "Global Delivery",
    desc: "Access top-tier talent and delivery capabilities across borders.",
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-500/10",
  },
  {
    Icon: Code2,
    title: "Modern Technology Stack",
    desc: "We leverage the latest frameworks to build scalable, future-proof systems.",
    color: "text-violet-500",
    bg: "bg-violet-50 dark:bg-violet-500/10",
  },
  {
    Icon: Lock,
    title: "Security First",
    desc: "Enterprise-grade security measures embedded at every level of development.",
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-500/10",
  },
  {
    Icon: Cpu,
    title: "AI-Driven Solutions",
    desc: "Harnessing artificial intelligence to automate and innovate your operations.",
    color: "text-cyan-500",
    bg: "bg-cyan-50 dark:bg-cyan-500/10",
  },
  {
    Icon: Target,
    title: "Business Focused",
    desc: "Technology aligned purely with your core business objectives and ROI.",
    color: "text-amber-500",
    bg: "bg-amber-50 dark:bg-amber-500/10",
  },
  {
    Icon: Users,
    title: "Long-Term Partnership",
    desc: "We build lasting relationships to support your ongoing digital evolution.",
    color: "text-rose-500",
    bg: "bg-rose-50 dark:bg-rose-500/10",
  },
];

export function WhyNexio() {
  return (
    <section className="py-16 sm:py-24 relative" id="why-nexio">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 lg:sticky lg:top-32"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Why Choose Nexio?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              We don't just write code. We architect solutions that solve real
              business problems and create lasting competitive advantages.
            </p>
            <div className="w-20 h-1 bg-primary rounded-full" />
          </motion.div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-x-8 gap-y-7 sm:gap-y-8 w-full">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 group"
              >
                <div className={`mt-0.5 w-10 h-10 flex-shrink-0 rounded-xl ${reason.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <reason.Icon size={18} className={reason.color} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1.5">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
