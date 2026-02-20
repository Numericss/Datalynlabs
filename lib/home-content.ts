export type NavItem = {
  label: string;
  href: string;
};

export type HeroStat = {
  value: string;
  label: string;
};

export type LogoItem = {
  name: string;
  src: string;
  alt: string;
};

export type FeatureItem = {
  index: string;
  title: string;
  body: string;
};

export type ServiceItem = {
  title: string;
  body: string;
  points: string[];
};

export type ProcessStep = {
  step: string;
  title: string;
  body: string;
};

export type ProofMetric = {
  value: string;
  label: string;
  body: string;
};

export type ComparisonRow = {
  category: string;
  generalist: string;
  templateOnly: string;
  inHouse: string;
};

export type FaqItem = {
  question: string;
  answer: string;
  details?: string[];
  bullets?: string[];
};

export const navItems: NavItem[] = [
  { label: "Services", href: "#solutions" },
  { label: "Solutions", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
];

export const heroStats: HeroStat[] = [
  { value: "Under 1hr setup", label: "Launch timeline" },
  { value: "20+ calls simultaneously", label: "Concurrent capacity" },
  { value: "24/7 coverage", label: "Always-on availability" },
];

export const heroConversation: string[] = [
  "Agent: Thanks for calling Datalylabs. Are you looking for inbound call coverage or outbound follow-up?",
  "Caller: Inbound. We miss calls after hours and lose high-intent leads.",
  "Agent: Understood. I can qualify the request, collect details, and route urgent calls live right now.",
  "Caller: Perfect. Please schedule a strategy call for implementation.",
];

export const logoItems: LogoItem[] = [
  { name: "OpenAI", src: "/integrations/openai.svg", alt: "OpenAI logo" },
  { name: "Codex", src: "/integrations/codex.svg", alt: "Codex logo" },
  { name: "ElevenLabs", src: "/integrations/elevenlabs.svg", alt: "ElevenLabs logo" },
  { name: "NVIDIA", src: "/integrations/nvidia.svg", alt: "NVIDIA logo" },
  { name: "Notion", src: "/integrations/notion.svg", alt: "Notion logo" },
];

export const featureItems: FeatureItem[] = [
  {
    index: "01",
    title: "Capture high-intent leads instantly",
    body: "Answer every inbound call in seconds, qualify intent, and route urgent opportunities before they cool off.",
  },
  {
    index: "02",
    title: "Automate repetitive conversations",
    body: "Offload FAQs, reminders, and follow-ups so your team can focus on high-value sales and service work.",
  },
  {
    index: "03",
    title: "Scale operations without payroll spikes",
    body: "Handle seasonal or campaign-driven call surges without adding overhead or sacrificing response quality.",
  },
];

export const serviceItems: ServiceItem[] = [
  {
    title: "Inbound Voice Agent",
    body: "Production-ready AI call handling built for qualification, routing, and fast follow-through.",
    points: [
      "Answers inbound calls instantly, including after-hours",
      "Qualifies intent and collects key intake details",
      "Escalates priority conversations to live staff",
    ],
  },
  {
    title: "Outbound Follow-Up Engine",
    body: "Automated outreach for warm leads, reminders, and reactivation paths that protect pipeline momentum.",
    points: [
      "Follows up after missed calls and form submissions",
      "Runs no-show reminders and rebooking prompts",
      "Re-engages stale leads with adaptive script paths",
    ],
  },
  {
    title: "Optimization + Support",
    body: "Ongoing performance tuning with transcript insights, call QA, and conversion-driven workflow updates.",
    points: [
      "Monthly optimization sprints and script refinement",
      "Intent coverage updates for edge-case handling",
      "CRM, calendar, and reporting workflow support",
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "Step 01",
    title: "Discovery + Scripting",
    body: "Map your call journeys, qualification criteria, and escalation rules before build starts.",
  },
  {
    step: "Step 02",
    title: "Build + Integrations",
    body: "Configure agents, connect CRM and scheduling systems, and validate data flow end to end.",
  },
  {
    step: "Step 03",
    title: "Launch + Optimize",
    body: "Deploy in production, monitor outcomes, and refine scripts continuously against conversion targets.",
  },
];

export const proofMetrics: ProofMetric[] = [
  {
    value: "38%",
    label: "Qualified lead lift",
    body: "Median increase in qualified inbound leads within 90 days of deployment.",
  },
  {
    value: "62 hrs",
    label: "Monthly team time recovered",
    body: "Average hours saved by automating repetitive call workflows and follow-up tasks.",
  },
  {
    value: "3.1x",
    label: "Faster response speed",
    body: "Improvement in first-response speed for high-intent inquiries during peak periods.",
  },
];

export const comparisonRows: ComparisonRow[] = [
  {
    category: "Implementation depth",
    generalist: "Broad automation support with less voice-specific conversion design",
    templateOnly: "Fast setup but limited workflow and escalation flexibility",
    inHouse: "Highly custom but slower and dependent on internal bandwidth",
  },
  {
    category: "Operational reliability",
    generalist: "Works across channels but often shallow on complex call routing",
    templateOnly: "Basic automations with limited exception handling",
    inHouse: "Varies by team ownership and maintenance discipline",
  },
  {
    category: "Conversion impact",
    generalist: "Moderate gains with heavier manual scripting requirements",
    templateOnly: "Often optimized for generic automation coverage",
    inHouse: "Can perform well but requires long optimization cycles",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "What types of businesses are best suited for AI voice agents?",
    answer:
      "Teams handling consistent inbound volume, appointment-driven revenue, or repetitive follow-up workflows see the fastest performance gains.",
    bullets: [
      "High call volume service teams",
      "Appointment-driven operations",
      "Sales organizations with warm follow-up flow",
    ],
  },
  {
    question: "How quickly can we launch a production-ready system?",
    answer:
      "Most teams move from discovery to live deployment in 2 to 4 weeks, depending on integration depth and call path complexity.",
    details: [
      "Week 1 focuses on scripting, call-path mapping, and escalation logic.",
      "Weeks 2 to 4 cover build, integration validation, and go-live tuning.",
    ],
  },
  {
    question: "Can your agents integrate with our CRM and existing APIs?",
    answer:
      "Yes. We connect to CRM, scheduling, and custom API environments when access is available, then test end-to-end data flow before launch.",
    bullets: ["CRM + pipeline updates", "Calendar and scheduling sync", "Custom API webhooks and route logic"],
  },
  {
    question: "How do you handle quality control after go-live?",
    answer:
      "We run structured optimization cycles using transcript analysis, call outcome tracking, and intent-coverage improvements to maintain performance.",
    details: [
      "Every deployment includes call QA review and script refinements.",
      "Workflow updates are prioritized by conversion and response quality impact.",
    ],
  },
  {
    question: "Will customers know they are speaking with AI?",
    answer:
      "Yes. We use transparent, trust-first language and maintain clear human escalation paths for high-friction or sensitive interactions.",
  },
  {
    question: "What happens when a conversation requires human intervention?",
    answer:
      "Agents trigger escalation logic to route live, notify internal teams, or schedule rapid follow-up based on urgency and business rules.",
    bullets: ["Live call transfer", "Internal priority notifications", "Fast callback workflows"],
  },
  {
    question: "Do you support ongoing maintenance and iteration?",
    answer:
      "Yes. We provide ongoing support, script tuning, and workflow updates so your system improves as your operations and offers evolve.",
    details: [
      "Maintenance plans include monthly optimization and issue response.",
      "You get a single ownership path for changes across scripts, routing, and integrations.",
    ],
  },
];
