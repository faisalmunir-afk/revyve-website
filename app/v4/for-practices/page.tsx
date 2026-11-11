import type { Metadata } from "next";
import Link from "next/link";
import { PRACTICES } from "../../content/practices";
import { META } from "../../content/site";
import Linked from "../../(v3)/components/Linked";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import Arrow from "../components/Arrow";
import HeroFacets3D from "../components/HeroFacets3D";
import { v4 } from "../components/links";
import { Icon, ReleaseArt, type IconName } from "../components/AiArt";
import { AgedClaimArt } from "../components/PageArt";
import "../revyve-ai/styles.css";
import "../pages.css";

export const metadata: Metadata = {
  title: META["/for-practices/"].title,
  description: META["/for-practices/"].description,
  robots: { index: false, follow: false },
};

/**
 * V4 For practices, in the home page's manner: the promise on the left with
 * the aged-claim line on the right; the five reasons as cards, the 120-day
 * one lit; how to start, as the steps a practice goes through; the
 * questions.
 *
 * Every string comes from app/content/practices.ts, verbatim. The phrases in
 * the pictures are exact phrases of the copy beside them, and are dropped if
 * the copy ever stops containing them.
 */

const REASON_ICONS: IconName[] = ["percent", "database", "clock", "person", "steth"];

export default function V4ForPractices() {
  const { heading, lead, why, start, faq } = PRACTICES;
  const aged = why.reasons[2].body;
  const line = aged.match(/\d+ days/)?.[0] ?? "";
  const steps = ["a status check", "a reason", "a next action"].filter((p) => aged.includes(p));
  const billers = why.reasons[3].body.includes("qualified billers") ? "qualified billers" : "";
  const gates = [
    "a free assessment of your existing billing records",
    "identify areas of improvement",
    "commit to the benchmarks before the contract is signed",
    "deliver on them",
  ].filter((g) => start.body.includes(g));
  /* The paragraph's last sentence stands on its own under the steps. */
  const onboarding = start.body.slice(start.body.indexOf("Onboarding"));
  const startLead = start.body.slice(0, start.body.indexOf("Onboarding")).trim();
  const noteLinks = start.note.links.map((l) => ({ ...l, href: v4(l.href) }));

  return (
    <>
      <a className="v4-skip" href="#main">
        Skip to content
      </a>
      <Header current="/for-practices/" />

      <main id="main">
        {/* ---- Hero ---------------------------------------------------- */}
        <section className="hx rx-hero" aria-labelledby="pr-title">
          <div className="hx__glow" aria-hidden="true" />
          <div className="wrap hx__grid">
            <div className="hx__say">
              <h1 className="hx__title rx-hero__title" id="pr-title">
                {heading}
              </h1>
              <p className="hx__lede">{lead}</p>
              <div className="hx__actions">
                <Link href={v4(start.action.href)} className="btn btn--solid">
                  {start.action.label}
                </Link>
                <Link href={v4(noteLinks[0].href)} className="btn btn--ghost">
                  {noteLinks[0].phrase}
                  <Arrow />
                </Link>
              </div>
            </div>
            <div className="hx__art rx-hero__art">
              <div className="hx__facets" aria-hidden="true">
                <HeroFacets3D className="hx__canvas" />
              </div>
              <AgedClaimArt line={line} steps={steps} billers={billers} />
            </div>
          </div>
        </section>

        {/* ---- Why practices move to us ------------------------------------ */}
        <section className="sec sec--tint" aria-labelledby="pr-why">
          <div className="wrap">
            <header className="sec__head rv">
              <h2 className="sec__title" id="pr-why">
                {why.heading}
              </h2>
            </header>
            <ul className="pr-why">
              {why.reasons.map((r, i) => {
                const lit = i === 2;
                return (
                  <li key={r.title} className={`card ${lit ? "card--lit" : "card--soft"} pr-why__card pr-why__card--${i} rv`}>
                    <span className="pr-why__ico">
                      <Icon name={REASON_ICONS[i] ?? "info"} />
                    </span>
                    {lit && line && (
                      <p className="pr-why__big" aria-hidden="true">
                        {line}
                      </p>
                    )}
                    <div className="card__text">
                      <h3 className="card__title">{r.title}</h3>
                      <p className="card__body">{r.body}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ---- How to start ------------------------------------------------ */}
        <section className="sec" aria-labelledby="pr-start">
          <div className="wrap rx-rel">
            <div className="rx-rel__say">
              <h2 className="sec__title" id="pr-start">
                {start.heading}
              </h2>
              <p className="sec__lede">{startLead}</p>
              <p className="pr-start__fast">
                <Icon name="clock" className="pr-start__fastIco" />
                {onboarding}
              </p>
              <div className="hx__actions">
                <Link href={v4(start.action.href)} className="btn btn--solid">
                  {start.action.label}
                </Link>
              </div>
              <p className="pr-start__note">
                <Linked text={start.note.text} links={noteLinks} className="tlink tlink--inline" />
              </p>
            </div>
            <div className="card card--lit rx-rel__card rv">
              <ReleaseArt gates={gates} />
            </div>
          </div>
        </section>

        {/* ---- Questions ----------------------------------------------- */}
        <section className="sec sec--tint" aria-labelledby="fq-title">
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
