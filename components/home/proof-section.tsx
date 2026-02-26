"use client";

import { useEffect, useMemo, useState } from "react";
import { Reveal } from "@/components/home/reveal";
import { SectionHeader } from "@/components/home/section-header";
import { useInView, usePrefersReducedMotion } from "@/components/home/use-in-view";
import { parseMetric } from "@/lib/utils";
import { ANIM } from "@/lib/constants";
import type { ComparisonRow, ProofMetric } from "@/lib/home-content";

type ProofSectionProps = {
  metrics: ProofMetric[];
  rows: ComparisonRow[];
};

function AnimatedMetric({ metric }: { metric: ProofMetric }) {
  const { ref, inView } = useInView({ threshold: 0.35 });
  const reducedMotion = usePrefersReducedMotion();
  const parsed = useMemo(() => parseMetric(metric.value), [metric.value]);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || reducedMotion) {
      return;
    }

    let frame = 0;
    let startTime = 0;

    const tick = (time: number) => {
      if (!startTime) {
        startTime = time;
      }

      const progress = Math.min((time - startTime) / ANIM.METRIC_COUNT_DURATION, 1);
      const eased = 1 - (1 - progress) ** 3;
      setDisplay(parsed.target * eased);

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [inView, parsed.target, reducedMotion]);

  const shownValue = reducedMotion ? parsed.target : display;

  return (
    <article ref={ref as never} className="lift-card p-6">
      <p className="text-4xl font-semibold tracking-tight text-cyan-300 sm:text-5xl">
        {parsed.prefix}
        {shownValue.toFixed(parsed.decimals)}
        {parsed.suffix}
      </p>
      <p className="mt-3 text-base font-medium text-white">{metric.label}</p>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">{metric.body}</p>
    </article>
  );
}

export function ProofSection({ metrics, rows }: ProofSectionProps) {
  return (
    <section id="results" className="section-container section-space">
      <SectionHeader
        kicker="Performance"
        title="Performance Gains From Teams Running Datalynlabs Systems"
      />

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {metrics.map((metric, index) => (
          <Reveal key={metric.value} delayMs={index * ANIM.STAGGER}>
            <AnimatedMetric metric={metric} />
          </Reveal>
        ))}
      </div>

      <Reveal delayMs={120} className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#101520]/75">
        <div className="overflow-x-auto">
          <table className="min-w-[720px] w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-slate-900/65 text-slate-300">
                <th className="px-4 py-3 font-semibold text-white">Model</th>
                <th className="px-4 py-3 font-semibold">Generalist</th>
                <th className="px-4 py-3 font-semibold">Template-only</th>
                <th className="px-4 py-3 font-semibold">In-house</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.category} className="border-t border-white/10 align-top">
                  <td className="px-4 py-3 text-cyan-200">{row.category}</td>
                  <td className="px-4 py-3 text-slate-300">{row.generalist}</td>
                  <td className="px-4 py-3 text-slate-300">{row.templateOnly}</td>
                  <td className="px-4 py-3 text-slate-300">{row.inHouse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </section>
  );
}
