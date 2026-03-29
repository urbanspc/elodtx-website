import {
  Brain,
  MessageCircle,
  Clock,
  AlertTriangle,
  Shield,
  Plug,
  Users,
  BarChart3,
  Zap,
  Heart,
  Briefcase,
  Stethoscope,
  Handshake,
  Building2,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

// ─── Stats ───────────────────────────────────────────────────────────────────

export interface Stat {
  value: string;
  numericValue: number;
  suffix: string;
  prefix: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: "138", numericValue: 138, suffix: "", prefix: "", label: "Preference dimensions analyzed" },
  { value: "4.9", numericValue: 4.9, suffix: "x", prefix: "", label: "Lighter than standard AI models" },
  { value: "15.11", numericValue: 15.11, suffix: "%", prefix: "", label: "Real-world meeting conversion rate" },
  { value: "5", numericValue: 5, suffix: "", prefix: "", label: "Specialized AI agents" },
  { value: "2", numericValue: 2, suffix: "s", prefix: "<", label: "Real-time proximity scoring" },
  { value: "3", numericValue: 3, suffix: "", prefix: "", label: "Languages (growing)" },
];

// ─── How It Works ────────────────────────────────────────────────────────────

export interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    icon: Plug,
    title: "You integrate the API",
    description: "One integration connects EloDtx to your platform. RESTful API, JWT auth, SDKs in JavaScript, Python, and Swift.",
  },
  {
    icon: Brain,
    title: "EloDtx learns your users",
    description: "138-dimension behavioral profiling from day one. The Know Me engine builds granular profiles that get smarter with every interaction.",
  },
  {
    icon: Users,
    title: "It connects the right people",
    description: "Compatibility scores, conversation openers, match timing — all computed in real time across your entire user base.",
  },
  {
    icon: MessageCircle,
    title: "It keeps them connected",
    description: "Churn prediction, conversation health monitoring, and automated re-engagement keep relationships alive.",
  },
  {
    icon: BarChart3,
    title: "You see everything",
    description: "Full analytics dashboard with actionable insights. Retention curves, engagement heatmaps, conversion funnels.",
  },
];

// ─── Agents ──────────────────────────────────────────────────────────────────

export interface Agent {
  icon: LucideIcon;
  name: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
}

export const AGENTS: Agent[] = [
  {
    icon: Brain,
    name: "Know Me",
    subtitle: "Preference Engine",
    shortDescription: "138 paired-choice questions across 10 psychological dimensions.",
    fullDescription:
      "138 paired-choice questions across 10 psychological dimensions. Builds granular user profiles that get smarter with every interaction. Passive behavioral signals — scroll patterns, session timing, notification response — continuously refine the model without requiring additional user input.",
  },
  {
    icon: MessageCircle,
    name: "Conversation Health",
    subtitle: "Agent",
    shortDescription: "Monitors every exchange in real time for tone shifts and stagnation.",
    fullDescription:
      "Monitors every exchange in real time. Detects tone shifts, stagnation and disengagement. Triggers intelligent interventions before a conversation dies. Processes signals ephemerally — message content is never stored, only behavioral patterns are extracted.",
  },
  {
    icon: Clock,
    name: "Timing Optimization",
    subtitle: "Agent",
    shortDescription: "Learns the exact moment each user is most receptive.",
    fullDescription:
      "Learns the exact moment each individual user is most receptive. Schedules all communications at optimal times across all channels. Adapts to timezone changes, habit shifts, and seasonal patterns automatically.",
  },
  {
    icon: AlertTriangle,
    name: "Churn Detection",
    subtitle: "Agent",
    shortDescription: "Predicts disengagement before it happens.",
    fullDescription:
      "Predicts disengagement before it happens. Identifies users at risk and automatically triggers personalized retention interventions. Detects early warning signals — decreased session frequency, shorter interactions, ignored notifications — up to 14 days before churn.",
  },
  {
    icon: Shield,
    name: "Behavioral Watchdog",
    subtitle: "",
    shortDescription: "Monitors for abuse, spam and manipulation in real time.",
    fullDescription:
      "Monitors for abuse, spam and manipulation. Adjusts user trust scores dynamically. Keeps your platform safe and premium automatically. Detects fake profiles, coordinated inauthentic behavior, and harassment patterns without false-flagging genuine users.",
  },
];

