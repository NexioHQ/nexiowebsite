import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "James Harrington",
    role: "CTO",
    company: "Vantage Systems",
    stars: 5,
    quote:
      "Nexio completely transformed our cloud infrastructure. The migration was seamless, zero downtime, and our costs dropped by 40%. Their team communicates with precision — no fluff, just results.",
    avatar: "JH",
    color: "from-blue-500/20 to-blue-600/5",
    glow: "rgba(59,130,246,0.15)",
  },
  {
    name: "Sofia Mendes",
    role: "Head of Operations",
    company: "Elaris Global",
    stars: 5,
    quote:
      "The AI automation suite Nexio built us eliminated 60% of our manual workflows within the first month. I didn't think ROI like that was possible in such a short timeline.",
    avatar: "SM",
    color: "from-violet-500/20 to-violet-600/5",
    glow: "rgba(139,92,246,0.15)",
  },
  {
    name: "Daniel Okonkwo",
    role: "CEO",
    company: "Pinnacle Fintech",
    stars: 5,
    quote:
      "We needed enterprise-grade cybersecurity fast — regulatory deadline looming. Nexio's team assessed, remediated, and hardened our entire stack in six weeks. Exceptional.",
    avatar: "DO",
    color: "from-cyan-500/20 to-cyan-600/5",
    glow: "rgba(6,182,212,0.15)",
  },
  {
    name: "Laura Kim",
    role: "VP Product",
    company: "NovaSpark Inc.",
    stars: 5,
    quote:
      "Nexio rebuilt our SaaS platform from scratch. The new architecture handles 10x the load at a fraction of the cost. Their engineers are genuinely senior — they caught design flaws we didn't even know we had.",
    avatar: "LK",
    color: "from-emerald-500/20 to-emerald-600/5",
    glow: "rgba(16,185,129,0.15)",
  },
  {
    name: "Rayan Al-Farsi",
    role: "Director of Engineering",
    company: "Meridian Corp",
    stars: 5,
    quote:
      "What sets Nexio apart is their long-term thinking. They didn't just ship features — they gave us a 3-year technology roadmap that our board now uses as a strategic asset.",
    avatar: "RA",
    color: "from-orange-400/20 to-orange-500/5",
    glow: "rgba(251,146,60,0.15)",
  },
  {
    name: "Priya Nair",
    role: "Chief Digital Officer",
    company: "Helios Retail",
    stars: 5,
    quote:
      "From digital strategy to execution, Nexio acted as a true partner. They integrated with our team, respected our culture, and delivered a transformation we're proud of.",
    avatar: "PN",
    color: "from-pink-500/20 to-pink-600/5",
    glow: "rgba(236,72,153,0.15)",
  },
];

function LiquidGlassCard({
  t,
  i,
}: {
  t: (typeof testimonials)[0];
  i: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: i * 0.08 }}
      whileHover={{ y: -6, scale: 1.015 }}
      className="relative group h-full"
      style={{ filter: `drop-shadow(0 8px 32px ${t.glow})` }}
    >
      {/* Liquid-glass shell */}
      <div
        className="relative rounded-3xl border border-white/15 dark:border-white/10 overflow-hidden h-full flex flex-col p-7"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}
      >
        {/* Colour accent blob top-left */}
        <div
          className={`absolute -top-6 -left-6 w-28 h-28 bg-gradient-to-br ${t.color} rounded-full blur-2xl pointer-events-none opacity-80`}
        />
        {/* Inner highlight rim */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none ring-1 ring-inset ring-white/10" />

        {/* Stars */}
        <div className="flex gap-0.5 mb-5 relative z-10">
          {Array.from({ length: t.stars }).map((_, s) => (
            <Star
              key={s}
              size={13}
              className="fill-amber-400 text-amber-400"
            />
          ))}
        </div>

        {/* Quote icon */}
        <Quote
          size={28}
          className="text-primary/40 mb-3 relative z-10 flex-shrink-0"
        />

        {/* Quote text */}
        <p className="text-foreground/80 dark:text-white/75 text-sm leading-relaxed flex-1 relative z-10">
          "{t.quote}"
        </p>

        {/* Author row */}
        <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/10 relative z-10">
          {/* Avatar */}
          <div
            className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-semibold text-white bg-gradient-to-br ${t.color} border border-white/20`}
            style={{ backdropFilter: "blur(8px)" }}
          >
            {t.avatar}
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground leading-tight">
              {t.name}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {t.role} · {t.company}
            </p>
          </div>
        </div>

        {/* Hover shimmer */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-white/[0.03] pointer-events-none" />
        {/* Bottom shine line */}
        <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </motion.div>
  );
}

export function TestimonialsSection() {
  return (
    <section
      className="py-32 relative overflow-hidden"
      id="testimonials"
    >
      {/* Subtle section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">
            Client Stories
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Trusted by Leaders Who Deliver
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From fintech to retail, our clients move faster, scale smarter, and
            sleep better — because Nexio is behind the technology.
          </p>
        </motion.div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <LiquidGlassCard key={t.name} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
