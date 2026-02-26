import { Reveal } from "@/components/home/reveal";
import { ANIM } from "@/lib/constants";
import type { HeroStat } from "@/lib/home-content";

type HeroProps = {
  stats: HeroStat[];
  conversation: string[];
};

export function Hero({ stats, conversation }: HeroProps) {
  return (
    <section className="hero-shell border-b border-white/10 py-12 sm:py-20 lg:py-28">
      <div className="hero-mesh pointer-events-none" aria-hidden />
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-35" aria-hidden />

      <div className="section-container relative z-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <Reveal>
          <p className="kicker">AI Voice Automation Agency</p>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:mt-5 sm:text-5xl lg:text-6xl">
            Scale Customer Conversations Without Scaling Headcount and Protect Every Lead.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:mt-6 sm:text-lg">
            Datalynlabs designs voice AI systems that answer instantly, qualify intent, and move high-value calls into
            booked revenue without increasing headcount.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <a
              href="#solutions"
              data-cta="hero-primary"
              aria-label="How to Integrate"
              className="primary-btn w-full sm:w-auto"
            >
              How to Integrate
            </a>
            <a
              href="#solutions"
              data-cta="hero-secondary"
              aria-label="Explore Voice AI Solutions"
              className="secondary-btn w-full sm:w-auto"
            >
              Explore Voice AI Solutions
            </a>
          </div>

          <div className="mt-6 grid gap-2 sm:mt-8 sm:grid-cols-3 sm:gap-3">
            {stats.map((item, index) => (
              <Reveal key={item.value} delayMs={index * ANIM.STAGGER} className="stat-chip">
                <p className="text-sm font-semibold text-white sm:text-base">{item.value}</p>
                <p className="mt-1 text-xs text-slate-400">{item.label}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* Conversation preview — hidden on mobile/tablet to keep hero concise */}
        <Reveal delayMs={90} className="hero-widget glass-card p-5 sm:p-6 hidden lg:block">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-300">Live conversation preview</p>
          <h2 className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">How your agent responds</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            Example of a voice flow for lead capture, qualification, and immediate booking handoff.
          </p>

          <div className="mt-5 space-y-2 rounded-2xl border border-cyan-300/20 bg-slate-950/55 p-4 backdrop-blur-sm">
            {conversation.map((line, index) => (
              <p
                key={line}
                className="chat-line text-sm leading-relaxed text-slate-200"
                style={{ ["--chat-delay" as string]: `${index * ANIM.CHAT_LINE_INTERVAL}ms` }}
              >
                {line}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
