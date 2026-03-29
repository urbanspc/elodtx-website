"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type Agent } from "@/lib/constants";

interface AgentCardProps {
  agent: Agent;
  index?: number;
}

export function AgentCard({ agent, index = 0 }: AgentCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const IconComponent = agent.icon;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setIsExpanded(false);
  };

  const handleClick = () => {
    if (isMobile) setIsExpanded((prev) => !prev);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        transform: isExpanded ? "translateY(-4px)" : "translateY(0px)",
        boxShadow: isExpanded
          ? "0 0 40px rgba(201,168,76,0.15)"
          : "none",
        transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      className={[
        "bg-dark-secondary rounded-xl p-6 cursor-pointer select-none",
        "border",
        isExpanded
          ? "border-brand-gold/50"
          : "border-dark-tertiary",
      ].join(" ")}
    >
      {/* Top section */}
      <div className="flex items-start gap-4 mb-3">
        <div className="shrink-0">
          <IconComponent size={32} className="text-brand-gold" />
        </div>
        <div className="min-w-0">
          <h3 className="font-bold text-[rgba(255,255,255,0.85)] text-base leading-tight">
            {agent.name}
          </h3>
          {agent.subtitle && (
            <p className="text-[rgba(255,255,255,0.4)] text-sm mt-0.5">
              {agent.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Description */}
      <div className="overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          {isExpanded ? (
            <motion.p
              key="full"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-[rgba(255,255,255,0.6)] text-sm leading-relaxed"
            >
              {agent.fullDescription}
            </motion.p>
          ) : (
            <motion.p
              key="short"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-[rgba(255,255,255,0.6)] text-sm leading-relaxed"
            >
              {agent.shortDescription}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile expand indicator */}
      {isMobile && (
        <div className="mt-3 flex items-center gap-1">
          <span className="text-[rgba(201,168,76,0.6)] text-xs">
            {isExpanded ? "Less" : "Learn more"}
          </span>
          <motion.span
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-[rgba(201,168,76,0.6)] text-xs inline-block"
          >
            ↓
          </motion.span>
        </div>
      )}
    </motion.div>
  );
}
