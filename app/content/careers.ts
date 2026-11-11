/**
 * Revyve — /careers/ and /contact/, transcribed verbatim from
 * revyveholdings.com/careers/ and revyveholdings.com/contact/ (as revised by the
 * client in November 2026). The Investors card's demo is in demo.ts.
 *
 * Every string is Revyve's own wording, character for character.
 */

export const CAREERS = {
  eyebrow: "Careers",
  heading: "Work with us.",
  lead: "We hire engineers who build reusable production workflows alongside the billing team in St. Louis, and operators who want to run a business, not a function.",
  roles: {
    heading: "Open roles",
    items: [
      {
        title: "Engineers",
        body: "You start with the billing team, mapping a workflow as it really happens, then build the agents, integrations and evaluation tools that change it, designed to be installed in the next operation we own.",
      },
      {
        title: "Operators",
        body: "You run a business we own, with its customers, its team and its numbers, and you make it better every week.",
      },
    ],
  },
  write: "Write to us with what you have built or run, and which of the two you want to do.",
  email: "hello@revyveholdings.com",
  /** The label on the original's copy-to-clipboard button. */
  copy: "Copy",
} as const;

export const CONTACT_PAGE = {
  eyebrow: "Contact",
  heading: "Write to us.",
  lead: "One address for everything. Say which of these you are and we will reply from the right person.",
  email: "hello@revyveholdings.com",
  copy: "Copy",
  cards: [
    {
      title: "Move your billing.",
      body: "We start with a free assessment of your existing billing records, commit to benchmarks before a contract is signed, and then deliver on them.",
    },
    {
      title: "Sell your firm.",
      body: "Tell us about the business, its customers and the person who runs it day to day. A conversation about the business, not a pitch.",
    },
    {
      title: "Work with us.",
      body: "Engineers who build reusable production workflows with the billing team, and operators who want to run a business. Send what you have built or run.",
    },
    {
      title: "Investors.",
      body: "We're building the AI platform for healthcare administration, starting inside billing operations we own. For investment inquiries, contact us.",
    },
  ],
  legal: "Revyve, Inc. San Francisco and St. Louis.",
} as const;
