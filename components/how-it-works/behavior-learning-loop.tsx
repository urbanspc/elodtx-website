"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { SectionReveal } from "@/components/shared/section-reveal";

const PASSIVE_SIGNALS = [
  { icon: "↕", label: "Scroll behavior" },
  { icon: "⏱", label: "Session timing" },
  { icon: "🔔", label: "Notification response" },
];

const ACTIVE_SIGNALS = [
  { icon: "→", label: "Intents sent" },
  { icon: "💬", label: "Messages exchanged" },
  { icon: "📅", label: "Event attendance" },
  { icon: "❓", label: "Know Me answers" },
];

function SignalItem({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-3 bg-dark-tertiary rounded-lg px-4 py-2.5">
      <span className="text-base leading-none" aria-hidden>
        {icon}
      </span>
      <span className="text-sm text-[rgba(255,255,255,0.75)]">{label}</span>
    </div>
  );
}

export function BehaviorLearningLoop() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const leftVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.2 + i * 0.08, ease: "easeOut" as const },
    }),
  };

  const rightVariants: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.2 + i * 0.08, ease: "easeOut" as const },
    }),
  };

  const centerVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-[1280px] mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Behavior Learning Loop
            </h2>
            <p className="text-xl text-[rgba(255,255,255,0.6)] max-w-2xl mx-auto">
              Every interaction — active or passive — refines the model. The
              profile is never static.
            </p>
          </div>
        </SectionReveal>

        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Three-column diagram */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
            {/* Left: Passive Signals */}
            <div className="space-y-3">
              <motion.h3
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={0}
                variants={leftVariants}
                className="text-sm font-semibold text-[rgba(255,255,255,0.5)] uppercase tracking-widest mb-4 text-center md:text-left"
              >
                Passive Signals
              </motion.h3>
              {PASSIVE_SIGNALS.map((signal, i) => (
                <motion.div
                  key={signal.label}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={i + 1}
                  variants={leftVariants}
                >
                  <SignalItem {...signal} />
                </motion.div>
              ))}
              {/* Arrow pointing right (hidden on mobile) */}
              <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={PASSIVE_SIGNALS.length + 1}
                variants={leftVariants}
                className="hidden md:flex items-center justify-end mt-4"
              >
                <div className="flex items-center gap-1 text-brand-gold/60">
                  <div className="h-px w-12 bg-brand-gold/30" />
                  <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                    <path
                      d="M1 1L7 6L1 11"
                      stroke="#C9A84C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.5"
                    />
                  </svg>
                </div>
              </motion.div>
            </div>

            {/* Center: Dynamic Profile */}
            <div className="flex flex-col items-center gap-4">
              <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={centerVariants}
                className="relative"
              >
                <div
                  className="w-40 h-40 rounded-full flex flex-col items-center justify-center text-center"
                  style={{
                    background:
                      "radial-gradient(circle at 40% 35%, rgba(201,168,76,0.25) 0%, rgba(201,168,76,0.08) 60%, transparent 100%)",
                    border: "2px solid rgba(201,168,76,0.4)",
                    boxShadow:
                      "0 0 40px rgba(201,168,76,0.2), 0 0 80px rgba(201,168,76,0.08)",
                  }}
                >
                  <span className="text-2xl mb-1">🧠</span>
                  <span className="text-sm font-bold text-brand-gold leading-tight">
                    Dynamic
                    <br />
                    Profile
                  </span>
                  <span className="text-[10px] text-[rgba(255,255,255,0.4)] mt-1">
                    138 dimensions
                  </span>
                </div>
              </motion.div>

              {/* Down arrow + real-time text */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="flex flex-col items-center gap-1"
              >
                <div className="w-px h-6 bg-brand-gold/30" />
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="#C9A84C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.5"
                  />
                </svg>
                <span className="text-xs text-[rgba(255,255,255,0.4)] text-center">
                  Real-time updates
                </span>
              </motion.div>
            </div>

            {/* Right: Active Signals */}
            <div className="space-y-3">
              <motion.h3
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={0}
                variants={rightVariants}
                className="text-sm font-semibold text-[rgba(255,255,255,0.5)] uppercase tracking-widest mb-4 text-center md:text-right"
              >
                Active Signals
              </motion.h3>
              {/* Arrow pointing left (hidden on mobile) */}
              <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={0}
                variants={rightVariants}
                className="hidden md:flex items-center justify-start mb-2"
              >
                <div className="flex items-center gap-1 text-brand-gold/60">
                  <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                    <path
                      d="M7 1L1 6L7 11"
                      stroke="#C9A84C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.5"
                    />
                  </svg>
                  <div className="h-px w-12 bg-brand-gold/30" />
                </div>
              </motion.div>
              {ACTIVE_SIGNALS.map((signal, i) => (
                <motion.div
                  key={signal.label}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={i + 1}
                  variants={rightVariants}
                >
                  <SignalItem {...signal} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom note */}
          <SectionReveal delay={0.8}>
            <div className="mt-12 text-center">
              <p className="text-sm text-[rgba(255,255,255,0.4)] max-w-lg mx-auto">
                All behavioral signals are processed ephemerally. Message
                content is never stored — only anonymised patterns are retained
                to improve the model.
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
