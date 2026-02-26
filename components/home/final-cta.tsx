import { SectionHeader } from "@/components/home/section-header";

type FinalCtaProps = {
  bookingUrl: string;
};

export function FinalCta({ bookingUrl }: FinalCtaProps) {
  return (
    <section id="contact" className="section-container section-space pb-28 md:pb-20">
      <div className="footer-cta-card">
        <div>
          <SectionHeader
            kicker="Ready to launch"
            title="Replace Missed Calls With Automated, Revenue-Ready Conversations"
            titleClass="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
            subtitle="In one strategy call, we map your current call journey, identify conversion leaks, and define the fastest implementation path for your team."
            subtitleClass="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base"
          />

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={bookingUrl} data-cta="footer-primary" aria-label="Book Strategy Call" className="primary-btn w-full sm:w-auto">
              Book Strategy Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
