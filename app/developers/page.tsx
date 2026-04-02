import type { Metadata } from "next";
import { SEO, API_ENDPOINTS, CODE_EXAMPLES } from "@/lib/constants";
import { SectionReveal } from "@/components/shared/section-reveal";
import { CodeBlock } from "@/components/shared/code-block";
import { PricingCalculator } from "@/components/shared/pricing-calculator";
import { EndpointDoc } from "@/components/developers/endpoint-doc";
import { LanguageTabs } from "@/components/developers/language-tabs";
import { RateLimitsTable } from "@/components/developers/rate-limits-table";

export const metadata: Metadata = {
  title: SEO.pages.developers.title,
  description: SEO.pages.developers.description,
  keywords: SEO.pages.developers.keywords,
  openGraph: {
    title: SEO.pages.developers.title,
    description: SEO.pages.developers.description,
    siteName: SEO.siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.pages.developers.title,
    description: SEO.pages.developers.description,
  },
};

const CURL_EXAMPLE = `curl -X POST https://api.elodtx.com/v1/compatibility \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"user_a": "usr_8f3k2j", "user_b": "usr_9d4m1n"}'`;

const JS_QUICK_START = `import EloDtx from '@elodtx/sdk';

const client = new EloDtx({ apiKey: 'YOUR_API_KEY' });

const result = await client.compatibility.check({
  userA: 'usr_8f3k2j',
  userB: 'usr_9d4m1n',
});

console.log(result.score); // 0.84`;

const AUTH_EXAMPLE = `Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`;

const SDK_INSTALLS = [
  {
    name: "JavaScript / TypeScript",
    command: "npm install @elodtx/sdk",
    language: "bash",
    available: true,
  },
  {
    name: "Python",
    command: "pip install elodtx",
    language: "bash",
    available: true,
  },
  {
    name: "Swift",
    command: "# Coming soon",
    language: "bash",
    available: false,
  },
  {
    name: "Kotlin",
    command: "# Coming soon",
    language: "bash",
    available: false,
  },
];

const SECTIONS = [
  { id: "quickstart", label: "Quick Start" },
  { id: "authentication", label: "Authentication" },
  { id: "api-reference", label: "API Reference" },
  { id: "code-examples", label: "Code Examples" },
  { id: "rate-limits", label: "Rate Limits" },
  { id: "pricing", label: "Pricing Calculator" },
  { id: "sdks", label: "SDKs" },
];

