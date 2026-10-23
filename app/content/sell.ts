/**
 * Revyve — /sell-your-firm/, transcribed verbatim from
 * revyveholdings.com/sell-your-firm/.
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
      "Healthcare services businesses with customers who have stayed for years. Medical billing today; surgery centers, concierge and subscription primary care, psychiatry, radiology, pre-op and anesthesia clinics and dental groups as we grow.",
      "A manager or second-in-command who knows the customers and wants to keep running the business.",
      "Real, documented work: claims, follow-ups, reports, the daily grind. That is what our platform is built for.",
      "Clean books and clear contracts. We pay for what is there, not for what we hope to build.",
    ],
  },

  people: {
    heading: "What happens to your customers and your team",
    body: "Your customers keep the people they know. Your manager stays accountable for the service. Your team gets tools that take the repetitive work off their desks and keep the judgment with them. We do not announce automation targets; we ask the people doing the work which parts should go first.",
  },

  how: {
    heading: "How it goes",
    /** Four sentences; a design may set each as a step. */
    body: "A conversation about the business, not a pitch. A fair price for a real business, with the terms in plain language. A close measured in weeks. A transition that protects collections before anything else changes.",
    action: { label: "Start the conversation", href: "/contact/" },
    note: {
      text: "What the transition looks like: the first hundred days; and the people you would be handing the business to.",
      links: [
        { phrase: "the first hundred days", href: "/#hundred" },
        { phrase: "the people you would be handing the business to", href: "/team/" },
      ] as Linked[],
    },
  },

  faq: {
    heading: "Questions owners ask",
    items: [
      {
        q: "What kinds of businesses does Revyve buy?",
        answer: "Healthcare services businesses with customers who have stayed for years. Medical billing today; surgery centers, concierge and subscription primary care, psychiatry, radiology, pre-op and anesthesia clinics and dental groups as we grow.",
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
