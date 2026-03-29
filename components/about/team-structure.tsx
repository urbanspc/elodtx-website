"use client";

import { SectionReveal } from "@/components/shared/section-reveal";

export function TeamStructure() {
  return (
    <SectionReveal>
      <div className="space-y-8">
        {/* Two entity cards */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Urban Space */}
            <div className="bg-dark-secondary border border-dark-tertiary rounded-xl p-8">
              <h3 className="text-white font-bold text-xl mb-2">
                Urban Space Web Technologies Ltd
              </h3>
              <p className="text-brand-gold font-medium mb-3">
                🇲🇺 Mauritius
              </p>
              <p className="text-[rgba(255,255,255,0.6)] text-sm leading-relaxed">
                Product, AI, engineering
              </p>
            </div>

            {/* Card 2: Eloclouds */}
            <div className="bg-dark-secondary border border-dark-tertiary rounded-xl p-8">
              <h3 className="text-white font-bold text-xl mb-2">
                Eloclouds Limited
              </h3>
              <p className="text-brand-gold font-medium mb-3">
                🇬🇧 United Kingdom
              </p>
              <p className="text-[rgba(255,255,255,0.6)] text-sm leading-relaxed">
                Infrastructure, partnerships, European operations
              </p>
            </div>
          </div>

          {/* Partnership connector label — desktop only */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <span className="bg-dark-primary border border-brand-gold/40 text-brand-gold text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap">
              Partnership
            </span>
          </div>

          {/* Partnership label — mobile only */}
          <div className="flex md:hidden justify-center -my-2">
            <span className="bg-dark-primary border border-brand-gold/40 text-brand-gold text-xs font-semibold px-3 py-1.5 rounded-full">
              Partnership
            </span>
          </div>
        </div>

        {/* Investment card — full width */}
        <div className="bg-dark-secondary border border-brand-gold/30 rounded-xl p-8 text-center">
          <p className="text-5xl font-bold text-brand-gold mb-3">$7.5M</p>
          <p className="text-white font-semibold text-lg mb-2">
            Backed by Alice Rose LLC, USA
          </p>
          <p className="text-[rgba(255,255,255,0.6)] text-sm max-w-md mx-auto">
            Secured to build the future of connection intelligence
          </p>
        </div>
      </div>
    </SectionReveal>
  );
}
