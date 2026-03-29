"use client";

import { STATS } from "@/lib/constants";
import { AnimatedCounter } from "@/components/shared/animated-counter";

export function StatsStrip() {
  return (
    <section className="bg-dark-secondary/50 border-y border-dark-tertiary py-12">
      {/* Desktop grid */}
      <div className="hidden md:grid grid-cols-6 gap-8 max-w-[1280px] mx-auto px-6">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center text-center${
              i < STATS.length - 1 ? " border-r border-dark-tertiary" : ""
            }`}
          >
            <AnimatedCounter
              target={stat.numericValue}
              prefix={stat.prefix}
              suffix={stat.suffix}
              className="text-3xl md:text-4xl font-bold text-brand-gold"
            />
            <p className="text-sm text-[rgba(255,255,255,0.6)] mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile horizontal scroll */}
      <div className="flex md:hidden overflow-x-auto gap-8 px-6 snap-x snap-mandatory scrollbar-hide">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="min-w-[150px] snap-start flex flex-col items-center text-center flex-shrink-0"
          >
            <AnimatedCounter
              target={stat.numericValue}
              prefix={stat.prefix}
              suffix={stat.suffix}
              className="text-3xl font-bold text-brand-gold"
            />
            <p className="text-sm text-[rgba(255,255,255,0.6)] mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
