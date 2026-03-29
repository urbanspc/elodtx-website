"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import { PRICING_TIERS } from "@/lib/constants";

export function PricingSection() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-site mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-[rgba(255,255,255,0.6)] text-center mb-12">
          Start small, scale when ready.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {PRICING_TIERS.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: tier.featured ? 1.05 : 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className={`relative bg-dark-secondary rounded-xl p-8 border ${
                tier.featured
                  ? "border-brand-gold gold-glow shadow-[0_0_30px_rgba(201,168,76,0.25)] scale-105"
                  : "border-dark-tertiary"
              }`}
            >
              {/* Most Popular badge */}
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-brand-gold text-dark-primary text-sm font-semibold px-4 py-1 rounded-full whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier name */}
              <p className="text-xl font-semibold mb-4">{tier.name}</p>

              {/* Price */}
              <div className="mb-4">
                <span className="text-4xl font-bold">{tier.price}</span>
                {tier.priceNote && (
                  <span className="text-lg text-[rgba(255,255,255,0.6)] ml-1">
                    {tier.priceNote}
                  </span>
                )}
              </div>

              {/* User limit badge */}
              <div className="inline-block bg-dark-tertiary text-[rgba(255,255,255,0.7)] text-sm px-3 py-1 rounded-full mb-6">
                {tier.userLimit}
              </div>

              {/* Features list */}
              <ul className="flex flex-col gap-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check
                      size={16}
                      className="text-brand-gold shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-[rgba(255,255,255,0.75)]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <Link
                href="/waitlist"
                className={`block w-full text-center rounded-lg px-6 py-3 font-semibold transition-all duration-200 ${
                  tier.featured
                    ? "gold-gradient text-white hover:scale-[1.02]"
                    : "border border-brand-gold text-brand-gold hover:bg-brand-gold/10"
                }`}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
