import { useState } from "react";
import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <section className="py-20 lg:py-28 px-4 sm:px-6 relative overflow-hidden bg-background" id="contact">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-[36px] overflow-hidden relative shadow-2xl shadow-blue-600/20 border border-blue-400/20">
          {/* Ambient Lighting Accents */}
          <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-sky-400/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-indigo-900/40 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15)_0%,transparent_50%)] pointer-events-none" />

          <div className="relative z-10 px-6 sm:px-12 py-16 sm:py-20 md:py-24 text-center flex flex-col items-center">


            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight max-w-3xl leading-tight"
            >
              Ready to Transform Your Digital Infrastructure?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-blue-100/90 mb-10 max-w-2xl leading-relaxed"
            >
              Partner with Nexio's elite engineering team to unlock modern technology, automate operations, and scale your growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <button
                onClick={() => setFormOpen(true)}
                className="group inline-flex items-center gap-3 bg-white text-blue-700 hover:text-blue-800 hover:bg-blue-50 px-10 py-4 sm:py-4.5 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 shadow-2xl shadow-black/25 active:scale-95 cursor-pointer"
              >
                <span>Schedule a Free Strategy Call</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactForm open={formOpen} onClose={() => setFormOpen(false)} />
    </>
  );
}

