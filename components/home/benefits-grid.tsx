import { Reveal } from "@/components/home/reveal";
import type { FeatureItem } from "@/lib/home-content";

type BenefitsGridProps = {
  items: FeatureItem[];
};

export function BenefitsGrid({ items }: BenefitsGridProps) {
  return (
    <section id="features" className="section-container section-space">
      <p className="kicker">Key benefits</p>
      <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Built To Protect Revenue Across Every Customer Touchpoint
      </h2>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {items.map((item, index) => (
          <Reveal key={item.title} delayMs={index * 75} as="article" className="lift-card p-6">
            <p className="text-base font-semibold text-cyan-300">{item.index}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