// ─── Industries ──────────────────────────────────────────────────────────────

export interface IndustryFeature {
  title: string;
  description: string;
}

export interface Industry {
  icon: LucideIcon;
  id: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  problemStats: string;
  features: IndustryFeature[];
  activeAgents: string[];
  outcomes: string[];
  caseStudy?: string;
}

export const INDUSTRIES: Industry[] = [
  {
    icon: Heart,
    id: "dating",
    name: "Dating & Social",
    tagline: "Stop matching profiles. Start connecting people.",
    description: "EloDtx replaces shallow swipe-based matching with deep compatibility intelligence that predicts real-world chemistry.",
    problem: "Dating apps have a retention crisis. Users churn within 90 days because matches don't lead to meaningful connections.",
    problemStats: "The average dating app user spends 90 minutes per day swiping but converts less than 2% of matches into real dates.",
    features: [
      { title: "Deep compatibility scoring", description: "138-dimension profiles that go beyond photos and bios to predict real-world chemistry." },
      { title: "Fake profile elimination", description: "Behavioral Watchdog detects inauthenticity through interaction patterns, not just photo verification." },
      { title: "Conversation rescue", description: "Conversation Health Agent detects dying exchanges and surfaces contextual whispers to deepen dialogue." },
      { title: "Safe Proximity IRL bridge", description: "Turn digital matches into real-world encounters with privacy-preserving geolocation and Apple Watch alerts." },
    ],
    activeAgents: ["Know Me", "Conversation Health", "Timing Optimization", "Churn Detection", "Behavioral Watchdog"],
    outcomes: ["15.11% digital-to-IRL conversion rate (vs industry average of ~2%)", "3x longer average conversation length", "60% reduction in reported fake profiles"],
    caseStudy: "Baeyond POC in Mauritius & La Réunion: 508 real users, 15.11% digital-to-IRL conversion, 100% sold-out Âme Intense events.",
  },
  {
    icon: Briefcase,
    id: "hr",
    name: "HR & Recruitment",
    tagline: "Culture fit is human. Now AI can measure it.",
    description: "EloDtx maps team dynamics and predicts which candidates will thrive — not just perform — in your organization.",
    problem: "Bad hires cost 30% of the employee's annual salary. Most hiring tools measure skills but ignore the human dynamics that determine retention.",
    problemStats: "46% of new hires fail within 18 months, and 89% of the time it's due to cultural misfit, not skill gaps.",
    features: [
      { title: "Team compatibility mapping", description: "Understand how a new hire will interact with existing team members before they start." },
      { title: "Retention risk scoring", description: "Churn Detection identifies employees showing early disengagement signals." },
      { title: "Onboarding connection engine", description: "Automatically connect new hires with compatible mentors and collaborators." },
    ],
    activeAgents: ["Know Me", "Churn Detection", "Timing Optimization"],
    outcomes: ["40% reduction in early-stage turnover", "2x faster cultural integration for new hires", "Measurable team cohesion improvement within 90 days"],
  },
  {
    icon: Stethoscope,
    id: "wellness",
    name: "Wellness & Therapy",
    tagline: "The right support, at the right moment.",
    description: "EloDtx matches individuals with the practitioners and communities most likely to help them, based on deep behavioral understanding.",
    problem: "Finding the right therapist is trial and error. 50% of therapy relationships end prematurely due to poor fit.",
    problemStats: "The average person tries 3 therapists before finding one that works. Each failed attempt delays recovery by months.",
    features: [
      { title: "Practitioner matching", description: "Match patients with therapists based on communication style, values, and therapeutic approach compatibility." },
      { title: "Emotional state tracking", description: "Detect shifts in user engagement patterns that may indicate changing emotional states." },
      { title: "Community connection", description: "Connect users with peer support groups where they're most likely to engage and benefit." },
    ],
    activeAgents: ["Know Me", "Conversation Health", "Timing Optimization", "Churn Detection"],
    outcomes: ["65% improvement in practitioner-patient match quality", "3x increase in long-term therapeutic engagement", "Reduced dropout rates through early intervention"],
  },
  {
    icon: Handshake,
    id: "networking",
    name: "Professional Networking",
    tagline: "Most connections are hollow. EloDtx makes them real.",
    description: "EloDtx transforms networking from business card exchanges into genuinely valuable professional relationships.",
    problem: "Professional networking is broken. 80% of LinkedIn connections never exchange a single message after connecting.",
    problemStats: "Professionals spend an average of 6 hours per month networking but rate only 11% of new connections as 'valuable'.",
    features: [
      { title: "High-value introduction engine", description: "Identify and facilitate connections with the highest mutual value potential." },
      { title: "Event networking bridge", description: "Pre-match attendees before events and facilitate meaningful conversations during them." },
      { title: "Mentorship matching", description: "Connect mentors and mentees based on complementary skills, experience, and communication styles." },
    ],
    activeAgents: ["Know Me", "Timing Optimization", "Conversation Health"],
    outcomes: ["4x increase in post-connection engagement", "70% of facilitated introductions lead to follow-up meetings", "Measurable professional development acceleration"],
  },
  {
    icon: Building2,
    id: "enterprise",
    name: "Enterprise & Teams",
    tagline: "Build teams that actually work together.",
    description: "EloDtx maps team dynamics in real time and identifies friction, isolation, and collaboration opportunities before they become problems.",
    problem: "Remote and hybrid teams struggle with cohesion. Managers can't see interpersonal dynamics through Slack messages and Zoom calls.",
    problemStats: "67% of remote workers report feeling disconnected from colleagues. Teams with poor cohesion are 50% less productive.",
    features: [
      { title: "Team dynamics mapping", description: "Real-time visualization of team interaction patterns, collaboration strength, and communication gaps." },
      { title: "Remote cohesion engine", description: "Identify isolated team members and facilitate organic connection opportunities." },
      { title: "Friction detection", description: "Detect interpersonal friction early through communication pattern analysis." },
    ],
    activeAgents: ["Know Me", "Conversation Health", "Churn Detection", "Behavioral Watchdog"],
    outcomes: ["35% improvement in cross-team collaboration metrics", "50% faster identification of team friction points", "Measurable increase in employee satisfaction scores"],
  },
  {
    icon: GraduationCap,
    id: "education",
    name: "Education & Mentorship",
    tagline: "Learning happens through connection.",
    description: "EloDtx creates compatible study groups, predicts dropout risk, and matches mentors at scale.",
    problem: "Online education has a completion crisis. Most students learn alone and drop out before finishing.",
    problemStats: "MOOC completion rates average 5-15%. Students who form study groups are 5x more likely to complete a course.",
    features: [
      { title: "Compatible study groups", description: "Form study groups based on learning style, schedule, knowledge level, and personality compatibility." },
      { title: "Dropout prediction", description: "Identify at-risk students through engagement pattern analysis and trigger early intervention." },
      { title: "Mentor matching at scale", description: "Connect students with mentors whose experience and teaching style match their learning needs." },
    ],
    activeAgents: ["Know Me", "Churn Detection", "Timing Optimization"],
    outcomes: ["3x improvement in course completion rates", "80% of study groups remain active through course completion", "Early dropout intervention success rate above 60%"],
  },
];

