"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

interface CompatibilityScoreProps {
  score: number;
  size?: "sm" | "md" | "lg";
  animated?: boolean;
  className?: string;
}

const SIZE_MAP = {
  sm: 80,
  md: 120,
  lg: 160,
};

export function CompatibilityScore({
  score,
  size = "md",
  animated = true,
  className,
}: CompatibilityScoreProps) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true });

  const px = SIZE_MAP[size];
  const strokeWidth = px * 0.075;
  const radius = (px - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = px / 2;

  const motionValue = useMotionValue(0);
  const displayScore = useTransform(motionValue, (v) => Math.round(v).toString());
  const dashOffset = useTransform(
    motionValue,
    (v) => circumference - (v / 100) * circumference
  );

  useEffect(() => {
    if (isInView && animated) {
      const controls = animate(motionValue, score, {
        duration: 1.5,
        ease: "easeOut",
      });
      return controls.stop;
    } else if (!animated) {
      motionValue.set(score);
    }
  }, [isInView, animated, motionValue, score]);

  const fontSize = px * 0.2;

  return (
    <span className={className} style={{ display: "inline-block" }}>
      <motion.svg
        ref={ref}
        width={px}
        height={px}
        viewBox={`0 0 ${px} ${px}`}
        style={{ transform: "rotate(-90deg)" }}
      >
        {/* Background circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#252540"
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <motion.circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#C9A84C"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
        />
      </motion.svg>
      {/* Center text — rotated back to upright and overlaid */}
      <span
        style={{
          position: "relative",
          display: "flex",
          marginTop: -px,
          height: px,
          width: px,
          alignItems: "center",
          justifyContent: "center",
          fontSize,
          fontWeight: 700,
          color: "#C9A84C",
          pointerEvents: "none",
        } as React.CSSProperties}
      >
        <motion.span>{displayScore}</motion.span>
        <span>%</span>
      </span>
    </span>
  );
}
