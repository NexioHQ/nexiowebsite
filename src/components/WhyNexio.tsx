import { motion } from "framer-motion";
import { Globe2, Code2, ShieldCheck, Cpu, Target, Users, Check } from "lucide-react";

const reasons = [
  {
    Icon: Globe2,
    title: "Global Delivery Capability",
    desc: "Access top-tier engineering talent and cross-border delivery expertise built for worldwide scale.",
    color: "text-blue-500 dark:text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
    glow: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]",
  },
  {
    Icon: Code2,
    title: "Modern Tech Architecture",
    desc: "We leverage cutting-edge frameworks, serverless systems, and cloud-native practices to build future-proof software.",
    color: "text-violet-500 dark:text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20",
    glow: "group-hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]",
  },
  {
    Icon: ShieldCheck,
    title: "Security-First Engineering",
    desc: "Enterprise security protocols, data protection standards, and zero-trust safeguards embedded at every layer.",
    color: "text-emerald-500 dark:text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
    glow: "group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]",
  },
  {
    Icon: Cpu,
    title: "AI-Native Innovation",
    desc: "Harnessing deep machine learning and generative AI models to transform manual operational overhead.",
    color: "text-cyan-500 dark:text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
    glow: "group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]",
  },
  {
    Icon: Target,
    title: "Business Outcome Focused",
    desc: "Technology architecture engineered exclusively to accelerate your key metrics, ROI, and user growth.",
    color: "text-amber-500 dark:text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
    glow: "group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]",
  },
  {
    Icon: Users,
    title: "Long-Term Strategic Partner",
    desc: "We operate as an extension of your leadership team to drive continuous product evolution and success.",
    color: "text-rose-500 dark:text-rose-400",
    bg: "bg-rose-500/10 border-rose-500/20",
    glow: "group-hover:shadow-[0_0_20px_rgba(244,63,94,0.2)]",
  },
];

export function WhyNexio() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-background" id="why-nexio">
      {/* Background Soft Glow Divider */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Column Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-5/12 lg:sticky lg:top-32"
          >

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Why Choose Nexio?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
              We don't just write software. We architect resilient systems that solve core complex business challenges and build enduring market advantage.
            </p>
            <div className="space-y-3 pt-4 border-t border-border">
              <div className="flex items-center gap-3 text-sm font-medium text-foreground">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span>Transparent Agile Milestones & Delivery</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-foreground">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span>End-to-End Ownership & SLA Guarantees</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column Reason Cards Grid */}
          <div className="lg:w-7/12 grid sm:grid-cols-2 gap-5 w-full">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative p-6 rounded-2xl border border-gray-200/80 dark:border-white/10 bg-white/70 dark:bg-card/60 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:shadow-xl dark:hover:bg-card/90"
              >
                <div className="flex gap-4">
                  <div
                    className={`w-12 h-12 flex-shrink-0 rounded-xl border ${reason.bg} ${reason.glow} flex items-center justify-center group-hover:scale-110 transition-all duration-300`}
                  >
                    <reason.Icon size={22} className={reason.color} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold mb-1.5 group-hover:text-primary transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

