"use client";

import { HOW_IT_WORKS_STEPS } from "@/lib/constants";
import { SectionReveal } from "@/components/shared/section-reveal";

export function HowItWorks() {
  return (
    <section className="py-20">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Heading */}
        <SectionReveal direction="up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How It Works
          </h2>
        </SectionReveal>

        {/* Desktop: horizontal steps with connecting lines */}
        <div className="hidden md:flex items-start gap-0">
          {HOW_IT_WORKS_STEPS.map((step, i) => (
            <div key={step.title} className="flex items-start flex-1">
              {/* Step card */}
              <SectionReveal
                direction="up"
                delay={i * 0.15}
                className="flex flex-col items-center text-center flex-1 px-4"
              >
                {/* Icon circle */}
                <div className="w-16 h-16 rounded-full border-2 border-brand-gold flex items-center justify-center mb-4 flex-shrink-0">
                  <step.icon className="w-8 h-8 text-brand-gold" />
                </div>
                {/* Step number */}
                <span className="text-xs text-brand-gold font-semibold mb-1 uppercase tracking-widest">
                  Step {i + 1}
                </span>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-[rgba(255,255,255,0.6)] leading-relaxed">
                  {step.description}
                </p>
              </SectionReveal>

              {/* Connecting line — not after last step */}
              {i < HOW_IT_WORKS_STEPS.length - 1 && (
                <div className="flex-shrink-0 mt-8 w-8 h-0.5 bg-dark-tertiary self-start" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical stack with left line */}
        <div className="flex flex-col md:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-dark-tertiary" />

          {HOW_IT_WORKS_STEPS.map((step, i) => (
            <SectionReveal
              key={step.title}
              direction="up"
              delay={i * 0.15}
              className="flex items-start gap-6 mb-10 last:mb-0 relative"
            >
              {/* Icon circle */}
              <div className="w-16 h-16 rounded-full border-2 border-brand-gold flex items-center justify-center flex-shrink-0 bg-dark-primary z-10">
                <step.icon className="w-8 h-8 text-brand-gold" />
              </div>

              {/* Text */}
              <div className="pt-2">
                <span className="text-xs text-brand-gold font-semibold uppercase tracking-widest">
                  Step {i + 1}
                </span>
                <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                <p className="text-sm text-[rgba(255,255,255,0.6)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
