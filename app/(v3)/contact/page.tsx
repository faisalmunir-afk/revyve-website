import type { Metadata } from "next";
import { CONTACT_PAGE } from "../../content/careers";
import { META } from "../../content/site";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CopyEmail from "../components/CopyEmail";
import { DoorMark } from "../components/Routes";
import { OneAddress } from "../components/peopleDiagrams";

export const metadata: Metadata = {
  title: META["/contact/"].title,
  description: META["/contact/"].description,
};

/**
 * The door each card stands for on the home page's routes: claims
 * for "Move your billing", the firm for "Sell your firm", the desk for
 * "Work with us", the letter for "Investors".
 */
const MARK = [1, 0, 2, 3];

/**
 * Contact.
 *
 * One address for everything, so the address is the hero: set large, with
 * the original's copy button, beside a drawing of four kinds of letter
 * meeting at one address and leaving it for the right person. Then the
 * four cards — which of these you are — each with the mark of its door on
 * the home page. The legal line closes it.
 *
 * The eyebrow is in the copy and not rendered.
 *
 * Every string comes from app/content/careers.ts, verbatim.
 */
export default function ContactPage() {
  const { heading, lead, email, copy, cards, legal } = CONTACT_PAGE;

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main" className="fp">
        <section className="fp__hero" aria-labelledby="ct-title">
          <div className="fp__inner fp__heroGrid">
            <div className="fp__say">
              <h1 className="fp__title" id="ct-title">
                {heading}
              </h1>
              <p className="fp__lead">{lead}</p>
              <CopyEmail email={email} label={copy} className="cp--hero" />
            </div>
            <div className="aboutb__art fp__art">
              <OneAddress className="aboutb__draw sd sd--armed fp__heroDraw" />
            </div>
          </div>
        </section>

        <section className="fp__why" aria-label="Which of these you are">
          <div className="fp__inner">
            <ul className="sy__grid">
              {cards.map((c, i) => (
                <li className="fp__tile" key={c.title}>
                  <DoorMark i={MARK[i]} className="fp__mark ct__mark" />
                  <h2 className="cr__roleTitle ct__title">{c.title}</h2>
                  <p className="fp__tileBody">{c.body}</p>
                </li>
              ))}
            </ul>
            <p className="ct__legal">{legal}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
