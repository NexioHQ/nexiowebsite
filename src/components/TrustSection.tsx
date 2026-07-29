import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Products Shipped" },
  { value: "98%", label: "On-Time Delivery" },
  { value: "30+", label: "Enterprise Clients" },
  { value: "3x", label: "Avg. Performance Gain" },
];

export function TrustSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#0B1120] border-y border-blue-900/20">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <p className="text-blue-300/60 text-xs font-medium tracking-[0.2em] uppercase font-mono mb-3">
            By the Numbers
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Trusted by ambitious businesses worldwide.
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl sm:text-5xl font-bold text-white font-display tracking-tight mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-blue-200/50 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
