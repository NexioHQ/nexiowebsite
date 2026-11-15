import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import bgImage from "../assets/bg.jpg";

export function Hero() {
  return (
    <section className="relative min-h-0 sm:min-h-[100dvh] pt-24 sm:pt-36 pb-12 sm:pb-20 flex items-center overflow-hidden bg-[#0B1120]" id="home">
      {/* Background with dark overlay & subtle gradient lighting */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0">
          <img
            src={bgImage}
            alt=""
            className="w-full h-full object-cover"
            style={{ opacity: 0.65 }}
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120]/70 via-[#0B1120]/50 to-[#0B1120]" />
        </div>

        {/* Dynamic Glow Spotlights */}
        <div className="absolute top-1/3 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 w-[600px] sm:block sm:w-[900px] h-[350px] sm:h-[450px] bg-gradient-to-r from-blue-600/20 via-sky-500/15 to-violet-600/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/4 right-10 hidden w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none sm:block" />

        {/* SVG Grid */}
        <div className="absolute inset-0 hidden overflow-hidden pointer-events-none sm:block">
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.15] animate-grid-shift"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
          >
            <defs>
              <pattern id="hero-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(96, 165, 250, 0.35)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>

          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0B1120] to-transparent" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 w-full relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.12] tracking-tight mb-5 sm:mb-6">
            <span className="sm:whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-700 drop-shadow-[0_0_35px_rgba(37,99,235,0.45)]">
              Build, Automate &amp; Secure
            </span>
            <br />
            Your Business
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg md:text-xl text-blue-100/70 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10">
            Digital solutions, intelligent automation, and cybersecurity for ambitious businesses.
          </p>

          {/* CTA Buttons & Stats/Trust Highlights */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <span className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-sky-500 text-white px-5 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 cursor-pointer shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.03] active:scale-[0.98]">
                Book a Consultation
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
            <a
              href="#services"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 sm:px-7 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-medium text-blue-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] hover:border-white/[0.2] backdrop-blur-md transition-all duration-300"
            >
              Explore Capabilities
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-3 gap-2 sm:gap-6 max-w-3xl mx-auto text-center">
            <div>
              <div className="text-base sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">100%</div>
              <div className="text-[9px] leading-tight sm:text-xs md:text-sm text-blue-200/60 font-medium mt-0.5">Reliability &amp; Uptime</div>
            </div>
            <div>
              <div className="flex items-center justify-center h-6 sm:h-8 md:h-9">
                <div className="text-base sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">Global</div>
              </div>
              <div className="text-[9px] leading-tight sm:text-xs md:text-sm text-blue-200/60 font-medium mt-0.5">Delivery</div>
            </div>
            <div>
              <div className="text-base sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">24/7</div>
              <div className="text-[9px] leading-tight sm:text-xs md:text-sm text-blue-200/60 font-medium mt-0.5">Dedicated Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


