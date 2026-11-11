/**
 * Revyve — /about/, transcribed verbatim from revyveholdings.com/about/
 * (as revised by the client in November 2026).
 *
 * Every string is Revyve's own wording, character for character. Links are
 * recorded as the exact phrase they wrap plus the destination, so a design
 * restores them by splitting the sentence, never by retyping it. The one
 * footnote is a real footnote and stays one.
 */

export type Linked = { phrase: string; href: string };

export const ABOUT = {
  /** The original site's small label above the heading. */
  eyebrow: "About",
  heading: "Building the AI back office for independent medicine.",
  /** The two paragraphs under the heading, then the line set in bold. */
  intro: [
    "Revyve builds AI that helps independent practices run their back office. We started with medical billing and acquired an established billing operation to develop the platform inside real work.",
    "Ownership gives our team daily access to experienced billers, live workflows and measurable outcomes. What we learn becomes reusable agents, integrations and evaluation tools.",
  ],
  tagline: "We are building the vertical AI platform that will revive the healthcare services industry.",

  /** The "at a glance" list, in the original order. */
  glance: [
    {
      term: "What",
      detail: "An AI platform for medical billing and practice administration, built inside billing operations we own",
    },
    { term: "Headquarters", detail: "San Francisco" },
    { term: "Operations", detail: "St. Louis" },
    {
      term: "First company",
      detail: "A 29-year-old medical billing firm serving independent physician practices",
    },
    { term: "Founders", detail: "Four, two of whom practiced medicine" },
    { term: "Platform", detail: "Revyve AI", link: { phrase: "Revyve AI", href: "/revyve-ai/" } },
    {
      term: "Structure",
      detail: "Revyve, Inc. owns and operates its billing businesses, which keep their own names and teams",
    },
    {
      term: "Write to",
      detail: "hello@revyveholdings.com",
      link: { phrase: "hello@revyveholdings.com", href: "mailto:hello@revyveholdings.com" },
    },
  ] as { term: string; detail: string; link?: Linked }[],

  sections: [
    {
      id: "platform",
      heading: "What the platform does",
      paragraphs: [
        {
          text: "Revyve AI works inside the existing systems practices already in use. Today, it checks claim status, keeps controlled work queues current, produces daily aging and revenue reports, and records every action with its evidence. Billers review exceptions and remain responsible for consequential decisions.",
        },
        {
          text: "More: Revyve AI and the first deployment results.",
          links: [
            { phrase: "Revyve AI", href: "/revyve-ai/" },
            { phrase: "the first deployment results", href: "/revyve-ai/first-deployment/" },
          ],
        },
      ],
    },
    {
      id: "opportunity",
      heading: "The opportunity",
      paragraphs: [
        {
          text: "Healthcare in the United States runs on service businesses most people never see: the billing companies and administrative services that keep the system moving. Administrative work alone takes somewhere between 15 and 30 cents of every dollar the country spends on care, and almost all of that work is done by hand, in small firms, by people who know their doctors and their payers better than any software does. We think those firms stand to gain more from AI than anyone. We also think the gain only shows up when the change is made inside the business, by the people who already know the customers and the craft, and is built inside the operations we own before it is offered more widely.",
          /** The footnote marker sits after this phrase in the original. */
          note: { after: "every dollar the country spends on care,", n: 1 },
        },
        {
          text: "Most of the value AI creates in healthcare will not go to the companies that make the models. It will go to whoever changes how the work actually gets done. The businesses that run healthcare's back office have what no model can generate: customers who have stayed for decades, people who know the payer rules by heart, and systems that money already flows through. They also run on email, spreadsheets and one person's memory. That gap is the opportunity.",
        },
      ],
    },
    {
      id: "own",
      heading: "Why we own our deployment environment",
      paragraphs: [
        {
          text: "Revyve buys established healthcare services businesses and runs them. We bring capital, engineers and operators, and we take responsibility for the result.",
        },
        {
          text: "Owning the operation, rather than selling software into it, is what gives us access, ground truth and aligned incentives. Our engineers sit with billers and managers, map the work as it really happens, and rebuild it one workflow at a time. Agents take the repetitive, checkable tasks. People keep judgment, exceptions and relationships.",
        },
        {
          text: "We buy to hold. A business we own keeps its name, its manager and its customers, and gets a longer horizon than any owner planning an exit could give it. What changes is how the work gets done.",
        },
        {
          text: "The people who built each business keep running it. We measure ourselves on their customers staying, their collections holding, and the work costing less end to end.",
        },
        {
          text: "We acquire for two things: the data to train the agents, and the distribution to put them to work. The businesses we own provide customers, distribution, workflow context and measured outcomes. The platform turns that learning into reusable technology. Offering it to healthcare businesses beyond those we own is a planned expansion, subject to demonstrated performance.",
        },
        {
          text: "Read the essays: Why We Buy Businesses and Our strategy.",
          links: [
            { phrase: "Why We Buy Businesses", href: "/insights/why-we-buy-businesses/" },
            { phrase: "Our strategy", href: "/insights/our-strategy/" },
          ],
        },
      ],
    },
    {
      id: "healthcare",
      heading: "Only healthcare",
      paragraphs: [
        {
          text: "We only buy in healthcare. The data rules, payer behavior, and clinical judgment involved are too specific for a general-use model or software to handle, and two of our four founders practiced medicine; all four of us have worked in this industry, so we understand its problems.",
          links: [{ phrase: "two of our four founders practiced medicine", href: "/team/" }],
        },
      ],
    },
    {
      id: "ai",
      heading: "Revyve AI",
      paragraphs: [
        {
          text: "At the center of Revyve is Revyve AI, the platform our engineers build for exactly the work our companies do. It connects frontier models to the systems a healthcare business already runs, AdvancedMD today, with more integrations planned, and the payer portals, and puts agents to work on the tasks that eat a biller’s day: checking claim status, writing the morning aging report, queuing the next step. People keep the judgment, the exceptions and the relationships. Every action is logged with its evidence, and anything that matters is reviewed by a person before it goes out. Our teams spend less of the day on follow-up and more of it on the claims that need a human.",
          links: [{ phrase: "Revyve AI", href: "/revyve-ai/" }],
        },
        {
          text: "Everything we learn goes into Revyve AI: the data model, the agents, the workflow rules, the connectors, and the way we take over a business without losing a customer. Each component is designed for reuse, so that what is built for one operation can be installed in the next. What compounds is specific: payer outcomes, reviewed exceptions, workflow decisions and the corrections billers make, handled only under the agreements that govern that data.",
        },
        {
          text: "Revyve AI runs on current frontier models, so improvements in the models reach our operations as they ship. Because we own the businesses, that pace is an advantage rather than a threat.",
        },
      ],
    },
    {
      id: "where",
      heading: "Where we are",
      paragraphs: [
        {
          text: "Our first company is a 29-year-old medical billing firm in St. Louis serving independent physician practices, acquired on October 25, 2026. Revyve is headquartered in San Francisco.",
        },
      ],
    },
  ] as {
    id: string;
    heading: string;
    paragraphs: { text: string; links?: Linked[]; note?: { after: string; n: number } }[];
  }[],

  /** The dictionary entry, exactly as the site sets it. */
  entry: {
    word: "revyve",
    ipa: "/ rɪˈvaɪv /",
    pos: "verb",
    sense:
      "to take a healthcare business that already works and rebuild how its work gets done: its workflows, its tools, and what its people spend their days on.",
  },

  footnotes: [
    {
      n: 1,
      text: "Estimates of administrative spending as a share of total US health spending range from about 15 to 30 percent (Health Affairs). Some studies put it higher.",
    },
  ],

  readNext: {
    lead: "Read next: ",
    /** The sentence after the lead, with its links, in order. */
    text: "the first deployment results; Our thesis, in a nutshell; and the team.",
    links: [
      { phrase: "the first deployment results", href: "/revyve-ai/first-deployment/" },
      { phrase: "Our thesis", href: "/insights/our-thesis/" },
      { phrase: "the team", href: "/team/" },
    ] as Linked[],
  },
} as const;
