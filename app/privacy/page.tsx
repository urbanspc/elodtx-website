import type { Metadata } from "next";
import { SectionReveal } from "@/components/shared/section-reveal";

export const metadata: Metadata = {
  title: "Privacy Policy — EloDtx",
  description:
    "How EloDtx collects, uses, and protects your personal data. Privacy-first connection intelligence.",
};

const LAST_UPDATED = "2 April 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-dark-primary text-[rgba(255,255,255,0.85)]">
      <section className="py-24 px-6">
        <div className="max-w-site mx-auto">
          <SectionReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-[rgba(255,255,255,0.5)] text-sm mb-12">
              Last updated: {LAST_UPDATED}
            </p>
          </SectionReveal>

          <div className="max-w-3xl space-y-12">
            {/* Intro */}
            <SectionReveal delay={0.05}>
              <p className="text-[rgba(255,255,255,0.7)] text-lg leading-relaxed">
                Urban Space Web Technologies Ltd (&ldquo;EloDtx&rdquo;,
                &ldquo;we&rdquo;, &ldquo;us&rdquo;) is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use,
                store, and share your personal data when you use the EloDtx
                platform, website, and APIs.
              </p>
            </SectionReveal>

            {/* 1 */}
            <SectionReveal delay={0.1}>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Data We Collect
              </h2>
              <ul className="list-disc list-inside space-y-2 text-[rgba(255,255,255,0.7)] leading-relaxed">
                <li>
                  <strong className="text-white">Account data</strong> — name,
                  email address, company name, and billing information when you
                  sign up or subscribe.
                </li>
                <li>
                  <strong className="text-white">Profile &amp; behavioural data</strong> —
                  compatibility profile dimensions generated through the EloDtx
                  engine (138-dimension profiles).
                </li>
                <li>
                  <strong className="text-white">Usage data</strong> — API
                  request logs, page views, feature interactions, and
                  anonymised analytics.
                </li>
                <li>
                  <strong className="text-white">Proximity data</strong> —
                  geohash-level location data (never precise GPS coordinates)
                  when Safe Proximity features are enabled by the end-user.
                </li>
                <li>
                  <strong className="text-white">Technical data</strong> —
                  device type, browser, IP address, and cookies strictly
                  necessary for service delivery.
                </li>
              </ul>
            </SectionReveal>

            {/* 2 */}
            <SectionReveal delay={0.15}>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. How We Use Your Data
              </h2>
              <ul className="list-disc list-inside space-y-2 text-[rgba(255,255,255,0.7)] leading-relaxed">
                <li>To provide and improve the EloDtx connection intelligence platform.</li>
                <li>To generate and refine compatibility scores and matching algorithms.</li>
                <li>To communicate service updates, security notices, and billing information.</li>
                <li>To comply with legal obligations and enforce our Terms of Service.</li>
                <li>To conduct anonymised, aggregated research to improve our AI models.</li>
              </ul>
            </SectionReveal>

            {/* 3 */}
            <SectionReveal delay={0.2}>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. Legal Basis for Processing
              </h2>
              <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                We process your personal data under the following legal bases as
                defined by the EU General Data Protection Regulation (GDPR) and
                the Mauritius Data Protection Act 2017:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[rgba(255,255,255,0.7)] leading-relaxed mt-3">
                <li><strong className="text-white">Contractual necessity</strong> — to deliver the services you have subscribed to.</li>
                <li><strong className="text-white">Legitimate interest</strong> — to improve the platform, prevent fraud, and ensure security.</li>
                <li><strong className="text-white">Consent</strong> — for optional features such as proximity matching and marketing communications.</li>
                <li><strong className="text-white">Legal obligation</strong> — where required by applicable law.</li>
              </ul>
            </SectionReveal>

            {/* 4 */}
            <SectionReveal delay={0.25}>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Data Sharing &amp; Third Parties
              </h2>
              <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                We do not sell your personal data. We share data only with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[rgba(255,255,255,0.7)] leading-relaxed mt-3">
                <li>Infrastructure providers (hosting, CDN, email delivery) under strict data processing agreements.</li>
                <li>Payment processors for billing purposes.</li>
                <li>Law enforcement or regulatory authorities when legally compelled.</li>
              </ul>
            </SectionReveal>

            {/* 5 */}
            <SectionReveal delay={0.3}>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Data Retention
              </h2>
              <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                We retain your personal data for as long as your account is
                active or as needed to provide our services. Upon account
                deletion, personal data is purged within 30 days, except where
                retention is required by law (e.g., financial records for up to
                7 years).
              </p>
            </SectionReveal>

            {/* 6 */}
            <SectionReveal delay={0.35}>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Data Security
              </h2>
              <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                All data is encrypted in transit (TLS 1.3) and at rest
                (AES-256). We conduct regular security audits and penetration
                testing. Access to personal data is limited to authorised
                personnel on a need-to-know basis.
              </p>
            </SectionReveal>

            {/* 7 */}
            <SectionReveal delay={0.4}>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. International Transfers
              </h2>
              <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                EloDtx is operated from Mauritius and the United Kingdom. Where
                data is transferred outside the EEA, we rely on Standard
                Contractual Clauses (SCCs) or adequacy decisions to ensure an
                appropriate level of protection.
              </p>
            </SectionReveal>

            {/* 8 */}
            <SectionReveal delay={0.45}>
              <h2 className="text-2xl font-semibold text-white mb-4">
                8. Your Rights
              </h2>
              <p className="text-[rgba(255,255,255,0.7)] leading-relaxed mb-3">
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[rgba(255,255,255,0.7)] leading-relaxed">
                <li>Access the personal data we hold about you.</li>
                <li>Rectify inaccurate or incomplete data.</li>
                <li>Request erasure of your data (&ldquo;right to be forgotten&rdquo;).</li>
                <li>Restrict or object to certain processing activities.</li>
                <li>Data portability — receive your data in a structured, machine-readable format.</li>
                <li>Withdraw consent at any time for consent-based processing.</li>
              </ul>
              <p className="text-[rgba(255,255,255,0.7)] leading-relaxed mt-3">
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:privacy@elodtx.com" className="text-brand-gold hover:underline">
                  privacy@elodtx.com
                </a>.
              </p>
            </SectionReveal>

            {/* 9 */}
            <SectionReveal delay={0.5}>
              <h2 className="text-2xl font-semibold text-white mb-4">
                9. Cookies
              </h2>
              <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                We use strictly necessary cookies to operate the platform.
                Analytics cookies are only set with your explicit consent. You
                can manage cookie preferences through your browser settings at
                any time.
              </p>
            </SectionReveal>

            {/* 10 */}
            <SectionReveal delay={0.55}>
              <h2 className="text-2xl font-semibold text-white mb-4">
                10. Changes to This Policy
              </h2>
              <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                We may update this Privacy Policy from time to time. Material
                changes will be communicated via email or an in-platform notice.
                Continued use of EloDtx after changes constitutes acceptance of
                the updated policy.
              </p>
            </SectionReveal>

            {/* Contact */}
            <SectionReveal delay={0.6}>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Contact
              </h2>
              <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                For privacy-related enquiries, contact our Data Protection
                Officer at{" "}
                <a href="mailto:privacy@elodtx.com" className="text-brand-gold hover:underline">
                  privacy@elodtx.com
                </a>{" "}
                or write to:
              </p>
              <address className="text-[rgba(255,255,255,0.7)] not-italic mt-3 leading-relaxed">
                Urban Space Web Technologies Ltd<br />
                Mauritius
              </address>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
