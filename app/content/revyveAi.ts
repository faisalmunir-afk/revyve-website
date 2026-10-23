/**
 * Revyve — /revyve-ai/, transcribed verbatim from revyveholdings.com/revyve-ai/.
 *
 * Every string is Revyve's own wording, character for character. The four
 * steps carry their original printed numerals in `index`; a design may
 * render the list as an ordered list without printing them.
 */

import type { Linked } from "./about";

export const REVYVE_AI = {
  eyebrow: "Revyve AI",
  heading: "The AI platform connecting healthcare’s existing systems, data, and workflows.",
  leads: [
    "We’re building Revyve AI to connect leading AI models with the existing and legacy systems healthcare businesses run on: EHRs, practice management software, billing platforms, payer portals, and operational records.",
    "Systems hold the data. The work lives in the workflows between them: the daily checks, handoffs and follow-ups that no system records. So our forward-deployed engineers sit with the billers and managers who do that work, map each workflow as it actually happens, and build the models and agents into it, with a person at every step that matters.",
  ],
  /** Set bold on the original. */
  claim: "The platform under every company we own, not a product we sell.",
  action: { label: "Talk to Revyve", href: "/contact/" },

  /** The architecture, as the original lays it out left to right. */
  arch: {
    label: "How Revyve AI connects existing systems, AI models and reviewers",
    systems: {
      heading: "The systems a business already runs",
      items: ["EHRs", "Practice management software", "Billing platforms", "Payer portals", "Operational records"],
    },
    core: {
      name: "Revyve AI",
      detail: "Shared infrastructure for routing, permissions, evidence, and approvals",
    },
    work: {
      heading: "What does the work",
      items: ["AI models, selected for quality, speed, and cost", "Agents", "Existing software", "Human reviewers"],
    },
    outcome: "So teams resolve claims, clear backlogs, and handle more work.",
  },

  system: {
    heading: "One system under every company we own.",
    lead: "It connects frontier models to the systems a healthcare business already runs and puts agents to work inside them.",
    points: [
      {
        title: "One record of every claim.",
        body: "Each claim is tied to its encounter, its payer evidence, the person responsible for it and the next step allowed. Nothing lives only in someone’s inbox.",
      },
      {
        title: "Agents with owners.",
        body: "Every agent has an owner, a version, a test set and a cost. It can read, draft or act only within permissions we set, and it shows the records behind every decision.",
      },
      {
        title: "Work that moves on its own, with people at the right points.",
        body: "Routine steps run; approvals, retries and exceptions are handled in one place; a biller reviews anything consequential before it goes out. There is always a manual path.",
      },
      {
        title: "Tools the team actually uses.",
        body: "Work queues, evidence panels and review screens built with the billers who use them, inside the systems the practice already has.",
      },
    ],
    note: "Every action is logged with its evidence and its outcome. Patient data is handled only under the agreements that govern it, and we do not train general-purpose models on it.",
  },

  rcm: {
    heading: "Starting with revenue cycle management",
    lead: "For an aged claim, Revyve AI is designed to bring together billing records, supporting documents, and payer information, prepare the next step, route it for review, and track the result.",
    steps: [
      { index: "1", label: "Bring together", detail: "Billing records, supporting documents, and payer information." },
      { index: "2", label: "Prepare", detail: "The next step." },
      { index: "3", label: "Route", detail: "For review." },
      { index: "4", label: "Track", detail: "The result." },
    ],
    closing: "The goal: faster resolution, greater capacity, and lower cost per completed task.",
    action: { label: "Talk to Revyve", href: "/contact/" },
  },

  readNext: {
    lead: "Read next: ",
    text: "For practices, what this means for a practice; Sell your firm, what it means for an owner.",
    links: [
      { phrase: "For practices", href: "/for-practices/" },
      { phrase: "Sell your firm", href: "/sell-your-firm/" },
    ] as Linked[],
  },
} as const;
