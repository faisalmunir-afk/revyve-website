import type { Metadata } from "next";
import { TEAM } from "../../content/team";
import { META, TEAM_BACKGROUND, TEAM_BACKGROUND_HEADING } from "../../content/site";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Linked from "../components/Linked";
import MarkStep from "../components/MarkStep";
import { FourFounders } from "../components/teamDiagrams";

export const metadata: Metadata = {
  title: META["/team/"].title,
  description: META["/team/"].description,
};

/**
 * Team.
 *
 * The claim and its picture: two who have built and run companies, two who
 * practiced medicine, all four at the billing team's table. Then the four
 * founders as four plain cards: name, role, a rule, the bio. No pictures
 * and no drawings in them. Then the background, as the marquee About
 * carries, and read next.
 *
 * The eyebrow is in the copy and not rendered.
 *
 * Every string comes from app/content/team.ts and site.ts, verbatim.
 */
export default function TeamPage() {
  const { heading, lead, founders, readNext } = TEAM;

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main" className="fp tm">
        {/* Stacked and centred, unlike its neighbours: the claim across the
            page, one sentence a line, then the four of them beneath it. */}
        <section className="fp__hero tm__hero" aria-labelledby="tm-title">
          <div className="fp__inner tm__heroStack">
            <h1 className="fp__title tm__title" id="tm-title">
              {heading.split(/(?<=\.) /).map((part, i) => (
                <span className="fp__titleLine" key={i}>
                  {part}
                  {i === 0 ? " " : ""}
                </span>
              ))}
            </h1>
            <p className="fp__lead tm__lead">{lead}</p>
            <div className="aboutb__art tm__art">
              <FourFounders className="aboutb__draw sd sd--armed fp__heroDraw" />
            </div>
          </div>
        </section>

        <section className="tm__founders" aria-label="The four founders">
          <div className="fp__inner">
            <ul className="tm__cards">
              {founders.map((f) => (
                <li className="tm__card" key={f.name}>
                  <div className="tm__head">
                    <h2 className="tm__name">{f.name}</h2>
                    <p className="tm__role">{f.role}</p>
                  </div>
                  <p className="tm__body">{f.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---- The background ------------------------------------------ */}
        <section className="about__bg" aria-labelledby="tm-bg">
          <div className="fp__inner">
            <h2 className="about__h2 about__h2--static about__bgTitle" id="tm-bg">
              {TEAM_BACKGROUND_HEADING}
            </h2>
          </div>
          {/* Right to left, laid twice for a seamless loop; the copy is
              hidden from assistive tech so the seven are announced once. */}
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
