"use client";

type MobileBookingCtaProps = {
  bookingUrl: string;
};

export function MobileBookingCta({ bookingUrl }: MobileBookingCtaProps) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
      <a
        href={bookingUrl}
        data-cta="mobile-sticky"
        aria-label="Book a Call"
        className="primary-btn pointer-events-auto flex min-h-12 w-full justify-center"
      >
        Book a Call
      </a>
    </div>
  );
}
