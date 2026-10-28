/**
 * Revyve — site-wide content, transcribed verbatim from revyveholdings.com.
 *
 * THIS FILE IS THE SOURCE OF TRUTH FOR COPY.
 *
 * Rules for anyone editing it:
 *   - Every string here is Revyve's own wording, character for character.
 *   - Do not rewrite, shorten, "improve" or re-punctuate anything.
 *   - A design may choose which fields it renders. A design may NOT change
 *     what they say. If a layout cannot hold a string, change the layout.
 *   - Fields the old design chose to drop (eyebrows, the 01/02/03 numerals)
 *     are kept here anyway, so no future design is forced to go without them.
 */

export type Link = { label: string; href: string };

/** The primary navigation, in the order the original site lists it. */
export const NAV: Link[] = [
  { label: "About", href: "/about/" },
  { label: "Revyve AI", href: "/revyve-ai/" },
  { label: "For practices", href: "/for-practices/" },
  { label: "Sell your firm", href: "/sell-your-firm/" },
  { label: "Careers", href: "/careers/" },
  { label: "Contact", href: "/contact/" },
];

/** The footer navigation, which adds Team, Insights and Privacy. */
export const FOOTER_NAV: Link[] = [
  { label: "About", href: "/about/" },
  { label: "Revyve AI", href: "/revyve-ai/" },
  { label: "For practices", href: "/for-practices/" },
  { label: "Sell your firm", href: "/sell-your-firm/" },
  { label: "Team", href: "/team/" },
  { label: "Insights", href: "/insights/" },
  { label: "Careers", href: "/careers/" },
  { label: "Contact", href: "/contact/" },
  { label: "Privacy", href: "/privacy/" },
];

export const CONTACT = {
  email: "hello@revyveholdings.com",
  legal: "Revyve, Inc. San Francisco and St. Louis.",
};

/** Per-route <title> and <meta name="description">, verbatim. */
export const META: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Revyve | AI-native holding company for healthcare services",
    description:
      "Revyve owns and operates healthcare services companies, starting with medical billing. We keep the people and customers, and change how the work gets done.",
  },
  "/about/": {
    title: "About Revyve | Why we buy and run healthcare businesses",
    description:
      "Revyve is an AI-native holding company for healthcare services. We only buy in healthcare, we buy to hold, and Revyve AI runs under every company we own.",
  },
  "/revyve-ai/": {
    title: "Revyve AI | AI platform for healthcare operations",
    description:
      "The AI platform connecting healthcare’s existing systems, data, and workflows. Every company we own runs on it.",
  },
  "/for-practices/": {
    title: "Medical billing for independent practices | Revyve",
    description:
      "Every claim followed up. Every action visible. Agents check status, reconcile and queue the next step every day; experienced billers handle the exceptions.",
  },
  "/sell-your-firm/": {
    title: "Sell your medical billing company to Revyve",
    description:
      "Built something that works? We’d like to run it. We want the business: the customers, the people who know them, and the years of knowing which payer does what.",
  },
  "/team/": {
    title: "Team | The four founders of Revyve",
    description:
      "Operators, engineers and physicians. The same four people, all full-time, all with money in the first business.",
  },
  "/insights/": {
    title: "Insights | Revyve",
    description: "Letters and announcements from Revyve.",
  },
  "/insights/our-thesis/": {
    title: "Our Thesis | Revyve",
    description:
      "Most of the value AI creates in healthcare will not go to the companies that make the models. It will go to whoever changes how the work actually gets done.",
  },
  "/insights/why-we-buy-businesses/": {
    title: "Why We Buy Businesses | Revyve",
    description:
      "Intelligence is getting cheap fast. Every few months the frontier models get better and cheaper at the same time, and I don’t see a reason for that to stop.",
  },
  "/careers/": {
    title: "Careers at Revyve | Engineers and operators",
    description:
      "We hire engineers who sit in a billing office in St. Louis before writing code, and operators who want to run a business, not a function.",
  },
  "/contact/": {
    title: "Contact Revyve",
    description:
      "Write to Revyve to move your billing, sell your firm, work with us, or talk as an investor.",
  },
  "/privacy/": {
    title: "Privacy | Revyve",
    description: "How Revyve handles data.",
  },
};

/**
 * The founder-background logos, as the live /team/ page carries them.
 * Heading and alt text are verbatim from revyveholdings.com/team/.
 *
 * These are the team's background. They are NOT clients, press mentions or
 * endorsements, and must never be captioned as such.
 */
export const TEAM_BACKGROUND_HEADING = "Background of the team";

export const TEAM_BACKGROUND: {
  src: string;
  alt: string;
  w: number;
  h: number;
  /** A filled mark (a solid tile with the logo knocked out of it) rather than
   *  dark artwork on transparent. These must not be inverted. */
  solid?: boolean;
}[] = [
  { src: "/brand/amazon.svg", alt: "Amazon", w: 133, h: 40 },
  { src: "/brand/ycombinator.svg", alt: "Y Combinator", w: 40, h: 40, solid: true },
  { src: "/brand/tag.png", alt: "TAG", w: 40, h: 40, solid: true },
  { src: "/brand/bny-mellon.svg", alt: "BNY Mellon", w: 116, h: 40 },
  { src: "/brand/trivago.svg", alt: "trivago", w: 142, h: 40 },
  { src: "/brand/ucla.svg", alt: "UCLA", w: 122, h: 40 },
  {
    src: "/brand/mount-sinai.svg",
    alt: "Icahn School of Medicine at Mount Sinai",
    w: 46,
    h: 64,
  },
  /* Not on the live page: added at the client's request, October 2026. */
  { src: "/brand/plug-and-play.png", alt: "Plug and Play", w: 206, h: 40 },
];
