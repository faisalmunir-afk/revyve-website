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

/** The primary navigation, in the order the live site lists it (November 2026). */
export const NAV: Link[] = [
  { label: "Revyve AI", href: "/revyve-ai/" },
  { label: "For practices", href: "/for-practices/" },
  { label: "About", href: "/about/" },
  { label: "Sell your firm", href: "/sell-your-firm/" },
  { label: "Careers", href: "/careers/" },
  { label: "Contact", href: "/contact/" },
];

/** The footer navigation, which adds Team, Insights and Privacy. */
export const FOOTER_NAV: Link[] = [
  { label: "Revyve AI", href: "/revyve-ai/" },
  { label: "For practices", href: "/for-practices/" },
  { label: "About", href: "/about/" },
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

/** Per-route <title> and <meta name="description">, verbatim (generated from the live pages, November 2026). */
export const META: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Revyve AI | Medical Billing and Practice Administration",
    description:
      "Revyve builds AI agents for medical billing and practice administration, developed inside billing operations we own.",
  },
  "/about/": {
    title: "About Revyve | The AI back office for independent medicine",
    description:
      "Revyve builds AI that helps independent practices run their back office, developed inside the billing operation we own.",
  },
  "/revyve-ai/": {
    title: "Revyve AI | AI agents for medical billing",
    description:
      "AI agents for medical billing that work inside the existing systems practices already in use: claim-status checks, controlled work queues and daily reporting.",
  },
  "/revyve-ai/first-deployment/": {
    title: "First deployment results | Revyve AI",
    description:
      "Results from the first supervised deployment of Revyve AI: one workflow, with the measurements and their limits.",
  },
  "/for-practices/": {
    title: "Medical billing for independent practices | Revyve",
    description:
      "Every claim followed up. Every action visible. Agents check status, update the work queue and produce daily reports; experienced billers handle the exceptions.",
  },
  "/sell-your-firm/": {
    title: "Sell your medical billing company to Revyve",
    description:
      "Built something that works? We’d like to run it. We want the business: the customers, the people who know them, and the years of knowing which payer does what.",
  },
  "/team/": {
    title: "Team | The four founders of Revyve",
    description:
      "Four founders: operators, engineers and physicians. Two practiced medicine, two have built and run companies, and all of them work with the billing team.",
  },
  "/insights/": {
    title: "Insights | Revyve",
    description:
      "Letters and announcements from Revyve.",
  },
  "/insights/our-strategy/": {
    title: "Our strategy | Revyve",
    description:
      "We are building the vertical AI platform that will revive the healthcare services industry. We acquire billing services and build it inside real operations.",
  },
  "/insights/why-we-buy-businesses/": {
    title: "Why We Buy Businesses | Revyve",
    description:
      "Intelligence is getting cheap fast. Every few months the frontier models get better and cheaper at the same time, and I don’t see a reason for that to stop.",
  },
  "/insights/our-thesis/": {
    title: "Our Thesis | Revyve",
    description:
      "Most of the value AI creates in healthcare will not go to the companies that make the models. It will go to whoever changes how the work actually gets done.",
  },
  "/careers/": {
    title: "Careers at Revyve | Engineers and operators",
    description:
      "We hire engineers who build reusable production workflows alongside the billing team in St. Louis, and operators who want to run a business, not a function.",
  },
  "/contact/": {
    title: "Contact Revyve",
    description:
      "Write to Revyve to move your billing, sell your firm, work with us, or talk as an investor.",
  },
  "/privacy/": {
    title: "Privacy | Revyve",
    description:
      "How Revyve handles data.",
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
