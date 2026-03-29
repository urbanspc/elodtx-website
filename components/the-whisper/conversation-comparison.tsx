"use client";

import { ConversationDemo } from "@/components/shared/conversation-demo";
import { SectionReveal } from "@/components/shared/section-reveal";
import { Coffee, X } from "lucide-react";

export function ConversationComparison() {
  return (
    <SectionReveal className="py-16">
      <div className="max-w-site mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          See the Difference
        </h2>
        <p className="text-[rgba(255,255,255,0.6)] text-center max-w-2xl mx-auto mb-12">
          The same two people. The same opening message. Watch what happens.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Without EloDtx */}
          <div>
            <div className="flex items-center gap-2 mb-4 justify-center">
              <X className="w-5 h-5 text-red-400" />
              <span className="text-red-400 font-medium">Without EloDtx</span>
            </div>
            <ConversationDemo withWhisper={false} autoPlay />
            <div className="mt-4 text-center">
              <div className="inline-flex items-center gap-2 text-[rgba(255,255,255,0.4)] text-sm">
                <div className="w-16 h-px bg-[rgba(255,255,255,0.2)]" />
                <span>Conversation died</span>
                <div className="w-16 h-px bg-[rgba(255,255,255,0.2)]" />
              </div>
            </div>
          </div>

          {/* With EloDtx */}
          <div>
            <div className="flex items-center gap-2 mb-4 justify-center">
              <span className="w-2 h-2 rounded-full bg-brand-gold" />
              <span className="text-brand-gold font-medium">With EloDtx</span>
            </div>
            <ConversationDemo withWhisper={true} autoPlay />
            <div className="mt-4 text-center">
              <div className="inline-flex items-center gap-2 text-brand-gold text-sm">
                <Coffee className="w-4 h-4" />
                <span>Coffee date scheduled</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
