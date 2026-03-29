"use client";

import { ProximityAlertMockup } from "@/components/shared/proximity-alert-mockup";
import { SectionReveal } from "@/components/shared/section-reveal";

const STEPS = [
  {
    title: "User enables proximity",
    description:
      "With a single tap the user opts in. Proximity is always off by default — active consent is required every session.",
  },
  {
    title: "Geohash location sent (±500m, never exact)",
    description:
      "The device encodes the user's position into a geohash — a ~500m × 500m area code. Exact coordinates never leave the device.",
  },
  {
    title: "EloDtx runs compatibility check (<2 seconds)",
    description:
      "The engine cross-references all nearby opted-in users against the requesting user's 138-dimension behavioral profile in real time.",
  },
  {
    title: "Apple Watch haptic tap",
    description:
      "If a high-compatibility match is within range, a discreet haptic pulse fires on the wrist. No sound. No visible notification.",
  },
  {
    title: "5-element alert card appears",
    description:
      "The watch face shows compatibility score, shared traits, current activity, distance, and two action buttons.",
    showMockup: true,
  },
  {
    title: "Profile request sent",
    description:
      "Tapping 'Connect' sends an anonymous interest signal. The other person receives an identical alert and chooses independently.",
  },
  {
    title: "Consent → Messenger unlocks",
    description:
      "Only when both parties tap 'Connect' does the messenger open. No one-sided reveals. No pressure.",
  },
];

export function ProximityFlowSteps() {
  return (
    <section className="py-24 px-6 bg-dark-secondary">
      <div className="max-w-[1280px] mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Proximity Flow
            </h2>
            <p className="text-xl text-[rgba(255,255,255,0.6)] max-w-2xl mx-auto">
              From opt-in to conversation — every step privacy-first and
              consent-gated.
            </p>
          </div>
        </SectionReveal>

        <div className="max-w-2xl mx-auto">
          {STEPS.map((step, index) => (
            <SectionReveal key={index} delay={index * 0.07}>
              <div className="flex gap-6">
                {/* Left: number + vertical line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-9 h-9 rounded-full bg-brand-gold/15 border border-brand-gold/40 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-brand-gold">
                      {index + 1}
                    </span>
                  </div>
                  {index < STEPS.length - 1 && (
                    <div className="w-0.5 bg-dark-tertiary flex-1 mt-2 min-h-[2.5rem]" />
                  )}
                </div>

                {/* Right: content */}
                <div className="pb-8 flex-1 min-w-0">
                  <h3 className="font-semibold text-[rgba(255,255,255,0.9)] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[rgba(255,255,255,0.55)] leading-relaxed">
                    {step.description}
                  </p>

                  {step.showMockup && (
                    <div className="mt-6 flex justify-center">
                      <ProximityAlertMockup />
                    </div>
                  )}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