// ─── Comparison Table ────────────────────────────────────────────────────────

export interface ComparisonRow {
  capability: string;
  generalAI: "yes" | "no" | "partial";
  standardAlgo: "yes" | "no" | "partial";
  elodtx: "yes" | "no" | "partial";
}

export const COMPARISON_DATA: ComparisonRow[] = [
  { capability: "Purpose-built for connection", generalAI: "no", standardAlgo: "no", elodtx: "yes" },
  { capability: "Multi-agent architecture", generalAI: "no", standardAlgo: "no", elodtx: "yes" },
  { capability: "Real-time conversation health", generalAI: "partial", standardAlgo: "no", elodtx: "yes" },
  { capability: "Churn prediction", generalAI: "no", standardAlgo: "no", elodtx: "yes" },
  { capability: "138-dimension profiling", generalAI: "no", standardAlgo: "partial", elodtx: "yes" },
  { capability: "Behavioral fake detection", generalAI: "partial", standardAlgo: "no", elodtx: "yes" },
  { capability: "Timing optimization per user", generalAI: "no", standardAlgo: "no", elodtx: "yes" },
  { capability: "Real-world event bridge", generalAI: "no", standardAlgo: "no", elodtx: "yes" },
  { capability: "Multi-cultural by design", generalAI: "partial", standardAlgo: "no", elodtx: "yes" },
  { capability: "4.9x compressed — low cost", generalAI: "no", standardAlgo: "no", elodtx: "yes" },
  { capability: "Trained on real behavioral data", generalAI: "no", standardAlgo: "partial", elodtx: "yes" },
  { capability: "Fully owned IP", generalAI: "no", standardAlgo: "partial", elodtx: "yes" },
];

