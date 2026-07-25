import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Layers } from "lucide-react";
import { workItems } from "@/data/work";

export function FeaturedWork() {
  const featured = workItems.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden" id="work">
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Work That Speaks for Itself
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse of the products we design and engineer, from analytics platforms to
            AI-powered experiences.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white dark:bg-card border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-700 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 text-xs font-semibold bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-foreground px-3 py-1.5 rounded-full shadow-sm">
                  <Layers size={11} className="text-primary" />
                  {item.type}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                  {item.category}
                </p>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mt-12"
        >
          <Link href="/resources">
            <button className="inline-flex items-center gap-2 border border-border hover:border-primary text-foreground hover:text-primary px-8 py-3.5 rounded-full font-semibold text-sm transition-all group">
              View All Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
