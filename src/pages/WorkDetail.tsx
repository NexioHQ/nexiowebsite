import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { workItems, type WorkItem } from "@/data/work";
import { useSeo } from "@/lib/seo";
import { webPageSchema, collectionPageSchema, itemListSchema } from "@/lib/schema";
import { ArrowLeft, ArrowRight, CheckCircle2, Layers, Target } from "lucide-react";
import { Link, useRoute } from "wouter";

function getWorkItemBySlug(slug: string): WorkItem | undefined {
  return workItems.find((w) => w.slug === slug);
}

export default function WorkDetail() {
  const [, params] = useRoute("/resources/work/:slug");
  const slug = params?.slug ?? "";
  const item = getWorkItemBySlug(slug);

  useSeo({
    title: item?.title ?? "Project Not Found",
    description:
      item?.description ??
      "Explore Nexio Global's portfolio of digital products and case studies across web, mobile, cloud, and AI.",
    path: `/resources/work/${slug}`,
    image: item?.image,
    imageAlt: item?.imageAlt,
    schema: item
      ? [
          webPageSchema({
            name: `${item.title} — Nexio Global Portfolio`,
            description: item.description,
            path: `/resources/work/${item.slug}`,
            breadcrumbs: [
              { name: "Home", path: "/" },
              { name: "Resources", path: "/resources" },
              { name: "Our Work", path: "/resources" },
              { name: item.title, path: `/resources/work/${item.slug}` },
            ],
          }),
          itemListSchema(
            workItems.map((w) => ({
              name: w.title,
              url: `${"https://nexiogbl.com"}/resources/work/${w.slug}`,
            }))
          ),
        ]
      : [],
  });

  if (!item) {
    return (
      <div className="min-h-screen bg-background text-foreground font-sans">
        <Navbar />
        <main id="main-content" className="pt-40 pb-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist or has been moved.</p>
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

  const relatedProjects = workItems.filter((w) => w.slug !== item.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-28 sm:pt-36 pb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-emerald-500/5" />
          <div className="max-w-5xl mx-auto px-6 relative">
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Resources", path: "/resources" },
                { name: "Our Work", path: "/resources" },
                { name: item.title, path: `/resources/work/${item.slug}` },
              ]}
            />
            <Link href="/resources">
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6 cursor-pointer">
                <ArrowLeft size={15} />
                Back to Resources
              </span>
            </Link>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-4 inline-block">
                {item.category}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">{item.title}</h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">{item.description}</p>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="pb-12">
          <div className="max-w-5xl mx-auto px-6">
            <img
              src={item.image}
              alt={item.imageAlt}
              width={1600}
              height={900}
              className="w-full rounded-2xl object-cover aspect-video"
              loading="eager"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* Case Study Body */}
        <section className="pb-20">
          <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2">
              <motion.article
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="prose prose-lg dark:prose-invert max-w-none"
              >
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="leading-relaxed text-foreground/80 mb-6">
                  {item.longDescription ?? item.description}
                </p>
                <p className="leading-relaxed text-foreground/80 mb-6">
                  This engagement reflects Nexio Global's commitment to delivering measurable
                  business outcomes through thoughtful engineering, modern architecture, and
                  a user-first approach.
                </p>
                <p className="leading-relaxed text-foreground/80">
                  From discovery and design through to deployment and ongoing support, our team
                  partners with clients to ensure every solution is secure, scalable, and
                  aligned with long-term goals.
                </p>
              </motion.article>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Layers size={16} className="text-primary" aria-hidden="true" />
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Target size={16} className="text-primary" aria-hidden="true" />
                  Project Details
                </h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Category</dt>
                    <dd className="font-medium">{item.category}</dd>
                  </div>
                  {item.type && (
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Type</dt>
                      <dd className="font-medium">{item.type}</dd>
                    </div>
                  )}
                  {item.industry && (
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Industry</dt>
                      <dd className="font-medium">{item.industry}</dd>
                    </div>
                  )}
                  {item.businessOutcome && (
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Outcome</dt>
                      <dd className="font-medium">{item.businessOutcome}</dd>
                    </div>
                  )}
                  {item.timeSaved && (
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Time Saved</dt>
                      <dd className="font-medium">{item.timeSaved}</dd>
                    </div>
                  )}
                  {item.roi && (
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">ROI</dt>
                      <dd className="font-medium">{item.roi}</dd>
                    </div>
                  )}
                </dl>
              </div>

              <div className="rounded-2xl border border-border bg-primary/5 p-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary" aria-hidden="true" />
                  Outcomes
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Scalable, secure architecture built for growth</li>
                  <li>• User-centred design with measurable results</li>
                  <li>• Ongoing support and continuous improvement</li>
                </ul>
              </div>
            </aside>
          </div>
        </section>

        {/* Related Projects (Internal Linking) */}
        <section className="py-16 bg-gray-50/70 dark:bg-card/20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Related Projects</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedProjects.map((related) => (
                <Link key={related.slug} href={`/resources/work/${related.slug}`}>
                  <div className="group h-full bg-white dark:bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/40 transition-all duration-300 cursor-pointer">
                    <div className="h-40 overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.imageAlt}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-5">
                      <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                        {related.category}
                      </span>
                      <h3 className="mt-3 mb-2 line-clamp-2 text-base font-bold group-hover:text-primary transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{related.description}</p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-3">
                        View case study
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
