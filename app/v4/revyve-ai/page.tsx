import type { Metadata } from "next";
import Link from "next/link";
import { REVYVE_AI } from "../../content/revyveAi";
import { META } from "../../content/site";
import FacetField from "../../(v3)/components/FacetField";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Arrow from "../components/Arrow";
import HeroFacets3D from "../components/HeroFacets3D";
import { v4 } from "../components/links";
import { FlowWires, Icon, ReleaseArt, RunLogArt, SYSTEM_ICONS, WORK_ICONS, type IconName } from "../components/AiArt";
import "./styles.css";

export const metadata: Metadata = {
  title: META["/revyve-ai/"].title,
  description: META["/revyve-ai/"].description,
  robots: { index: false, follow: false },
};

/**
 * V4 Revyve AI, in the home page's manner: the claim on the left with the
 * action log on the right; the architecture as a band on the brand, the
 * systems flowing through the core to what does the work; what runs today
 * beside what comes next; how a capability is released, as the tests a
 * workflow passes; and where to read next.
 *
 * Every string comes from app/content/revyveAi.ts, verbatim. The four tests
 * in the release picture are the exact phrases of release.body.
 */

/** The four tests a workflow passes, word for word from release.body. */
const GATES = ["measured coverage", "error severity", "review requirements", "consistent performance on representative cases"] as const;

const READ_ICONS: IconName[] = ["chart", "clinic", "hand"];

export default function V4RevyveAI() {
  const { heading, lead, claim, actions, arch, scope, release, readNext } = REVYVE_AI;
  const gates = GATES.filter((g) => release.body.includes(g));
  /* The core's detail as its five parts, in the original's words and order. */
  const parts = arch.core.detail.split(/, | and /);

  return (
    <>
      <a className="v4-skip" href="#main">
        Skip to content
      </a>
      <Header current="/revyve-ai/" />

      <main id="main">
        {/* ---- Hero ---------------------------------------------------- */}
        <section className="hx rx-hero" aria-labelledby="rx-title">
          <div className="hx__glow" aria-hidden="true" />
          <div className="wrap hx__grid">
            <div className="hx__say">
              <h1 className="hx__title rx-hero__title" id="rx-title">
                {heading}
              </h1>
              <p className="hx__lede">{lead}</p>
              <p className="hx__tag">{claim}</p>
              <div className="hx__actions">
                <Link href={v4(actions[0].href)} className="btn btn--solid">
                  {actions[0].label}
                </Link>
                <Link href={v4(actions[1].href)} className="btn btn--ghost">
                  {actions[1].label}
                  <Arrow />
                </Link>
              </div>
            </div>
            <div className="hx__art rx-hero__art">
              <div className="hx__facets" aria-hidden="true">
                <HeroFacets3D className="hx__canvas" />
              </div>
              <RunLogArt items={scope.current.items} biller={arch.work.items[3]} />
            </div>
          </div>
        </section>

        {/* ---- The architecture, on the brand ------------------------------ */}
        <section className="rx-arch" aria-labelledby="rx-arch-title">
          <div className="rx-arch__facets" aria-hidden="true">
            <FacetField variant="web" />
          </div>
          <div className="wrap">
            <h2 className="sec__title rx-arch__title" id="rx-arch-title">
              {arch.label}
            </h2>

            <div className="rx-flow">
              <FlowWires />
              <div className="rx-flow__col rx-flow__col--in">
                <h3 className="rx-flow__head">{arch.systems.heading}</h3>
                <ul className="rx-flow__list">
                  {arch.systems.items.map((t, i) => (
                    <li key={t} className="rx-pill glass">
                      <span className="rx-pill__ico">
                        <Icon name={SYSTEM_ICONS[i] ?? "doc"} />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rx-core">
                <span className="rx-core__ring" aria-hidden="true" />
                <span className="rx-core__mark" aria-hidden="true">
                  <img src="/brand/revyve-logo.png" alt="" width={600} height={359} />
                </span>
                <h3 className="rx-core__name">{arch.core.name}</h3>
                <ul className="rx-core__parts" aria-label={arch.core.detail}>
                  {parts.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>

              <div className="rx-flow__col rx-flow__col--out">
                <h3 className="rx-flow__head">{arch.work.heading}</h3>
                <ul className="rx-flow__list">
                  {arch.work.items.map((t, i) => (
                    <li key={t} className="rx-pill glass">
                      <span className="rx-pill__ico">
                        <Icon name={WORK_ICONS[i] ?? "queue"} />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="rx-arch__outcome">{arch.outcome}</p>
          </div>
        </section>

        {/* ---- What runs today, and what comes next ------------------------ */}
        <section className="sec" aria-labelledby="rx-scope-title">
          <div className="wrap">
            <header className="sec__head rv">
              <h2 className="sec__title" id="rx-scope-title">
                {scope.heading}
              </h2>
            </header>
            <div className="rx-scope">
              <article className="card card--lit rx-now rv">
                <div className="rx-now__head">
                  <h3 className="card__title">{scope.current.heading}</h3>
                  <span className="rx-live" aria-hidden="true" />
                </div>
                <ul className="rx-list">
                  {scope.current.items.map((t, i) => (
                    <li key={t} className="rx-list__item glass" style={{ ["--i" as string]: i }}>
                      <svg viewBox="0 0 20 20" className="rx-tick" aria-hidden="true">
                        <circle cx="10" cy="10" r="10" />
                        <path d="M5.5 10.5l3 3 6-6.5" />
                      </svg>
                      {t}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="card card--soft rx-later rv">
                <h3 className="card__title">{scope.planned.heading}</h3>
                <ul className="rx-list rx-list--later">
                  {scope.planned.items.map((t) => (
                    <li key={t} className="rx-list__item">
                      <span className="rx-ring" aria-hidden="true" />
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
            <p className="rx-note rv">
              <Icon name="info" className="rx-note__ico" />
              <span>{scope.note}</span>
            </p>
          </div>
        </section>

        {/* ---- How capabilities are released ------------------------------ */}
        <section className="sec sec--tint" aria-labelledby="rx-rel-title">
          <div className="wrap rx-rel">
            <div className="rx-rel__say">
              <h2 className="sec__title" id="rx-rel-title">
                {release.heading}
              </h2>
              <p className="sec__lede">{release.body}</p>
              <div className="rx-rel__note">
                <span className="rx-rel__noteIco">
                  <Icon name="shield" />
                </span>
                <p>{release.note}</p>
              </div>
            </div>
            <div className="card card--lit rx-rel__card rv">
              <ReleaseArt gates={gates} />
            </div>
          </div>
        </section>

        {/* ---- Read next ------------------------------------------------- */}
        <section className="sec" aria-labelledby="rx-next-title">
          <div className="wrap">
            <h2 className="sec__title rx-next__title" id="rx-next-title">
              {readNext.lead.replace(/:\s*$/, "")}
            </h2>
            <div className="rx-next">
              {readNext.links.map((l, i) => (
                <Link key={l.href} href={v4(l.href)} className={`card ${i === 0 ? "card--lit" : "card--soft"} rx-go rv`}>
                  <span className="rx-go__ico">
                    <Icon name={READ_ICONS[i] ?? "doc"} />
                  </span>
                  <span className="rx-go__t">{l.phrase}</span>
                  <span className="rx-go__arrow">
                    <Arrow />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
