/**
 * Revyve — /sell-your-firm/, transcribed verbatim from
 * revyveholdings.com/sell-your-firm/ (as revised by the client in November 2026).
 *
 * Every string is Revyve's own wording, character for character, including
 * its straight apostrophes.
 */

import type { Linked } from "./about";

export const SELL = {
  eyebrow: "Sell your firm",
  heading: "Built something that works? We'd like to run it.",
  lead: "Most buyers of a billing company want the book of business. We want the business: the customers, the people who know them, and the twenty years of knowing which payer does what. Then we make it run better.",
  action: { label: "Start the conversation", href: "/contact/" },

  lookFor: {
    heading: "What we look for",
    items: [
      "Established medical billing businesses with practices that have stayed for years. That is our current acquisition focus.",
      "A manager or second-in-command who knows the customers and wants to keep running the business.",
      "Real, documented work: claims, follow-ups, reports, the daily grind. That is what our platform is built for.",
      "Clean books and clear contracts. We pay for what is there, not for what we hope to build.",
    ],
  },

  people: {
    heading: "What happens to your customers and your team",
    body: "Your customers keep the people they know. Your manager stays accountable for the service. Your team gets tools that take the repetitive work off their desks and keep the judgment with them. We do not announce automation targets; we ask the people doing the work which parts should go first.",
  },

  /** Added by the client, November 2026. */
  adds: {
    heading: "What joining Revyve adds",
    body: "Your team gets the platform's tools: claim-status checks, controlled work queues and daily reporting, with billers reviewing exceptions. The platform gets another real operation to learn from, so each workflow your team runs makes the agents, integrations and evaluation tools better for every business we own. Under the agreements that govern it, your claim history and reviewed exceptions train the agents; your practices give them a place to work.",
  },

  how: {
    heading: "How it goes",
    /** Four sentences; a design may set each as a step. */
    body: "A conversation about the business, not a pitch. A fair price for a real business, with the terms in plain language. A close measured in weeks. A transition that protects collections before anything else changes.",
    action: { label: "Start the conversation", href: "/contact/" },
    note: {
      text: "The people you would be handing the business to: the team.",
      links: [{ phrase: "the team", href: "/team/" }] as Linked[],
    },
  },

  faq: {
    heading: "Questions owners ask",
    items: [
      {
        q: "What kinds of businesses does Revyve buy?",
        answer: "Established medical billing businesses with practices that have stayed for years. That is our current acquisition focus.",
        link: null,
      },
      {
        q: "What happens to my team after the sale?",
        answer: "Your customers keep the people they know. Your manager stays accountable for the service. Your team gets tools that take the repetitive work off their desks and keep the judgment with them.",
        link: null,
      },
      {
        q: "Does Revyve resell the businesses it buys?",
        answer: "We buy to hold. A business we own keeps its name, its manager and its customers, and gets a longer horizon than any owner planning an exit could give it.",
        link: null,
      },
      {
        q: "How long does a sale take?",
        answer: "A conversation about the business, not a pitch. A fair price for a real business, with the terms in plain language. A close measured in weeks. A transition that protects collections before anything else changes.",
        link: null,
      },
      {
        q: "What does Revyve pay for?",
        answer: "Clean books and clear contracts. We pay for what is there, not for what we hope to build.",
        link: null,
      },
    ],
  },
} as const;
