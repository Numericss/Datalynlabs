import { Reveal } from "@/components/home/reveal";
import { SectionHeader } from "@/components/home/section-header";
import { ANIM } from "@/lib/constants";
import type { FeatureItem } from "@/lib/home-content";

type BenefitsGridProps = {
  items: FeatureItem[];
};

export function BenefitsGrid({ items }: BenefitsGridProps) {
  return (
    <section id="features" className="section-container section-space">
      <SectionHeader
        kicker="Key benefits"
        title="Built To Protect Revenue Across Every Customer Touchpoint"
      />

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {items.map((item, index) => (
          <Reveal key={item.title} delayMs={index * ANIM.STAGGER} as="article" className="lift-card p-6">
            <p className="text-base font-semibold text-cyan-300">{item.index}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
