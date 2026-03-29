"use client";

import { useState } from "react";
import { CodeBlock } from "@/components/shared/code-block";

interface LanguageTabsProps {
  examples: Record<string, string>;
}

export function LanguageTabs({ examples }: LanguageTabsProps) {
  const languages = Object.keys(examples);
  const [active, setActive] = useState(languages[0] ?? "");

  if (languages.length === 0) return null;

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex gap-2 mb-3 flex-wrap">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => setActive(lang)}
            style={{
              padding: "6px 16px",
              borderRadius: 20,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              border: "1px solid",
              transition: "all 0.15s ease",
              backgroundColor:
                active === lang ? "rgba(201,168,76,0.15)" : "transparent",
              borderColor:
                active === lang ? "rgba(201,168,76,0.5)" : "rgba(255,255,255,0.1)",
              color: active === lang ? "#C9A84C" : "rgba(255,255,255,0.5)",
              letterSpacing: 0.3,
              textTransform: "capitalize",
            }}
          >
            {lang}
          </button>
        ))}
      </div>

      {/* Code block for active tab */}
      <CodeBlock code={examples[active] ?? ""} language={active} />
    </div>
  );
}
