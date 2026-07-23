import { motion } from "framer-motion";
import { Globe2, Code2, Lock, HeadphonesIcon } from "lucide-react";

const stats = [
  {
    Icon: Globe2,
    title: "Global Delivery",
    desc: "Teams operating across major time zones to deliver consistently.",
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-500/10",
  },
  {
    Icon: Code2,
    title: "Modern Tech Stack",
    desc: "Built on scalable, future-proof frameworks and cloud infrastructure.",
    color: "text-violet-500",
    bg: "bg-violet-50 dark:bg-violet-500/10",
  },
  {
    Icon: Lock,
    title: "Secure Solutions",
    desc: "Enterprise-grade security baked into every solution we build.",
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-500/10",
  },
  {
    Icon: HeadphonesIcon,
    title: "End-to-End Support",
    desc: "From discovery to deployment and continuous maintenance.",
    color: "text-amber-500",
    bg: "bg-amber-50 dark:bg-amber-500/10",
  },
];

export function TrustSection() {
  return (
    <section className="py-20 relative overflow-hidden" id="about">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
            Trusted by ambitious businesses worldwide.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-7 hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className={`w-11 h-11 rounded-xl ${stat.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <stat.Icon size={20} className={stat.color} strokeWidth={1.75} />
              </div>
              <h3 className="font-semibold text-base mb-2 text-foreground">
                {stat.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
