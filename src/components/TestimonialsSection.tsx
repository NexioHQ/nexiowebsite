import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Chamara Perera",
    role: "CTO",
    company: "Softwave Technologies, Sri Lanka",
    stars: 5,
    quote:
      "Nexio rebuilt our entire core banking integration layer. The new system is three times faster, handles ten times the transaction volume, and the migration had zero downtime. A truly exceptional team.",
    avatar: "CP",
    color: "from-blue-500/20 to-blue-600/5",
    glow: "rgba(59,130,246,0.15)",
  },
  {
    name: "James Harrington",
    role: "CTO",
    company: "Vantage Systems, United Kingdom",
    stars: 5,
    quote:
      "Nexio completely transformed our cloud infrastructure. The migration was seamless and our costs dropped by 40%. Their team communicates with precision, no fluff, just results.",
    avatar: "JH",
    color: "from-violet-500/20 to-violet-600/5",
    glow: "rgba(139,92,246,0.15)",
  },
  {
    name: "Dilini Jayawardena",
    role: "CEO",
    company: "CloudMark Lanka, Sri Lanka",
    stars: 5,
    quote:
      "We approached Nexio to digitise our operations and the outcome exceeded our expectations. They understood our local market context and delivered a platform our customers genuinely love.",
    avatar: "DJ",
    color: "from-cyan-500/20 to-cyan-600/5",
    glow: "rgba(6,182,212,0.15)",
  },
  {
    name: "Sofia Mendes",
    role: "Head of Operations",
    company: "Elaris Global, United States",
    stars: 5,
    quote:
      "The AI automation suite Nexio built us eliminated 60% of our manual workflows within the first month. I didn't think ROI like that was possible in such a short timeline.",
    avatar: "SM",
    color: "from-emerald-500/20 to-emerald-600/5",
    glow: "rgba(16,185,129,0.15)",
  },
  {
    name: "Pradeep Gunasekara",
    role: "Director of Technology",
    company: "Nexgen Retail, Sri Lanka",
    stars: 5,
    quote:
      "From our e-commerce platform to our warehouse management system, Nexio handled everything with professionalism. They are a strategic partner in every sense of the word.",
    avatar: "PG",
    color: "from-amber-400/20 to-amber-500/5",
    glow: "rgba(251,191,36,0.15)",
  },
  {
    name: "Daniel Okonkwo",
    role: "CEO",
    company: "Pinnacle Fintech, Nigeria",
    stars: 5,
    quote:
      "We needed enterprise-grade cybersecurity fast with a regulatory deadline looming. Nexio assessed, remediated, and hardened our entire stack in six weeks. Exceptional execution.",
    avatar: "DO",
    color: "from-rose-500/20 to-rose-600/5",
    glow: "rgba(244,63,94,0.15)",
  },
];

const PER_PAGE = 3;

function TestimonialCard({ t, i }: { t: typeof testimonials[0]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: i * 0.06 }}
      whileHover={{ y: -5 }}
      className="relative group h-full"
      style={{ filter: `drop-shadow(0 6px 24px ${t.glow})` }}
    >
      <div
        className="relative rounded-2xl border border-gray-200/80 dark:border-white/10 overflow-hidden h-full flex flex-col p-7 bg-white dark:bg-card"
      >
        <div className={`absolute -top-5 -left-5 w-24 h-24 bg-gradient-to-br ${t.color} rounded-full blur-2xl pointer-events-none opacity-70`} />
        <div className="absolute inset-0 rounded-2xl pointer-events-none ring-1 ring-inset ring-black/5 dark:ring-white/5" />

        <div className="flex gap-0.5 mb-5 relative z-10">
          {Array.from({ length: t.stars }).map((_, s) => (
            <Star key={s} size={12} className="fill-amber-400 text-amber-400" />
          ))}
        </div>

        <Quote size={24} className="text-primary/30 mb-3 relative z-10 flex-shrink-0" />

        <p className="text-foreground/75 text-sm leading-relaxed flex-1 relative z-10">
          "{t.quote}"
        </p>

        <div className="flex items-center gap-3 mt-6 pt-5 border-t border-gray-100 dark:border-white/8 relative z-10">
          <div
            className={`w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white bg-gradient-to-br ${t.color}`}
          >
            {t.avatar}
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground leading-tight">{t.name}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{t.role}, {t.company}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function TestimonialsSection() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / PER_PAGE);
  const visible = testimonials.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-background" id="testimonials">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16 max-w-3xl mx-auto"
        >

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5 leading-tight">
            Trusted by Leaders Who Deliver
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our clients move faster, scale smarter, and build with confidence backed by Nexio engineering.
          </p>
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 min-h-[320px]"
          >
            {visible.map((t, i) => (
              <TestimonialCard key={t.name} t={t} i={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === page ? "bg-primary w-6" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
