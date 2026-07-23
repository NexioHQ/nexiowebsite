import { motion } from "framer-motion";
import { ArrowRight, Globe, Shield, Zap } from "lucide-react";
import heroBg from "@assets/download_1784735577002.jpg";

const serviceCards = [
  {
    iconUrl: "https://img.icons8.com/fluency/96/web.png",
    label: "Digital Solutions",
    desc: "Web apps, SaaS & custom software",
    color: "from-blue-500/25 to-blue-600/5",
    glow: "rgba(59,130,246,0.22)",
    float: [0, -12, 0] as [number, number, number],
    floatDuration: 6,
    delay: 0,
  },
  {
    iconUrl: "https://img.icons8.com/fluency/96/artificial-intelligence.png",
    label: "AI & Automation",
    desc: "Intelligent workflows & AI integrations",
    color: "from-violet-500/25 to-violet-600/5",
    glow: "rgba(139,92,246,0.22)",
    float: [0, 14, 0] as [number, number, number],
    floatDuration: 7,
    delay: 1,
  },
  {
    iconUrl: "https://img.icons8.com/fluency/96/cloud.png",
    label: "Cloud & Infrastructure",
    desc: "Scalable DevOps & managed hosting",
    color: "from-cyan-500/25 to-cyan-600/5",
    glow: "rgba(6,182,212,0.22)",
    float: [0, -10, 0] as [number, number, number],
    floatDuration: 8,
    delay: 2,
  },
  {
    iconUrl: "https://img.icons8.com/fluency/96/cyber-security.png",
    label: "Cybersecurity",
    desc: "Assessments, pen testing & managed security",
    color: "from-emerald-500/25 to-emerald-600/5",
    glow: "rgba(16,185,129,0.22)",
    float: [0, 16, 0] as [number, number, number],
    floatDuration: 6.5,
    delay: 1.5,
  },
];

export function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] pt-32 pb-20 flex items-center overflow-hidden"
      id="home"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        {/* Overlay — rich dark gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#010d1e]/92 via-[#031428]/82 to-[#010d1e]/55" />
        {/* Bottom fade to page background */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Radial glow over image */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column */}
          <div className="flex flex-col items-start text-left space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight"
            >
              Transforming <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Businesses
              </span>{" "}
              <br />
              Through Technology
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg lg:text-xl text-white/70 max-w-lg leading-relaxed"
            >
              We help businesses build, automate, secure, and scale through
              intelligent digital solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105 shadow-[0_8px_30px_rgba(37,99,235,0.4)] flex items-center gap-2">
                Book a Consultation
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-medium transition-all"
              >
                Explore Services
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="flex items-center gap-6 pt-4 border-t border-white/10 w-full"
            >
              <div className="flex items-center gap-2 text-sm text-white/60 font-medium">
                <Globe size={15} className="text-blue-400" /> Global Delivery
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60 font-medium">
                <Shield size={15} className="text-blue-400" /> Enterprise Grade
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60 font-medium">
                <Zap size={15} className="text-blue-400" /> 24/7 Support
              </div>
            </motion.div>
          </div>

          {/* Right Column — 2×2 service cards with PNG icons */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="hidden lg:grid grid-cols-2 gap-5 relative"
          >
            {/* ambient glow */}
            <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl pointer-events-none" />

            {serviceCards.map((card) => (
              <motion.div
                key={card.label}
                animate={{ y: card.float }}
                transition={{
                  duration: card.floatDuration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: card.delay,
                }}
                whileHover={{ scale: 1.04, y: -6 }}
                className="relative group cursor-default"
                style={{ filter: `drop-shadow(0 8px 32px ${card.glow})` }}
              >
                {/* Glass card */}
                <div
                  className="relative rounded-2xl overflow-hidden border border-white/15 h-full flex flex-col p-6"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.03) 100%)",
                    backdropFilter: "blur(22px)",
                    WebkitBackdropFilter: "blur(22px)",
                  }}
                >
                  {/* Colour accent blob */}
                  <div
                    className={`absolute top-0 left-0 w-24 h-24 bg-gradient-to-br ${card.color} rounded-br-full opacity-60 blur-xl pointer-events-none`}
                  />

                  {/* PNG icon */}
                  <div
                    className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-4 flex-shrink-0"
                    style={{
                      background: "rgba(255,255,255,0.10)",
                      border: "1px solid rgba(255,255,255,0.18)",
                    }}
                  >
                    <img
                      src={card.iconUrl}
                      alt={card.label}
                      className="w-8 h-8 object-contain"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="text-white font-semibold text-sm mb-1.5 leading-tight">
                    {card.label}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed">
                    {card.desc}
                  </p>

                  {/* Bottom shine */}
                  <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  {/* Hover shimmer */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/5 pointer-events-none rounded-2xl" />
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
