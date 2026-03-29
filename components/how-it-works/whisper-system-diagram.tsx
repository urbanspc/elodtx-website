"use client";

import { SectionReveal } from "@/components/shared/section-reveal";

export function WhisperSystemDiagram() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1280px] mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Whisper System
            </h2>
            <p className="text-xl text-[rgba(255,255,255,0.6)] max-w-2xl mx-auto">
              EloDtx never writes messages for users. It whispers suggestions.
            </p>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Philosophy text */}
          <SectionReveal direction="left" delay={0.1}>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-brand-gold mb-3">
                  The Philosophy
                </h3>
                <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                  Human connection is irreplaceable. EloDtx's role is not to
                  speak for you — it's to give you the clarity to speak better
                  yourself. Every suggestion is framed as an observation, never
                  a script. You decide what to do with it.
                </p>
              </div>

              <div className="bg-dark-secondary rounded-xl p-5 border border-[rgba(201,168,76,0.15)]">
                <p className="text-sm text-brand-gold font-medium mb-2 uppercase tracking-wide">
                  Example whisper
                </p>
                <p className="text-[rgba(255,255,255,0.85)] italic leading-relaxed">
                  "She mentioned not going back to her hometown much — her
                  answers suggest this means something to her. This could be
                  worth exploring gently."
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-brand-gold mb-3">
                  Ephemeral Processing
                </h3>
                <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                  Message content is never stored. EloDtx reads a conversation
                  context window in real time, extracts behavioral patterns, and
                  immediately discards the raw text. Only the patterns remain —
                  anonymised, aggregated, and tied to behavioral dimensions
                  rather than anything you actually said.
                </p>
              </div>
            </div>
          </SectionReveal>

          {/* Right: Chat input mockup with whisper card */}
          <SectionReveal direction="right" delay={0.2}>
            <div className="relative bg-dark-secondary rounded-2xl border border-[rgba(201,168,76,0.1)] p-6 max-w-md mx-auto">
              {/* Simulated chat messages */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-start">
                  <div className="bg-dark-tertiary rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[75%]">
                    <p className="text-sm text-[rgba(255,255,255,0.85)]">
                      I haven't been back to my hometown in years honestly…
                    </p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-[rgba(201,168,76,0.15)] border border-[rgba(201,168,76,0.2)] rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[75%]">
                    <p className="text-sm text-[rgba(255,255,255,0.85)]">
                      That's interesting — what keeps you away?
                    </p>
                  </div>
                </div>
              </div>

              {/* Whisper card */}
              <div className="relative mb-4">
                <div className="bg-dark-primary border border-brand-gold/40 rounded-xl p-4 shadow-lg shadow-[rgba(201,168,76,0.08)]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                    <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest">
                      Whisper
                    </span>
                  </div>
                  <p className="text-sm text-[rgba(255,255,255,0.8)] leading-relaxed mb-3">
                    She mentioned not going back to her hometown much — her
                    answers suggest this means something to her. This could be
                    worth exploring gently.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Visible only to you",
                      "Based on weeks of behavioral data",
                      "Combined with live conversation signals",
                    ].map((label) => (
                      <span
                        key={label}
                        className="text-[10px] text-[rgba(255,255,255,0.5)] bg-dark-tertiary rounded-full px-2.5 py-1"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Connector arrow down */}
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-0.5 h-3 bg-brand-gold/40" />
              </div>

              {/* Chat input bar */}
              <div className="flex items-center gap-3 bg-dark-tertiary rounded-xl px-4 py-3 border border-[rgba(255,255,255,0.06)]">
                <div className="flex-1 h-4 rounded-full bg-[rgba(255,255,255,0.05)]" />
                <div className="w-7 h-7 rounded-full bg-brand-gold/20 border border-brand-gold/30 flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6L10 6M10 6L7 3M10 6L7 9"
                      stroke="#C9A84C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
