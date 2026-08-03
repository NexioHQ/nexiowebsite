import { useState } from "react";
import { Layers, X, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { WorkItem } from "@/data/work";

export type WorkCardVariant = "compact" | "full" | "expandable";

interface WorkCardProps {
  item: WorkItem;
  variant?: WorkCardVariant;
}

const fallbackStyles: Record<string, string> = {
  Dashboard: "from-sky-100 to-indigo-100",
  Website: "from-blue-50 to-cyan-100",
  "Mobile App": "from-violet-100 to-purple-50",
  "Web App": "from-teal-50 to-emerald-100",
};

/* Shared liquid-glass card shell classes */
const glassCard =
  "h-full overflow-hidden rounded-2xl border border-white/60 bg-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.08)] ring-1 ring-black/5 backdrop-blur-xl dark:border-white/10 dark:bg-card/80 dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] dark:ring-white/10";

const glassHover =
  "transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(0,0,0,0.14)] hover:ring-primary/30 hover:border-primary/25 dark:hover:shadow-[0_20px_48px_rgba(0,0,0,0.4)] dark:hover:ring-primary/40";

function ProjectImage({ item }: { item: WorkItem }) {
  const [imageFailed, setImageFailed] = useState(false);

  if (imageFailed) {
    const gradient =
      fallbackStyles[item.type || ""] || "from-slate-100 to-slate-200";
    return (
      <div
        role="img"
        aria-label={`${item.title} project preview`}
        className={`relative flex h-full w-full flex-col justify-between overflow-hidden bg-gradient-to-br ${gradient} p-6 dark:opacity-80`}
      >
        <div className="relative flex items-center justify-between">
          <Layers size={26} aria-hidden="true" className="text-slate-400 dark:text-slate-500" />
          <span className="rounded-full border border-black/8 bg-white/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:border-white/15 dark:bg-white/10 dark:text-slate-300">
            Nexio
          </span>
        </div>
        <div className="relative max-w-[85%]">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-2 dark:text-slate-500">
            {item.category}
          </p>
          <p className="text-xl font-bold leading-tight text-slate-700 dark:text-slate-200">
            {item.title}
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={item.image}
      alt={item.imageAlt}
      width={1600}
      height={900}
      style={{ width: "100%", height: "100%" }}
      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      loading="lazy"
      decoding="async"
      onError={() => setImageFailed(true)}
    />
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   EXPANDABLE CARD (used in Resources page)
───────────────────────────────────────────────────────────────────────────── */
function ExpandableWorkCard({ item }: { item: WorkItem }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
        className="group cursor-pointer focus:outline-none h-full"
      >
        <div className={`${glassCard} ${glassHover} flex flex-col`}>
          {/* Image */}
          <div className="relative aspect-[16/9] shrink-0 overflow-hidden">
            <ProjectImage item={item} />
            {/* Subtle shimmer overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            {/* Hover CTA pill */}
            <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
              View Details
              <ArrowUpRight size={13} />
            </div>
          </div>

          {/* Card body */}
          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <p className="mb-1.5 text-[11px] font-bold uppercase tracking-widest text-primary">
              {item.category}
            </p>
            <h3 className="mb-2.5 text-base font-bold text-slate-800 leading-snug group-hover:text-primary transition-colors duration-200 dark:text-foreground">
              {item.title}
            </h3>
            <p className="flex-1 text-sm leading-relaxed text-slate-500 dark:text-muted-foreground line-clamp-2">
              {item.description}
            </p>

            {/* Stack chips */}
            <div className="mt-4 flex flex-wrap gap-1.5" aria-label="Technology stack">
              {item.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-black/8 bg-white/60 px-2.5 py-0.5 text-[11px] font-medium text-slate-600 backdrop-blur-sm dark:border-white/15 dark:bg-white/10 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* ── Modal overlay ── */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${item.title} details`}
        >
          {/* Frosted backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />

          {/* Liquid-glass panel */}
          <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto overflow-x-hidden rounded-3xl border border-white/60 bg-white/70 shadow-[0_32px_80px_rgba(0,0,0,0.18)] backdrop-blur-2xl dark:border-white/10 dark:bg-card/90 dark:shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/8 text-slate-600 transition hover:bg-black/14 hover:text-slate-900 dark:bg-white/10 dark:text-slate-300 dark:hover:bg-white/20 dark:hover:text-white"
            >
              <X size={18} />
            </button>

            {/* Image */}
            <div className="relative h-52 sm:h-64 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.imageAlt}
                width={1600}
                height={900}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/10 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                  {item.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-foreground">{item.title}</h2>
              <p className="text-base leading-relaxed text-slate-600 dark:text-muted-foreground">
                {item.longDescription || item.description}
              </p>

              {/* Stack */}
              <div className="mt-6">
                <p className="mb-2.5 text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-black/10 bg-white/60 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur-sm dark:border-white/15 dark:bg-white/10 dark:text-slate-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   STANDARD CARD (used in Featured Work on homepage)
───────────────────────────────────────────────────────────────────────────── */
export function WorkCard({ item, variant = "full" }: WorkCardProps) {
  if (variant === "expandable") {
    return <ExpandableWorkCard item={item} />;
  }

  return (
    <article className="group h-full">
      <div className={`flex flex-col ${glassCard} ${glassHover}`}>
        {/* Image - fixed 16:9 ensures equal card heights across the grid */}
        <div className="relative aspect-[16/9] shrink-0 overflow-hidden">
          <ProjectImage item={item} />
          <div className="absolute inset-0 bg-gradient-to-t from-white/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        {/* Card body */}
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <p className="mb-1.5 text-[11px] font-bold uppercase tracking-widest text-primary">
            {item.category}
          </p>
          <h3 className="mb-2.5 text-base font-bold leading-snug text-slate-800 dark:text-foreground group-hover:text-primary transition-colors duration-200">
            {item.title}
          </h3>
          <p className="flex-1 text-sm leading-relaxed text-slate-500 dark:text-muted-foreground line-clamp-3">
            {item.description}
          </p>

          {variant === "full" && (
            <div className="mt-4 flex flex-wrap gap-1.5" aria-label="Technology stack">
              {item.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-black/8 bg-white/60 px-2.5 py-0.5 text-[11px] font-medium text-slate-600 backdrop-blur-sm dark:border-white/15 dark:bg-white/10 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
