import type { Metadata } from "next";
import Link from "next/link";
import { REVYVE_AI } from "../../content/revyveAi";
import { META } from "../../content/site";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Linked from "../components/Linked";
import MarkStep from "../components/MarkStep";
import { G, Mark } from "../components/aiDiagrams";
import { ReleaseGate } from "../components/teamDiagrams";

export const metadata: Metadata = {
  title: META["/revyve-ai/"].title,
  description: META["/revyve-ai/"].description,
};

/** A glyph for each of the systems and the workers the page names. */
const SYS: (keyof typeof G)[] = ["ledger", "inbox", "folder", "doc"];
const WORK: (keyof typeof G)[] = ["checklist", "inbox", "bars", "shield"];

/**
 * Revyve AI.
 *
 * The product page, built as the argument the copy makes: what it does
 * today; how it sits between the systems a practice runs and what does the
 * work (the architecture, drawn left to right as the copy lays it out);
 * what runs today against what comes next, as two lists side by side; and
 * how a capability earns release, on paper with its drawing.
 *
 * The eyebrow is in the copy and not rendered.
 *
 * Every string comes from app/content/revyveAi.ts, verbatim.
 */
export default function RevyveAiPage() {
  const { heading, lead, claim, actions, arch, scope, release, readNext } = REVYVE_AI;

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
              <p className="rp__lead">{lead}</p>
              <p className="rp__claim">{claim}</p>
              <div className="rp__actions">
                <Link href={actions[0].href} className="hero__go rp__go">
                  {actions[0].label}
                </Link>
                <Link href={actions[1].href} className="hero__alt rp__go">
                  {actions[1].label}
                </Link>
              </div>
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

        {/* ---- Today, and next ------------------------------------------ */}
        <section className="rp__system" aria-labelledby="rp-scope">
          <div className="rp__inner">
            <header className="rp__head">
              <h2 className="rp__h2" id="rp-scope">
                {scope.heading}
              </h2>
            </header>

            <div className="rp__scope">
              <div className="rp__scopeCard rp__scopeCard--now">
                <h3 className="rp__scopeH">{scope.current.heading}</h3>
                <ul className="rp__scopeList">
                  {scope.current.items.map((it) => (
                    <li key={it}>
                      <svg viewBox="0 0 20 20" className="rp__scopeIco" aria-hidden="true">
                        <circle cx="10" cy="10" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
                        <path d="M6 10.3l2.6 2.6L14 7.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rp__scopeCard rp__scopeCard--next">
                <h3 className="rp__scopeH">{scope.planned.heading}</h3>
                <ul className="rp__scopeList">
                  {scope.planned.items.map((it) => (
                    <li key={it}>
                      <svg viewBox="0 0 20 20" className="rp__scopeIco" aria-hidden="true">
                        <circle cx="10" cy="10" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeDasharray="3 3" />
                      </svg>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="rp__note">{scope.note}</p>
          </div>
        </section>

        {/* ---- How capabilities are released, on paper ------------------- */}
        <section className="fp__start" data-tone="light" aria-labelledby="rp-release">
          <div className="rp__inner fp__startGrid">
            <div className="fp__startSay">
              <h2 className="fp__h2 rp__releaseH" id="rp-release">
                {release.heading}
              </h2>
              <p className="fp__startBody">{release.body}</p>
              <p className="fp__note">{release.note}</p>
            </div>
            <div className="fp__startArt">
              <ReleaseGate className="fp__startDraw sd sd--armed" />
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
