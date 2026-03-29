"use client";

import { TRAINING_PATH } from "@/lib/constants";
import { SectionReveal } from "@/components/shared/section-reveal";

const STATUS_STYLES: Record<
  string,
  { dot: string; card: string; period: string; badge?: string; opacity: string }
> = {
  current: {
    dot: "bg-brand-gold border-brand-gold shadow-[0_0_12px_rgba(201,168,76,0.5)]",
    card: "border-brand-gold/40 bg-dark-secondary",
    period: "text-brand-gold",
    badge: "Current",
    opacity: "opacity-100",
  },
  upcoming: {
    dot: "bg-dark-tertiary border-[rgba(201,168,76,0.4)]",
    card: "border-[rgba(255,255,255,0.08)] bg-dark-secondary/60",
    period: "text-[rgba(255,255,255,0.55)]",
    opacity: "opacity-80",
  },
  future: {
    dot: "bg-dark-tertiary border-[rgba(255,255,255,0.15)]",
    card: "border-[rgba(255,255,255,0.05)] bg-dark-secondary/30",
    period: "text-[rgba(255,255,255,0.35)]",
    opacity: "opacity-50",
  },
};

export function TrainingPathTimeline() {
  return (
    <section className="py-24 px-6 bg-dark-secondary">
      <div className="max-w-[1280px] mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Training Path
            </h2>
            <p className="text-xl text-[rgba(255,255,255,0.6)] max-w-2xl mx-auto">
              We&apos;re building our own model — one that has never existed
              before, trained exclusively on connection data.
            </p>
          </div>
        </SectionReveal>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block">
          {/* Connecting line */}
          <div className="relative mb-8">
            <div className="absolute top-4 left-0 right-0 h-0.5 bg-dark-tertiary" />
            <div className="grid grid-cols-4 gap-6 relative">
              {TRAINING_PATH.map((phase, index) => {
                const styles = STATUS_STYLES[phase.status];
                return (
                  <SectionReveal key={index} delay={index * 0.1}>
                    <div className="flex flex-col items-center">
                      {/* Dot */}
                      <div
                        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 mb-5 z-10 ${styles.dot}`}
                      >
                        {phase.status === "current" && (
                          <div className="w-2.5 h-2.5 rounded-full bg-brand-gold" />
                        )}
                      </div>
                      {/* Card */}
                      <div
                        className={`w-full rounded-xl border p-5 ${styles.card} ${styles.opacity}`}
                      >
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span
                            className={`text-xs font-semibold uppercase tracking-widest ${styles.period}`}
                          >
                            {phase.period}
                          </span>
                          {styles.badge && (
                            <span className="text-[10px] font-bold bg-brand-gold/15 border border-brand-gold/30 text-brand-gold rounded-full px-2 py-0.5 uppercase tracking-wide">
                              {styles.badge}
                            </span>
                          )}
                        </div>
                        <h3 className="font-semibold text-[rgba(255,255,255,0.9)] mb-2 text-sm leading-snug">
                          {phase.title}
                        </h3>
                        <p className="text-xs text-[rgba(255,255,255,0.5)] leading-relaxed">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  </SectionReveal>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden max-w-lg mx-auto space-y-0">
          {TRAINING_PATH.map((phase, index) => {
            const styles = STATUS_STYLES[phase.status];
            return (
              <SectionReveal key={index} delay={index * 0.1}>
                <div className="flex gap-5">
                  {/* Left: dot + line */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${styles.dot}`}
                    >
                      {phase.status === "current" && (
                        <div className="w-2.5 h-2.5 rounded-full bg-brand-gold" />
                      )}
                    </div>
                    {index < TRAINING_PATH.length - 1 && (
                      <div className="w-0.5 bg-dark-tertiary flex-1 mt-2 min-h-[3rem]" />
                    )}
                  </div>

                  {/* Right: card */}
                  <div className={`pb-8 flex-1 ${styles.opacity}`}>
                    <div className={`rounded-xl border p-5 ${styles.card}`}>
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span
                          className={`text-xs font-semibold uppercase tracking-widest ${styles.period}`}
                        >
                          {phase.period}
                        </span>
                        {styles.badge && (
                          <span className="text-[10px] font-bold bg-brand-gold/15 border border-brand-gold/30 text-brand-gold rounded-full px-2 py-0.5 uppercase tracking-wide">
                            {styles.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="font-semibold text-[rgba(255,255,255,0.9)] mb-2">
                        {phase.title}
                      </h3>
                      <p className="text-sm text-[rgba(255,255,255,0.5)] leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
