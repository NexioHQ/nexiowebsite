import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Deep dive into your business goals, current architecture, and operational bottlenecks."
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Formulate a comprehensive roadmap and select the optimal technology stack."
  },
  {
    num: "03",
    title: "Development",
    desc: "Iterative, agile execution with transparent communication and milestones."
  },
  {
    num: "04",
    title: "Deployment",
    desc: "Secure, zero-downtime launches backed by rigorous QA and testing."
  },
  {
    num: "05",
    title: "Continuous Support",
    desc: "Proactive monitoring, maintenance, and iterative scaling."
  }
];

export function ProcessSection() {
  return (
    <section className="py-32 bg-gray-50/50 dark:bg-card/20 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Proven Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A methodology refined over hundreds of enterprise deployments. Predictable, transparent, and focused on outcomes.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute top-[45px] left-0 right-0 h-[2px] bg-border z-0">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-primary origin-left"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-row lg:flex-col gap-6 lg:gap-8 items-start"
              >
                {/* Number Badge */}
                <div className="relative">
                  <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-white dark:bg-gray-900 border-4 border-gray-50 dark:border-card flex items-center justify-center shadow-lg flex-shrink-0 z-10 relative">
                    <span className="text-xl lg:text-3xl font-bold text-primary">{step.num}</span>
                  </div>
                  {/* Connecting line mobile */}
                  {i !== steps.length - 1 && (
                    <div className="lg:hidden absolute top-16 left-1/2 -translate-x-1/2 w-[2px] h-full bg-border -z-10" />
                  )}
                </div>

                <div className="pt-2 lg:pt-0">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
