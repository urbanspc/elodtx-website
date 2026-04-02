import type { Metadata } from "next";
import { SEO, PROOF_METRICS } from "@/lib/constants";
import { SectionReveal } from "@/components/shared/section-reveal";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Timeline } from "@/components/about/timeline";
import { TeamStructure } from "@/components/about/team-structure";

export const metadata: Metadata = {
  title: SEO.pages.about.title,
  description: SEO.pages.about.description,
  keywords: SEO.pages.about.keywords,
  openGraph: {
    title: SEO.pages.about.title,
    description: SEO.pages.about.description,
    siteName: SEO.siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.pages.about.title,
    description: SEO.pages.about.description,
  },
};

const TECH_CARDS = [
  {
    title: "TurboQuant Compression",
    description:
      "4.9x model compression without quality loss. Purpose-built quantization for connection data.",
  },
  {
    title: "Qwen 3.5 Foundation",
    description:
      "Fine-tuned on proprietary behavioral data from 508 real users. Not a general model — a connection model.",
  },
  {
    title: "Multi-Agent Orchestration",
    description:
      "5 specialized agents working in concert. Each focused on one dimension of human connection.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-dark-primary text-[rgba(255,255,255,0.85)]">
      {/* ── Page Header ─────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-site mx-auto text-center">
          <SectionReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Built in Mauritius.{" "}
              <span className="text-brand-gold">Designed for the World.</span>
            </h1>
            <p className="text-xl text-[rgba(255,255,255,0.6)] max-w-2xl mx-auto leading-relaxed">
              EloDtx didn&rsquo;t start in a Silicon Valley incubator. It started
              with a radical belief: that AI could finally understand the invisible
              threads that make two people click.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ── Origin Story ────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-dark-secondary">
        <div className="max-w-site mx-auto">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">
              The Origin Story
            </h2>
          </SectionReveal>

          <div className="max-w-3xl space-y-6">
            <SectionReveal delay={0.1}>
              <p className="text-[rgba(255,255,255,0.7)] text-lg leading-relaxed">
                Baeyond was built in Mauritius with a radical idea: that meaningful
                human connection could be modelled, predicted, and facilitated by
                artificial intelligence. Not by swiping on photos, not by matching
                hobbies — but by understanding the deep behavioral and psychological
                patterns that determine genuine compatibility.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <p className="text-[rgba(255,255,255,0.7)] text-lg leading-relaxed">
                To prove the thesis, we ran real-world connection events under the
                name <span className="text-brand-gold font-medium">Âme Intense</span> —
                curated gatherings in Mauritius and La Réunion where people were
                matched by the algorithm before they ever met. Every single event
                sold out. 508 real users participated. The digital-to-real-world
                meeting rate hit 15.11% — an order of magnitude above any platform
                in the industry.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <p className="text-[rgba(255,255,255,0.7)] text-lg leading-relaxed">
                The AI engine powering Baeyond was too powerful to stay inside one
                app. In 2025, EloDtx was extracted as a standalone platform —
                connection intelligence as a service, available to any company that
                builds products around human relationships.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ── Philosophy ──────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-site mx-auto">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">
              Why Connection Intelligence Is Different
            </h2>
          </SectionReveal>

          <div className="max-w-3xl space-y-6">
            <SectionReveal delay={0.1}>
              <p className="text-[rgba(255,255,255,0.7)] text-lg leading-relaxed">
                Every major AI system in the world was built for a different problem.
                Large language models were built to generate text. Recommendation
                engines were built to maximise engagement. Matching algorithms were
                built to show you profiles you might swipe right on. None of them
                were built to understand human connection.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <p className="text-[rgba(255,255,255,0.7)] text-lg leading-relaxed">
                Purpose-built AI starts from a different question. Not &ldquo;what
                content keeps this user on the app?&rdquo; but &ldquo;what makes two
                people genuinely compatible?&rdquo; That requires a fundamentally
                different architecture — one trained on behavioral signals, not
                clicks; on outcomes in the real world, not time-on-screen.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <p className="text-[rgba(255,255,255,0.7)] text-lg leading-relaxed">
                General models can&rsquo;t solve connection because they have no
                ground truth for it. EloDtx was trained on 508 people who actually
                met, actually connected, and in many cases actually changed their
                lives. That difference is everything.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ── Timeline ────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-dark-secondary">
        <div className="max-w-site mx-auto">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white text-center">
              How We Got Here
            </h2>
          </SectionReveal>
          <Timeline />
        </div>
      </section>

      {/* ── Team ────────────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-site mx-auto">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              The Structure Behind EloDtx
            </h2>
            <p className="text-[rgba(255,255,255,0.6)] text-lg mb-12 max-w-2xl">
              Two companies. One mission. Backed by investors who believe the future
              of human connection deserves serious infrastructure.
            </p>
          </SectionReveal>
          <TeamStructure />
        </div>
      </section>

      {/* ── Technology ──────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-dark-secondary">
        <div className="max-w-site mx-auto">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              The Technology Stack
            </h2>
            <p className="text-[rgba(255,255,255,0.6)] text-lg mb-12 max-w-2xl">
              Three proprietary innovations that make EloDtx impossible to replicate
              with off-the-shelf AI.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TECH_CARDS.map((card, index) => (
              <SectionReveal key={card.title} delay={index * 0.1}>
                <div className="bg-dark-secondary rounded-xl p-6 border border-dark-tertiary h-full">
                  <h3 className="text-white font-semibold text-lg mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[rgba(255,255,255,0.6)] text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── POC Results ─────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-site mx-auto">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center">
              Proof of Concept Results
            </h2>
            <p className="text-[rgba(255,255,255,0.6)] text-lg mb-12 max-w-xl mx-auto text-center">
              Not projections. Not lab results. Real numbers from real people in
              the real world.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROOF_METRICS.map((metric, index) => (
              <SectionReveal key={metric.label} delay={index * 0.1}>
                <div className="bg-dark-secondary rounded-xl p-8 border border-dark-tertiary text-center">
                  <AnimatedCounter
                    target={metric.numericValue}
                    suffix={metric.suffix}
                    className="text-4xl md:text-5xl font-bold text-brand-gold"
                  />
                  <p className="text-brand-gold font-medium text-lg mt-2">
                    {metric.label}
                  </p>
                  <p className="text-[rgba(255,255,255,0.6)] text-sm mt-1">
                    {metric.detail}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-dark-secondary">
        <div className="max-w-site mx-auto">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Starting Small. Thinking Global.
              </h2>

              <p className="text-[rgba(255,255,255,0.7)] text-lg leading-relaxed">
                We started in Mauritius — an island of 1.3 million people in the
                Indian Ocean — because we believed the best way to solve a universal
                human problem was to solve it somewhere specific, with real people,
                at human scale. What we discovered there is now the foundation of a
                platform that can serve any product in any country.
              </p>

              <p className="text-[rgba(255,255,255,0.7)] text-lg leading-relaxed">
                Connection is not a Western problem or an Eastern problem. It is not
                an app problem or an enterprise problem. It is the central human
                challenge of the digital age — and EloDtx was built, from the ground
                up, in the belief that technology can make people genuinely less
                lonely.
              </p>

              <p className="text-brand-gold font-semibold text-xl mt-8">
                Built in Mauritius. Designed for the world.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
