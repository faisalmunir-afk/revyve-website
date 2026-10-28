/**
 * Revyve — /team/ and /privacy/, transcribed verbatim from
 * revyveholdings.com. (Insights, which was Press, is in insights.ts.)
 *
 * Every string is Revyve's own wording, character for character. The Team
 * page uses curly apostrophes (Pakistan’s, specialty’s), kept as the site
 * has them.
 */

type Linked = { phrase: string; href: string };

export const TEAM = {
  eyebrow: "Team",
  heading: "Operators, engineers and physicians. The same four people.",
  lead: "We are four founders, all with money in the first business. Two of us practiced medicine. Two of us have built and run companies. All of us sit with the billing team.",
  founders: [
    {
      name: "Talal Gondal",
      role: "Founder and CEO. Product, technology and capital.",
      body: "Leads product, engineering, capital and acquisitions, and built the first agent workflows himself: the orchestration, the payer connectors, the claim-event log. Previously founded TAG, Pakistan’s first digital bank (YC S21), and worked in venture at Lunar Ventures and Edison and in senior roles at Amazon.",
    },
    {
      name: "Ali Afzal",
      role: "Co-founder and COO. Billing operations and integration.",
      body: "Runs billing operations from St. Louis, the handover from each seller, and every integration. Spent three years inside U.S. billing companies before Revyve; early operator at TAG.",
    },
    {
      name: "Ali Subat, MD",
      role: "Co-founder. Sales and physician partnerships.",
      body: "Board-certified anesthesiologist, trained at the Icahn School of Medicine at Mount Sinai. Runs sales and physician partnerships: the practices we win directly and the referral channels that bring them.",
    },
    {
      name: "Sai Devana, MD",
      role: "Co-founder. Practice implementation and customer success.",
      body: "Orthopedic surgeon. Runs practice onboarding and customer success, and defines what each specialty’s workflow needs from the agents.",
    },
  ],
  readNext: {
    lead: "Read next: ",
    text: "Work with us; our thesis.",
    links: [
      { phrase: "Work with us", href: "/careers/" },
      { phrase: "our thesis", href: "/insights/our-thesis/" },
    ] as Linked[],
  },
} as const;

export const PRIVACY = {
  eyebrow: "Privacy",
  heading: "How we handle data.",
  body: "Our privacy policy will be published here before launch. Patient data is handled only under the agreements that govern it, and we do not train general-purpose models on it. Questions in the meantime go to hello@revyveholdings.com.",
  links: [{ phrase: "hello@revyveholdings.com", href: "mailto:hello@revyveholdings.com" }] as Linked[],
} as const;
