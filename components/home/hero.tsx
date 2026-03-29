"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedConnectionGraph from "@/components/shared/animated-connection-graph";

const HEADLINE = "The AI that understands human connection.";
const words = HEADLINE.split(" ");

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-5rem)] relative overflow-hidden flex items-center justify-center">
      {/* Animated background */}
      <AnimatedConnectionGraph density={60} speed={0.3} />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-primary/50 via-transparent to-dark-primary z-[1]" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Headline — word-by-word stagger */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="inline-block mr-[0.25em] last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="text-xl text-[rgba(255,255,255,0.6)] max-w-2xl mx-auto"
        >
          EloDtx is the first proprietary AI built exclusively to understand,
          predict and improve how humans connect — not adapted from a general
          model. Purpose-built from the ground up.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          className="flex gap-4 justify-center mt-8 flex-wrap"
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
    </section>
  );
}
