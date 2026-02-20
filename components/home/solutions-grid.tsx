import { Reveal } from "@/components/home/reveal";
import type { ServiceItem } from "@/lib/home-content";

type SolutionsGridProps = {
  items: ServiceItem[];
};

export function SolutionsGrid({ items }: SolutionsGridProps) {
  return (
    <section id="solutions" className="section-band border-y border-white/10 section-space">
      <div className="section-container">
        <p className="kicker">Voice systems</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Voice AI Systems Tailored To Real Business Workflows
        </h2>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.title} delayMs={index * 70} as="article" className="lift-card p-6">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.body}</p>
              <ul className="mt-5 space-y-2">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-slate-200">
                    <span aria-hidden className="mt-[0.45rem] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(0,212,255,0.8)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
