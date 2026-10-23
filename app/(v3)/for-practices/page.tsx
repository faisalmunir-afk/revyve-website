import type { Metadata } from "next";
import Link from "next/link";
import { PRACTICES } from "../../content/practices";
import { META } from "../../content/site";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import Linked from "../components/Linked";
import { ClaimGap, ReasonMark, StartClaims } from "../components/practiceDiagrams";

export const metadata: Metadata = {
  title: META["/for-practices/"].title,
  description: META["/for-practices/"].description,
};

/**
 * For practices.
 *
 * A conversion page, so it reads in the order a practice manager decides:
 * the promise and the picture of it (the gap between a claim going out and
 * someone chasing it, closed); the five reasons, as a grid of tiles each
 * with its own mark; how to start, on paper, with the one action; and the
 * questions practices ask, as the same accordion the home page uses.
 *
 * The eyebrow is in the copy and not rendered.
 *
 * Every string comes from app/content/practices.ts, verbatim.
 */
export default function PracticesPage() {
  const { heading, lead, why, start, faq } = PRACTICES;

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main" className="fp">
        {/* ---- The promise --------------------------------------------- */}
        <section className="fp__hero" aria-labelledby="fp-title">
          <div className="fp__inner fp__heroGrid">
            <div className="fp__say">
              {/* Two sentences, so each starts its own line. The text is the
                  source string, split only where its own full stop falls. */}
              <h1 className="fp__title" id="fp-title">
                {heading.split(/(?<=\.) /).map((part, i) => (
                  <span className="fp__titleLine" key={i}>
                    {part}
                    {i === 0 ? " " : ""}
                  </span>
                ))}
              </h1>
              <p className="fp__lead">{lead}</p>
              <Link href={start.action.href} className="hero__go fp__go">
                {start.action.label}
              </Link>
            </div>
            <div className="aboutb__art fp__art">
              <ClaimGap className="aboutb__draw sd sd--armed fp__heroDraw" />
            </div>
          </div>
        </section>

        {/* ---- The five reasons ---------------------------------------- */}
        <section className="fp__why" aria-labelledby="fp-why">
          <div className="fp__inner">
            <ul className="fp__grid">
              <li className="fp__lead-tile">
                <h2 className="fp__h2" id="fp-why">
                  {why.heading}
                </h2>
              </li>
              {why.reasons.map((r, i) => (
                <li className="fp__tile" key={r.title}>
                  <ReasonMark i={i} className="fp__mark" />
                  <h3 className="fp__tileTitle">{r.title}</h3>
                  <p className="fp__tileBody">{r.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---- How to start, on paper ---------------------------------- */}
        <section className="fp__start" data-tone="light" aria-labelledby="fp-start">
          <div className="fp__inner fp__startGrid">
            <div className="fp__startSay">
              <h2 className="fp__h2" id="fp-start">
                {start.heading}
              </h2>
              <p className="fp__startBody">{start.body}</p>
              <Link href={start.action.href} className="hero__go fp__go">
                {start.action.label}
              </Link>
              <p className="fp__note">
                <Linked text={start.note.text} links={start.note.links} className="aboutb__link" />
              </p>
            </div>
            <div className="fp__startArt">
              <StartClaims className="fp__startDraw sd sd--armed" />
            </div>
          </div>
        </section>

        {/* ---- Questions practices ask --------------------------------- */}
        <Faq heading={faq.heading} items={faq.items} />
      </main>
      <Footer />
    </>
  );
}
