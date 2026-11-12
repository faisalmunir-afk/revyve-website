import Link from "next/link";
import type { Article } from "../../content/insights";
import Linked from "../../(v3)/components/Linked";
import Header from "./Header";
import Footer from "./Footer";
import ReadNext from "./ReadNext";
import { v4, v4Links } from "./links";

/**
 * One reading form for every Insights piece, in V4's manner: the way back to
 * Insights and the date, the title and its line, the small notes as glass
 * chips; then the piece on a white sheet in one reading column, its first
 * paragraph set as the lead; Read next as cards.
 *
 * Every string comes from the Article passed in, verbatim.
 */
export default function V4Article({ article, path }: { article: Article; path: string }) {
  const { section, date, dateTime, heading, dek, notes, blocks, readNext } = article;
  const [first, ...rest] = blocks;

  return (
    <>
      <a className="v4-skip" href="#main">
        Skip to content
      </a>
      <Header current={path} />

      <main id="main">
        <article aria-labelledby="ar-title">
          <header className="hx hx--page ar-hero">
            <div className="hx__glow" aria-hidden="true" />
            <div className="wrap ar-hero__in">
              <p className="ar-meta">
                <Link href={v4("/insights/")} className="ar-back">
                  <svg viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M16 10H5M9 5.5 4.5 10 9 14.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {section}
                </Link>
                <time dateTime={dateTime} className="ar-date">
                  {date}
                </time>
              </p>
              <h1 className="hx__title ar-title" id="ar-title">
                {heading}
              </h1>
              {dek && <p className="ar-dek">{dek}</p>}
              {notes.length > 0 && (
                <ul className="ar-notes">
                  {notes.map((n) => (
                    <li key={n} className={n.startsWith("Editor's note") ? "ar-note ar-note--editor glass" : "ar-note glass"}>
                      {n}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </header>

          <div className="wrap">
            <div className="ar-sheet">
              <div className="ar-prose">
                <p className="ar-lead">
                  <Linked text={first.text} links={v4Links(first.links)} className="tlink tlink--inline" />
                </p>
                {rest.map((b, i) =>
                  b.type === "h2" ? (
                    <h2 key={i} className="ar-h2">
                      {b.text}
                    </h2>
                  ) : b.type === "h3" ? (
                    <h3 key={i} className="ar-h3">
                      {b.text}
                    </h3>
                  ) : (
                    <p key={i}>
                      <Linked text={b.text} links={v4Links(b.links)} className="tlink tlink--inline" />
                    </p>
                  ),
                )}
              </div>
            </div>
          </div>
        </article>

        <ReadNext lead={readNext.lead} links={readNext.links} />
      </main>

      <Footer />
    </>
  );
}
