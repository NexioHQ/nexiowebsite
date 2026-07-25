import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { blogPosts, caseStudies } from "@/data/resources";
import { Calendar, Clock, ArrowRight, Building2, TrendingUp } from "lucide-react";

type Tab = "blog" | "case-studies";

export default function Resources() {
  const [activeTab, setActiveTab] = useState<Tab>("blog");

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
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                <span className="text-primary">Resources</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Insights, guides, and success stories from our team. Stay ahead with the latest 
                in technology, engineering, and digital strategy.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tabs */}
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-center mb-12">
              <div className="inline-flex bg-gray-100 dark:bg-gray-800/50 rounded-full p-1">
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
                <button
                  onClick={() => setActiveTab("case-studies")}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeTab === "case-studies"
                      ? "bg-white dark:bg-gray-900 text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Case Studies
                </button>
              </div>
            </div>

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
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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

            {/* Case Studies */}
            {activeTab === "case-studies" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {caseStudies.map((study, i) => (
                  <motion.article
                    key={study.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group bg-white dark:bg-card border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-80 aspect-[16/9] md:aspect-auto overflow-hidden flex-shrink-0">
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6 md:p-8 flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Building2 size={12} />
                            {study.industry}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {study.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {study.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {study.results.map((result) => (
                            <span
                              key={result}
                              className="inline-flex items-center gap-1 text-xs font-medium bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 px-3 py-1.5 rounded-full"
                            >
                              <TrendingUp size={11} />
                              {result}
                            </span>
                          ))}
                        </div>
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
