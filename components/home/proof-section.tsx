"use client";

import { PROOF_METRICS } from "@/lib/constants";
import { SectionReveal } from "@/components/shared/section-reveal";
import { AnimatedCounter } from "@/components/shared/animated-counter";

export function ProofSection() {
  return (
    <section className="py-20">
      <SectionReveal>
        <div className="max-w-site mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Proven with Real People
          </h2>

          {/* Metrics cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROOF_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="bg-dark-secondary rounded-xl p-8 border border-dark-tertiary text-center"
              >
                <AnimatedCounter
                  target={metric.numericValue}
                  suffix={metric.suffix}
                  className="text-4xl md:text-5xl font-bold text-brand-gold"
                />
                <p className="text-brand-gold font-medium text-lg mt-2">
                  {metric.label}
                </p>
                <p className="text-[rgba(255,255,255,0.6)] text-sm mt-1">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Testimonial block */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="border-l-4 border-brand-gold pl-6">
              <p className="text-xl italic text-[rgba(255,255,255,0.6)]">
                &ldquo;We didn&rsquo;t build EloDtx in a lab. We built it in the
                real world, with real people, and measured what actually
                happened.&rdquo;
              </p>
              <p className="text-sm text-[rgba(255,255,255,0.4)] mt-4">
                — Baeyond Proof of Concept, Mauritius &amp; La Réunion
              </p>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
