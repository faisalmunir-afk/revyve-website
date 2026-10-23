import type { Metadata } from "next";
import Link from "next/link";
import { REVYVE_AI } from "../../content/revyveAi";
import { META } from "../../content/site";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Linked from "../components/Linked";
import MarkStep from "../components/MarkStep";
import { G, Mark } from "../components/aiDiagrams";
import { AgentsWithOwners, OneRecord, TeamTools, WorkMoves } from "../components/systemCards";

export const metadata: Metadata = {
  title: META["/revyve-ai/"].title,
  description: META["/revyve-ai/"].description,
};

/** One drawing per card, each made from its own sentence. */
const CARD_DRAWINGS = [OneRecord, AgentsWithOwners, WorkMoves, TeamTools];

/** A glyph for each of the systems and the workers the page names. */
const SYS: (keyof typeof G)[] = ["ledger", "calendar", "doc", "inbox", "folder"];
const WORK: (keyof typeof G)[] = ["bars", "checklist", "form", "shield"];

/**
 * Revyve AI.
 *
 * The product page, built as the argument the copy makes: what it is, how
 * it sits between the systems and the workers (the architecture, drawn as
 * the copy lays it out, left to right), what it does, and the first work
 * it is doing. The architecture is real HTML so its words stay words; the
 * flow is a drawn trace that draws on as it comes up the screen.
 *
 * The four RCM steps are an ordered list; the numerals the original prints
 * are in the copy and not rendered. The eyebrow is in the copy and not
 * rendered either.
 *
 * Every string comes from app/content/revyveAi.ts, verbatim.
 */
export default function RevyveAiPage() {
  const { heading, leads, claim, action, arch, system, rcm, readNext } = REVYVE_AI;

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main" className="rp">
        {/* ---- The claim ------------------------------------------------ */}
        <section className="rp__hero" aria-labelledby="rp-title">
          <div className="rp__inner rp__heroGrid">
            <div>
              <h1 className="rp__title" id="rp-title">
                {heading}
              </h1>
            </div>
            <div className="rp__heroSay">
              {leads.map((l, i) => (
                <p className="rp__lead" key={i}>
                  {l}
                </p>
              ))}
              <p className="rp__claim">{claim}</p>
              <Link href={action.href} className="hero__go rp__go">
                {action.label}
              </Link>
            </div>
          </div>
        </section>

        {/* ---- The architecture ---------------------------------------- */}
        <section className="rp__arch" aria-label={arch.label}>
          <div className="rp__inner">
            <div className="rp__archGrid">
              <div className="rp__col">
                <h2 className="rp__colH">{arch.systems.heading}</h2>
                <ul className="rp__chips">
                  {arch.systems.items.map((it, i) => (
                    <li className="rp__chip" key={it}>
                      <svg viewBox="0 0 24 24" className="rp__chipIco" aria-hidden="true">
                        <Mark kind={SYS[i]} cx={12} cy={12} size={24} tone="base" />
                      </svg>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rp__link" aria-hidden="true">
                <svg viewBox="0 0 48 24"><path d="M2 12h40m-8-8 8 8-8 8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" pathLength={1} data-draw="" /></svg>
              </div>

              <div className="rp__core">
                <MarkStep done={10} className="rp__coreMark" />
                <strong className="rp__coreName">{arch.core.name}</strong>
                <span className="rp__coreDetail">{arch.core.detail}</span>
              </div>

              <div className="rp__link" aria-hidden="true">
                <svg viewBox="0 0 48 24"><path d="M2 12h40m-8-8 8 8-8 8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" pathLength={1} data-draw="" /></svg>
              </div>

              <div className="rp__col">
                <h2 className="rp__colH">{arch.work.heading}</h2>
                <ul className="rp__chips">
                  {arch.work.items.map((it, i) => (
                    <li className="rp__chip" key={it}>
                      <svg viewBox="0 0 24 24" className="rp__chipIco" aria-hidden="true">
                        <Mark kind={WORK[i]} cx={12} cy={12} size={24} tone="base" />
                      </svg>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="rp__outcome">{arch.outcome}</p>
          </div>
        </section>

        {/* ---- One system ---------------------------------------------- */}
        <section className="rp__system" aria-labelledby="rp-system">
          <div className="rp__inner">
            <header className="rp__head">
              <h2 className="rp__h2" id="rp-system">
                {system.heading}
              </h2>
              <p className="rp__headLead">{system.lead}</p>
            </header>

            {/* Four large cards, two by two, each with its own drawing. */}
            <ul className="rp__cards">
              {system.points.map((p, i) => {
                const Drawing = CARD_DRAWINGS[i];
                return (
                  <li className="rp__card" key={p.title}>
                    <div className="rp__cardArt">
                      <Drawing className="rp__cardDraw sd sd--armed" />
                    </div>
                    <h3 className="rp__cardName">{p.title}</h3>
                    <p className="rp__cardText">{p.body}</p>
                  </li>
                );
              })}
            </ul>

            <p className="rp__note">{system.note}</p>
          </div>
        </section>

        {/* ---- Revenue cycle ------------------------------------------- */}
        <section className="rp__rcm" data-tone="light" aria-labelledby="rp-rcm">
          <div className="rp__inner">
            <header className="rp__head">
              <h2 className="rp__h2" id="rp-rcm">
                {rcm.heading}
              </h2>
              <p className="rp__headLead">{rcm.lead}</p>
            </header>

            {/* The four steps as one trace, drawn on in order. */}
            <ol className="rp__flow">
              {rcm.steps.map((s, i) => (
                <li className="rp__step" key={s.label} style={{ ["--i" as string]: i }}>
                  <span className="rp__stepNode" aria-hidden="true" />
                  <span className="rp__stepLabel">{s.label}</span>
                  <h3 className="rp__stepDetail">{s.detail}</h3>
                </li>
              ))}
            </ol>

            <div className="rp__close">
              <p className="rp__closing">{rcm.closing}</p>
              <Link href={rcm.action.href} className="hero__go rp__go">
                {rcm.action.label}
              </Link>
            </div>
          </div>
        </section>

        {/* ---- Read next ----------------------------------------------- */}
        <section className="about__next rp__next">
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
