"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Coffee, MapPin } from "lucide-react";

interface ProximityAlertMockupProps {
  score?: number;
  traits?: string[];
  distance?: string;
  className?: string;
}

export function ProximityAlertMockup({
  score = 84,
  traits = ["Creative pursuits", "Deep conversations", "Morning person"],
  distance = "~150m",
  className,
}: ProximityAlertMockupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const vibrateVariants = {
    idle: { x: 0 },
    vibrate: {
      x: [0, -2, 2, -2, 2, -2, 2, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut" as const,
        times: [0, 0.14, 0.28, 0.43, 0.57, 0.71, 0.85, 1],
      },
    },
  };

  const cardVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.6,
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <div ref={ref} className={className} style={{ display: "inline-flex", justifyContent: "center" }}>
      {/* Apple Watch frame */}
      <motion.div
        animate={isInView ? "vibrate" : "idle"}
        variants={vibrateVariants}
        style={{
          width: 180,
          aspectRatio: "4 / 5",
          borderRadius: 44,
          border: "2px solid #333",
          backgroundColor: "#1A1A2E",
          overflow: "hidden",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: "8px",
          boxShadow: "0 0 0 6px #111, 0 8px 32px rgba(0,0,0,0.7)",
        }}
      >
        {/* Watch crown / side button decoration */}
        <div
          style={{
            position: "absolute",
            right: -5,
            top: "30%",
            width: 6,
            height: 28,
            borderRadius: 3,
            backgroundColor: "#444",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -5,
            top: "52%",
            width: 6,
            height: 16,
            borderRadius: 3,
            backgroundColor: "#444",
          }}
        />

        {/* Watch face background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 42,
            backgroundColor: "#0D0D1A",
            overflow: "hidden",
          }}
        >
          {/* Subtle time display at top */}
          <div
            style={{
              textAlign: "center",
              paddingTop: 14,
              fontSize: 11,
              color: "#888",
              fontFamily: "monospace",
              letterSpacing: 1,
            }}
          >
            9:41
          </div>
        </div>

        {/* Alert card slides up */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{
            position: "relative",
            width: "100%",
            backgroundColor: "#1A1A2E",
            borderRadius: 28,
            padding: "10px 12px",
            display: "flex",
            flexDirection: "column",
            gap: 7,
            boxShadow: "0 -4px 20px rgba(0,0,0,0.5)",
            border: "1px solid rgba(201,168,76,0.2)",
          }}
        >
          {/* Header row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 9, color: "#888", fontWeight: 500, letterSpacing: 0.5, textTransform: "uppercase" }}>
              Nearby Match
            </span>
            {/* Score badge */}
            <span
              style={{
                backgroundColor: "rgba(201,168,76,0.15)",
                border: "1px solid rgba(201,168,76,0.4)",
                borderRadius: 20,
                padding: "1px 7px",
                fontSize: 13,
                fontWeight: 700,
                color: "#C9A84C",
                lineHeight: 1.4,
              }}
            >
              {score}%
            </span>
          </div>

          {/* Traits */}
          <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {traits.map((trait) => (
              <div key={trait} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "#C9A84C", flexShrink: 0 }} />
                <span style={{ fontSize: 9, color: "#ccc", lineHeight: 1.3 }}>{trait}</span>
              </div>
            ))}
          </div>

          {/* Activity row */}
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <Coffee size={10} color="#C9A84C" />
            <span style={{ fontSize: 9, color: "#bbb" }}>Having coffee</span>
          </div>

          {/* Distance row */}
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <MapPin size={10} color="#C9A84C" />
            <span style={{ fontSize: 9, color: "#bbb" }}>{distance} away</span>
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 6, marginTop: 2 }}>
            <button
              style={{
                flex: 1,
                backgroundColor: "#C9A84C",
                color: "#0D0D1A",
                border: "none",
                borderRadius: 20,
                padding: "5px 0",
                fontSize: 9,
                fontWeight: 700,
                cursor: "pointer",
                letterSpacing: 0.3,
              }}
            >
              Connect
            </button>
            <button
              style={{
                flex: 1,
                backgroundColor: "transparent",
                color: "#aaa",
                border: "1px solid #555",
                borderRadius: 20,
                padding: "5px 0",
                fontSize: 9,
                fontWeight: 600,
                cursor: "pointer",
                letterSpacing: 0.3,
              }}
            >
              Not Now
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
