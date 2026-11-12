import type { Metadata } from "next";
import { ABOUT } from "../../content/about";
import { META } from "../../content/site";
import Linked from "../../(v3)/components/Linked";
import FacetField from "../../(v3)/components/FacetField";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroFacets3D from "../components/HeroFacets3D";
import ReadNext from "../components/ReadNext";
import { Icon } from "../components/AiArt";
import { v4Links } from "../components/links";
import "../revyve-ai/styles.css";
import "../pages.css";
import "../more.css";

export const metadata: Metadata = {
  title: META["/about/"].title,
  description: META["/about/"].description,
  robots: { index: false, follow: false },
};

/**
 * V4 About: the claim on the left with the company's own dictionary entry
 * on the right as a glass card; the facts at a glance on the brand; the six
 * sections as rows, heading left and prose right, the cited share of
 * spending set as a figure with its footnote; the two cities; read next.
 *
 * Every string comes from app/content/about.ts, verbatim. The figure is the
 * sentence's own phrase, and is never shown without its footnote.
 */
/** The longer facts take two columns, so each row of four is full. */
const WIDE = ["What", "First company", "Structure", "Write to"];

export default function V4About() {
  const { heading, intro, tagline, glance, sections, entry, footnotes, readNext } = ABOUT;
  const opp = sections.find((s) => s.id === "opportunity");
  const share = opp?.paragraphs[0].text.match(/between 15 and 30 cents of every dollar/)?.[0];
  const hq = glance.find((g) => g.term === "Headquarters");
  const ops = glance.find((g) => g.term === "Operations");

  return (
    <>
      <a className="v4-skip" href="#main">
        Skip to content
      </a>
      <Header current="/about/" />

      <main id="main">
        {/* ---- Hero ---------------------------------------------------- */}
        <section className="hx rx-hero" aria-labelledby="ab-title">
          <div className="hx__glow" aria-hidden="true" />
          <div className="wrap hx__grid">
            <div className="hx__say">
              <h1 className="hx__title rx-hero__title" id="ab-title">
                {heading}
              </h1>
              {intro.map((p) => (
                <p key={p} className="hx__lede">
                  {p}
                </p>
              ))}
              <p className="hx__tag">{tagline}</p>
            </div>
            <div className="hx__art rx-hero__art">
              <div className="hx__facets" aria-hidden="true">
                <HeroFacets3D className="hx__canvas" />
              </div>
              <figure className="ab-entry glass">
                <p className="ab-entry__word">{entry.word}</p>
                <p className="ab-entry__meta">
                  <span>{entry.ipa}</span>
                  <i>{entry.pos}</i>
                </p>
                <p className="ab-entry__sense">{entry.sense}</p>
              </figure>
            </div>
          </div>
        </section>

        {/* ---- At a glance, on the brand ------------------------------------ */}
        <section className="ab-glance" aria-label={glance.map((g) => g.term).join(", ")}>
          <div className="ab-glance__facets" aria-hidden="true">
            <FacetField variant="web" />
          </div>
          <div className="wrap">
            <dl className="ab-glance__grid">
              {glance.map((g, i) => (
                <div key={g.term} className={`ab-glance__item glass rv${WIDE.includes(g.term) ? " ab-glance__item--wide" : ""}`}>
                  <dt>{g.term}</dt>
                  <dd>
                    {g.link ? <Linked text={g.detail} links={v4Links([g.link])} className="tlink tlink--inline" /> : g.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ---- The sections, heading left, prose right --------------------- */}
        <section className="sec" aria-label={heading}>
          <div className="wrap ab-secs">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="ab-sec" aria-labelledby={`ab-${s.id}`}>
                <h2 className="ab-sec__title" id={`ab-${s.id}`}>
                  {s.heading}
                </h2>
                <div className="ab-sec__body">
                  {s.id === "opportunity" && share && (
                    <figure className="ab-share card card--lit rv">
                      <p className="ab-share__fig">{share}</p>
                      <figcaption>
                        <a href="#about-note-1" className="ab-share__note">
                          {footnotes[0].text}
                        </a>
                      </figcaption>
                    </figure>
                  )}
                  {s.id === "where" && hq && ops && (
                    <div className="ab-cities">
                      {[hq, ops].map((c) => (
                        <div key={c.term} className="card card--soft ab-city rv">
                          <span className="pr-why__ico">
                            <Icon name={c.term === "Headquarters" ? "building" : "ledger"} />
                          </span>
                          <p className="ab-city__term">{c.term}</p>
                          <p className="ab-city__name">{c.detail}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {s.paragraphs.map((p) => (
                    <p key={p.text} className={p.text.startsWith("More:") || p.text.startsWith("Read the essays") ? "ab-sec__more" : undefined}>
                      <Linked text={p.text} links={v4Links(p.links)} note={p.note} className="tlink tlink--inline" />
                    </p>
                  ))}
                </div>
              </section>
            ))}

            <ol className="ab-notes">
              {footnotes.map((f) => (
                <li key={f.n} id={`about-note-${f.n}`}>
                  <a href={`#about-ref-${f.n}`} className="ab-notes__n" aria-label={`Back to note ${f.n}`}>
                    {f.n}
                  </a>
                  {f.text}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <ReadNext lead={readNext.lead} links={readNext.links} tint />
      </main>

      <Footer />
    </>
  );
}
