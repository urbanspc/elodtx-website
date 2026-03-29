"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Check, Copy } from "lucide-react";
import type { Highlighter } from "shiki";

type SingleProps = {
  code: string;
  language: string;
  tabs?: never;
};

type MultiProps = {
  tabs: { language: string; label: string; code: string }[];
  code?: never;
  language?: never;
};

type CodeBlockProps = (SingleProps | MultiProps) & {
  className?: string;
};

// Singleton highlighter promise so we only initialise once per page
let highlighterPromise: Promise<Highlighter> | null = null;

function getHighlighter(): Promise<Highlighter> {
  if (!highlighterPromise) {
    highlighterPromise = import("shiki").then(({ createHighlighter }) =>
      createHighlighter({
        themes: ["github-dark"],
        langs: [
          "typescript",
          "javascript",
          "tsx",
          "jsx",
          "bash",
          "json",
          "css",
          "html",
          "python",
          "rust",
          "go",
        ],
      })
    );
  }
  return highlighterPromise;
}

export function CodeBlock({ className, ...props }: CodeBlockProps) {
  const isMulti = "tabs" in props && Array.isArray(props.tabs);

  const tabs = isMulti
    ? props.tabs!
    : [{ label: props.language!, language: props.language!, code: props.code! }];

  const [activeIndex, setActiveIndex] = useState(0);
  const [highlightedMap, setHighlightedMap] = useState<Record<number, string>>({});
  const [copied, setCopied] = useState(false);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeTab = tabs[activeIndex];

  useEffect(() => {
    let cancelled = false;
    getHighlighter().then((hl) => {
      if (cancelled) return;
      const map: Record<number, string> = {};
      tabs.forEach((tab, i) => {
        try {
          map[i] = hl.codeToHtml(tab.code, {
            lang: tab.language,
            theme: "github-dark",
          });
        } catch {
          // unsupported language fallback – render plain
          map[i] = `<pre style="color:#cdd9e5">${tab.code
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")}</pre>`;
        }
      });
      setHighlightedMap(map);
    });
    return () => {
      cancelled = true;
    };
    // We intentionally only run once on mount; tabs content doesn't change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(activeTab.code).then(() => {
      setCopied(true);
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
      copyTimerRef.current = setTimeout(() => setCopied(false), 2000);
    });
  }, [activeTab.code]);

  const highlighted = highlightedMap[activeIndex];

  return (
    <div
      className={className}
      style={{
        backgroundColor: "#1A1A2E",
        borderRadius: 12,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Top bar: tab selectors + copy button */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 12px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          backgroundColor: "#141428",
        }}
      >
        {/* Tab buttons (only show selectors when multi-tab) */}
        <div style={{ display: "flex", gap: 4 }}>
          {isMulti ? (
            tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                style={{
                  padding: "4px 12px",
                  borderRadius: 6,
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                  border: "none",
                  transition: "background 0.15s, color 0.15s",
                  backgroundColor:
                    activeIndex === i ? "rgba(201,168,76,0.15)" : "transparent",
                  color: activeIndex === i ? "#C9A84C" : "#666",
                  letterSpacing: 0.3,
                }}
              >
                {tab.label}
              </button>
            ))
          ) : (
            <span
              style={{
                fontSize: 11,
                color: "#666",
                padding: "4px 4px",
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              {activeTab.language}
            </span>
          )}
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          title={copied ? "Copied!" : "Copy code"}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            padding: "4px 10px",
            borderRadius: 6,
            border: "1px solid rgba(255,255,255,0.1)",
            backgroundColor: copied ? "rgba(29,158,117,0.15)" : "transparent",
            color: copied ? "#1D9E75" : "#888",
            fontSize: 11,
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.15s ease",
            letterSpacing: 0.3,
          }}
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Code area */}
      <div
        style={{
          overflowX: "auto",
          padding: "16px",
          fontFamily: "var(--font-jetbrains, 'JetBrains Mono', monospace)",
          fontSize: 13,
          lineHeight: 1.6,
          backgroundColor: "#0D1117", // github-dark bg
        }}
      >
        {highlighted ? (
          <div
            // shiki wraps output in <pre><code>, so we let it handle the markup
            dangerouslySetInnerHTML={{ __html: highlighted }}
            style={{
              // Override shiki's default pre styles to fit our layout
            }}
          />
        ) : (
          <pre
            style={{
              margin: 0,
              color: "#cdd9e5",
              whiteSpace: "pre",
              overflowX: "visible",
            }}
          >
            {activeTab.code}
          </pre>
        )}
      </div>

      {/* Inline style override for shiki pre element */}
      <style>{`
        .shiki {
          background: transparent !important;
          margin: 0;
          padding: 0;
          overflow-x: visible;
        }
        .shiki code {
          font-family: inherit;
          font-size: inherit;
          line-height: inherit;
        }
      `}</style>
    </div>
  );
}
