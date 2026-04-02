import type { Metadata } from "next";
import { SEO } from "@/lib/constants";
import { ProximityAlertMockup } from "@/components/shared/proximity-alert-mockup";
import { GeohashPrivacyDiagram } from "@/components/proximity/geohash-privacy-diagram";
import { ConsentFlowDiagram } from "@/components/proximity/consent-flow-diagram";
import { ProximityFAQ } from "@/components/proximity/proximity-faq";

export const metadata: Metadata = {
  title: SEO.pages.proximity.title,
  description: SEO.pages.proximity.description,
  keywords: SEO.pages.proximity.keywords,
  openGraph: {
    title: SEO.pages.proximity.title,
    description: SEO.pages.proximity.description,
    siteName: SEO.siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.pages.proximity.title,
    description: SEO.pages.proximity.description,
  },
};

export default function ProximityPage() {
  return (
    <div className="py-20">
      {/* Vision */}
      <div className="max-w-site mx-auto px-6 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Safe <span className="text-brand-gold">Proximity</span>
        </h1>
        <p className="text-xl md:text-2xl italic text-center max-w-3xl mx-auto text-[rgba(255,255,255,0.6)] leading-relaxed">
          You&apos;re walking down the street. Your wrist vibrates once. Someone
          who matches 84% of what you&apos;re looking for is having coffee 150
          meters away.
        </p>
      </div>

      {/* Apple Watch Mockup */}
      <div className="flex justify-center mb-20">
        <ProximityAlertMockup />
      </div>

      {/* Privacy by Architecture */}
      <section className="py-16">
        <div className="max-w-site mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Privacy by Architecture
          </h2>
          <p className="text-[rgba(255,255,255,0.6)] text-center max-w-2xl mx-auto mb-12">
            EloDtx uses geohash encoding that reduces your location to a ~500m ×
            500m area. Your exact coordinates are never stored, transmitted, or
            visible to anyone — including EloDtx servers.
          </p>
          <GeohashPrivacyDiagram />
        </div>
      </section>

      {/* Apple Watch Integration */}
      <section className="py-16 bg-dark-secondary/30">
        <div className="max-w-site mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Apple Watch Integration
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[rgba(255,255,255,0.6)] leading-relaxed mb-4">
              A haptic tap on the wrist is the most discreet way to receive a
              proximity alert. It doesn&apos;t require pulling out your phone,
              doesn&apos;t make a sound, and feels natural rather than
              technological.
            </p>
            <p className="text-[rgba(255,255,255,0.6)] leading-relaxed">
              The alert card shows five elements: compatibility score, shared
              traits, current activity signal, approximate distance, and two
              action buttons. Everything you need to decide, nothing you
              don&apos;t.
            </p>
          </div>
        </div>
      </section>

      {/* Consent Flow */}
      <section className="py-16">
        <div className="max-w-site mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            The Consent Architecture
          </h2>
          <p className="text-[rgba(255,255,255,0.6)] text-center max-w-2xl mx-auto mb-12">
            Every step requires explicit permission. Nothing happens without both
            parties opting in.
          </p>
          <ConsentFlowDiagram />
        </div>
      </section>

      {/* Serendipity, Not Surveillance */}
      <section className="py-16 bg-dark-secondary/30">
        <div className="max-w-site mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Serendipity, Not Surveillance
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[rgba(255,255,255,0.6)] leading-relaxed mb-4">
              The combination of deep compatibility scoring, minimal privacy
              footprint, and haptic delivery creates something unique: encounters
              that feel like fate rather than technology.
            </p>
            <p className="text-[rgba(255,255,255,0.6)] leading-relaxed">
              EloDtx doesn&apos;t track where you go. It doesn&apos;t build
              movement patterns. It doesn&apos;t store location history. It
              simply notices when two highly compatible people happen to be in
              the same area — and gives them the gentlest possible nudge.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-site mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <ProximityFAQ />
        </div>
      </section>
    </div>
  );
}
