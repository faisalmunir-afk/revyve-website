import Link from "next/link";
import type { Article } from "../../content/insights";
import Nav from "./Nav";
import Footer from "./Footer";
import Linked from "./Linked";
import MarkStep from "./MarkStep";

/**
 * One reading form for every Insights piece.
 *
 * The title, and the line under it where there is one, on the dark ground,
 * with the way back to Insights and the date above it (the eyebrow's own
 * words, made useful) and the piece's small notes under it: a byline, an
 * update date, an editor's note. Then the piece on paper in one reading
 * column, its first paragraph set as the lead, its sections and their parts
 * as headings. A piece may carry one drawing, placed right after the
 * paragraph that contains `figureAfter`. Read next closes it on the dark
 * ground.
 *
 * Every string comes from the Article passed in (app/content/insights.ts),
 * verbatim.
 */
export default function ArticlePage({
  article,
  figure,
  figureAfter,
}: {
  article: Article;
  figure?: React.ReactNode;
  figureAfter?: string;
}) {
  const { section, date, dateTime, heading, dek, notes, blocks, readNext } = article;
  const [first, ...rest] = blocks;
  let placed = false;

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
              {dek && <p className="lt__dek">{dek}</p>}
              {notes.length > 0 && (
                <div className="lt__notes">
                  {notes.map((n) => (
                    <p key={n} className={n.startsWith("Editor's note") ? "lt__noteLine lt__noteLine--editor" : "lt__noteLine"}>
                      {n}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </header>

          <div className="lt__sheet" data-tone="light">
            <div className="lt__column lt__prose">
              <p className="lt__lead">
                <Linked text={first.text} links={first.links} className="lt__link" />
              </p>
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
                const withFigure = !placed && figure && figureAfter && b.text.includes(figureAfter);
                if (withFigure) placed = true;
                return [
                  <p key={i} className="lt__p">
                    <Linked text={b.text} links={b.links} className="lt__link" />
                  </p>,
                  withFigure ? (
                    <figure key={`${i}-fig`} className="lt__figure">
                      {figure}
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
