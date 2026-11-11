/**
 * Revyve — home page content, transcribed verbatim from revyveholdings.com
 * (as rewritten by the client in November 2026). See ./site.ts for the
 * rules. Do not reword anything in this file.
 *
 * The October copy, including the first hundred days, is kept in
 * ./archive/home-2026-10.ts; the live site no longer carries it.
 */

type Linked = { phrase: string; href: string };

export const HOME = {
  hero: {
    /** The original site's small label above the heading. */
    eyebrow: "Revyve AI",
    headline: "AI agents for the back office of independent medicine.",
    lede: "Starting with medical billing, Revyve AI works inside the systems practices already use. Agents handle claim-status checks and reporting, while experienced billers review exceptions and stay accountable for the result.",
    more: "We acquired our first billing company to build and improve the platform alongside the people doing the work.",
    /** Set bold on the original. */
    tagline: "We are building the vertical AI platform that will revive the healthcare services industry.",
    primary: { label: "Explore Revyve AI", href: "/revyve-ai/" },
    secondary: { label: "Get a billing assessment", href: "/for-practices/" },
  },

  /** The client's own figures, always shown with the limits they state. */
  evidence: {
    heading: "Already working inside a real billing operation.",
    stats: [
      { figure: "70+ practices", caption: "Served by our acquired billing operation." },
      {
        figure: "Approximately 40% lower workflow cost",
        caption: "Preliminary measurement for the first workflow, including human review, models and tools.",
      },
    ],
    note: "Initial results cover one supervised workflow during its initial deployment period. They do not represent automation or cost reduction across the entire billing operation.",
    link: { label: "Read the first deployment results", href: "/revyve-ai/first-deployment/" },
  },

  revyveAI: {
    eyebrow: "Revyve AI",
    heading: "The AI platform connecting healthcare’s existing systems, data, and workflows.",
    lede: "We’re building Revyve AI to connect leading AI models with the existing and legacy systems healthcare businesses run on, and with the workflows between them. Forward-deployed engineers sit with the billing team, map the work as it really happens, and build the models and agents into it.",
    points: [
      {
        title: "Built around your existing systems",
        body: "Revyve AI is designed to build on the software already embedded in the business. Our forward-deployed engineers pair with operators to connect authorized data, map workflows, and bring AI into the tools teams use every day.",
      },
      {
        title: "The right model for each task",
        body: "Use different AI models for different tasks, selected for quality, speed, and cost.",
      },
      {
        title: "One shared intelligence layer",
        body: "Coordinate models, agents, existing software, and human reviewers through shared infrastructure for routing, permissions, evidence, and approvals.",
      },
    ],
    close:
      "It is the platform under every company we own. It brings those systems, their data, and everyday workflows together to help teams resolve claims, clear backlogs, and handle more work.",
    closeLink: { label: "More about Revyve AI", href: "/revyve-ai/" },
  },

  operations: {
    heading: "Built inside operations. Designed to serve the wider industry.",
    lead: "We are building the vertical AI platform that will revive the healthcare services industry.",
    paragraphs: [
      "Owning our first billing business gives us customers, operating context and outcomes we can measure. Our team builds alongside experienced billers, learning from payer responses, reviewed exceptions and completed work.",
      "Each workflow contributes reusable agents, integrations and evaluation tools. As those capabilities prove reliable across operations, we plan to offer them to healthcare businesses beyond those we own.",
      "We acquire for two things. Data to train the agents: payer outcomes, reviewed exceptions, workflow decisions and the corrections billers make, handled only under the agreements that govern it. And distribution: practices that already rely on the business, and the referral networks around them.",
    ],
    note: {
      text: "How ownership works: About Revyve.",
      links: [{ phrase: "About Revyve", href: "/about/" }] as Linked[],
    },
  },

  team: {
    heading: "Built by operators, engineers and physicians.",
    body: "Revyve is run by four founders. Two practiced medicine, two have built and run companies, and all of them work with the billing team.",
    link: { label: "Meet the team", href: "/team/" },
  },

  /**
   * The four routes, in the live site's order. `mark` picks the door's
   * drawing (0 a firm, 1 claims, 2 a desk, 3 a letter). The Investors door
   * has no button: its link is inside its sentence, and the product demo
   * sits under it.
   */
  routes: [
    {
      title: "For independent practices",
      body: "Every claim followed up, every action visible, inside the practice-management system you already use. We start with a free assessment of your existing billing records and commit to benchmarks before a contract is signed.",
      link: { label: "Get a billing assessment", href: "/for-practices/" },
      mark: 1,
    },
    {
      title: "Sell your billing company",
      body: "We buy established medical billing businesses and keep the people and customers that made them good. Joining Revyve gives your team the platform's tools and gives the platform another real operation to learn from. Each acquisition brings the data that trains the agents and the distribution that puts them to work.",
      link: { label: "Sell your firm", href: "/sell-your-firm/" },
      mark: 0,
    },
    {
      title: "Work with us.",
      body: "Engineers who build reusable production workflows alongside billers, and operators who want to run a business.",
      link: { label: "Open roles", href: "/careers/" },
      mark: 2,
    },
    {
      title: "Investors.",
      body: "We're building the AI platform for healthcare administration, starting inside billing operations we own. For investment inquiries, contact us.",
      bodyLinks: [{ phrase: "contact us", href: "/contact/" }] as Linked[],
      demo: true,
      mark: 3,
    },
  ] as {
    title: string;
    body: string;
    link?: { label: string; href: string };
    bodyLinks?: Linked[];
    demo?: boolean;
    mark: number;
  }[],

  faq: {
    heading: "Common questions",
    /**
     * `answer` is the plain text. `link` marks the phrase inside the answer
     * that the original site links, so a design can restore the link without
     * the copy being retyped.
     */
    items: [
      {
        q: "What is Revyve?",
        answer:
          "Revyve is building the vertical AI platform that will revive the healthcare services industry. Revyve builds an AI platform that automates medical billing and, over time, the back office of independent physician practices. We own billing businesses for two reasons: the data to train the agents, and the distribution to put them to work. Our first company is a 29-year-old medical billing firm in St. Louis serving independent physician practices.",
        link: null,
      },
      {
        q: "Does Revyve sell its software to other companies?",
        answer:
          "Not yet. The businesses we own provide customers, distribution, workflow context and measured outcomes; the platform turns that learning into reusable technology. Offering it to healthcare businesses beyond those we own is a planned expansion, subject to demonstrated performance.",
        link: null,
      },
      {
        q: "Where is Revyve based?",
        answer:
          "Revyve is headquartered in San Francisco. Our first company is a 29-year-old medical billing firm in St. Louis serving independent physician practices.",
        link: null,
      },
      {
        q: "Is Revyve raising money?",
        answer:
          "We're building the AI platform for healthcare administration, starting inside billing operations we own. For investment inquiries, contact us.",
        link: { phrase: "contact us", href: "/contact/" },
      },
    ],
  },
} as const;
