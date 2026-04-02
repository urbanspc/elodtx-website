import type { Metadata } from "next";
import { SEO } from "@/lib/constants";
import { SectionReveal } from "@/components/shared/section-reveal";

export const metadata: Metadata = {
  title: SEO.pages.gdpr.title,
  description: SEO.pages.gdpr.description,
  keywords: SEO.pages.gdpr.keywords,
  openGraph: {
    title: SEO.pages.gdpr.title,
    description: SEO.pages.gdpr.description,
    siteName: SEO.siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.pages.gdpr.title,
    description: SEO.pages.gdpr.description,
  },
};

const LAST_UPDATED = "2 April 2026";

export default function GDPRPage() {
  return (
    <div className="bg-dark-primary text-[rgba(255,255,255,0.85)]">
      <section className="py-24 px-6">
        <div className="max-w-site mx-auto">
          <SectionReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              GDPR Compliance
            </h1>
            <p className="text-[rgba(255,255,255,0.5)] text-sm mb-12">
              Last updated: {LAST_UPDATED}
            </p>
          </SectionReveal>

          <div className="max-w-3xl space-y-12">
            {/* Intro */}
            <SectionReveal delay={0.05}>
              <p className="text-[rgba(255,255,255,0.7)] text-lg leading-relaxed">
                EloDtx is built with privacy at its core. We are fully committed
                to compliance with the EU General Data Protection Regulation
                (GDPR) and extend equivalent protections to all users regardless
                of location. This page outlines how we meet our obligations
                under GDPR.
              </p>
            </SectionReveal>

            {/* Our Role */}
            <SectionReveal delay={0.1}>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Our Role as Data Controller &amp; Processor
              </h2>
              <ul className="list-disc list-inside space-y-2 text-[rgba(255,255,255,0.7)] leading-relaxed">
                <li>
                  <strong className="text-white">Data Controller</strong> — for
                  data collected through our website, waitlist, and direct
                  customer relationships.
                </li>
                <li>
                  <strong className="text-white">Data Processor</strong> — when
                  processing end-user data on behalf of our platform customers
                  (B2B API clients). In this capacity, we act strictly under the
                  instructions of the data controller (our customer).
                </li>
              </ul>
            </SectionReveal>

            {/* Lawful Basis */}
            <SectionReveal delay={0.15}>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Lawful Basis for Processing
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-dark-tertiary">
                      <th className="py-3 pr-4 text-white font-semibold">Purpose</th>
                      <th className="py-3 text-white font-semibold">Lawful Basis</th>
                    </tr>
                  </thead>
                  <tbody className="text-[rgba(255,255,255,0.7)]">
                    <tr className="border-b border-dark-tertiary/50">
                      <td className="py-3 pr-4">Delivering the EloDtx platform</td>
                      <td className="py-3">Contractual necessity</td>
                    </tr>
                    <tr className="border-b border-dark-tertiary/50">
                      <td className="py-3 pr-4">Billing and invoicing</td>
                      <td className="py-3">Contractual necessity</td>
                    </tr>
                    <tr className="border-b border-dark-tertiary/50">
                      <td className="py-3 pr-4">Platform security and fraud prevention</td>
                      <td className="py-3">Legitimate interest</td>
                    </tr>
                    <tr className="border-b border-dark-tertiary/50">
                      <td className="py-3 pr-4">Anonymised model training</td>
                      <td className="py-3">Legitimate interest</td>
                    </tr>
                    <tr className="border-b border-dark-tertiary/50">
                      <td className="py-3 pr-4">Proximity / location features</td>
                      <td className="py-3">Explicit consent</td>
                    </tr>
                    <tr className="border-b border-dark-tertiary/50">
                      <td className="py-3 pr-4">Marketing communications</td>
                      <td className="py-3">Consent</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Legal and regulatory compliance</td>
                      <td className="py-3">Legal obligation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </SectionReveal>

            {/* Your Rights */}
            <SectionReveal delay={0.2}>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Your Rights Under GDPR
              </h2>
              <p className="text-[rgba(255,255,255,0.7)] leading-relaxed mb-4">
                As a data subject, you have the following rights. We respond to
                all requests within 30 days.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { right: "Right of Access", desc: "Request a copy of the personal data we hold about you." },
                  { right: "Right to Rectification", desc: "Correct inaccurate or incomplete personal data." },
                  { right: "Right to Erasure", desc: "Request deletion of your personal data." },
                  { right: "Right to Restrict Processing", desc: "Limit how we process your data in certain circumstances." },
                  { right: "Right to Data Portability", desc: "Receive your data in a structured, machine-readable format." },
                  { right: "Right to Object", desc: "Object to processing based on legitimate interest." },
                  { right: "Right to Withdraw Consent", desc: "Withdraw consent at any time for consent-based processing." },
                  { right: "Right to Lodge a Complaint", desc: "File a complaint with your local supervisory authority." },
                ].map((item) => (
                  <div
                    key={item.right}
                    className="bg-dark-secondary rounded-lg p-4 border border-dark-tertiary"
                  >
                    <h3 className="text-white font-medium text-sm mb-1">
                      {item.right}
                    </h3>
                    <p className="text-[rgba(255,255,255,0.6)] text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </SectionReveal>

            {/* DPA */}
            <SectionReveal delay={0.25}>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Data Processing Agreements
              </h2>
              <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                All EloDtx customers on paid plans receive a GDPR-compliant Data
                Processing Agreement (DPA) as part of their subscription. The
                DPA covers the scope of processing, security measures,
                sub-processor obligations, and breach notification procedures.
                Enterprise customers may request a custom DPA.
              </p>
            </SectionReveal>

            {/* Sub-processors */}
            <SectionReveal delay={0.3}>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Sub-processors
              </h2>
              <p className="text-[rgba(255,255,255,0.7)] leading-relaxed mb-4">
                We use a limited number of sub-processors to deliver the
                platform. All sub-processors are bound by data processing
                agreements that meet GDPR requirements.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-dark-tertiary">
                      <th className="py-3 pr-4 text-white font-semibold">Provider</th>
                      <th className="py-3 pr-4 text-white font-semibold">Purpose</th>
                      <th className="py-3 text-white font-semibold">Location</th>
                    </tr>
                  </thead>
                  <tbody className="text-[rgba(255,255,255,0.7)]">
                    <tr className="border-b border-dark-tertiary/50">
                      <td className="py-3 pr-4">Cloud hosting provider</td>
                      <td className="py-3 pr-4">Infrastructure &amp; compute</td>
                      <td className="py-3">EU / UK</td>
                    </tr>
                    <tr className="border-b border-dark-tertiary/50">
                      <td className="py-3 pr-4">Payment processor</td>
                      <td className="py-3 pr-4">Billing &amp; subscriptions</td>
                      <td className="py-3">EU</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Transactional email provider</td>
                      <td className="py-3 pr-4">Service notifications</td>
                      <td className="py-3">EU</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </SectionReveal>

            {/* International Transfers */}
            <SectionReveal delay={0.35}>
              <h2 className="text-2xl font-semibold text-white mb-4">
                International Data Transfers
              </h2>
              <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                Where personal data is transferred outside the European Economic
                Area (EEA), we ensure protection through EU Standard Contractual
                Clauses (SCCs), adequacy decisions, or other approved transfer
                mechanisms. Mauritius is recognised for having comprehensive
                data protection legislation under the Data Protection Act 2017.
              </p>
            </SectionReveal>

            {/* Breach Notification */}
            <SectionReveal delay={0.4}>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Breach Notification
              </h2>
              <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                In the event of a personal data breach, we will notify the
                relevant supervisory authority within 72 hours of becoming aware
                of the breach, as required by Article 33 of the GDPR. Affected
                data subjects will be notified without undue delay where the
                breach poses a high risk to their rights and freedoms.
              </p>
            </SectionReveal>

            {/* Privacy by Design */}
            <SectionReveal delay={0.45}>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Privacy by Design
              </h2>
              <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                GDPR&rsquo;s principles are embedded in our architecture:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[rgba(255,255,255,0.7)] leading-relaxed mt-3">
                <li><strong className="text-white">Data minimisation</strong> — we only collect what is necessary to deliver the service.</li>
                <li><strong className="text-white">Pseudonymisation</strong> — compatibility profiles use anonymised identifiers, not personal identifiers.</li>
                <li><strong className="text-white">Geohash privacy</strong> — our Proximity feature uses geohash regions, never precise GPS coordinates.</li>
                <li><strong className="text-white">Encryption</strong> — all data encrypted in transit (TLS 1.3) and at rest (AES-256).</li>
                <li><strong className="text-white">Access controls</strong> — role-based access with audit logging.</li>
              </ul>
            </SectionReveal>

            {/* Contact */}
            <SectionReveal delay={0.5}>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Data Protection Officer
              </h2>
              <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                For any GDPR-related enquiries or to exercise your data subject
                rights, contact our Data Protection Officer:
              </p>
              <address className="text-[rgba(255,255,255,0.7)] not-italic mt-3 leading-relaxed">
                <a href="mailto:dpo@elodtx.com" className="text-brand-gold hover:underline">
                  dpo@elodtx.com
                </a>
                <br />
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
