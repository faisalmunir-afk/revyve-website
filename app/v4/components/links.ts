/**
 * The pages already built in V4. A link to one of them stays inside V4
 * (/revyve-ai/ becomes /v4/revyve-ai/); every other link goes to the
 * current site's page, unchanged.
 */
const V4_PAGES = new Set(["/", "/revyve-ai/", "/for-practices/", "/sell-your-firm/"]);

export const v4 = (href: string) => (V4_PAGES.has(href) ? `/v4${href}` : href);
