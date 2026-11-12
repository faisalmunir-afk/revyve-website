/**
 * The pages already built in V4. A link to one of them stays inside V4
 * (/revyve-ai/ becomes /v4/revyve-ai/); every other link goes to the
 * current site's page, unchanged.
 */
const V4_PAGES = new Set([
  "/",
  "/revyve-ai/",
  "/revyve-ai/first-deployment/",
  "/for-practices/",
  "/sell-your-firm/",
  "/about/",
  "/team/",
  "/careers/",
  "/contact/",
  "/privacy/",
  "/insights/",
  "/insights/our-strategy/",
  "/insights/why-we-buy-businesses/",
  "/insights/our-thesis/",
]);

export const v4 = (href: string) => (V4_PAGES.has(href) ? `/v4${href}` : href);

/** The same links, pointed inside V4 where the page exists there. */
export const v4Links = <T extends { href: string }>(links: readonly T[] = []): T[] => links.map((l) => ({ ...l, href: v4(l.href) }));
