"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative w-full flex min-h-[calc(100vh-5rem)] flex-wrap items-center justify-center overflow-hidden bg-[#0D0D1A] text-[calc(var(--size)*0.022)] text-white [--factor:min(1000px,100vh)] [--size:min(var(--factor),100vw)]">
      {/* Illuminated background glow — gold-tinted */}
      <div className="bg absolute h-full w-full max-w-[44em]">
        <div className="shadow-bgt absolute size-full translate-[0_-70%] scale-[1.2] animate-[onloadbgt_1s_ease-in-out_forwards] rounded-[100em] opacity-60" />
        <div className="shadow-bgb absolute size-full translate-[0_-70%] scale-[1.2] animate-[onloadbgb_1s_ease-in-out_forwards] rounded-[100em] opacity-60" />
      </div>

      {/* Main headline with illuminated glow */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6"
        >
          The AI that understands
          <br />
          <span
            className={cn(
              "relative inline-block",
              "before:absolute before:animate-[onloadopacity_1s_ease-out_forwards] before:opacity-0 before:content-[attr(data-text)]",
              "before:bg-[linear-gradient(0deg,#C9A84C_0%,#fffaf6_50%)] before:bg-clip-text before:text-[#fffaf6]",
              "filter-[url(#glow-4)]"
            )}
            data-text="human connection."
          >
            human connection.
          </span>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 bg-gradient-to-t from-[#86868b] to-[#bdc2c9] bg-clip-text text-center font-medium text-transparent"
        >
          EloDtx is the first proprietary AI built exclusively to understand,
          predict and improve how humans connect — not adapted from a general
          model.{" "}
          <span className="relative inline-block font-bold text-[#e7dfd6]">
            Purpose-built from the ground up.
          </span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <Link
            href="/waitlist"
            className="gold-gradient text-white font-semibold rounded-lg px-8 py-3 hover:scale-[1.02] transition-transform duration-200 inline-block"
          >
            Get Early Access
          </Link>
          <Link
            href="/how-it-works"
            className="border border-brand-gold text-brand-gold rounded-lg px-8 py-3 hover:bg-brand-gold/10 transition-colors duration-200 inline-block"
          >
            See How It Works
          </Link>
        </motion.div>
      </div>

      {/* SVG glow filter — gold-tuned */}
      <svg
        className="absolute -z-1 h-0 w-0"
        width="1440px"
        height="300px"
        viewBox="0 0 1440 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter
            id="glow-4"
            colorInterpolationFilters="sRGB"
            x="-50%"
            y="-200%"
            width="200%"
            height="500%"
          >
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur4" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="19" result="blur19" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="9" result="blur9" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur30" />
            {/* Layer 0: bright gold core */}
            <feColorMatrix in="blur4" result="color-0-blur" type="matrix"
              values="1 0 0 0 0  0 0.83 0 0 0  0 0 0.3 0 0  0 0 0 0.8 0" />
            <feOffset in="color-0-blur" result="layer-0-offsetted" dx="0" dy="0" />
            {/* Layer 1: warm gold mid */}
            <feColorMatrix in="blur19" result="color-1-blur" type="matrix"
              values="0.79 0 0 0 0  0 0.66 0 0 0  0 0 0.3 0 0  0 0 0 1 0" />
            <feOffset in="color-1-blur" result="layer-1-offsetted" dx="0" dy="2" />
            {/* Layer 2: gold spread */}
            <feColorMatrix in="blur9" result="color-2-blur" type="matrix"
              values="1 0 0 0 0  0 0.83 0 0 0  0 0 0.3 0 0  0 0 0 0.65 0" />
            <feOffset in="color-2-blur" result="layer-2-offsetted" dx="0" dy="2" />
            {/* Layer 3: extended gold */}
            <feColorMatrix in="blur30" result="color-3-blur" type="matrix"
              values="0.79 0 0 0 0  0 0.66 0 0 0  0 0 0.3 0 0  0 0 0 1 0" />
            <feOffset in="color-3-blur" result="layer-3-offsetted" dx="0" dy="2" />
            {/* Layer 4: deep gold shadow */}
            <feColorMatrix in="blur30" result="color-4-blur" type="matrix"
              values="0.45 0 0 0 0  0 0.3 0 0 0  0 0 0.08 0 0  0 0 0 1 0" />
            <feOffset in="color-4-blur" result="layer-4-offsetted" dx="0" dy="16" />
            {/* Layer 5: ambient */}
            <feColorMatrix in="blur30" result="color-5-blur" type="matrix"
              values="0.42 0 0 0 0  0 0.28 0 0 0  0 0 0.1 0 0  0 0 0 1 0" />
            <feOffset in="color-5-blur" result="layer-5-offsetted" dx="0" dy="64" />
            {/* Layer 6: deep ambient */}
            <feColorMatrix in="blur30" result="color-6-blur" type="matrix"
              values="0.21 0 0 0 0  0 0.14 0 0 0  0 0 0.05 0 0  0 0 0 1 0" />
            <feOffset in="color-6-blur" result="layer-6-offsetted" dx="0" dy="64" />
            {/* Layer 7: dark base */}
            <feColorMatrix in="blur30" result="color-7-blur" type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.68 0" />
            <feOffset in="color-7-blur" result="layer-7-offsetted" dx="0" dy="64" />
            <feMerge>
              <feMergeNode in="layer-0-offsetted" />
              <feMergeNode in="layer-1-offsetted" />
              <feMergeNode in="layer-2-offsetted" />
              <feMergeNode in="layer-3-offsetted" />
              <feMergeNode in="layer-4-offsetted" />
              <feMergeNode in="layer-5-offsetted" />
              <feMergeNode in="layer-6-offsetted" />
              <feMergeNode in="layer-7-offsetted" />
              <feMergeNode in="layer-0-offsetted" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </section>
  );
}
