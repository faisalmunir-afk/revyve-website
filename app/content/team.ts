/**
 * Revyve — /team/, /press/, /press/why-we-built-revyve/ and /privacy/,
 * transcribed verbatim from revyveholdings.com.
 *
 * Every string is Revyve's own wording, character for character. The Team
 * page uses curly apostrophes (Pakistan’s, specialty’s); the letter uses
 * straight ones (healthcare's, don't). Both are kept as the site has them.
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
    text: "Work with us; why we built Revyve.",
    /** The live page sends "why we built Revyve" to /about/, so it does here. */
    links: [
      { phrase: "Work with us", href: "/careers/" },
      { phrase: "why we built Revyve", href: "/about/" },
    ] as Linked[],
  },
} as const;

export const PRESS = {
  eyebrow: "Press",
  heading: "Press.",
  items: [
    {
      title: "Why we built Revyve",
      href: "/press/why-we-built-revyve/",
      date: "October 2026",
      dateTime: "2026-10",
      excerpt: "Most of the value AI creates in healthcare will not go to the companies that make the models.",
    },
  ],
} as const;

export const LETTER = {
  /** Rendered as a way back to /press/ with the date, not as a label. */
  eyebrow: "Press · October 2026",
  section: "Press",
  date: "October 2026",
  dateTime: "2026-10",
  heading: "Revyve is an AI-native holding company for healthcare services.",
  paragraphs: [
    {
      text: "Most of the value AI creates in healthcare will not go to the companies that make the models. It will go to whoever changes how the work actually gets done.",
    },
    {
      text: "The businesses that run healthcare's back office have what no model can generate: customers who have stayed for decades, people who know the payer rules by heart, and systems that money already flows through. They also run on email, spreadsheets and one person's memory. That gap is the opportunity.",
    },
    {
      text: "Revyve buys established healthcare services businesses and runs them. We bring capital, engineers and operators, and we take responsibility for the result. Our first business is a 29-year-old medical billing company serving independent physician practices.",
    },
    {
      text: "We don't sell these companies software. We own them, so we can change who does the work, which steps still need a person, and what the customer is promised. Our engineers sit with billers and managers, map the work as it really happens, and rebuild it. Agents take the repetitive, checkable tasks. People keep judgment, exceptions and relationships.",
    },
    {
      text: "Everything we learn goes into Revyve AI: the data model, the agents, the workflow rules, the connectors, and the way we take over a business without losing a customer. Every company we own runs on it, and every deployment makes the next one faster and safer.",
      links: [{ phrase: "Revyve AI", href: "/revyve-ai/" }] as Linked[],
    },
    {
      text: "The people who built each business keep running it. We measure ourselves on their customers staying, their collections holding, and the work costing less end to end.",
    },
    {
      text: "We only do healthcare. Two of our four founders are physicians. Revyve is based in San Francisco, with operations in St. Louis.",
    },
  ],
  readNext: {
    lead: "Read next: ",
    text: "About, the short version; Sell your firm; For practices.",
    links: [
      { phrase: "About", href: "/about/" },
      { phrase: "Sell your firm", href: "/sell-your-firm/" },
      { phrase: "For practices", href: "/for-practices/" },
    ] as Linked[],
  },
} as const;

export const PRIVACY = {
  eyebrow: "Privacy",
  heading: "How we handle data.",
  body: "Our privacy policy will be published here before launch. Patient data is handled only under the agreements that govern it, and we do not train general-purpose models on it. Questions in the meantime go to hello@revyveholdings.com.",
  links: [{ phrase: "hello@revyveholdings.com", href: "mailto:hello@revyveholdings.com" }] as Linked[],
} as const;
