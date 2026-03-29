"use client";

import { motion } from "framer-motion";
import { Brain, MessageCircle, Zap, X, Sparkles } from "lucide-react";
import { SectionReveal } from "@/components/shared/section-reveal";

const sources = [
  {
    icon: Brain,
    title: "Know Me Profile",
    description:
      "What EloDtx inferred over weeks of behavioral observation",
  },
  {
    icon: MessageCircle,
    title: "Live Conversation Signals",
    description:
      "What EloDtx detects in the current exchange (ephemerally, never stored)",
  },
  {
    icon: Zap,
    title: "Cross-Reference Intelligence",
    description:
      "When a live signal matches a known depth dimension in the profile",
  },
];

const neverDoes = [
  "Never writes responses for users",
  "Never shares profile data directly",
  "Never stores message content",
  "Never interferes without consent",
];

export function WhisperSourcesDiagram() {
  return (
    <section className="py-20">
      <div className="max-w-site mx-auto px-6">
        <SectionReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Three Sources of Intelligence
          </h2>
          <p className="text-[rgba(255,255,255,0.6)] text-center max-w-2xl mx-auto mb-12">
            Every whisper draws from three distinct signals, combined in real time.
          </p>
        </SectionReveal>

        {/* Source cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {sources.map((source, i) => (
            <SectionReveal key={source.title} delay={i * 0.15}>
              <div className="bg-dark-secondary border border-dark-tertiary rounded-xl p-6 text-center h-full">
                <source.icon className="w-10 h-10 text-brand-gold mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{source.title}</h3>
                <p className="text-sm text-[rgba(255,255,255,0.6)]">
                  {source.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Converging lines */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-col items-center">
            <div className="flex gap-24 mb-0">
              <div className="w-px h-8 bg-brand-gold/30" />
              <div className="w-px h-8 bg-brand-gold/30" />
              <div className="w-px h-8 bg-brand-gold/30" />
            </div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-[rgba(201,168,76,0.1)] border border-brand-gold/30 rounded-xl p-6 text-center max-w-md"
            >
              <Sparkles className="w-8 h-8 text-brand-gold mx-auto mb-3" />
              <h3 className="text-brand-gold font-bold text-lg mb-2">
                The Whisper
              </h3>
              <p className="text-sm text-[rgba(255,255,255,0.6)]">
                A contextual suggestion visible only to you, appearing at the right moment.
              </p>
            </motion.div>
          </div>
        </div>

        {/* What EloDtx NEVER does */}
        <SectionReveal className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            What EloDtx <span className="text-red-400">Never</span> Does
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {neverDoes.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-dark-secondary rounded-lg p-4 border border-dark-tertiary"
              >
                <X className="w-5 h-5 text-red-400 shrink-0" />
                <span className="text-[rgba(255,255,255,0.85)]">{item}</span>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
