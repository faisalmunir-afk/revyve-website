import type { Metadata } from "next";
import Link from "next/link";
import { SELL } from "../../content/sell";
import { META } from "../../content/site";
import Linked from "../../(v3)/components/Linked";
import FacetField from "../../(v3)/components/FacetField";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import Arrow from "../components/Arrow";
import HeroFacets3D from "../components/HeroFacets3D";
import { v4 } from "../components/links";
import { Icon, type IconName } from "../components/AiArt";
import { BusinessArt, LoopArt } from "../components/PageArt";
import "../revyve-ai/styles.css";
import "../pages.css";

export const metadata: Metadata = {
  title: META["/sell-your-firm/"].title,
  description: META["/sell-your-firm/"].description,
  robots: { index: false, follow: false },
};

/**
 * V4 Sell your firm, in the home page's manner: the offer on the left with
 * the business itself on the right, what stays with it; what we look for, as
 * four cards; what happens to the customers and the team, on the brand;
 * what joining adds, as the loop between the team and the platform; how it
 * goes, as four steps; the questions.
 *
 * Every string comes from app/content/sell.ts, verbatim. Long paragraphs are
 * only ever divided between their own sentences, never reworded.
 */

const LOOK_ICONS: IconName[] = ["building", "person", "doc", "ledger"];
const STEP_ICONS: IconName[] = ["talk", "coins", "clock", "shield"];

/** Split a paragraph into its sentences, each keeping its full stop. */
const sentences = (s: string) => s.match(/[^.]+\./g)?.map((x) => x.trim()) ?? [s];

export default function V4SellYourFirm() {
  const { heading, lead, action, lookFor, people, adds, how, faq } = SELL;

  /* The hero picture: the business, and the three things in it the lead names. */
  const parts = ["the customers", "the people who know them", "the twenty years of knowing which payer does what"].filter((p) => lead.includes(p));
  const holdAnswer = faq.items.find((it) => it.answer.startsWith("We buy to hold."))?.answer ?? "";
  const hold = holdAnswer ? "We buy to hold." : "";

  /* The people paragraph: its last sentence set apart, as the commitment. */
  const pSent = sentences(people.body);
  const pledge = pSent[pSent.length - 1];
  const pRest = pSent.slice(0, -1).join(" ");

  /* What joining adds: the two sides of the loop, in the paragraph's words. */
  const tools = ["claim-status checks", "controlled work queues", "daily reporting"].filter((t) => adds.body.includes(t));
  const learns = adds.body.includes("another real operation to learn from") ? "another real operation to learn from" : "";

  const steps = sentences(how.body);
  const noteLinks = how.note.links.map((l) => ({ ...l, href: v4(l.href) }));

  return (
    <>
      <a className="v4-skip" href="#main">
        Skip to content
      </a>
      <Header current="/sell-your-firm/" />

      <main id="main">
        {/* ---- Hero ---------------------------------------------------- */}
        <section className="hx rx-hero" aria-labelledby="sl-title">
          <div className="hx__glow" aria-hidden="true" />
          <div className="wrap hx__grid">
            <div className="hx__say">
              <h1 className="hx__title rx-hero__title" id="sl-title">
                {heading}
              </h1>
              <p className="hx__lede">{lead}</p>
              <div className="hx__actions">
                <Link href={v4(action.href)} className="btn btn--solid">
                  {action.label}
                </Link>
              </div>
            </div>
            <div className="hx__art rx-hero__art">
              <div className="hx__facets" aria-hidden="true">
                <HeroFacets3D className="hx__canvas" />
              </div>
              <BusinessArt title="the business" parts={parts} hold={hold} />
            </div>
          </div>
        </section>

        {/* ---- What we look for ------------------------------------------- */}
        <section className="sec sec--tint" aria-labelledby="sl-look">
          <div className="wrap sl-look">
            <h2 className="sec__title sl-look__title" id="sl-look">
              {lookFor.heading}
            </h2>
            <ul className="sl-look__grid">
              {lookFor.items.map((t, i) => {
                const [first, ...rest] = sentences(t);
                return (
                  <li key={t} className="card card--soft sl-look__card rv">
                    <span className="pr-why__ico">
                      <Icon name={LOOK_ICONS[i] ?? "doc"} />
                    </span>
                    <p className="sl-look__text">
                      <strong>{first}</strong> {rest.join(" ")}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ---- Your customers and your team, on the brand -------------------- */}
        <section className="sl-people" aria-labelledby="sl-people">
          <div className="sl-people__facets" aria-hidden="true">
            <FacetField variant="web" />
          </div>
          <div className="wrap sl-people__in">
            <div className="sl-people__say">
              <h2 className="sec__title sl-people__title" id="sl-people">
                {people.heading}
              </h2>
              <p className="sl-people__body">{pRest}</p>
            </div>
            <blockquote className="sl-people__pledge glass rv">
              <p>{pledge}</p>
            </blockquote>
          </div>
        </section>

        {/* ---- What joining Revyve adds ------------------------------------ */}
        <section className="sec" aria-labelledby="sl-adds">
          <div className="wrap rx-rel">
            <div className="rx-rel__say">
              <h2 className="sec__title" id="sl-adds">
                {adds.heading}
              </h2>
              <p className="sec__lede">{adds.body}</p>
            </div>
            <div className="card card--lit rx-rel__card sl-adds__card rv">
              <LoopArt team="Your team" platform="The platform" tools={tools} learns={learns} />
            </div>
          </div>
        </section>

        {/* ---- How it goes ------------------------------------------------- */}
        <section className="sec sec--tint" aria-labelledby="sl-how">
          <div className="wrap">
            <header className="sec__head sec__head--split rv">
              <h2 className="sec__title" id="sl-how">
                {how.heading}
              </h2>
              <p className="sec__lede">
                <Linked text={how.note.text} links={noteLinks} className="tlink tlink--inline" />
              </p>
            </header>
            <div className="hw">
              <span className="hw__rail" aria-hidden="true">
                <i />
              </span>
              <ol className="hw__list">
              {steps.map((s, i) => (
                <li key={s} className="card card--soft hw__step rv">
                  <span className="hw__dot" aria-hidden="true" />
                  <span className="pr-why__ico">
                    <Icon name={STEP_ICONS[i] ?? "doc"} />
                  </span>
                  <p className="hw__text">{s}</p>
                </li>
              ))}
              </ol>
            </div>
            <div className="hw__go">
              <Link href={v4(how.action.href)} className="btn btn--solid">
                {how.action.label}
              </Link>
            </div>
          </div>
        </section>

        {/* ---- Questions ----------------------------------------------- */}
        <section className="sec" aria-labelledby="fq-title">
          <div className="wrap faqx">
            <h2 className="sec__title" id="fq-title">
              {faq.heading}
            </h2>
            <Faq items={faq.items} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
