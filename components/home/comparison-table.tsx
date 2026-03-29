"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";
import { COMPARISON_DATA } from "@/lib/constants";
import { SectionReveal } from "@/components/shared/section-reveal";

type CellValue = "yes" | "no" | "partial";

function CellIcon({ value }: { value: CellValue }) {
  if (value === "yes") {
    return <Check size={18} className="text-[#1D9E75] mx-auto" aria-label="Yes" />;
  }
  if (value === "no") {
    return <X size={18} className="text-[rgba(255,255,255,0.3)] mx-auto" aria-label="No" />;
  }
  return <Minus size={18} className="text-amber-500 mx-auto" aria-label="Partial" />;
}

export function ComparisonTable() {
  return (
    <section className="py-20">
      <div className="max-w-site mx-auto px-6">
        <SectionReveal direction="up" delay={0}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How EloDtx Compares
          </h2>
        </SectionReveal>

        <SectionReveal direction="up" delay={0.1}>
          <div className="overflow-x-auto rounded-xl border border-dark-tertiary">
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr className="bg-dark-secondary">
                  <th className="text-left px-5 py-4 text-sm font-semibold text-[rgba(255,255,255,0.7)] sticky left-0 bg-dark-secondary z-10 min-w-[200px]">
                    Capability
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold text-[rgba(255,255,255,0.7)] text-center whitespace-nowrap">
                    General AI (GPT/Gemini)
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold text-[rgba(255,255,255,0.7)] text-center whitespace-nowrap">
                    Standard Algorithms
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold text-brand-gold text-center whitespace-nowrap">
                    EloDtx
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_DATA.map((row, index) => (
                  <motion.tr
                    key={row.capability}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
                    className={
                      index % 2 === 0
                        ? "bg-dark-primary"
                        : "bg-dark-secondary/30"
                    }
                  >
                    <td className={[
                      "px-5 py-3.5 text-sm text-[rgba(255,255,255,0.8)] sticky left-0 z-10",
                      index % 2 === 0 ? "bg-dark-primary" : "bg-dark-secondary/30",
                    ].join(" ")}>
                      {row.capability}
                    </td>
                    <td className="px-5 py-3.5 text-center">
                      <CellIcon value={row.generalAI} />
                    </td>
                    <td className="px-5 py-3.5 text-center">
                      <CellIcon value={row.standardAlgo} />
                    </td>
                    <td className="px-5 py-3.5 text-center bg-[rgba(201,168,76,0.05)]">
                      <CellIcon value={row.elodtx} />
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
