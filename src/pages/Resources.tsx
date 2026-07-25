import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { blogPosts } from "@/data/resources";
import { workItems } from "@/data/work";
import { Calendar, Clock, ArrowRight, Layers } from "lucide-react";

type Tab = "work" | "blog";

export default function Resources() {
  const [activeTab, setActiveTab] = useState<Tab>("work");

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
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
          <div className="max-w-7xl mx-auto px-5 sm:px-6">
            <div className="flex justify-center mb-12">
              <div className="inline-flex bg-gray-100 dark:bg-gray-800/50 rounded-full p-1">
                <button
                  onClick={() => setActiveTab("work")}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeTab === "work"
                      ? "bg-white dark:bg-gray-900 text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Our Work
                </button>
                <button
                  onClick={() => setActiveTab("blog")}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeTab === "blog"
                      ? "bg-white dark:bg-gray-900 text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Blog Articles
                </button>
              </div>
            </div>

            {/* Our Work */}
            {activeTab === "work" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-center text-sm text-muted-foreground mb-10 max-w-xl mx-auto">
                  A selection of product experiences designed and engineered by our team across
                  web, mobile, cloud, and AI.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {workItems.map((item, i) => (
                    <motion.article
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
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
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.stack.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs font-medium bg-gray-100 dark:bg-gray-800 text-foreground/70 px-2.5 py-1 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Blog Articles */}
            {activeTab === "blog" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {blogPosts.map((post, i) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="group bg-white dark:bg-card border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 cursor-pointer"
                  >
                    <div className="aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-gray-800">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock size={12} />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Calendar size={12} />
                          {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                        </div>
                        <ArrowRight size={16} className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