// ─── Proof Metrics ───────────────────────────────────────────────────────────

export interface ProofMetric {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  detail: string;
}

export const PROOF_METRICS: ProofMetric[] = [
  { value: "508", numericValue: 508, suffix: "", label: "Real users", detail: "Proof of Concept in Mauritius & La Réunion" },
  { value: "15.11", numericValue: 15.11, suffix: "%", label: "Digital-to-IRL conversion", detail: "No other platform tracks this metric" },
  { value: "100", numericValue: 100, suffix: "%", label: "Sold-out events", detail: "Every Âme Intense event fully booked" },
];

// ─── Pricing ─────────────────────────────────────────────────────────────────

export interface PricingTier {
  name: string;
  price: string;
  priceNote: string;
  userLimit: string;
  features: string[];
  featured: boolean;
  cta: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: "$990",
    priceNote: "/month",
    userLimit: "Up to 5,000 users",
    features: ["Conversation Health Agent", "Know Me Preference Engine", "Basic analytics dashboard", "Email support", "API access"],
    featured: false,
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "$3,900",
    priceNote: "/month",
    userLimit: "Up to 50,000 users",
    features: ["All 5 AI agents", "Safe Proximity engine", "Full analytics dashboard", "Dedicated success manager", "Priority API access", "Custom integration support"],
    featured: true,
    cta: "Get Started",
  },
  {
    name: "Scale",
    price: "Custom",
    priceNote: "",
    userLimit: "Unlimited users",
    features: ["Everything in Growth", "Custom model fine-tuning", "White-label deployment", "99.9% SLA guarantee", "24/7 dedicated support", "On-premise option"],
    featured: false,
    cta: "Contact Sales",
  },
];

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Industries", href: "/industries" },
  { label: "The Whisper", href: "/the-whisper" },
  { label: "Proximity", href: "/proximity" },
  { label: "Developers", href: "/developers" },
  { label: "About", href: "/about" },
];

// ─── Footer ──────────────────────────────────────────────────────────────────

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "The Whisper", href: "/the-whisper" },
      { label: "Proximity", href: "/proximity" },
      { label: "Pricing", href: "/#pricing" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Dating & Social", href: "/industries#dating" },
      { label: "HR & Recruitment", href: "/industries#hr" },
      { label: "Wellness & Therapy", href: "/industries#wellness" },
      { label: "Professional Networking", href: "/industries#networking" },
      { label: "Enterprise & Teams", href: "/industries#enterprise" },
      { label: "Education & Mentorship", href: "/industries#education" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "API Docs", href: "/developers" },
      { label: "Quick Start", href: "/developers#quickstart" },
      { label: "SDKs", href: "/developers#sdks" },
      { label: "Changelog", href: "/developers#changelog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "#" },
      { label: "Press", href: "#" },
      { label: "Waitlist", href: "/waitlist" },
    ],
  },
];

// ─── API Examples (Developers page) ─────────────────────────────────────────

export interface ApiEndpoint {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  description: string;
  requestBody?: string;
  responseBody: string;
}

