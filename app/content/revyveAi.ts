/**
 * Revyve — /revyve-ai/, transcribed verbatim from revyveholdings.com/revyve-ai/
 * (as revised by the client in November 2026).
 *
 * Every string is Revyve's own wording, character for character.
 */

import type { Linked } from "./about";

export const REVYVE_AI = {
  eyebrow: "Revyve AI",
  heading: "AI agents for medical billing, built inside a real operation.",
  lead: "Revyve AI works inside the existing systems practices already in use. Today, it checks claim status, keeps controlled work queues current, produces daily aging and revenue reports, and records every action with its evidence. Billers review exceptions and remain responsible for consequential decisions.",
  /** Set bold on the original. */
  claim: "We are building the vertical AI platform that will revive the healthcare services industry.",
  actions: [
    { label: "Get a billing assessment", href: "/for-practices/" },
    { label: "First deployment results", href: "/revyve-ai/first-deployment/" },
  ],

  /** The architecture, as the original lays it out left to right. */
  arch: {
    label: "How Revyve AI connects the systems a practice runs, agents and reviewers",
    systems: {
      heading: "The systems a practice already runs",
      items: ["AdvancedMD (initial integration)", "Payer portals", "Billing records", "Supporting documents"],
    },
    core: {
      name: "Revyve AI",
      detail: "Integrations, permissions, action logs, evaluation and model selection",
    },
    work: {
      heading: "What does the work",
      items: ["Agents", "Work queues", "Daily reports", "Billers who review exceptions"],
    },
    outcome: "So claims get followed up, exceptions reach the right person, and the team spends less time compiling information.",
  },

  scope: {
    heading: "What runs today, and what comes next.",
    current: {
      heading: "Current deployment",
      items: ["Claim-status checks", "Controlled work queues", "Daily aging and revenue reports", "Evidence logging", "Human review"],
    },
    planned: {
      heading: "Planned expansion",
      items: ["Eligibility", "Claim submission", "Denials and appeals", "Payment posting", "Additional practice administration workflows"],
    },
    note: "AdvancedMD is the initial integration. Additional integrations are planned. Revyve AI is not offered as a standalone software subscription today, does not support every EHR, and does not automate billing end to end.",
  },

  release: {
    heading: "How capabilities are released",
    body: "We release capabilities workflow by workflow, based on measured coverage, error severity, review requirements and consistent performance on representative cases.",
    note: "Every action is logged with its evidence and its outcome. Patient data is handled only under the agreements that govern it, and we do not train general-purpose models on it.",
  },

  readNext: {
    lead: "Read next: ",
    text: "the first deployment results; For practices; Sell your firm.",
    links: [
      { phrase: "the first deployment results", href: "/revyve-ai/first-deployment/" },
      { phrase: "For practices", href: "/for-practices/" },
      { phrase: "Sell your firm", href: "/sell-your-firm/" },
    ] as Linked[],
  },
} as const;
