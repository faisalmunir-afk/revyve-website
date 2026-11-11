/**
 * Revyve — /for-practices/, transcribed verbatim from
 * revyveholdings.com/for-practices/ (as revised by the client in November 2026).
 *
 * Every string is Revyve's own wording, character for character. Each of
 * the five reasons is split exactly where the original sets its bold lead:
 * `title` is the bold part, `body` the rest.
 */

import type { Linked } from "./about";

export const PRACTICES = {
  eyebrow: "For practices",
  heading: "Every claim followed up. Every action visible.",
  lead: "Independent practices lose money in the gap between a claim going out and someone chasing it. We close that gap inside the practice-management system you already use. Agents check status, update the work queue and produce the daily reports; experienced billers handle the exceptions and stay accountable for the result; you can see every action and the evidence behind it.",

  why: {
    heading: "Why practices move to us",
    reasons: [
      {
        title: "You pay a percentage of what we collect.",
        body: "Our incentive is your collections, not your software budget.",
      },
      {
        title: "You keep your practice-management system.",
        body: "We work inside AdvancedMD today; additional integrations are planned.",
      },
      {
        title: "Aged claims get worked, not parked.",
        body: "Anything over 120 days gets a status check, a reason and a next action.",
      },
      {
        title: "Nothing goes out without a person on anything that matters.",
        body: "Coding, write-offs and payer disputes stay with qualified billers.",
      },
      {
        title: "Two of our founders are physicians.",
        body: "The one who signs you is a doctor, and so is the one who gets you live.",
      },
    ],
  },

  start: {
    heading: "How to start",
    body: "We start with a free assessment of your existing billing records and identify areas of improvement, commit to the benchmarks before the contract is signed, and then deliver on them. Onboarding takes days, not months, and your workflow does not change.",
    action: { label: "Get a billing assessment", href: "/contact/" },
    note: {
      text: "How the agents and billers work together: Revyve AI.",
      links: [{ phrase: "Revyve AI", href: "/revyve-ai/" }] as Linked[],
    },
  },

  faq: {
    heading: "Questions practices ask",
    items: [
      {
        q: "How does Revyve charge for billing?",
        answer: "You pay a percentage of what we collect. Our incentive is your collections, not your software budget.",
        link: null,
      },
      {
        q: "Do we have to change our practice-management system?",
        answer: "You keep your practice-management system. We work inside AdvancedMD today; additional integrations are planned.",
        link: null,
      },
      {
        q: "What happens to aged claims?",
        answer: "Aged claims get worked, not parked. Anything over 120 days gets a status check, a reason and a next action.",
        link: null,
      },
      {
        q: "Does anything go to a payer without a person reviewing it?",
        answer: "Nothing goes out without a person on anything that matters. Coding, write-offs and payer disputes stay with qualified billers.",
        link: null,
      },
      {
        q: "How long does onboarding take?",
        answer: "Onboarding takes days, not months, and your workflow does not change.",
        link: null,
      },
      {
        q: "How do we start?",
        answer: "We start with a free audit of your existing billing records and identify areas of improvement, commit to the benchmarks before the contract is signed, and then deliver on them.",
        link: null,
      },
    ],
  },
} as const;
