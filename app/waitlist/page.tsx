import type { Metadata } from "next";
import { SEO } from "@/lib/constants";
import { WaitlistForm } from "@/components/shared/waitlist-form";

export const metadata: Metadata = {
  title: SEO.pages.waitlist.title,
  description: SEO.pages.waitlist.description,
  keywords: SEO.pages.waitlist.keywords,
  openGraph: {
    title: SEO.pages.waitlist.title,
    description: SEO.pages.waitlist.description,
    siteName: SEO.siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.pages.waitlist.title,
    description: SEO.pages.waitlist.description,
  },
};

export default function WaitlistPage() {
  return (
    <div className="py-20">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Be among the first platforms powered by{" "}
          <span className="text-brand-gold">EloDtx</span>.
        </h1>
        <p className="text-xl text-[rgba(255,255,255,0.6)] text-center mb-12">
          First 10 partners receive 90 days free access with full dedicated
          support.
        </p>

        <WaitlistForm />

        <p className="text-sm text-[rgba(255,255,255,0.4)] text-center mt-8">
          Investors attending the Âme Intense launch event in Mauritius, October
          2026 will have exclusive first access.
        </p>
      </div>
    </div>
  );
}
