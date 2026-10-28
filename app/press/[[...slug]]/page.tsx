import type { Metadata } from "next";

/**
 * Press became Insights on the live site (October 2026), and "Why we built
 * Revyve" became "Our Thesis". revyveholdings.com sends the old addresses on
 * with a 301; this does the same for the static export.
 *
 * Built as static pages with a meta refresh, so it works on any host, with
 * or without script, and needs no server or host config. Kept out of search
 * results; the canonical points at the new page.
 */

/** Old path segments under /press/ and where each now lives. */
const MOVED: Record<string, string> = {
  "": "/insights/",
  "why-we-built-revyve": "/insights/our-thesis/",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(MOVED).map((p) => ({ slug: p ? [p] : [] }));
}

const target = (slug?: string[]) => MOVED[slug?.join("/") ?? ""] ?? "/insights/";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    robots: { index: false, follow: true },
    alternates: { canonical: target(slug) },
  };
}

export default async function PressRedirect({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const to = target(slug);
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${to}`} />
      <p style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
        <a href={to}>{to}</a>
      </p>
    </>
  );
}
