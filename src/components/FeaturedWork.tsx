import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WorkCard } from "@/components/WorkCard";
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
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
          className="flex justify-center mt-12"
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group rounded-full px-8 hover:border-primary hover:text-primary"
          >
            <Link href="/resources">
              View All Work
              <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
