import type { Metadata } from "next";
import { SEO } from "@/lib/constants";
import { WhisperSystemDiagram } from "@/components/how-it-works/whisper-system-diagram";
import { ProximityFlowSteps } from "@/components/how-it-works/proximity-flow-steps";
import { BehaviorLearningLoop } from "@/components/how-it-works/behavior-learning-loop";
import { TrainingPathTimeline } from "@/components/how-it-works/training-path-timeline";

export const metadata: Metadata = {
  title: SEO.pages.howItWorks.title,
  description: SEO.pages.howItWorks.description,
  keywords: SEO.pages.howItWorks.keywords,
  openGraph: {
    title: SEO.pages.howItWorks.title,
    description: SEO.pages.howItWorks.description,
    siteName: SEO.siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.pages.howItWorks.title,
    description: SEO.pages.howItWorks.description,
  },
};

export default function HowItWorksPage() {
  return (
    <>
      {/* Page hero */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-sm font-semibold text-brand-gold uppercase tracking-widest mb-4">
            Under the hood
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            How EloDtx Works
          </h1>
          <p className="text-xl text-[rgba(255,255,255,0.6)] max-w-2xl mx-auto">
            Three systems. One purpose. Building real human connection at scale
            — with whispers, proximity, and a model that never stops learning.
          </p>
        </div>
      </section>

      <WhisperSystemDiagram />
      <ProximityFlowSteps />
      <BehaviorLearningLoop />
      <TrainingPathTimeline />
    </>
  );
}
