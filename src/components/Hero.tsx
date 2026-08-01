import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import bgImage from "../assets/bg.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] pt-28 sm:pt-32 pb-16 sm:pb-20 flex items-center overflow-hidden bg-[#0B1120]" id="home">
      <div className="absolute inset-0 z-0">
        {/* Background image with dark overlay for text readability */}
        <div className="absolute inset-0">
          <img
            src={bgImage}
            alt=""
            className="w-full h-full object-cover"
            style={{ opacity: 0.7 }}
          />
          <div className="absolute inset-0 bg-[#0B1120]/40" />
        </div>
        {/* SVG patterns and effects on top */}
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.12] animate-grid-shift"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
          >
            <defs>
              <pattern id="hero-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(96, 165, 250, 0.3)" strokeWidth="0.5" />
              </pattern>
              <radialGradient id="hero-glow" cx="50%" cy="45%" r="55%">
                <stop offset="0%" stopColor="rgba(37, 99, 235, 0.12)" />
                <stop offset="50%" stopColor="rgba(37, 99, 235, 0.04)" />
                <stop offset="100%" stopColor="rgba(11, 17, 32, 0)" />
              </radialGradient>
              <radialGradient id="corner-glow" cx="100%" cy="0%" r="60%">
                <stop offset="0%" stopColor="rgba(96, 165, 250, 0.08)" />
                <stop offset="100%" stopColor="rgba(11, 17, 32, 0)" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
            <rect width="100%" height="100%" fill="url(#hero-glow)" />
            <rect width="100%" height="100%" fill="url(#corner-glow)" />
          </svg>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-blue-500/10 rounded-full animate-float-slow" style={{ animationDelay: "0s" }} />
          <div className="absolute bottom-1/3 left-1/4 w-48 h-48 border border-blue-400/8 rounded-full animate-float-slow" style={{ animationDelay: "-2s" }} />
          <div className="absolute top-1/2 right-1/3 w-32 h-32 border border-sky-400/6 rounded-full animate-float-slow" style={{ animationDelay: "-4s" }} />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0B1120] to-transparent" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 w-full relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.15] tracking-tight mb-6"
          >
            <span className="whitespace-nowrap">Transforming Businesses</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1d4ed8] via-[#38bdf8] to-[#60a5fa] drop-shadow-[0_0_20px_rgba(59,130,246,0.9)] drop-shadow-[0_0_45px_rgba(56,189,248,0.55)]">Through Technology</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl text-blue-100/60 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            We help businesses build, automate, secure, and scale through intelligent digital solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <Link href="/contact">
              <span className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:scale-[1.02]">
                Book a Consultation
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
