/**
 * Revyve — home page content, transcribed verbatim from revyveholdings.com.
 * See ./site.ts for the rules. Do not reword anything in this file.
 */

export const HOME = {
  hero: {
    headline: "We buy good healthcare businesses and make them run better.",
    lede: "Revyve owns and operates healthcare services companies, starting with medical billing. We keep the people and customers that made each business good, and we change how the work gets done.",
    primary: { label: "Move your billing to Revyve", href: "/for-practices/" },
    secondary: { label: "Sell us your firm", href: "/sell-your-firm/" },
    tertiary: { label: "Why we built Revyve", href: "/about/" },
  },

  hundredDays: {
    /** The original site's small label above the heading. */
    eyebrow: "When we take over a business",
    heading: "The first hundred days.",
    lede: "Taking over a business is the moment it is easiest to lose a customer. So the first thing we do is nothing that could.",
    /** `index` is the original site's printed numeral; a design may ignore it. */
    stages: [
      {
        index: "01",
        title: "Keep what works.",
        body: "For the first two weeks we change nothing structural. We confirm cash controls, payer access and customer authorizations, keep the manager who knows the business, name a deputy, and write down how everything performs today.",
      },
      {
        index: "02",
        title: "Map the work.",
        body: "We sit with the team and trace one workflow from start to finish, every handoff, every wait, every system. The people doing the work tell us which parts they would gladly never do again.",
      },
      {
        index: "03",
        title: "Prove one thing.",
        body: "One workflow goes live with agents doing the repetitive steps and billers reviewing the results, measured against the baseline we wrote down. If quality holds and the work costs less end to end, it earns the next step. If not, it stops.",
      },
      {
        index: "04",
        title: "Make it repeatable.",
        body: "What worked becomes a package: the data, the agents, the rules, the screens, the training. The manager owns improvement from here, and the next business starts from the package instead of from zero.",
      },
    ],
    close:
      "We judge the first hundred days by customers kept, collections held, and a team that trusts the tools. Not by how many agents we shipped.",
    /**
     * Phrases inside `close` to set in the brand's ink — the three things
     * the hundred days are actually judged by. The sentence above is never
     * edited; the component splits that exact string on these, so what is
     * rendered is always the original wording.
     */
    closeMarks: [
      "customers kept",
      "collections held",
      "a team that trusts the tools",
    ],
  },

  revyveAI: {
    eyebrow: "Revyve AI",
    heading:
      "The AI platform connecting healthcare’s existing systems, data, and workflows.",
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
      "It is the platform under every company we own, not a product we sell. It brings those systems, their data, and everyday workflows together to help teams resolve claims, clear backlogs, and handle more work.",
    closeLink: { label: "More about Revyve AI", href: "/revyve-ai/" },
  },

  /** The four routes the original home page offers, in its own order. */
  routes: [
    {
      title: "Sell your firm.",
      body: "Built a healthcare services business you are proud of? Tell us about it.",
      link: { label: "Start the conversation", href: "/contact/" },
    },
    {
      title: "Move your billing.",
      body: "Bring us your unpaid claims and we will show you what we would do with them.",
      link: { label: "Show us your claims", href: "/for-practices/" },
    },
    {
      title: "Work with us.",
      body: "We hire engineers who will sit in a billing office in St. Louis before they write a line of code, and operators who want to run a business, not a function.",
      link: { label: "Open roles", href: "/careers/" },
    },
    {
      title: "Investors.",
      body: "We are not raising a priced round. If you back owner-operators in healthcare, write to us.",
      link: { label: "Write to us", href: "/contact/" },
    },
  ],

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
          "Revyve is an AI-native holding company for healthcare services. Revyve buys established healthcare services businesses and runs them. We bring capital, engineers and operators, and we take responsibility for the result.",
        link: null,
      },
      {
        q: "Does Revyve sell software?",
        answer:
          "We don't sell these companies software. We own them, so we can change who does the work, which steps still need a person, and what the customer is promised. It is the platform under every company we own, not a product we sell.",
        link: null,
      },
      {
        q: "Why only healthcare?",
        answer:
          "We only buy in healthcare. The data rules, the payer behavior and the clinical judgment involved are specific enough that a general platform does not fit, and two of our four founders practiced medicine.",
        link: { phrase: "two of our four founders practiced medicine", href: "/team/" },
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
          "We are not raising a priced round. If you back owner-operators in healthcare, write to us.",
        link: { phrase: "write to us", href: "/contact/" },
      },
    ],
  },
} as const;