export const API_ENDPOINTS: ApiEndpoint[] = [
  {
    method: "POST",
    path: "/api/v1/compatibility",
    description: "Get compatibility score between two users",
    requestBody: `{
  "user_a": "usr_8f3k2j",
  "user_b": "usr_9d4m1n",
  "include_dimensions": true
}`,
    responseBody: `{
  "score": 0.84,
  "confidence": 0.92,
  "dimensions": {
    "communication_style": 0.91,
    "values_alignment": 0.87,
    "emotional_intelligence": 0.79,
    "lifestyle_compatibility": 0.82
  },
  "conversation_starters": [
    "You both value deep conversations over small talk",
    "Shared interest in creative pursuits"
  ]
}`,
  },
  {
    method: "GET",
    path: "/api/v1/feed",
    description: "Get personalized ranked feed for a user",
    responseBody: `{
  "user_id": "usr_8f3k2j",
  "feed": [
    {
      "match_id": "usr_9d4m1n",
      "score": 0.84,
      "reason": "High values alignment + complementary communication styles",
      "optimal_contact_time": "2026-03-30T18:30:00Z"
    }
  ],
  "generated_at": "2026-03-30T14:22:00Z"
}`,
  },
  {
    method: "POST",
    path: "/api/v1/proximity/location",
    description: "Update user location hash for proximity matching",
    requestBody: `{
  "user_id": "usr_8f3k2j",
  "geohash": "mk2g7d",
  "active": true
}`,
    responseBody: `{
  "status": "updated",
  "nearby_matches": 3,
  "highest_score": 0.84
}`,
  },
  {
    method: "GET",
    path: "/api/v1/knowme/questions",
    description: "Get today's Know Me questions for a user",
    responseBody: `{
  "user_id": "usr_8f3k2j",
  "questions": [
    {
      "id": "q_247",
      "dimension": "communication_style",
      "option_a": "I prefer to process my thoughts before responding",
      "option_b": "I think best while talking things through"
    },
    {
      "id": "q_118",
      "dimension": "values",
      "option_a": "Stability and predictability give me peace",
      "option_b": "I thrive on change and new experiences"
    }
  ],
  "completed": 94,
  "total": 138
}`,
  },
  {
    method: "POST",
    path: "/api/v1/whisper/suggest",
    description: "Get contextual conversation suggestion",
    requestBody: `{
  "conversation_id": "conv_4k8m2",
  "user_id": "usr_8f3k2j",
  "context_window": 5
}`,
    responseBody: `{
  "whisper": {
    "suggestion": "She mentioned not going back to her hometown much — her answers suggest this means something to her. This could be worth exploring gently.",
    "confidence": 0.88,
    "source": "cross_reference",
    "dimension": "emotional_depth",
    "dismissible": true
  }
}`,
  },
];

export const CODE_EXAMPLES: Record<string, Record<string, string>> = {
  compatibility: {
    javascript: `import EloDtx from '@elodtx/sdk';

const client = new EloDtx({
  apiKey: process.env.ELODTX_API_KEY,
});

const result = await client.compatibility.check({
  userA: 'usr_8f3k2j',
  userB: 'usr_9d4m1n',
  includeDimensions: true,
});

console.log(result.score);        // 0.84
console.log(result.dimensions);   // { communication_style: 0.91, ... }`,
    python: `from elodtx import EloDtx

client = EloDtx(api_key=os.environ["ELODTX_API_KEY"])

result = client.compatibility.check(
    user_a="usr_8f3k2j",
    user_b="usr_9d4m1n",
    include_dimensions=True,
)

print(result.score)        # 0.84
print(result.dimensions)   # {"communication_style": 0.91, ...}`,
    swift: `import EloDtx

let client = EloDtx(apiKey: ProcessInfo.processInfo.environment["ELODTX_API_KEY"]!)

let result = try await client.compatibility.check(
    userA: "usr_8f3k2j",
    userB: "usr_9d4m1n",
    includeDimensions: true
)

print(result.score)        // 0.84
print(result.dimensions)   // ["communication_style": 0.91, ...]`,
  },
};

// ─── Rate Limits ─────────────────────────────────────────────────────────────

export interface RateLimit {
  tier: string;
  requestsPerMinute: number;
  requestsPerDay: number;
  burstLimit: number;
}

export const RATE_LIMITS: RateLimit[] = [
  { tier: "Starter", requestsPerMinute: 60, requestsPerDay: 10000, burstLimit: 100 },
  { tier: "Growth", requestsPerMinute: 300, requestsPerDay: 100000, burstLimit: 500 },
  { tier: "Scale", requestsPerMinute: 1000, requestsPerDay: 1000000, burstLimit: 2000 },
];

// ─── Conversation Demo Data ──────────────────────────────────────────────────

export interface ChatMessage {
  sender: "user" | "match";
  text: string;
  timestamp: string;
}

export interface WhisperMessage {
  text: string;
  afterMessageIndex: number;
}

