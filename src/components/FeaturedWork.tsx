import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WorkCard } from "@/components/WorkCard";
import { workItems } from "@/data/work";

export function FeaturedWork() {
  const featured = workItems.slice(0, 3);

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-background/50" id="work">
      {/* Background Soft Glow Spotlight */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 max-w-3xl mx-auto"
        >

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5 leading-tight">
            Work That Speaks for Itself
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A glimpse of the enterprise products, platforms, and intelligent digital experiences we design and engineer.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <WorkCard item={item} variant="compact" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mt-10"
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group rounded-full px-8 py-6 border-border hover:border-primary hover:bg-primary/5 hover:text-primary text-base font-semibold shadow-sm transition-all duration-300 hover:scale-[1.02]"
          >
            <Link href="/resources" className="flex items-center gap-2">
              View All Work & Case Studies
              <ArrowRight size={18} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

