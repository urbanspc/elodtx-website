# EloDtx Marketing Website — Design Specification

## Overview

A production-ready, world-class marketing website for EloDtx — a proprietary AI Connection Intelligence Platform developed in Mauritius. The site targets investors, enterprise B2B clients, press, and potential users simultaneously.

## Tech Stack

- **Framework:** Next.js 14+ with App Router (TypeScript)
- **Styling:** Tailwind CSS with custom dark theme
- **UI Components:** shadcn/ui (dark mode, gold accent)
- **Animations:** Framer Motion (LazyMotion for bundle optimization)
- **Icons:** Lucide React
- **Charts:** Recharts
- **Font:** Inter via next/font/google, JetBrains Mono for code blocks
- **Deployment:** Static export or Vercel

## Brand Identity

| Token | Value |
|---|---|
| Primary gold | `#C9A84C` |
| Gold light (hover) | `#D4B85C` |
| Gold dark (active) | `#B8963C` |
| Background primary | `#0D0D1A` |
| Background secondary | `#1A1A2E` |
| Background tertiary | `#252540` |
| Text primary | `rgba(255,255,255,0.85)` |
| Text secondary | `rgba(255,255,255,0.6)` |
| Text muted | `rgba(255,255,255,0.4)` |
| Success | `#1D9E75` |
| Error | `#E54D4D` |
| Font family | Inter |
| Tone | Premium, technical, human, confident |

## Project Structure

