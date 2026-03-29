"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionRevealProps {
  direction?: "up" | "left" | "right";
  delay?: number;
  className?: string;
  children: React.ReactNode;
}

export function SectionReveal({
  direction = "up",
  delay = 0,
  className,
  children,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const initial = {
    opacity: 0,
    x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
    y: direction === "up" ? 30 : 0,
  };

  const animate = isInView
    ? { opacity: 1, x: 0, y: 0 }
    : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
