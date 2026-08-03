import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WorkCard } from "@/components/WorkCard";
import { blogPosts } from "@/data/resources";
import { workItems } from "@/data/work";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useSeo } from "@/lib/seo";
import { webPageSchema } from "@/lib/schema";

export default function Resources() {
  useSeo({
    title: "Resources",
    description:
      "Explore Nexio Global's portfolio of products and insights on technology, engineering, and digital strategy. Stay ahead with our latest work and blog articles.",
    path: "/resources",
    schema: [
      webPageSchema({
        name: "Resources — Nexio Global",
        description:
          "Explore Nexio Global's portfolio of products and insights on technology, engineering, and digital strategy.",
        path: "/resources",
        breadcrumbs: [
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
        ],
      }),
    ],
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-emerald-500/5" />
          <div className="max-w-7xl mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                <span className="text-primary">Resources</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Explore the products we craft and the insights we share. Stay ahead with the
                latest in technology, engineering, and digital strategy.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tabs */}
        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <Tabs defaultValue="work" className="w-full">
              <div className="mb-12 flex justify-center">
                <TabsList className="h-auto rounded-full bg-gray-100 p-1 dark:bg-gray-800/50">
                  <TabsTrigger
                    value="work"
                    className="rounded-full px-6 py-2.5 text-sm font-medium"
                  >
                    Our Work
                  </TabsTrigger>
                  <TabsTrigger
                    value="blog"
                    className="rounded-full px-6 py-2.5 text-sm font-medium"
                  >
                    Blog Articles
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="work" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="mx-auto mb-10 max-w-xl text-center text-sm text-muted-foreground">
                    A selection of product experiences designed and engineered by our team across
                    web, mobile, cloud, and AI.
                  </p>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {workItems.map((item, i) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                      >
                        <WorkCard item={item} variant="expandable" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="blog" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                  {blogPosts.map((post, i) => (
                    <motion.article
                      key={post.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:border-gray-300 hover:shadow-xl dark:border-gray-800 dark:bg-card dark:hover:border-gray-700"
                    >
                      <div className="aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-gray-800">
                        <img
                          src={post.image}
                          alt={post.title}
                          width={1600}
                          height={900}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-6">
                        <div className="mb-3 flex items-center gap-3">
                          <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                            {post.category}
                          </span>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock size={12} aria-hidden="true" />
                            {post.readTime}
                          </div>
                        </div>
                        <h3 className="mb-2 line-clamp-2 text-lg font-bold transition-colors group-hover:text-primary">
                          {post.title}
                        </h3>
                        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Calendar size={12} aria-hidden="true" />
                            {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                          </div>
                          <ArrowRight
                            size={16}
                            aria-hidden="true"
                            className="text-primary opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                          />
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
