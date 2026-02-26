"use client";

import { useEffect, useRef, useState } from "react";

type UseInViewOptions = {
  /** Fraction of the element that must be visible before triggering (0–1). Default: 0.2 */
  threshold?: number;
  /** Margin around the root viewport used to expand or shrink the intersection area. Default: "0px" */
  rootMargin?: string;
  /** When true, stops observing after the element enters view for the first time. Default: true */
  once?: boolean;
};

/**
 * Tracks whether a DOM element has entered the viewport using IntersectionObserver.
 *
 * @returns `{ ref }` — attach to the target element, and `{ inView }` — true once visible.
 *
 * @example
 * function MyComponent() {
 *   const { ref, inView } = useInView({ threshold: 0.3 });
 *   return <div ref={ref as never} className={inView ? "visible" : "hidden"} />;
 * }
 */
export function useInView({ threshold = 0.2, rootMargin = "0px", once = true }: UseInViewOptions = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  return { ref, inView };
}

/**
 * Returns true when the user has opted into reduced motion via their OS accessibility settings.
 * Responds to live changes to `prefers-reduced-motion`.
 */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mediaQuery.matches);

    sync();
    mediaQuery.addEventListener("change", sync);

    return () => mediaQuery.removeEventListener("change", sync);
  }, []);

  return reduced;
}
