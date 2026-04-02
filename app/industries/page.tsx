import type { Metadata } from "next";
import { Check } from "lucide-react";
import { SEO, INDUSTRIES } from "@/lib/constants";
import { SectionReveal } from "@/components/shared/section-reveal";

export const metadata: Metadata = {
  title: SEO.pages.industries.title,
  description: SEO.pages.industries.description,
  keywords: SEO.pages.industries.keywords,
  openGraph: {
    title: SEO.pages.industries.title,
    description: SEO.pages.industries.description,
    siteName: SEO.siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.pages.industries.title,
    description: SEO.pages.industries.description,
  },
};

export default function IndustriesPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 py-16">
      {/* Page Header */}
      <SectionReveal>
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Industries</h1>
          <p className="text-lg text-[rgba(255,255,255,0.6)] max-w-2xl mx-auto">
            Connection intelligence for every platform that brings people together.
          </p>
        </div>
      </SectionReveal>

      {/* Industry Sections */}
      {INDUSTRIES.map((industry, index) => (
        <div key={industry.id}>
          <SectionReveal>
            <section id={industry.id} className="py-4">
              {/* Industry Header */}
              <div className="flex items-center gap-4 mb-3">
                <industry.icon className="w-10 h-10 text-brand-gold" />
                <h2 className="text-3xl font-bold">{industry.name}</h2>
              </div>
              <p className="text-2xl font-bold text-brand-gold mb-8">
                {industry.tagline}
              </p>

              {/* Two-column layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-10">
                {/* Left Column: The Problem */}
                <div>
                  <h3 className="text-lg font-semibold text-[rgba(255,255,255,0.85)] mb-3">
                    The Problem
                  </h3>
                  <p className="text-[rgba(255,255,255,0.6)] mb-4 leading-relaxed">
                    {industry.problem}
                  </p>
                  <blockquote className="bg-dark-secondary border-l-4 border-brand-gold p-4 rounded-r-lg italic text-[rgba(255,255,255,0.7)]">
                    {industry.problemStats}
                  </blockquote>
                </div>

                {/* Right Column: Description + What EloDtx Does */}
                <div>
                  <p className="text-[rgba(255,255,255,0.6)] mb-6 leading-relaxed">
                    {industry.description}
                  </p>
                  <h3 className="text-lg font-semibold text-[rgba(255,255,255,0.85)] mb-4">
                    What EloDtx Does
                  </h3>
                  <div className="flex flex-col gap-3">
                    {industry.features.map((feature) => (
                      <div
                        key={feature.title}
                        className="bg-dark-tertiary/50 rounded-lg p-4 border border-dark-tertiary"
                      >
                        <h4 className="font-semibold text-[rgba(255,255,255,0.85)] mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-[rgba(255,255,255,0.6)]">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Active Agents */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-[rgba(255,255,255,0.5)] uppercase tracking-wider mb-3">
                  Active Agents
                </h3>
                <div className="flex flex-wrap gap-2">
                  {industry.activeAgents.map((agent) => (
                    <span
                      key={agent}
                      className="bg-brand-gold/10 text-brand-gold text-sm px-3 py-1 rounded-full border border-brand-gold/30"
                    >
                      {agent}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expected Outcomes */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-[rgba(255,255,255,0.5)] uppercase tracking-wider mb-3">
                  Expected Outcomes
                </h3>
                <ul className="flex flex-col gap-2">
                  {industry.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#1D9E75] flex-shrink-0 mt-0.5" />
                      <span className="text-[rgba(255,255,255,0.7)]">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Case Study */}
              {industry.caseStudy && (
                <div className="bg-dark-secondary border border-brand-gold/30 rounded-xl p-6">
                  <h3 className="text-sm font-semibold text-brand-gold uppercase tracking-wider mb-2">
                    Case Study
                  </h3>
                  <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                    {industry.caseStudy}
                  </p>
                </div>
              )}
            </section>
          </SectionReveal>

          {/* Divider between sections (not after the last one) */}
          {index < INDUSTRIES.length - 1 && (
            <div className="h-px bg-dark-tertiary my-16" />
          )}
        </div>
      ))}
    </div>
  );
}
