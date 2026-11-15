import { motion } from "framer-motion";
import { Earth, Code2, ShieldCheck, Cpu, Target, Users, Check } from "lucide-react";

const reasons = [
  {
    Icon: Earth,
    title: "Global Delivery Capability",
    desc: "Access top-tier engineering talent and cross-border delivery expertise built for worldwide scale.",
    wide: true,
  },
  {
    Icon: Code2,
    title: "Modern Tech Architecture",
    desc: "Cutting-edge frameworks, serverless systems, and cloud-native practices for future-proof software.",
    wide: false,
  },
  {
    Icon: ShieldCheck,
    title: "Security-First Engineering",
    desc: "Enterprise security protocols and zero-trust safeguards embedded at every layer.",
    wide: false,
  },
  {
    Icon: Cpu,
    title: "AI-Native Innovation",
    desc: "Deep machine learning and generative AI models that eliminate manual operational overhead.",
    wide: false,
  },
  {
    Icon: Target,
    title: "Business Outcome Focused",
    desc: "Technology engineered exclusively to accelerate your key metrics, ROI, and user growth.",
    wide: false,
  },
  {
    Icon: Users,
    title: "Long-Term Strategic Partner",
    desc: "We operate as an extension of your leadership team to drive continuous product evolution and success.",
    wide: true,
  },
];

export function WhyNexio() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-background" id="why-nexio">
      {/* Single soft ambient wash so the glass has something to refract */}
      <div className="absolute top-0 right-0 w-[36rem] h-[36rem] bg-primary/[0.06] dark:bg-primary/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-start">
          {/* Left Column Header */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:w-5/12 md:sticky md:top-32"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Why Choose nexio?
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

          {/* Right Column — Bento Cards */}
          <div className="md:w-7/12 grid sm:grid-cols-2 gap-4 w-full">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: "easeOut" }}
                className={`group relative rounded-[20px] border border-foreground/[0.08]
                  bg-white/50 dark:bg-white/[0.03] backdrop-blur-xl
                  transition-colors duration-300
                  hover:border-primary/25 hover:bg-white/70 dark:hover:bg-white/[0.05]
                  ${reason.wide ? "sm:col-span-2" : ""}`}
              >
                {/* Hairline inner highlight */}
                <div className="pointer-events-none absolute inset-0 rounded-[20px] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.45)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]" />

                <div className={`relative p-5 ${reason.wide ? "flex items-center gap-5" : ""}`}>
                  {/* Icon chip */}
                  <div
                    className={`shrink-0 rounded-xl border border-foreground/[0.08] bg-background/70 dark:bg-white/[0.05]
                      flex items-center justify-center text-primary
                      transition-colors duration-300 group-hover:border-primary/25
                      ${reason.wide ? "w-11 h-11" : "w-10 h-10 mb-4"}`}
                  >
                    <reason.Icon size={reason.wide ? 19 : 17} strokeWidth={1.75} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-[15px] font-semibold tracking-tight mb-1.5">
                      {reason.title}
                    </h3>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">
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
