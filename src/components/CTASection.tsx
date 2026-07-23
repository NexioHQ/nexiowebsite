import { useState } from "react";
import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";

export function CTASection() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <section className="py-24 px-6 relative overflow-hidden" id="contact">
        <div className="max-w-5xl mx-auto bg-primary rounded-[32px] overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-[60px] translate-y-1/3 -translate-x-1/4" />

          <div className="relative z-10 px-8 py-20 md:py-24 text-center flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight max-w-2xl"
            >
              Ready to Transform Your Business?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-white/80 mb-10 max-w-xl"
            >
              Partner with Nexio and unlock the power of modern technology. Our experts are ready to build your next strategic advantage.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <button
                onClick={() => setFormOpen(true)}
                className="bg-white text-primary hover:bg-gray-50 px-10 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
              >
                Let's Talk
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactForm open={formOpen} onClose={() => setFormOpen(false)} />
    </>
  );
}
