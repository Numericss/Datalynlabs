"use client";

import type { CSSProperties, ReactNode } from "react";
import { useInView, usePrefersReducedMotion } from "@/components/home/use-in-view";

type RevealProps = {
  children: ReactNode;
  delayMs?: number;
  className?: string;
  as?: "div" | "article" | "li" | "section";
};

export function Reveal({ children, delayMs = 0, className, as = "div" }: RevealProps) {
  const { ref, inView } = useInView({ threshold: 0.16, rootMargin: "0px 0px -8% 0px" });
  const reducedMotion = usePrefersReducedMotion();
  const Comp = as;

  const style: CSSProperties = reducedMotion ? {} : ({ "--reveal-delay": `${delayMs}ms` } as CSSProperties);

  return (
    <Comp
      ref={ref as never}
      style={style}
      className={`reveal-block ${inView || reducedMotion ? "is-visible" : ""}${className ? ` ${className}` : ""}`}
    >
      {children}
    </Comp>
  );
}
