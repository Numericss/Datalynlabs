import { StickyNav } from "@/components/home/sticky-nav";
import { Hero } from "@/components/home/hero";
import { RoiCalculator } from "@/components/roi-calculator";
import { IntegrationStrip } from "@/components/home/integration-strip";
import { BenefitsGrid } from "@/components/home/benefits-grid";
import { SolutionsGrid } from "@/components/home/solutions-grid";
import { RolloutTimeline } from "@/components/home/rollout-timeline";
import { ProofSection } from "@/components/home/proof-section";
import { FaqSection } from "@/components/home/faq-section";
import { FinalCta } from "@/components/home/final-cta";
import { MobileBookingCta } from "@/components/home/mobile-booking-cta";
import {
  comparisonRows,
  faqItems,
  featureItems,
  heroConversation,
  heroStats,
  logoItems,
  navItems,
  processSteps,
  proofMetrics,
  serviceItems,
} from "@/lib/home-content";
import { BOOKING_URL } from "@/lib/site";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <StickyNav items={navItems} bookingUrl={BOOKING_URL} />

      <main>
        <Hero stats={heroStats} conversation={heroConversation} />
        <RoiCalculator bookingUrl={BOOKING_URL} />
        <IntegrationStrip logos={logoItems} />
        <BenefitsGrid items={featureItems} />
        <SolutionsGrid items={serviceItems} />
        <RolloutTimeline items={processSteps} />
        <ProofSection metrics={proofMetrics} rows={comparisonRows} />
        <FaqSection items={faqItems} />
        <FinalCta bookingUrl={BOOKING_URL} />
      </main>

      <MobileBookingCta bookingUrl={BOOKING_URL} />
    </div>
  );
}
