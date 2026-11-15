import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import type { ComponentPropsWithoutRef } from "react";

interface BorderBeamProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * The size of the border beam.
   */
  size?: number;
  /**
   * The duration of the border beam animation.
   */
  duration?: number;
  /**
   * The anchor point of the border beam.
   */
  anchor?: number;
  /**
   * The color of the border beam.
   */
  colorFrom?: string;
  /**
   * The color of the border beam.
   */
  colorTo?: string;
  /**
   * The delay of the border beam animation.
   */
  delay?: number;
}

export function BorderBeam({
  className,
  size = 200,
  duration = 15,
  anchor = 90,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  delay = 0,
}: BorderBeamProps) {
  return (
    <div
      style={
        {
          "--size": size,
          "--duration": `${duration}s`,
          "--anchor": anchor,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `${delay}s`,
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] [border:calc(var(--size)*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]",
        className,
      )}
    >
      <motion.div
        className="absolute aspect-square h-[calc(var(--size)*1px)] w-auto"
        style={{
          background: "linear-gradient(to left, var(--color-from), var(--color-to))",
          offsetAnchor: "50% 50%",
          offsetPath: `rect(0 auto auto 0 round calc(var(--size)*1px))`,
        }}
        animate={{
          offsetDistance: ["0%", "100%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          delay,
        }}
      />
    </div>
  );
}