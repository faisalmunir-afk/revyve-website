import type { Metadata } from "next";
import Link from "next/link";
import { THESIS } from "../../../content/insights";
import { META } from "../../../content/site";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Linked from "../../components/Linked";
import MarkStep from "../../components/MarkStep";
import { TheGap } from "../../components/teamDiagrams";

export const metadata: Metadata = {
  title: META["/insights/our-thesis/"].title,
  description: META["/insights/our-thesis/"].description,
};

/**
 * Our Thesis (it was "Why we built Revyve", under Press).
 *
 * The claim on the dark ground, with the way back to Insights and the date
 * above it (the eyebrow's own words, made useful). Then the letter on
 * paper, in one reading column: the first paragraph set as its lead, and
 * after the paragraph that names the gap, the gap drawn on a dark plate
 * wider than the column. Read next closes it on the dark ground.
 *
 * Every string comes from app/content/insights.ts, verbatim.
 */
export default function ThesisPage() {
  const { section, date, dateTime, heading, paragraphs, readNext } = THESIS;
  const [first, ...rest] = paragraphs;

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main" className="fp lt">
        <article aria-labelledby="lt-title">
          <header className="lt__hero">
            <div className="fp__inner lt__heroInner">
              <p className="lt__meta">
                <Link href="/insights/" className="lt__back">
                  {section}
                </Link>
                {" · "}
                <time dateTime={dateTime}>{date}</time>
              </p>
              <h1 className="lt__title" id="lt-title">
                {heading}
              </h1>
            </div>
          </header>

          <div className="lt__sheet" data-tone="light">
            <div className="lt__column">
              <p className="lt__lead">{first.text}</p>
              {rest.map((p, i) => (
                <div key={i} className="lt__block">
                  <p className="lt__p">
                    <Linked text={p.text} links={"links" in p ? p.links : undefined} className="lt__link" />
                  </p>
                  {/* The gap, drawn right after the paragraph that names it. */}
                  {i === 0 && (
                    <figure className="lt__figure">
                      <TheGap className="aboutb__draw sd sd--armed lt__draw" />
                    </figure>
                  )}
                </div>
              ))}
            </div>
          </div>
        </article>

        <section className="about__next lt__next">
          <div className="about__inner">
            <MarkStep done={10} className="about__mark" />
            <p className="about__nextText">
              {readNext.lead}
              <Linked text={readNext.text} links={readNext.links} className="about__link" />
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
