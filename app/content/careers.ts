/**
 * Revyve — /careers/ and /contact/, transcribed verbatim from
 * revyveholdings.com/careers/ and revyveholdings.com/contact/.
 *
 * Every string is Revyve's own wording, character for character.
 */

export const CAREERS = {
  eyebrow: "Careers",
  heading: "Work with us.",
  lead: "We hire engineers who will sit in a billing office in St. Louis before they write a line of code, and operators who want to run a business, not a function.",
  roles: {
    heading: "Open roles",
    items: [
      {
        title: "Engineers",
        body: "You start in St. Louis with the billing team, mapping a workflow as it really happens, before you build the agents and screens that change it.",
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
      body: "Bring us your most frustrating unpaid claims. We will show you exactly what we would do with each one, which steps we automate, and where a person stays responsible.",
    },
    {
      title: "Sell your firm.",
      body: "Tell us about the business, its customers and the person who runs it day to day. A conversation about the business, not a pitch.",
    },
    {
      title: "Work with us.",
      body: "Engineers who will sit with the billing team first, and operators who want to run a business. Send what you have built or run.",
    },
    {
      title: "Investors.",
      body: "We are not raising a priced round. If you back owner-operators in healthcare, write to us.",
    },
  ],
  legal: "Revyve, Inc. San Francisco and St. Louis.",
} as const;
