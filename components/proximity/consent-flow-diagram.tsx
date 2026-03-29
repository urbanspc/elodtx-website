"use client";

import { SectionReveal } from "@/components/shared/section-reveal";

const steps = [
  { num: 1, text: "Both users opt into Proximity", phase: "automatic" },
  { num: 2, text: "High compatibility score confirmed", phase: "automatic" },
  { num: 3, text: "Both in same geohash area", phase: "automatic" },
  { num: 4, text: "Haptic alert sent to Apple Watch", phase: "bridge" },
  { num: 5, text: "User taps 'Connect'", phase: "consent" },
  { num: 6, text: "Profile request sent to match", phase: "consent" },
  { num: 7, text: "Match accepts", phase: "consent" },
  { num: 8, text: "Messenger unlocks", phase: "consent" },
];

export function ConsentFlowDiagram() {
  return (
    <div className="max-w-lg mx-auto">
      {steps.map((step, i) => (
        <SectionReveal key={step.num} delay={i * 0.1}>
          <div className="flex gap-4">
            {/* Line + dot */}
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                  step.phase === "automatic"
                    ? "bg-brand-gold/20 text-brand-gold border border-brand-gold/50"
                    : step.phase === "bridge"
                    ? "bg-brand-gold text-dark-primary"
                    : "bg-dark-tertiary text-[rgba(255,255,255,0.85)] border border-dark-tertiary"
                }`}
              >
                {step.num}
              </div>
              {i < steps.length - 1 && (
                <div className="w-0.5 h-8 bg-dark-tertiary" />
              )}
            </div>

            {/* Content */}
            <div className="pt-2 pb-4">
              <p className="text-[rgba(255,255,255,0.85)] font-medium">
                {step.text}
              </p>
              {step.num === 1 && (
                <span className="inline-block mt-1 text-xs bg-brand-gold/10 text-brand-gold px-2 py-0.5 rounded-full border border-brand-gold/30">
                  Automatic
                </span>
              )}
              {step.num === 5 && (
                <span className="inline-block mt-1 text-xs bg-dark-tertiary text-[rgba(255,255,255,0.6)] px-2 py-0.5 rounded-full border border-dark-tertiary">
                  Requires consent
                </span>
              )}
            </div>
          </div>
        </SectionReveal>
      ))}
    </div>
  );
}
