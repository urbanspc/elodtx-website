"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X } from "lucide-react";
import {
  CONVERSATION_WITHOUT_WHISPER,
  CONVERSATION_WITH_WHISPER,
  WHISPER_SUGGESTIONS,
  type ChatMessage,
  type WhisperMessage,
} from "@/lib/constants";

interface ConversationDemoProps {
  withWhisper: boolean;
  autoPlay?: boolean;
  className?: string;
}

export function ConversationDemo({
  withWhisper,
  autoPlay = false,
  className,
}: ConversationDemoProps) {
  const messages = withWhisper
    ? CONVERSATION_WITH_WHISPER
    : CONVERSATION_WITHOUT_WHISPER;

  const [visibleCount, setVisibleCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [dismissedWhispers, setDismissedWhispers] = useState<Set<number>>(
    new Set()
  );
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (autoPlay && visibleCount === 0) {
      setVisibleCount(1);
    }
  }, [autoPlay, visibleCount]);

  useEffect(() => {
    if (isPlaying && visibleCount < messages.length) {
      intervalRef.current = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 1500);
    } else if (visibleCount >= messages.length) {
      setIsPlaying(false);
    }

    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
    };
  }, [isPlaying, visibleCount, messages.length]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [visibleCount]);

  const handlePlay = () => {
    if (visibleCount >= messages.length) {
      // Reset and replay
      setVisibleCount(0);
      setDismissedWhispers(new Set());
      setTimeout(() => {
        setVisibleCount(1);
        setIsPlaying(true);
      }, 100);
    } else {
      setIsPlaying(true);
    }
  };

  const dismissWhisper = (index: number) => {
    setDismissedWhispers((prev) => new Set([...prev, index]));
  };

  // Build the rendered list: messages interleaved with whispers
  const renderedItems: Array<
    | { type: "message"; message: ChatMessage; msgIndex: number }
    | { type: "whisper"; whisper: WhisperMessage; whisperIndex: number }
  > = [];

  if (withWhisper) {
    for (let i = 0; i < visibleCount; i++) {
      renderedItems.push({ type: "message", message: messages[i], msgIndex: i });
      // Check if any whisper should appear after this message index
      WHISPER_SUGGESTIONS.forEach((w, wi) => {
        if (w.afterMessageIndex === i) {
          renderedItems.push({ type: "whisper", whisper: w, whisperIndex: wi });
        }
      });
    }
  } else {
    for (let i = 0; i < visibleCount; i++) {
      renderedItems.push({ type: "message", message: messages[i], msgIndex: i });
    }
  }

  const hasStarted = visibleCount > 0;
  const isComplete = visibleCount >= messages.length && !isPlaying;

  return (
    <div className={className}>
      <div className="rounded-2xl border border-dark-tertiary bg-dark-secondary max-w-sm mx-auto overflow-hidden">
        {/* Header */}
        <div className="px-4 py-3 border-b border-[rgba(255,255,255,0.08)] flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[rgba(255,255,255,0.12)]" />
            <span className="w-3 h-3 rounded-full bg-[rgba(255,255,255,0.12)]" />
            <span className="w-3 h-3 rounded-full bg-[rgba(255,255,255,0.12)]" />
          </div>
          <span className="text-[rgba(255,255,255,0.5)] text-xs font-medium tracking-wide flex-1 text-center">
            Baeyond Messenger
          </span>
          <div className="w-12" />
        </div>

        {/* Messages area */}
        <div className="flex flex-col gap-3 p-4 min-h-[320px] max-h-[420px] overflow-y-auto">
          <AnimatePresence initial={false}>
            {renderedItems.map((item, idx) => {
              if (item.type === "message") {
                const msg = item.message;
                const isUser = msg.sender === "user";
                return (
                  <motion.div
                    key={`msg-${item.msgIndex}`}
                    initial={{ opacity: 0, y: 10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className={`flex flex-col gap-1 ${isUser ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={[
                        "px-3 py-2 text-sm text-[rgba(255,255,255,0.85)] leading-relaxed",
                        isUser
                          ? "ml-auto bg-[rgba(201,168,76,0.2)] border border-[rgba(201,168,76,0.3)] rounded-2xl rounded-br-sm max-w-[80%]"
                          : "mr-auto bg-dark-tertiary rounded-2xl rounded-bl-sm max-w-[80%]",
                      ].join(" ")}
                    >
                      {msg.text}
                    </div>
                    <span className="text-xs text-[rgba(255,255,255,0.4)] px-1">
                      {msg.timestamp}
                    </span>
                  </motion.div>
                );
              }

              // Whisper card
              const wi = item.whisperIndex;
              if (dismissedWhispers.has(wi)) return null;

              return (
                <motion.div
                  key={`whisper-${wi}`}
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.3)] rounded-lg p-3 flex gap-2.5 items-start"
                >
                  <Sparkles
                    size={16}
                    className="text-brand-gold shrink-0 mt-0.5"
                  />
                  <p className="text-[rgba(201,168,76,0.9)] text-xs leading-relaxed flex-1">
                    {item.whisper.text}
                  </p>
                  <button
                    onClick={() => dismissWhisper(wi)}
                    className="shrink-0 text-[rgba(201,168,76,0.5)] hover:text-[rgba(201,168,76,0.9)] transition-colors"
                    aria-label="Dismiss suggestion"
                  >
                    <X size={14} />
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Typing indicator while playing */}
          <AnimatePresence>
            {isPlaying && visibleCount < messages.length && (
              <motion.div
                key="typing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-start"
              >
                <div className="bg-dark-tertiary rounded-2xl rounded-bl-sm px-3 py-2.5 flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-[rgba(255,255,255,0.4)]"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div ref={messagesEndRef} />
        </div>

        {/* Play button (shown when not autoPlay or when stopped) */}
        {!autoPlay && (
          <div className="px-4 pb-4">
            <button
              onClick={handlePlay}
              disabled={isPlaying}
              className={[
                "w-full py-2.5 rounded-xl text-sm font-medium transition-all",
                isPlaying
                  ? "bg-[rgba(201,168,76,0.1)] text-[rgba(201,168,76,0.5)] cursor-not-allowed"
                  : "bg-brand-gold text-dark-primary hover:bg-brand-gold-light active:scale-[0.98]",
              ].join(" ")}
            >
              {!hasStarted
                ? "Play Conversation"
                : isComplete
                ? "Replay Conversation"
                : "Playing…"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
