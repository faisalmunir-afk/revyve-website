/**
 * Revyve — /about/, transcribed verbatim from revyveholdings.com/about/.
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
  heading: "Revyve is an AI-native holding company for healthcare services.",

  /** The "at a glance" list, in the original order. */
  glance: [
    { term: "What", detail: "An AI-native holding company for healthcare services" },
    { term: "Headquarters", detail: "San Francisco" },
    { term: "Operations", detail: "St. Louis" },
    {
      term: "First company",
      detail: "A 29-year-old medical billing firm serving independent physician practices",
    },
    { term: "Founders", detail: "Four, two of whom practiced medicine" },
    { term: "Platform", detail: "Revyve AI", link: { phrase: "Revyve AI", href: "/revyve-ai/" } },
    {
      term: "Write to",
      detail: "hello@revyveholdings.com",
      link: { phrase: "hello@revyveholdings.com", href: "mailto:hello@revyveholdings.com" },
    },
  ] as { term: string; detail: string; link?: Linked }[],

  sections: [
    {
      id: "opportunity",
      heading: "The opportunity",
      paragraphs: [
        {
          text: "Healthcare in the United States runs on service businesses most people never see: the billing companies, imaging groups, surgery centers and clinics that keep the system moving. Administrative work alone takes somewhere between 15 and 30 cents of every dollar the country spends on care, and almost all of that work is done by hand, in small firms, by people who know their doctors and their payers better than any software does. We think those firms stand to gain more from AI than anyone. We also think the gain only shows up when the change is made inside the business, by the people who already know the customers and the craft, rather than sold to them from outside.",
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
      heading: "Why we own, rather than sell",
      paragraphs: [
        {
          text: "Revyve buys established healthcare services businesses and runs them. We bring capital, engineers and operators, and we take responsibility for the result.",
        },
        {
          text: "We don't sell these companies software. We own them, so we can change who does the work, which steps still need a person, and what the customer is promised. Our engineers sit with billers and managers, map the work as it really happens, and rebuild it. Agents take the repetitive, checkable tasks. People keep judgment, exceptions and relationships.",
        },
        {
          text: "We buy to hold. A business we own keeps its name, its manager and its customers, and gets a longer horizon than any owner planning an exit could give it. What changes is how the work gets done.",
        },
        {
          text: "The people who built each business keep running it. We measure ourselves on their customers staying, their collections holding, and the work costing less end to end.",
        },
      ],
    },
    {
      id: "healthcare",
      heading: "Only healthcare",
      paragraphs: [
        {
          text: "We only buy in healthcare. The data rules, the payer behavior and the clinical judgment involved are specific enough that a general platform does not fit, and two of our four founders practiced medicine.",
          links: [{ phrase: "two of our four founders practiced medicine", href: "/team/" }],
        },
      ],
    },
    {
      id: "ai",
      heading: "Revyve AI",
      paragraphs: [
        {
          text: "At the center of Revyve is Revyve AI, the platform our engineers build for exactly the work our companies do. It connects frontier models to the systems a healthcare business already runs, the EHR, the practice management software, the clearinghouse, the payer portals, and puts agents to work on the tasks that eat a biller’s day: checking claim status, writing the morning aging report, reconciling payer responses, queuing the next step. People keep the judgment, the exceptions and the relationships. Every action is logged with its evidence, and anything that matters is reviewed by a person before it goes out. Our teams spend less of the day on follow-up and more of it on the claims that need a human, and customers feel that as faster, cleaner collections.",
          links: [{ phrase: "Revyve AI", href: "/revyve-ai/" }],
        },
        {
          text: "Everything we learn goes into Revyve AI: the data model, the agents, the workflow rules, the connectors, and the way we take over a business without losing a customer. Every workflow we rebuild in one company becomes something the next company installs on day one. Our first business taught us how to take over a billing shop without a single doctor noticing the change. The next one starts from that.",
        },
        {
          text: "Revyve AI runs on frontier models, so every advance in AI shows up in our companies as soon as it ships. Most services businesses see that pace as a threat. We own the businesses, so for us it is the whole point.",
        },
      ],
    },
    {
      id: "where",
      heading: "Where we are",
      paragraphs: [
        {
          text: "Our first company is a 29-year-old medical billing firm in St. Louis serving independent physician practices. Revyve is headquartered in San Francisco.",
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
    /** The sentence after the lead, with its four links, in order. */
    text: "Why we built Revyve, the longer argument; the first hundred days, how we take a business over; Revyve AI, the platform under every company we own; and the team.",
    links: [
      { phrase: "Why we built Revyve", href: "/press/why-we-built-revyve/" },
      { phrase: "the first hundred days", href: "/#hundred" },
      { phrase: "Revyve AI", href: "/revyve-ai/" },
      { phrase: "the team", href: "/team/" },
    ] as Linked[],
  },
} as const;
