import type { Metadata } from "next";
import { ABOUT } from "../../content/about";
import { META, TEAM_BACKGROUND, TEAM_BACKGROUND_HEADING } from "../../content/site";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Linked from "../components/Linked";
import MarkStep from "../components/MarkStep";
import { Healthcare, Opportunity, Own, Platform, Where } from "../components/aboutDiagrams";

export const metadata: Metadata = {
  title: META["/about/"].title,
  description: META["/about/"].description,
};

const DRAWINGS = [Opportunity, Own, Healthcare, Platform, Where];

/**
 * About.
 *
 * Each essay is a plate: the words on one side, a drawing made from that
 * essay on the other, the sides alternating and the drawing itself
 * drawing on as the plate comes up the screen — the same language as
 * Revyve AI on the home page.
 *
 * The glance list opens the page on paper beneath the claim, so the facts
 * read as a card the reader keeps; the entry closes it on paper, so the
 * page is dark between two sheets of paper.
 *
 * The seven background logos are the founders' background, as the site
 * labels them. They are not clients and are not captioned as such.
 *
 * Every string comes from app/content/about.ts, verbatim.
 */
export default function AboutPage() {
  const { heading, glance, sections, entry, footnotes, readNext } = ABOUT;

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main" className="about about--b">
        {/* ---- The claim ------------------------------------------------ */}
        <section className="aboutb__top" aria-labelledby="about-title">
          <div className="about__inner">
            <h1 className="aboutb__title" id="about-title">
              {heading}
            </h1>
          </div>
        </section>

        {/* ---- The glance, on paper ------------------------------------ */}
        <section className="aboutb__glance" data-tone="light" aria-label="At a glance">
          <div className="about__inner">
            <dl className="aboutb__facts">
              {glance.map((g) => (
                <div className="aboutb__fact" key={g.term}>
                  <dt>{g.term}</dt>
                  <dd>
                    {g.link ? (
                      <Linked text={g.detail} links={[g.link]} className="aboutb__link" />
                    ) : (
                      g.detail
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ---- The essays, as plates ----------------------------------- */}
        <div className="aboutb__plates">
          {sections.map((s, i) => {
            const Drawing = DRAWINGS[i];
            return (
              <section
                className={`aboutb__plate ${i % 2 ? "aboutb__plate--left" : "aboutb__plate--right"}`}
                id={s.id}
                key={s.id}
                aria-labelledby={`about-${s.id}`}
              >
                <div className="about__inner aboutb__grid">
                  <div className="aboutb__say">
                    <h2 className="aboutb__h2" id={`about-${s.id}`}>
                      {s.heading}
                    </h2>
                    <div className="aboutb__prose">
                      {s.paragraphs.map((p, j) => (
                        <p key={j}>
                          <Linked text={p.text} links={p.links} note={p.note} className="about__link" />
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="aboutb__art">
                    <Drawing className="aboutb__draw sd sd--armed" />
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* ---- The entry, on paper ------------------------------------- */}
        <section className="about__entry" data-tone="light" aria-label="revyve, verb">
          <div className="about__inner">
            <p className="about__headword">
              <span className="about__word">{entry.word}</span>
              <span className="about__ipa">{entry.ipa}</span>
              <span className="about__pos">{entry.pos}</span>
            </p>
            <p className="about__sense">{entry.sense}</p>
            <ol className="about__notes">
              {footnotes.map((f) => (
                <li key={f.n} id={`about-note-${f.n}`}>
                  <a href={`#about-ref-${f.n}`} className="about__noteNum">
                    {f.n}.
                  </a>{" "}
                  {f.text}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---- The background ------------------------------------------ */}
        <section className="about__bg" aria-labelledby="about-bg">
          <div className="about__inner">
            <h2 className="about__h2 about__h2--static about__bgTitle" id="about-bg">
              {TEAM_BACKGROUND_HEADING}
            </h2>
          </div>
          {/* A marquee, right to left. The list is laid twice so the loop
              has no seam; the copy is hidden from assistive tech so the
              seven are announced once. */}
          <div className="about__marquee" aria-label={TEAM_BACKGROUND_HEADING}>
            <div className="about__track">
              {[0, 1].map((copy) => (
                <ul className="about__logos" key={copy} aria-hidden={copy === 1 || undefined}>
                  {TEAM_BACKGROUND.map((l) => (
                    <li key={l.src} className={l.solid ? "about__logo about__logo--solid" : "about__logo"}>
                      <img src={l.src} alt={copy ? "" : l.alt} width={l.w} height={l.h} loading="lazy" decoding="async" />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Read next ----------------------------------------------- */}
        <section className="about__next">
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
