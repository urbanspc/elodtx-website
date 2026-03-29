"use client";

import { SectionReveal } from "@/components/shared/section-reveal";
import { WaitlistForm } from "@/components/shared/waitlist-form";

export function FinalCTA() {
  return (
    <section className="py-20 bg-dark-secondary/30">
      <SectionReveal>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Join the waitlist.</h2>
          <p className="text-brand-gold text-xl mt-2">
            First 10 partners get 90 days free.
          </p>
          <p className="text-[rgba(255,255,255,0.6)] mt-4 mb-8">
            Be among the first platforms powered by connection intelligence.
          </p>
          <WaitlistForm compact />
        </div>
      </SectionReveal>
    </section>
  );
}
