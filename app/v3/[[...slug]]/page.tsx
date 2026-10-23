import type { Metadata } from "next";

/**
 * V3 used to live under /v3/. It is the site now, at the root, so any old
 * /v3/... link is sent on to the same page there.
 *
 * Built as static pages with a meta refresh, so it works on any host, with
 * or without script, and needs no server or host config. Kept out of
 * search results; the canonical points at the real page.
 */

/** The pages that existed under /v3/, as path segments. */
const PAGES = ["", "about", "revyve-ai", "for-practices", "sell-your-firm", "careers", "contact"];

export const dynamicParams = false;

export function generateStaticParams() {
  return PAGES.map((p) => ({ slug: p ? [p] : [] }));
}

const target = (slug?: string[]) => (slug?.length ? `/${slug.join("/")}/` : "/");

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

export default async function V3Redirect({
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
