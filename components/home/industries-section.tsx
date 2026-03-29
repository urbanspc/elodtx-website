"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { INDUSTRIES } from "@/lib/constants";
import { SectionReveal } from "@/components/shared/section-reveal";

export function IndustriesSection() {
  const [activeTab, setActiveTab] = useState(INDUSTRIES[0].id);

  const activeIndustry = INDUSTRIES.find((ind) => ind.id === activeTab)!;

  return (
    <section className="py-20">
      <div className="max-w-site mx-auto px-6">
        <SectionReveal direction="up" delay={0}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Built for Every Industry That Connects People
          </h2>
        </SectionReveal>

        {/* Tab triggers */}
        <SectionReveal direction="up" delay={0.1}>
          <div className="overflow-x-auto pb-2 -mx-2 px-2">
            <div className="flex gap-1 min-w-max md:min-w-0 md:justify-center border-b border-dark-tertiary">
              {INDUSTRIES.map((industry) => {
                const IconComponent = industry.icon;
                const isActive = industry.id === activeTab;
                return (
                  <button
                    key={industry.id}
                    onClick={() => setActiveTab(industry.id)}
                    className={[
                      "flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors duration-200 relative",
                      isActive
                        ? "text-brand-gold"
                        : "text-[rgba(255,255,255,0.5)] hover:text-[rgba(255,255,255,0.8)]",
                    ].join(" ")}
                  >
                    <IconComponent size={16} />
                    <span>{industry.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTabBorder"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </SectionReveal>

        {/* Tab content */}
        <div className="mt-10 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <p className="text-2xl font-bold text-brand-gold mb-4">
                {activeIndustry.tagline}
              </p>
              <p className="text-[rgba(255,255,255,0.7)] leading-relaxed max-w-3xl">
                {activeIndustry.description}
              </p>

              {/* Features grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {activeIndustry.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="bg-dark-tertiary/50 rounded-lg p-4"
                  >
                    <h4 className="font-semibold text-[rgba(255,255,255,0.9)] mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-[rgba(255,255,255,0.6)] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
