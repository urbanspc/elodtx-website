import type { Metadata } from "next";
import { SEO } from "@/lib/constants";
import { SectionReveal } from "@/components/shared/section-reveal";

export const metadata: Metadata = {
  title: SEO.pages.terms.title,
  description: SEO.pages.terms.description,
  keywords: SEO.pages.terms.keywords,
  openGraph: {
    title: SEO.pages.terms.title,
    description: SEO.pages.terms.description,
    siteName: SEO.siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.pages.terms.title,
    description: SEO.pages.terms.description,
  },
};

const LAST_UPDATED = "2 April 2026";

export default function TermsOfServicePage() {
  return (
    <div className="bg-dark-primary text-[rgba(255,255,255,0.85)]">
      <section className="py-24 px-6">
        <div className="max-w-site mx-auto">
          <SectionReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-[rgba(255,255,255,0.5)] text-sm mb-12">
              Last updated: {LAST_UPDATED}
            </p>
          </SectionReveal>

          <div className="max-w-3xl space-y-12">
            {/* Intro */}
            <SectionReveal delay={0.05}>
              <p className="text-[rgba(255,255,255,0.7)] text-lg leading-relaxed">
                These Terms of Service (&ldquo;Terms&rdquo;) govern your access
                to and use of the EloDtx platform, website, and APIs operated by
                Urban Space Web Technologies Ltd (&ldquo;EloDtx&rdquo;,
                &ldquo;we&rdquo;, &ldquo;us&rdquo;). By accessing or using our
                services, you agree to be bound by these Terms.
              </p>
            </SectionReveal>

            {/* 1 */}
            <SectionReveal delay={0.1}>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Eligibility
              </h2>
              <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                You must be at least 18 years old and have the legal capacity to
                enter into a binding agreement. If you are using EloDtx on
                behalf of an organisation, you represent that you have authority
                to bind that organisation to these Terms.
              </p>
            </SectionReveal>

            {/* 2 */}
            <SectionReveal delay={0.15}>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. Account &amp; API Access
              </h2>
              <ul className="list-disc list-inside space-y-2 text-[rgba(255,255,255,0.7)] leading-relaxed">
                <li>You are responsible for maintaining the confidentiality of your API keys and account credentials.</li>
                <li>You must not share API keys or allow unauthorised access to your account.</li>
                <li>You agree to notify us immediately of any unauthorised use at <a href="mailto:security@elodtx.com" className="text-brand-gold hover:underline">security@elodtx.com</a>.</li>
              </ul>
            </SectionReveal>

            {/* 3 */}
            <SectionReveal delay={0.2}>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. Acceptable Use
              </h2>
              <p className="text-[rgba(255,255,255,0.7)] leading-relaxed mb-3">
                You agree not to use the EloDtx platform to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[rgba(255,255,255,0.7)] leading-relaxed">
                <li>Violate any applicable law or regulation.</li>
                <li>Infringe the rights of any third party, including intellectual property and privacy rights.</li>
                <li>Reverse engineer, decompile, or attempt to extract the source code of the EloDtx engine.</li>
                <li>Use the API to build a competing connection intelligence product.</li>
                <li>Transmit malicious code or interfere with the platform&rsquo;s operation.</li>
                <li>Discriminate against individuals based on race, gender, religion, sexual orientation, or any protected characteristic.</li>
              </ul>
            </SectionReveal>

            {/* 4 */}
            <SectionReveal delay={0.25}>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Subscription &amp; Billing
              </h2>
              <ul className="list-disc list-inside space-y-2 text-[rgba(255,255,255,0.7)] leading-relaxed">
                <li>Paid plans are billed monthly or annually in advance as selected at checkout.</li>
                <li>Usage exceeding your plan&rsquo;s included monthly active users (MAU) is billed at the overage rate shown on your plan page.</li>
                <li>You may cancel at any time. Cancellation takes effect at the end of your current billing period.</li>
                <li>Refunds are provided at our discretion for annual plans only, within 14 days of purchase.</li>
              </ul>
            </SectionReveal>

            {/* 5 */}
            <SectionReveal delay={0.3}>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Intellectual Property
              </h2>
              <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                The EloDtx platform, including its AI models, algorithms,
                documentation, and branding, is the exclusive property of Urban
                Space Web Technologies Ltd and its licensors. Your use of the
                platform does not grant you any ownership rights. You retain
                ownership of data you submit to the platform.
              </p>
            </SectionReveal>

            {/* 6 */}
            <SectionReveal delay={0.35}>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Data &amp; Privacy
              </h2>
              <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                Your use of EloDtx is also governed by our{" "}
                <a href="/privacy" className="text-brand-gold hover:underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/gdpr" className="text-brand-gold hover:underline">
                  GDPR Compliance
                </a>{" "}
                page. By using the platform, you acknowledge and agree to the
                data practices described therein.
              </p>
            </SectionReveal>

            {/* 7 */}
            <SectionReveal delay={0.4}>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. Service Availability &amp; SLA
              </h2>
              <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                We aim to maintain 99.9% uptime for Enterprise plan customers as
                outlined in their Service Level Agreement. For all other plans,
                we make commercially reasonable efforts to ensure availability
                but do not guarantee uninterrupted service. Scheduled
                maintenance windows will be communicated at least 48 hours in
                advance.
              </p>
            </SectionReveal>

            {/* 8 */}
            <SectionReveal delay={0.45}>
              <h2 className="text-2xl font-semibold text-white mb-4">
                8. Limitation of Liability
              </h2>
              <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                To the maximum extent permitted by law, EloDtx shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages arising from your use of the platform. Our
                total liability shall not exceed the fees you have paid to us in
                the twelve (12) months preceding the claim.
              </p>
            </SectionReveal>

            {/* 9 */}
            <SectionReveal delay={0.5}>
              <h2 className="text-2xl font-semibold text-white mb-4">
                9. Termination
              </h2>
              <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                We may suspend or terminate your access to the platform if you
                breach these Terms, fail to pay applicable fees, or if continued
                provision of the service becomes impractical due to legal or
                regulatory changes. Upon termination, you may request an export
                of your data within 30 days.
              </p>
            </SectionReveal>

            {/* 10 */}
            <SectionReveal delay={0.55}>
              <h2 className="text-2xl font-semibold text-white mb-4">
                10. Governing Law
              </h2>
              <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                These Terms are governed by the laws of the Republic of
                Mauritius. Any disputes arising from these Terms shall be
                resolved in the courts of Mauritius, unless otherwise agreed in
                writing.
              </p>
            </SectionReveal>

            {/* 11 */}
            <SectionReveal delay={0.6}>
              <h2 className="text-2xl font-semibold text-white mb-4">
                11. Changes to These Terms
              </h2>
              <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                We reserve the right to update these Terms at any time. Material
                changes will be communicated with at least 30 days&rsquo; notice
                via email or an in-platform notification. Continued use of the
                platform after the notice period constitutes acceptance.
              </p>
            </SectionReveal>

            {/* Contact */}
            <SectionReveal delay={0.65}>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Contact
              </h2>
              <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                Questions about these Terms? Reach us at{" "}
                <a href="mailto:legal@elodtx.com" className="text-brand-gold hover:underline">
                  legal@elodtx.com
                </a>.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
