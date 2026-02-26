/** ROI calculator model assumptions */
export const ROI = {
  /** Monthly fully-loaded cost per human agent (USD) */
  AGENT_MONTHLY_COST: 4200,
  /** AI runtime cost per minute of call (USD) */
  AI_COST_PER_MINUTE: 0.1,
  /** Fraction of staff cost recovered via AI automation */
  RECOVERY_RATE: 0.22,
  /** Baseline close rate used to measure lift */
  BASELINE_CLOSE_RATE: 0.22,
  /** Maximum close-rate lift the model will credit */
  MAX_CLOSE_RATE_LIFT: 0.35,
  /** Estimated average deal value per converted call (USD) */
  AVG_DEAL_VALUE: 24,
} as const;

/** Animation timing constants (milliseconds) */
export const ANIM = {
  /** Default stagger delay between sibling reveal items */
  STAGGER: 70,
  /** Tighter stagger for longer lists (e.g. FAQ accordion) */
  FAQ_STAGGER: 45,
  /** Duration of the animated metric count-up */
  METRIC_COUNT_DURATION: 780,
  /** Delay between sequential chat-line entrances in the hero preview */
  CHAT_LINE_INTERVAL: 120,
} as const;
