import { motion } from "framer-motion";
import { ArrowRight, Globe, Shield, Zap, Cloud, Cpu, Lock } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] pt-32 pb-20 flex items-center overflow-hidden" id="home">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-primary/30 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="flex flex-col items-start text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 dark:bg-primary/10 text-primary text-sm font-medium"
            >
              <Zap size={14} className="fill-primary" />
              Digital Transformation Experts
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight"
            >
              Transforming <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Businesses
              </span>{" "}
              <br />
              Through Technology
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed"
            >
              We help businesses build, automate, secure, and scale through
              intelligent digital solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-medium transition-all hover:scale-105 shadow-[0_8px_30px_rgba(37,99,235,0.24)] flex items-center gap-2">
                Book a Consultation
                <ArrowRight size={18} />
              </button>
              <button className="bg-transparent hover:bg-secondary border border-border text-foreground px-8 py-4 rounded-full font-medium transition-colors">
                Explore Services
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex items-center gap-6 pt-8 border-t border-border w-full mt-4"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                <Globe size={16} className="text-primary" /> Global Delivery
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                <Shield size={16} className="text-primary" /> Enterprise Grade
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                <Zap size={16} className="text-primary" /> 24/7 Support
              </div>
            </motion.div>
          </div>

          {/* Right Column: Custom Illustration Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[600px] w-full hidden lg:block perspective-1000"
          >
            {/* Center core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            
            {/* Card 1: AI Solutions */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[10%] left-[10%] w-64 glass-card rounded-2xl p-5 z-20 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-500">
                  <Cpu size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">AI Solutions</h3>
                  <p className="text-xs text-muted-foreground">Neural Networks Active</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[85%] rounded-full" />
                </div>
                <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
                  <span>Efficiency</span>
                  <span className="text-blue-500">+85%</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Cloud Infrastructure */}
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[30%] right-[5%] w-72 glass-card rounded-2xl p-5 z-10 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                  <Cloud size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Cloud Infrastructure</h3>
                  <p className="text-xs text-muted-foreground">Global Edge Network</p>
                </div>
              </div>
              <div className="flex items-end gap-2 h-16 mt-4">
                {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                  <div key={i} className="flex-1 bg-secondary rounded-t-sm relative group overflow-hidden">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: i * 0.1 + 0.5 }}
                      className="absolute bottom-0 left-0 right-0 bg-primary/80 rounded-t-sm"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Card 3: Cybersecurity */}
            <motion.div
              animate={{ y: [0, -25, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-[20%] left-[20%] w-60 glass-card rounded-2xl p-5 z-30 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                  <Lock size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Cybersecurity</h3>
                  <p className="text-xs text-emerald-500">System Secure</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="bg-secondary/50 rounded-lg p-2 text-center">
                  <div className="text-xs text-muted-foreground mb-1">Threats</div>
                  <div className="text-sm font-semibold">0 blocked</div>
                </div>
                <div className="bg-secondary/50 rounded-lg p-2 text-center">
                  <div className="text-xs text-muted-foreground mb-1">Uptime</div>
                  <div className="text-sm font-semibold text-emerald-500">99.99%</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Connection Lines */}
            <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 600 600">
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.2 }}
                transition={{ duration: 2, delay: 1 }}
                d="M 200 150 Q 350 250 450 250" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeDasharray="4 4" 
                className="text-primary"
              />
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.2 }}
                transition={{ duration: 2, delay: 1.5 }}
                d="M 250 450 Q 350 350 450 300" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeDasharray="4 4" 
                className="text-primary"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
