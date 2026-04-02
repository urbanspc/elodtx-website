import type { Metadata } from "next";
import { SEO } from "@/lib/constants";
import { Hero } from "@/components/home/hero";
import { StatsStrip } from "@/components/home/stats-strip";
import { HowItWorks } from "@/components/home/how-it-works";
import { AgentsSection } from "@/components/home/agents-section";
import { IndustriesSection } from "@/components/home/industries-section";
import { ComparisonTable } from "@/components/home/comparison-table";
import { ProofSection } from "@/components/home/proof-section";
import { PricingSection } from "@/components/home/pricing-section";
import { FinalCTA } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: SEO.pages.home.title,
  description: SEO.pages.home.description,
  keywords: SEO.pages.home.keywords,
  openGraph: {
    title: SEO.pages.home.title,
    description: SEO.pages.home.description,
    siteName: SEO.siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.pages.home.title,
    description: SEO.pages.home.description,
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <HowItWorks />
      <AgentsSection />
      <IndustriesSection />
      <ComparisonTable />
      <ProofSection />
      <PricingSection />
      <FinalCTA />
    </>
  );
}
