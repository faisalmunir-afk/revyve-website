import type { Metadata } from "next";
import Link from "next/link";
import { INSIGHTS } from "../../content/insights";
import { META } from "../../content/site";
import FacetField from "../../(v3)/components/FacetField";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Arrow from "../components/Arrow";
import { v4 } from "../components/links";
import "../revyve-ai/styles.css";
import "../pages.css";
import "../more.css";

export const metadata: Metadata = {
  title: META["/insights/"].title,
  description: META["/insights/"].description,
  robots: { index: false, follow: false },
};

/**
 * V4 Insights: the title, then the pieces as cards, the newest large and lit.
 * Every string comes from app/content/insights.ts, verbatim.
 */
export default function V4Insights() {
  const { heading, items } = INSIGHTS;
  const [lead, ...more] = items;

  return (
    <>
      <a className="v4-skip" href="#main">
        Skip to content
      </a>
      <Header current="/insights/" />

      <main id="main">
        <section className="hx hx--page" aria-labelledby="in-title">
          <div className="hx__glow" aria-hidden="true" />
          <div className="wrap">
            <h1 className="hx__title in-title" id="in-title">
              {heading}
            </h1>
          </div>
        </section>

        <section className="sec in-list" aria-label={heading}>
          <div className="wrap in-grid">
            <Link href={v4(lead.href)} className="card card--lit in-card in-card--lead rv">
              <div className="in-card__facets" aria-hidden="true">
                <FacetField variant="web" />
              </div>
              <time dateTime={lead.dateTime} className="in-card__date">
                {lead.date}
              </time>
              <div className="in-card__say">
                <h2 className="in-card__title">{lead.title}</h2>
                <p className="in-card__ex">{lead.excerpt}</p>
              </div>
              <span className="rx-go__arrow">
                <Arrow />
              </span>
            </Link>
            {more.map((it) => (
              <Link key={it.href} href={v4(it.href)} className="card card--soft in-card rv">
                <time dateTime={it.dateTime} className="in-card__date">
                  {it.date}
                </time>
                <div className="in-card__say">
                  <h2 className="in-card__title">{it.title}</h2>
                  <p className="in-card__ex">{it.excerpt}</p>
                </div>
                <span className="rx-go__arrow">
                  <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