```
elodtx-website/
├── app/
│   ├── layout.tsx              # Root layout: fonts, metadata, nav, footer
│   ├── page.tsx                # Home page (/)
│   ├── how-it-works/page.tsx
│   ├── industries/page.tsx
│   ├── the-whisper/page.tsx
│   ├── proximity/page.tsx
│   ├── developers/page.tsx
│   ├── about/page.tsx
│   ├── waitlist/page.tsx
│   └── api/waitlist/route.ts   # Waitlist form API endpoint
├── components/
│   ├── layout/                 # Navbar, Footer, MobileMenu
│   ├── home/                   # Hero, StatsStrip, HowItWorks, AgentsSection,
│   │                             IndustriesSection, ComparisonTable, ProofSection,
│   │                             PricingSection, FinalCTA
│   ├── how-it-works/           # WhisperSystemDiagram, ProximityFlowSteps,
│   │                             BehaviorLearningLoop, TrainingPathTimeline
│   ├── the-whisper/            # ConversationComparison, WhisperSourcesDiagram
│   ├── proximity/              # GeohashPrivacyDiagram, ConsentFlowDiagram, ProximityFAQ
│   ├── developers/             # EndpointDoc, LanguageTabs, RateLimitsTable, PricingSlider
│   ├── about/                  # Timeline, TeamStructure, TechStack
│   ├── ui/                     # shadcn/ui components
│   └── shared/                 # Reusable components (see below)
├── lib/
│   ├── utils.ts                # cn() helper
│   └── constants.ts            # All copy, data, pricing, API examples
├── styles/
│   └── globals.css             # Tailwind directives, custom properties
├── public/                     # OG images, favicons, sitemap
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Pages

### 1. Home (`/`)

**Sections in order:**

1. **Hero** — Animated tagline "The AI that understands human connection." with staggered word reveal. Subheading explaining purpose-built AI. Two CTAs: "Get Early Access" (gold filled) and "See How It Works" (outline). `AnimatedConnectionGraph` as background. Gradient overlay.

2. **StatsStrip** — 6 animated counters in horizontal layout:
   - 138 — Preference dimensions analyzed
   - 4.9x — Lighter than standard AI models
   - 15.11% — Real-world meeting conversion rate
   - 5 — Specialized AI agents
   - <2s — Real-time proximity scoring
   - 3 — Languages (growing)

3. **HowItWorks** — 5 steps with icons, animated on scroll:
   - You integrate the API
   - EloDtx learns your users
   - It connects the right people
   - It keeps them connected
   - You see everything

4. **AgentsSection** — 5 agent cards with hover expansion:
   - Know Me (Preference Engine)
   - Conversation Health Agent
   - Timing Optimization Agent
   - Churn Detection Agent
   - Behavioral Watchdog

5. **IndustriesSection** — 6-tab interface:
   - Dating & Social
   - HR & Recruitment
   - Wellness & Therapy
   - Professional Networking
   - Enterprise & Teams
   - Education & Mentorship
   Each tab has headline, description, and specific feature list.

6. **ComparisonTable** — 12-row comparison: General AI vs Standard Algorithms vs EloDtx. Check/cross icons. EloDtx column highlighted in gold.

7. **ProofSection** — 3 metric cards (508 users, 15.11% conversion, 100% sold-out events) + testimonial-style quote.

8. **PricingSection** — 3 tiers (Starter $990/mo, Growth $3,900/mo featured, Scale custom). Growth tier has gold border and elevated styling.

9. **FinalCTA** — "Join the waitlist. First 10 partners get 90 days free." with compact WaitlistForm (email capture).

### 2. How It Works (`/how-it-works`)

Four detailed sections:
- **The Whisper System** — Philosophy of suggesting, never writing. Example scenario. Ephemeral processing explanation.
- **The Proximity Flow** — Step-by-step from enable proximity to messenger unlock. Technical detail on geohash.
- **The Behavior Learning Loop** — Diagram showing passive signals + active signals feeding dynamic profile.
- **The Training Path** — Timeline: Claude API (now) → Qwen 3.5 fine-tuning (month 12-18) → hybrid (month 18-24) → full proprietary (month 24+).

### 3. Industries (`/industries`)

Full page for each of 6 verticals with:
- The specific problem with real statistics
- What EloDtx does for that vertical
- Which agents are active
- Expected outcomes
- Case study reference (Baeyond POC for dating)

### 4. The Whisper (`/the-whisper`)

- Philosophy section
- Animated conversation demo: without EloDtx (conversation dies) vs with EloDtx (whisper deepens conversation, leads to IRL meeting)
- Three sources of whisper intelligence: Know Me profile, live conversation signals, cross-reference intelligence
- What EloDtx NEVER does (4 points)
- UI description: golden suggestion beneath message input

### 5. Proximity (`/proximity`)

- Vision statement with scenario
- Geohash privacy explanation (±500m)
- Apple Watch integration
- 5-element alert card mockup (score, shared traits, activity signal, distance, buttons)
- Consent architecture flow diagram
- "Serendipity not surveillance" section
- FAQ addressing privacy concerns

### 6. Developers (`/developers`)

- Quick start guide
- Authentication (JWT)
- 5 core endpoints with request/response examples:
  - POST /api/v1/compatibility
  - GET /api/v1/feed
  - POST /api/v1/proximity/location
  - GET /api/v1/knowme/questions
  - POST /api/v1/whisper/suggest
- Code examples in JavaScript, Python, Swift (tabbed)
- Rate limits table
- Interactive pricing calculator (MAU slider)
- SDKs listing (JS/TS, Python, Swift coming soon, Kotlin coming soon)

### 7. About (`/about`)

- Origin story (Baeyond, Ame Intense, Mauritius)
- Philosophy (connection intelligence vs general AI)
- Team structure (Urban Space Web Technologies Ltd Mauritius + Eloclouds Limited UK)
- Technology (TurboQuant compression, Qwen 3.5, multi-agent orchestration)
- Baeyond POC results
- $7.5M investment from Alice Rose LLC (USA)
- Global vision

### 8. Waitlist (`/waitlist`)

- Headline and subheading
- Multi-field form: Name, Company, Email, Platform type (dropdown), MAU range (dropdown), Message (optional)
- Validation + loading + success states
- Success: "We'll be in touch within 48 hours"
- Note about Ame Intense launch event October 2026

## Shared Components

### AnimatedConnectionGraph
SVG/Canvas-based animated network of nodes and edges. Nodes float subtly, edges form and dissolve. Configurable density, speed, and color. Used as hero background and on About page.

### AgentCard
Card with icon, name, one-line description. Expands on hover (desktop) or click (mobile) to show full description. Gold accent on hover. Used on Home and referenced on How It Works and Industries.

### ConversationDemo
Animated chat mockup. Messages appear sequentially (user-triggered). Shows a golden whisper suggestion appearing mid-conversation. Two modes: standalone (The Whisper page) and comparison side-by-side (with/without EloDtx).

### ProximityAlertMockup
Apple Watch frame with animated alert card. Shows: compatibility score (animated circle), shared traits, activity signal, distance, two action buttons. Watch vibration animation on scroll trigger.

### CompatibilityScore
Animated circular progress indicator. Counts up to a target percentage (e.g., 84%). Configurable size and whether it animates. Used across multiple pages.

### WaitlistForm
Two modes:
- **Full** (`compact: false`): All fields, used on /waitlist page
- **Compact** (`compact: true`): Email only + submit, used on Home FinalCTA

Client-side validation. States: idle → submitting → success → error. POSTs to `/api/waitlist`.

### PricingCalculator
Logarithmic slider (1K–500K MAU). Shows recommended tier, monthly cost, and cost-per-user. Purely interactive, no submission.

### CodeBlock
Syntax-highlighted code block. Language selector tab (JS/Python/Swift). Copy button. Uses a lightweight syntax highlighter (Prism or Shiki).

### SectionReveal
Framer Motion wrapper. Fade + translate on scroll into view. Props: `direction` (up/left/right), `delay`, `stagger` (for child elements). Triggers once.

### AnimatedCounter
Counts from 0 to target number on scroll into view. Supports suffix (%, x, s). Configurable duration. Triggers once.

## Animation Specification

| Element | Animation | Trigger |
|---|---|---|
| Hero tagline | Word-by-word stagger, 0.08s gap | Page load |
| Hero background graph | Continuous floating nodes, edges forming/dissolving | Always |
| Stats counters | Count 0 → target, 1.5s | Scroll into view (once) |
| How It Works steps | Stagger left-to-right, 0.15s delay | Scroll into view |
| Agent cards | Scale 0.95→1 + fade, stagger 0.1s | Scroll into view |
| Industry tabs | Content crossfade, 0.3s | Tab change |
| Comparison rows | Stagger from left, 0.08s between | Scroll into view |
| Pricing cards | Scale 0.9→1, middle delayed 0.1s | Scroll into view |
| Conversation demo | Messages appear sequentially, 1.5s gap | User triggers play |
| Proximity mockup | Watch vibrate + card slide up | Scroll into view |
| Page transitions | Fade + y-shift 20px, 0.3s | Route change |
| Button hover | Scale 1.02 + brightness | Hover |
| Card hover | translateY -4px + gold border glow | Hover |
| Link hover | Gold underline slides from left | Hover |

## Typography

| Element | Class | Weight |
|---|---|---|
| Hero headline | `text-5xl md:text-7xl` | 700 (bold) |
| Section headline | `text-3xl md:text-4xl` | 700 (bold) |
| Sub-headline | `text-xl md:text-2xl` | 500 (medium) |
| Body | `text-base` (16px) | 400 (regular) |
| Labels/small | `text-sm` | 500 (medium) |
| Code | `font-mono text-sm` | 400 (JetBrains Mono) |

## Responsive Design

- **Mobile (<768px):** Single column. Hamburger nav. Stats horizontal scroll. Comparison table scrolls horizontally with sticky first column. Pricing cards stack vertically.
- **Tablet (768–1024px):** 2-column grids. Condensed nav. Agent cards 2×3 grid.
- **Desktop (>1024px):** Full layout. Max content width 1280px. All grids at full column count.

## SEO

Each page has unique `generateMetadata` with:
- Title (format: "Page Name — EloDtx")
- Description (unique per page, keyword-rich)
- Open Graph tags (title, description, image)
- Twitter Card tags
- Canonical URL

Site-level:
- JSON-LD structured data (Organization on Home, SoftwareApplication on Developers)
- `robots.txt` and `sitemap.xml` auto-generated
- Semantic HTML (`<main>`, `<section>`, `<article>`, `<nav>`, proper heading hierarchy h1→h2→h3)

## Data & Forms

- All content lives in `lib/constants.ts` — no CMS, no database
- WaitlistForm POSTs to `/api/waitlist/route.ts` (Next.js API route, ready to wire to any backend)
- PricingCalculator is client-side only, no submission
- No authentication required for any page

## Performance Targets

- Lighthouse: 90+ on all metrics
- Inter font via `next/font/google` (no layout shift)
- Framer Motion `LazyMotion` with `domAnimation` (~16KB saved)
- Next.js automatic code splitting per route
- Minimal images — mostly SVG, canvas, and CSS

## Copy Guidelines

- English throughout
- Confident, clear, human — never corporate or buzzword-heavy
- Lead with human problem, follow with technical solution
- Never use: "AI-powered", "leverage", "synergy"
- Always specific: real numbers (138 dimensions, 4.9x, 15.11%, <2s)
- Whisper described with warmth (not missing a moment, not surveillance)
- Proximity described as serendipity enabled by intelligence, not tracking
