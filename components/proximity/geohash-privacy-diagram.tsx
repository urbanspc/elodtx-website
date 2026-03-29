"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export function GeohashPrivacyDiagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="flex flex-col items-center gap-6">
      {/* Grid */}
      <div className="grid grid-cols-5 gap-1">
        {Array.from({ length: 25 }).map((_, i) => {
          const isHighlighted = i === 12; // center cell
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.02, duration: 0.3 }}
              className={`w-14 h-14 md:w-20 md:h-20 rounded-sm relative ${
                isHighlighted
                  ? "bg-brand-gold/20 border-2 border-brand-gold"
                  : "bg-dark-tertiary/30 border border-dark-tertiary/50"
              }`}
            >
              {isHighlighted && (
                <>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.8, duration: 0.3 }}
                    className="absolute top-3 left-4 w-2 h-2 rounded-full bg-white"
                  />
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1, duration: 0.3 }}
                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-brand-gold whitespace-nowrap font-medium"
                  >
                    ~500m × 500m
                  </motion.span>
                </>
              )}
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="mt-8 text-center"
      >
        <p className="text-[rgba(255,255,255,0.85)] font-medium">
          EloDtx only knows the{" "}
          <span className="text-brand-gold">gold zone</span>. Not the dot.
        </p>
        <p className="text-sm text-[rgba(255,255,255,0.4)] mt-1">
          Your exact position is never transmitted, stored, or visible to anyone.
        </p>
      </motion.div>
    </div>
  );
}
