import { useState } from "react";
import { Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import type { WorkItem } from "@/data/work";

export type WorkCardVariant = "compact" | "full";

interface WorkCardProps {
  item: WorkItem;
  variant?: WorkCardVariant;
}

const fallbackStyles: Record<WorkItem["type"], string> = {
  Dashboard: "bg-slate-950",
  Website: "bg-blue-950",
  "Mobile App": "bg-violet-950",
  "Web App": "bg-cyan-950",
};

function ProjectImage({ item }: { item: WorkItem }) {
  const [imageFailed, setImageFailed] = useState(false);

  if (imageFailed) {
    return (
      <div
        role="img"
        aria-label={`${item.title} project preview`}
        className={`relative flex h-full w-full flex-col justify-between overflow-hidden ${fallbackStyles[item.type]} p-6 text-white`}
      >
        <div className="absolute right-0 top-0 h-1.5 w-1/2 bg-cyan-400" />
        <div className="absolute bottom-0 left-0 h-1.5 w-1/3 bg-white/30" />
        <div className="relative flex items-center justify-between">
          <Layers size={28} aria-hidden="true" className="text-white/80" />
          <span className="rounded-full border border-white/20 bg-black/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75">
            Nexio / Work
          </span>
        </div>
        <div className="relative max-w-[85%]">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/70">
            {item.category}
          </p>
          <p className="mt-2 text-xl font-semibold leading-tight sm:text-2xl">
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
      style={{ width: "100%", height: "100%" }}
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      loading="lazy"
      decoding="async"
      onError={() => setImageFailed(true)}
    />
  );
}

export function WorkCard({ item, variant = "full" }: WorkCardProps) {
  const showStack = variant === "full";

  return (
    <article>
      <Card className="group h-full overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl dark:border-gray-800 dark:bg-card dark:hover:border-gray-700">
        <div className="relative aspect-[3/2] overflow-hidden bg-gray-100 dark:bg-gray-800">
          <ProjectImage item={item} />
          <Badge
            variant="secondary"
            className="absolute left-3 top-3 gap-1.5 border-0 bg-white/90 px-3 py-1.5 text-xs text-foreground shadow-sm backdrop-blur-sm dark:bg-gray-900/90"
          >
            <Layers size={11} aria-hidden="true" className="text-primary" />
            {item.type}
          </Badge>
        </div>

        <CardContent className="flex h-full flex-col p-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
            {item.category}
          </p>
          <h3 className="mb-2 text-lg font-bold group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
            {item.description}
          </p>

          {showStack && (
            <div className="mt-4 flex flex-wrap gap-2" aria-label="Technology stack">
              {item.stack.map((technology) => (
                <Badge
                  key={technology}
                  variant="outline"
                  className="border-border bg-muted/50 px-2.5 py-1 text-xs font-medium text-foreground/70"
                >
                  {technology}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </article>
  );
}
