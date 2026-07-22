import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Global Delivery",
    desc: "Access top-tier talent and delivery capabilities across borders.",
  },
  {
    title: "Modern Technology Stack",
    desc: "We leverage the latest frameworks to build scalable, future-proof systems.",
  },
  {
    title: "Security First",
    desc: "Enterprise-grade security measures embedded at every level of development.",
  },
  {
    title: "AI-Driven Solutions",
    desc: "Harnessing artificial intelligence to automate and innovate your operations.",
  },
  {
    title: "Business Focused",
    desc: "Technology aligned purely with your core business objectives and ROI.",
  },
  {
    title: "Long-Term Partnership",
    desc: "We build lasting relationships to support your ongoing digital evolution.",
  }
];

export function WhyNexio() {
  return (
    <section className="py-32 relative" id="industries">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 sticky top-32"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Why Leading Businesses Choose Nexio
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We don't just write code. We architect solutions that solve real business problems and create lasting competitive advantages.
            </p>
            <div className="w-20 h-1 bg-primary rounded-full" />
          </motion.div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-x-8 gap-y-12">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="mt-1">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
