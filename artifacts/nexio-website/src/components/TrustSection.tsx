import { motion } from "framer-motion";

const stats = [
  {
    iconUrl: "https://img.icons8.com/fluency/96/worldwide-location.png",
    title: "Global Delivery",
    desc: "Teams operating across major time zones to deliver consistently.",
  },
  {
    iconUrl: "https://img.icons8.com/fluency/96/source-code.png",
    title: "Modern Tech Stack",
    desc: "Built on scalable, future-proof frameworks and cloud infrastructure.",
  },
  {
    iconUrl: "https://img.icons8.com/fluency/96/security-checked.png",
    title: "Secure Solutions",
    desc: "Enterprise-grade security baked into every line of code we write.",
  },
  {
    iconUrl: "https://img.icons8.com/fluency/96/customer-support.png",
    title: "End-to-End Support",
    desc: "From discovery to deployment and continuous maintenance.",
  },
];

export function TrustSection() {
  return (
    <section className="py-24 relative overflow-hidden" id="about">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
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
              className="glass-card rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={stat.iconUrl}
                  alt={stat.title}
                  className="w-7 h-7 object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">
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
