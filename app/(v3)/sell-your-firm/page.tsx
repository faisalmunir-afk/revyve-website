import type { Metadata } from "next";
import Link from "next/link";
import { SELL } from "../../content/sell";
import { META } from "../../content/site";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import Linked from "../components/Linked";
import { LookForMark, TheBusiness } from "../components/sellDiagrams";

export const metadata: Metadata = {
  title: META["/sell-your-firm/"].title,
  description: META["/sell-your-firm/"].description,
};

/**
 * Sell your firm.
 *
 * The owner's page, in the order an owner weighs it: what we want (the
 * business, not the book of business — drawn); what we look for, as four
 * tiles; what happens to their customers and team, as one statement on the
 * brand; how it goes, its four sentences set as four steps on paper; and
 * the questions owners ask.
 *
 * The four steps are the four sentences of the original paragraph, split
 * only at their own full stops. The eyebrow is in the copy and not
 * rendered.
 *
 * Every string comes from app/content/sell.ts, verbatim.
 */
export default function SellPage() {
  const { heading, lead, action, lookFor, people, how, faq } = SELL;
  const steps = how.body.split(/(?<=\.) /);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main" className="fp">
        {/* ---- What we want -------------------------------------------- */}
        <section className="fp__hero" aria-labelledby="sy-title">
          <div className="fp__inner fp__heroGrid">
            <div className="fp__say">
              <h1 className="fp__title" id="sy-title">
                {heading.split(/(?<=\?) /).map((part, i) => (
                  <span className="fp__titleLine" key={i}>
                    {part}
                    {i === 0 ? " " : ""}
                  </span>
                ))}
              </h1>
              <p className="fp__lead">{lead}</p>
              <Link href={action.href} className="hero__go fp__go">
                {action.label}
              </Link>
            </div>
            <div className="aboutb__art fp__art">
              <TheBusiness className="aboutb__draw sd sd--armed fp__heroDraw" />
            </div>
          </div>
        </section>

        {/* ---- What we look for ---------------------------------------- */}
        <section className="fp__why" aria-labelledby="sy-look">
          <div className="fp__inner">
            <h2 className="fp__h2 sy__h2" id="sy-look">
              {lookFor.heading}
            </h2>
            <ul className="sy__grid">
              {lookFor.items.map((item, i) => (
                <li className="fp__tile" key={i}>
                  <LookForMark i={i} className="fp__mark" />
                  <p className="sy__tileText">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---- Your customers and your team, on the brand -------------- */}
        <section className="sy__people" aria-labelledby="sy-people">
          <div className="fp__inner sy__peopleGrid">
            <h2 className="fp__h2" id="sy-people">
              {people.heading}
            </h2>
            <p className="sy__statement">{people.body}</p>
          </div>
        </section>

        {/* ---- How it goes, on paper ----------------------------------- */}
        <section className="rp__rcm" data-tone="light" aria-labelledby="sy-how">
          <div className="fp__inner">
            <header className="rp__head">
              <h2 className="rp__h2" id="sy-how">
                {how.heading}
              </h2>
            </header>
            <ol className="rp__flow">
              {steps.map((s, i) => (
                <li className="rp__step" key={i} style={{ ["--i" as string]: i }}>
                  <span className="rp__stepNode" aria-hidden="true" />
                  <p className="rp__stepDetail">{s}</p>
                </li>
              ))}
            </ol>
            <div className="rp__close">
              <Link href={how.action.href} className="hero__go">
                {how.action.label}
              </Link>
              <p className="fp__note">
                <Linked text={how.note.text} links={how.note.links} className="aboutb__link" />
              </p>
            </div>
          </div>
        </section>

        {/* ---- Questions owners ask ------------------------------------ */}
        <Faq heading={faq.heading} items={faq.items} />
      </main>
      <Footer />
    </>
  );
}
