import type { Metadata } from "next";
import Link from "next/link";
import { ESSAY } from "../../../content/insights";
import { META } from "../../../content/site";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Linked from "../../components/Linked";
import MarkStep from "../../components/MarkStep";
import { TheLoop } from "../../components/teamDiagrams";

export const metadata: Metadata = {
  title: META["/insights/why-we-buy-businesses/"].title,
  description: META["/insights/why-we-buy-businesses/"].description,
};

/** The loop is drawn right after the paragraph that names it. */
const LOOP_AFTER = "The loop is the asset.";

/**
 * Why We Buy Businesses — the essay.
 *
 * The same reading form as Our Thesis: the title and the line under it on
 * the dark ground, with the way back to Insights and the date above; then
 * the essay on paper in one reading column, its first paragraph set as the
 * lead, its sections and their parts as headings. After the paragraph that
 * says "The loop is the asset.", the five things are drawn as that loop on
 * a dark plate wider than the column. Read next closes it on the dark
 * ground.
 *
 * Every string comes from app/content/insights.ts, generated from the live
 * page and verbatim. The figures in it are the client's own.
 */
export default function EssayPage() {
  const { section, date, dateTime, heading, dek, blocks, readNext } = ESSAY;
  const [first, ...rest] = blocks;

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
              <h1 className="lt__title lt__title--essay" id="lt-title">
                {heading}
              </h1>
              <p className="lt__dek">{dek}</p>
            </div>
          </header>

          <div className="lt__sheet" data-tone="light">
            <div className="lt__column lt__prose">
              <p className="lt__lead">{first.text}</p>
              {rest.map((b, i) => {
                if (b.type === "h2") {
                  return (
                    <h2 key={i} className="lt__h2">
                      {b.text}
                    </h2>
                  );
                }
                if (b.type === "h3") {
                  return (
                    <h3 key={i} className="lt__h3">
                      {b.text}
                    </h3>
                  );
                }
                return [
                  <p key={i} className="lt__p">
                    {b.text}
                  </p>,
                  b.text.includes(LOOP_AFTER) ? (
                    <figure key={`${i}-loop`} className="lt__figure">
                      <TheLoop className="aboutb__draw sd sd--armed lt__draw" />
                    </figure>
                  ) : null,
                ];
              })}
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
