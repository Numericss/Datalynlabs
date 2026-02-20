import { Reveal } from "@/components/home/reveal";
import type { ProcessStep } from "@/lib/home-content";

type RolloutTimelineProps = {
  items: ProcessStep[];
};

export function RolloutTimeline({ items }: RolloutTimelineProps) {
  return (
    <section id="process" className="section-container section-space">
      <p className="kicker">Deployment process</p>
      <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        A Fast, Accountable Deployment Process
      </h2>

      <ol className="mt-10 grid gap-4 md:grid-cols-3">
        {items.map((item, index) => (
          <Reveal key={item.step} delayMs={index * 75} as="li" className="lift-card p-6">
            <p className="inline-flex rounded-full border border-cyan-300/45 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-300">
              {item.step}
            </p>
            <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.body}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
