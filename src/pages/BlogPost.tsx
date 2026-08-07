import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { blogPosts, type BlogPost } from "@/data/resources";
import { useSeo } from "@/lib/seo";
import { articleSchema, webPageSchema } from "@/lib/schema";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useRoute } from "wouter";
import { CTASection } from "@/components/CTASection";

function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export default function BlogPost() {
  const [, params] = useRoute("/resources/:slug");
  const slug = params?.slug ?? "";
  const post = getPostBySlug(slug);

  useSeo({
    title: post?.title ?? "Article Not Found",
    description:
      post?.excerpt ??
      "Explore insights on technology, engineering, and digital strategy from Nexio Global.",
    path: `/resources/${slug}`,
    type: "article",
    image: post?.image,
    imageAlt: post?.title,
    schema: post
      ? [
          articleSchema({
            title: post.title,
            description: post.excerpt,
            path: `/resources/${post.slug}`,
            image: post.image,
            datePublished: post.date,
          }),
          webPageSchema({
            name: `${post.title} — Nexio Global`,
            description: post.excerpt,
            path: `/resources/${post.slug}`,
            breadcrumbs: [
              { name: "Home", path: "/" },
              { name: "Resources", path: "/resources" },
              { name: post.title, path: `/resources/${post.slug}` },
            ],
          }),
        ]
      : [],
  });

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground font-sans">
        <Navbar />
        <main id="main-content" className="pt-40 pb-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist or has been moved.</p>
          <Link href="/resources">
            <span className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors cursor-pointer">
              <ArrowLeft size={16} />
              Back to Resources
            </span>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main id="main-content">
        {/* Article Hero */}
        <section className="pt-28 sm:pt-36 pb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-emerald-500/5" />
          <div className="max-w-4xl mx-auto px-6 relative">
            <Breadcrumbs
              items={[
                { name: "Resources", path: "/resources" },
                { name: post.title, path: `/resources/${post.slug}` },
              ]}
            />
            <Link href="/resources">
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6 cursor-pointer">
                <ArrowLeft size={15} />
                Back to Resources
              </span>
            </Link>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={15} aria-hidden="true" />
                  {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={15} aria-hidden="true" />
                  {post.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-6">
            <img
              src={post.image}
              alt={post.title}
              width={1600}
              height={900}
              className="w-full rounded-2xl object-cover aspect-video"
              loading="eager"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* Article Body */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-6">
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">{post.excerpt}</p>
              {post.content.map((paragraph, i) => (
                <p
                  key={i}
                  className={
                    i === post.content.length - 1
                      ? "leading-relaxed text-foreground/80"
                      : "leading-relaxed text-foreground/80 mb-6"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </motion.article>
          </div>
        </section>

        {/* Related Posts (Internal Linking) */}
        <section className="py-16 bg-gray-50/70 dark:bg-card/20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedPosts.map((related) => (
                <Link key={related.slug} href={`/resources/${related.slug}`}>
                  <div className="group h-full bg-white dark:bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/40 transition-all duration-300 cursor-pointer">
                    <div className="h-40 overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.title}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="mt-3 mb-2 line-clamp-2 text-base font-bold group-hover:text-primary transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{related.excerpt}</p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-3">
                        Read more
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
