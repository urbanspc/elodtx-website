import type { Metadata } from "next";
import { SEO } from "@/lib/constants";
import { ConversationComparison } from "@/components/the-whisper/conversation-comparison";
import { WhisperSourcesDiagram } from "@/components/the-whisper/whisper-sources-diagram";

export const metadata: Metadata = {
  title: SEO.pages.theWhisper.title,
  description: SEO.pages.theWhisper.description,
  keywords: SEO.pages.theWhisper.keywords,
  openGraph: {
    title: SEO.pages.theWhisper.title,
    description: SEO.pages.theWhisper.description,
    siteName: SEO.siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.pages.theWhisper.title,
    description: SEO.pages.theWhisper.description,
  },
};

export default function TheWhisperPage() {
  return (
    <div className="py-20">
      <div className="max-w-site mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          The <span className="text-brand-gold">Whisper</span>
        </h1>
        <p className="text-xl text-[rgba(255,255,255,0.6)] text-center max-w-3xl mx-auto mb-8">
          EloDtx never speaks for you. It makes sure you don&apos;t miss the moment.
        </p>

        {/* Philosophy */}
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-[rgba(255,255,255,0.85)] text-lg leading-relaxed mb-4">
            Most AI tries to write for you. EloDtx does the opposite. It watches
            the conversation — not the words, but the patterns — and surfaces a
            quiet suggestion when it detects an opportunity you might miss.
          </p>
          <p className="text-[rgba(255,255,255,0.85)] text-lg leading-relaxed mb-4">
            EloDtx combines what it learned about you over weeks of behavioral
            observation (your Know Me profile) with what it detects in the live
            conversation (processed ephemerally, never stored). When a live signal
            matches a known depth dimension in your match&apos;s profile, the whisper
            appears.
          </p>
          <p className="text-[rgba(255,255,255,0.85)] text-lg leading-relaxed">
            The whisper is visible only to you. It suggests direction, never words.
            It&apos;s designed to feel like your own intuition catching something you
            almost overlooked.
          </p>
        </div>
      </div>

      <ConversationComparison />
      <WhisperSourcesDiagram />

      {/* UI Description */}
      <section className="py-16">
        <div className="max-w-site mx-auto px-6">
          <div className="max-w-md mx-auto">
            <p className="text-center text-[rgba(255,255,255,0.6)] mb-6">
              The whisper appears as a subtle golden suggestion beneath the
              message input — dismissible with one tap.
            </p>
            {/* Mockup */}
            <div className="bg-dark-secondary rounded-2xl border border-dark-tertiary p-4">
              <div className="bg-[rgba(201,168,76,0.1)] border border-brand-gold/30 rounded-lg p-3 mb-3 text-sm text-[rgba(255,255,255,0.85)]">
                <span className="text-brand-gold font-medium">✦ Whisper:</span>{" "}
                She mentioned not going back to her hometown much — this could
                be worth exploring gently.
              </div>
              <div className="flex gap-2">
                <div className="flex-1 bg-dark-tertiary rounded-full px-4 py-2 text-sm text-[rgba(255,255,255,0.4)]">
                  Type a message...
                </div>
                <button className="bg-brand-gold text-dark-primary rounded-full px-4 py-2 text-sm font-medium">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