export const CONVERSATION_WITHOUT_WHISPER: ChatMessage[] = [
  { sender: "match", text: "Hey! I saw we matched. How's your day going?", timestamp: "2:14 PM" },
  { sender: "user", text: "Hey! Pretty good, just got back from a run. You?", timestamp: "2:16 PM" },
  { sender: "match", text: "Nice! I'm just relaxing at home. Do you run a lot?", timestamp: "2:18 PM" },
  { sender: "user", text: "Yeah, a few times a week. Keeps me sane haha", timestamp: "2:20 PM" },
  { sender: "match", text: "That's cool!", timestamp: "2:25 PM" },
];

export const CONVERSATION_WITH_WHISPER: ChatMessage[] = [
  { sender: "match", text: "Hey! I saw we matched. How's your day going?", timestamp: "2:14 PM" },
  { sender: "user", text: "Hey! Pretty good, just got back from a run. You?", timestamp: "2:16 PM" },
  { sender: "match", text: "Nice! I'm just relaxing at home. Do you run a lot?", timestamp: "2:18 PM" },
  { sender: "user", text: "Yeah, a few times a week. Keeps me sane haha", timestamp: "2:20 PM" },
  { sender: "match", text: "That's cool! I've been thinking about starting but I never know where to begin", timestamp: "2:22 PM" },
  { sender: "user", text: "I actually started because I needed to clear my head after moving cities. It became my way of exploring new places. Where did you grow up?", timestamp: "2:25 PM" },
  { sender: "match", text: "I grew up in a small town in the south. Haven't been back in a while actually... it's complicated", timestamp: "2:28 PM" },
  { sender: "user", text: "I get that. Sometimes distance from home gives you perspective you didn't know you needed. What brought you here?", timestamp: "2:31 PM" },
  { sender: "match", text: "That's exactly it. I came for work but stayed because I finally felt like I could be myself. Would you want to grab coffee sometime and swap stories?", timestamp: "2:35 PM" },
  { sender: "user", text: "I'd really like that. There's a great spot near the waterfront — Saturday morning?", timestamp: "2:37 PM" },
];

export const WHISPER_SUGGESTIONS: WhisperMessage[] = [
  {
    text: "She mentioned wanting to start running — your Know Me profile shows you value sharing activities. This could be a genuine connection point.",
    afterMessageIndex: 3,
  },
  {
    text: "She mentioned not going back to her hometown much — her answers suggest this means something to her. This could be worth exploring gently.",
    afterMessageIndex: 6,
  },
];

// ─── Proximity FAQ ───────────────────────────────────────────────────────────

export interface FAQ {
  question: string;
  answer: string;
}

export const PROXIMITY_FAQ: FAQ[] = [
  {
    question: "Can EloDtx track my exact location?",
    answer: "No. EloDtx uses geohash encoding that reduces your location to a ~500m × 500m area. Your exact coordinates are never stored, transmitted, or visible to anyone — including EloDtx servers. The system only knows your approximate area, never your precise position.",
  },
  {
    question: "Who can see that I'm nearby?",
    answer: "Only users who you've already matched with at a high compatibility score AND who have also opted into proximity. Both parties must have proximity enabled. You're invisible to everyone else.",
  },
  {
    question: "What data is stored?",
    answer: "Only the geohash (area code) and a timestamp. This data is ephemeral — it's deleted within 24 hours. No location history is ever built. No movement patterns are tracked.",
  },
  {
    question: "Can I turn it off?",
    answer: "Instantly. One tap disables proximity and immediately removes your geohash from the system. There's no cooldown, no 'are you sure' — it's off when you say it's off.",
  },
  {
    question: "Why Apple Watch?",
    answer: "A haptic tap on the wrist is the most discreet way to receive a proximity alert. It doesn't require pulling out your phone, doesn't make a sound, and feels natural rather than technological. It's designed to feel like intuition, not notification.",
  },
  {
    question: "What if I don't want to meet?",
    answer: "Every proximity alert has two buttons: 'Connect' and 'Not Now'. Tapping 'Not Now' dismisses the alert permanently for that encounter. No explanation needed. No notification sent to the other person. They never know you were alerted.",
  },
];

// ─── SEO Metadata ────────────────────────────────────────────────────────────

