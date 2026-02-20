import Image from "next/image";
import type { LogoItem } from "@/lib/home-content";

type IntegrationStripProps = {
  logos: LogoItem[];
};

export function IntegrationStrip({ logos }: IntegrationStripProps) {
  return (
    <section aria-label="Integration logos" className="section-band border-y border-white/10 py-8">
      <div className="section-container">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
          Platforms We Integrate With
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {logos.map((logo) => (
            <span key={logo.name} className="logo-pill px-4 py-2.5" title={logo.name}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={22}
                height={22}
                unoptimized
                className="h-[22px] w-[22px] object-contain"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