export default function DevelopersPage() {
  const compatibilityExamples = CODE_EXAMPLES.compatibility;

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-16">
      {/* Page Header */}
      <SectionReveal>
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Developer Documentation
          </h1>
          <p className="text-lg text-[rgba(255,255,255,0.6)] max-w-2xl mx-auto">
            Everything you need to integrate connection intelligence into your
            platform.
          </p>
        </div>
      </SectionReveal>

      <div className="flex gap-12">
        {/* Left sidebar nav — desktop only */}
        <aside className="hidden lg:block w-52 flex-shrink-0">
          <nav className="sticky top-24">
            <p className="text-xs font-semibold uppercase tracking-widest text-[rgba(255,255,255,0.3)] mb-4">
              On this page
            </p>
            <ul className="space-y-1">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="block text-sm text-[rgba(255,255,255,0.5)] hover:text-brand-gold transition-colors py-1"
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">

          {/* ── 1. Quick Start ───────────────────────────────── */}
          <section id="quickstart" className="mb-20">
            <SectionReveal>
              <h2 className="text-3xl font-bold mb-2">Quick Start</h2>
              <p className="text-[rgba(255,255,255,0.5)] mb-10">
                Up and running in under 5 minutes.
              </p>
            </SectionReveal>

            {/* Steps */}
            <div className="space-y-10">
              {/* Step 1 */}
              <SectionReveal delay={0.05}>
                <div className="flex gap-5">
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{
                      backgroundColor: "rgba(201,168,76,0.15)",
                      color: "#C9A84C",
                      border: "1px solid rgba(201,168,76,0.3)",
                    }}
                  >
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Sign up for API access
                    </h3>
                    <p className="text-[rgba(255,255,255,0.5)] text-sm leading-relaxed">
                      Apply for early access on the{" "}
                      <a
                        href="/waitlist"
                        className="text-brand-gold hover:underline"
                      >
                        waitlist page
                      </a>
                      . You'll receive your credentials within 24 hours.
                    </p>
                  </div>
                </div>
              </SectionReveal>

              {/* Step 2 */}
              <SectionReveal delay={0.1}>
                <div className="flex gap-5">
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{
                      backgroundColor: "rgba(201,168,76,0.15)",
                      color: "#C9A84C",
                      border: "1px solid rgba(201,168,76,0.3)",
                    }}
                  >
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Get your API key
                    </h3>
                    <p className="text-[rgba(255,255,255,0.5)] text-sm leading-relaxed">
                      Find your API key in the dashboard under{" "}
                      <span className="font-mono text-white/70 bg-white/5 px-1.5 py-0.5 rounded text-xs">
                        Settings → API Keys
                      </span>
                      . Keep it secret — treat it like a password.
                    </p>
                  </div>
                </div>
              </SectionReveal>

              {/* Step 3 */}
              <SectionReveal delay={0.15}>
                <div className="flex gap-5">
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{
                      backgroundColor: "rgba(201,168,76,0.15)",
                      color: "#C9A84C",
                      border: "1px solid rgba(201,168,76,0.3)",
                    }}
                  >
                    3
                  </div>
                  <div className="w-full">
                    <h3 className="text-lg font-semibold mb-3">
                      Make your first request
                    </h3>
                    <div className="space-y-3">
                      <p className="text-[rgba(255,255,255,0.5)] text-sm">
                        Using cURL:
                      </p>
                      <CodeBlock code={CURL_EXAMPLE} language="bash" />
                      <p className="text-[rgba(255,255,255,0.5)] text-sm pt-2">
                        Or with the JavaScript SDK:
                      </p>
                      <CodeBlock code={JS_QUICK_START} language="javascript" />
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* ── 2. Authentication ────────────────────────────── */}
          <section id="authentication" className="mb-20">
            <SectionReveal>
              <h2 className="text-3xl font-bold mb-2">Authentication</h2>
              <p className="text-[rgba(255,255,255,0.6)] mb-6 leading-relaxed max-w-prose">
                All API requests must include a valid JWT (JSON Web Token) in
                the{" "}
                <span className="font-mono text-white/70 bg-white/5 px-1.5 py-0.5 rounded text-xs">
                  Authorization
                </span>{" "}
                header using the{" "}
                <span className="font-mono text-white/70 bg-white/5 px-1.5 py-0.5 rounded text-xs">
                  Bearer
                </span>{" "}
                scheme. Tokens expire after 24 hours and can be refreshed using
                your API key. Never expose your token in client-side code —
                always make API calls from a secure server environment.
              </p>
              <CodeBlock code={AUTH_EXAMPLE} language="bash" />
            </SectionReveal>
          </section>

          {/* ── 3. API Reference ─────────────────────────────── */}
          <section id="api-reference" className="mb-20">
            <SectionReveal>
              <h2 className="text-3xl font-bold mb-2">API Reference</h2>
              <p className="text-[rgba(255,255,255,0.5)] mb-8">
                Base URL:{" "}
                <code className="font-mono text-brand-gold bg-white/5 px-2 py-0.5 rounded text-sm">
                  https://api.elodtx.com
                </code>
              </p>
            </SectionReveal>

            <SectionReveal delay={0.05}>
              <div>
                {API_ENDPOINTS.map((endpoint) => (
                  <EndpointDoc
                    key={`${endpoint.method}-${endpoint.path}`}
                    endpoint={endpoint}
                  />
                ))}
              </div>
            </SectionReveal>
          </section>

          {/* ── 4. Code Examples ─────────────────────────────── */}
          <section id="code-examples" className="mb-20">
            <SectionReveal>
              <h2 className="text-3xl font-bold mb-2">Code Examples</h2>
              <p className="text-[rgba(255,255,255,0.5)] mb-8">
                Compatibility check — full example in JavaScript, Python, and
                Swift.
              </p>
              <LanguageTabs examples={compatibilityExamples} />
            </SectionReveal>
          </section>

          {/* ── 5. Rate Limits ───────────────────────────────── */}
          <section id="rate-limits" className="mb-20">
            <SectionReveal>
              <h2 className="text-3xl font-bold mb-2">Rate Limits</h2>
              <p className="text-[rgba(255,255,255,0.5)] mb-8">
                Requests exceeding these limits return a{" "}
                <span className="font-mono text-white/70 bg-white/5 px-1.5 py-0.5 rounded text-xs">
                  429 Too Many Requests
                </span>{" "}
                response. Burst limits allow short traffic spikes above the
                per-minute rate.
              </p>
              <RateLimitsTable />
            </SectionReveal>
          </section>

          {/* ── 6. Pricing Calculator ────────────────────────── */}
          <section id="pricing" className="mb-20">
            <SectionReveal>
              <h2 className="text-3xl font-bold mb-2">Pricing Calculator</h2>
              <p className="text-[rgba(255,255,255,0.5)] mb-8">
                Estimate your monthly cost based on monthly active users.
              </p>
              <div className="max-w-lg">
                <PricingCalculator />
              </div>
            </SectionReveal>
          </section>

          {/* ── 7. SDKs ──────────────────────────────────────── */}
          <section id="sdks" className="mb-20">
            <SectionReveal>
              <h2 className="text-3xl font-bold mb-2">SDKs</h2>
              <p className="text-[rgba(255,255,255,0.5)] mb-8">
                Official SDKs for the most popular languages and platforms.
              </p>
            </SectionReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SDK_INSTALLS.map((sdk, i) => (
                <SectionReveal key={sdk.name} delay={i * 0.07}>
                  <div
                    className="bg-dark-secondary rounded-xl p-6"
                    style={{
                      border: sdk.available
                        ? "1px solid rgba(255,255,255,0.06)"
                        : "1px solid rgba(255,255,255,0.03)",
                      opacity: sdk.available ? 1 : 0.55,
                    }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-white/90">{sdk.name}</h3>
                      {sdk.available ? (
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded"
                          style={{
                            backgroundColor: "rgba(29,158,117,0.15)",
                            color: "#1D9E75",
                          }}
                        >
                          Available
                        </span>
                      ) : (
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded"
                          style={{
                            backgroundColor: "rgba(255,255,255,0.05)",
                            color: "rgba(255,255,255,0.35)",
                          }}
                        >
                          Coming soon
                        </span>
                      )}
                    </div>
                    <CodeBlock code={sdk.command} language={sdk.language} />
                  </div>
                </SectionReveal>
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