export const SEO = {
  siteName: "EloDtx",
  siteUrl: "https://elodtx.com",
  defaultTitle: "EloDtx — The AI Connection Intelligence Platform",
  defaultDescription: "Purpose-built AI that understands, predicts and improves human connection. 138 dimensions. 5 specialized agents. Real results.",
  pages: {
    home: {
      title: "EloDtx — The AI Connection Intelligence Platform",
      description: "Purpose-built AI that understands, predicts and improves human connection. 138 dimensions. 5 agents. Real results.",
    },
    howItWorks: {
      title: "How EloDtx Works — Whispers, Proximity & Behavioral AI",
      description: "The Whisper System, Safe Proximity, and the behavior learning loop explained. See how EloDtx connects the right people.",
    },
    industries: {
      title: "Industries — EloDtx for Dating, HR, Wellness & More",
      description: "Connection intelligence for dating, recruitment, wellness, networking, enterprise and education platforms.",
    },
    theWhisper: {
      title: "The Whisper — EloDtx Never Speaks For You",
      description: "EloDtx whispers contextual suggestions so you never miss a moment. See how it transforms conversations.",
    },
    proximity: {
      title: "Safe Proximity — Serendipity Powered by Intelligence",
      description: "Real-time compatibility scoring with geohash privacy. Apple Watch integration. Privacy-first real-world connection.",
    },
    developers: {
      title: "EloDtx API Documentation — Quick Start & SDKs",
      description: "REST API docs, code examples in JavaScript, Python, and Swift. Rate limits, SDKs, and interactive pricing calculator.",
    },
    about: {
      title: "About EloDtx — Built in Mauritius for the World",
      description: "The origin story, technology, team, and investment behind the AI Connection Intelligence Platform.",
    },
    waitlist: {
      title: "Join the EloDtx Waitlist — First 10 Partners Get 90 Days Free",
      description: "Be among the first platforms powered by EloDtx. Apply for early access with full dedicated support.",
    },
  },
};

// ─── Training Path (How It Works page) ───────────────────────────────────────

export interface TrainingPhase {
  period: string;
  title: string;
  description: string;
  status: "current" | "upcoming" | "future";
}

export const TRAINING_PATH: TrainingPhase[] = [
  {
    period: "Now",
    title: "Claude API Layer",
    description: "EloDtx runs on Anthropic's Claude API with proprietary prompting, fine-tuned for connection intelligence. This gives us production-grade AI while we build our own.",
    status: "current",
  },
  {
    period: "Month 12–18",
    title: "Qwen 3.5 Fine-Tuning",
    description: "Fine-tuning Qwen 3.5 on our proprietary behavioral dataset — 508 real user profiles, conversation patterns, and outcome data from the Baeyond POC.",
    status: "upcoming",
  },
  {
    period: "Month 18–24",
    title: "Hybrid Deployment",
    description: "Running our fine-tuned model alongside Claude for validation. Gradual traffic migration as our model proves equal or superior performance.",
    status: "future",
  },
  {
    period: "Month 24+",
    title: "Full Proprietary EloDtx Model",
    description: "Complete independence. A model trained exclusively on connection data, optimized with TurboQuant compression for 4.9x efficiency.",
    status: "future",
  },
];

// ─── About Page Data ─────────────────────────────────────────────────────────

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export const ABOUT_TIMELINE: TimelineEvent[] = [
  {
    year: "2024",
    title: "Baeyond is born",
    description: "A dating platform built in Mauritius with a radical idea: what if matching was based on who people actually are, not what they look like?",
  },
  {
    year: "2024",
    title: "Âme Intense launches",
    description: "Real-world connection events in Mauritius and La Réunion. Every single event sells out. 508 real users prove the concept.",
  },
  {
    year: "2025",
    title: "EloDtx is extracted",
    description: "The AI engine behind Baeyond is too powerful to live in one app. EloDtx becomes a standalone platform — connection intelligence as a service.",
  },
  {
    year: "2025",
    title: "$7.5M investment secured",
    description: "Alice Rose LLC (USA) backs the vision. Urban Space Web Technologies Ltd (Mauritius) and Eloclouds Limited (UK) formalize the partnership.",
  },
  {
    year: "2026",
    title: "Platform launch",
    description: "EloDtx opens to the first 10 partner platforms. The Âme Intense launch event in Mauritius, October 2026, marks the public debut.",
  },
];
