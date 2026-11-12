import type { Metadata } from "next";
import Link from "next/link";
import { DEPLOYMENT } from "../../../content/deployment";
import { META } from "../../../content/site";
import FacetField from "../../../(v3)/components/FacetField";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeroFacets3D from "../../components/HeroFacets3D";
import ReadNext from "../../components/ReadNext";
import { Icon, type IconName } from "../../components/AiArt";
import { v4 } from "../../components/links";
import "../styles.css";
import "../../pages.css";
import "../../more.css";

export const metadata: Metadata = {
  title: META["/revyve-ai/first-deployment/"].title,
  description: META["/revyve-ai/first-deployment/"].description,
  robots: { index: false, follow: false },
};

/**
 * V4 First deployment: the claim on the left, the handling-time change on
 * the right drawn to scale from the client's own two figures; the workflow
 * and the deployment as cards; the four measurements on the brand, each
 * with its whole sentence and the snapshot note beside them; what the audit
 * measures and what remains to be shown; read next.
 *
 * Every string comes from app/content/deployment.ts, verbatim. A figure set
 * large is a phrase of its own sentence, and the sentence is always shown
 * with it.
 */
const BEFORE_ICONS: IconName[] = ["status", "clinic"];
const AFTER_ICONS: IconName[] = ["info", "clock"];
const FIGS = [/\d+(\.\d+)? minutes(?=\.)/, /approximately \d+%/, /\d+ of \d+/, /^Unchanged/];

export default function V4FirstDeployment() {
  const { section, sub, heading, lead, before, measured, after, note, readNext } = DEPLOYMENT;
  const handling = measured.items[0];
  const mins = [...handling.detail.matchAll(/(\d+(?:\.\d+)?) minutes/g)].map((m) => ({ text: m[0], n: parseFloat(m[1]) }));
  const max = Math.max(...mins.map((m) => m.n), 1);

  return (
    <>
      <a className="v4-skip" href="#main">
        Skip to content
      </a>
      <Header current="/revyve-ai/" />

      <main id="main">
        {/* ---- Hero ---------------------------------------------------- */}
        <section className="hx rx-hero" aria-labelledby="fd-title">
          <div className="hx__glow" aria-hidden="true" />
          <div className="wrap hx__grid">
            <div className="hx__say">
              <p className="fd-crumb">
                <Link href={v4("/revyve-ai/")} className="ar-back">
                  <svg viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M16 10H5M9 5.5 4.5 10 9 14.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {section}
                </Link>
                <span className="ar-date">{sub}</span>
              </p>
              <h1 className="hx__title rx-hero__title" id="fd-title">
                {heading}
              </h1>
              <p className="hx__lede">{lead}</p>
            </div>
            <div className="hx__art rx-hero__art">
              <div className="hx__facets" aria-hidden="true">
                <HeroFacets3D className="hx__canvas" />
              </div>
              {mins.length === 2 && (
                <figure className="fd-bars glass">
                  <figcaption className="fd-bars__term">
                    <Icon name="clock" className="fd-bars__ico" />
                    {handling.term}
                  </figcaption>
                  {mins.map((m, i) => (
                    <div key={m.text} className={`fd-bar fd-bar--${i}`}>
                      <span className="fd-bar__fill" style={{ width: `${(m.n / max) * 100}%` }} />
                      <span className="fd-bar__val">{m.text}</span>
                    </div>
                  ))}
                  <p className="fd-bars__cap">{handling.detail}</p>
                </figure>
              )}
            </div>
          </div>
        </section>

        {/* ---- The workflow and the deployment ----------------------------- */}
        <section className="sec sec--tint" aria-label={before.map((b) => b.heading).join(", ")}>
          <div className="wrap fd-two">
            {before.map((b, i) => (
              <article key={b.heading} className="card card--soft fd-card rv">
                <span className="pr-why__ico">
                  <Icon name={BEFORE_ICONS[i] ?? "doc"} />
                </span>
                <h2 className="card__title card__title--lg">{b.heading}</h2>
                <p className="card__body">{b.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ---- What we measured, on the brand -------------------------------- */}
        <section className="rx-arch fd-measured" aria-labelledby="fd-m">
          <div className="rx-arch__facets" aria-hidden="true">
            <FacetField variant="web" />
          </div>
          <div className="wrap">
            <header className="fd-measured__head">
              <h2 className="sec__title fd-measured__title" id="fd-m">
                {measured.heading}
              </h2>
              <p className="fd-measured__note">{note}</p>
            </header>
            <dl className="fd-stats">
              {measured.items.map((m, i) => {
                const fig = m.detail.match(FIGS[i] ?? /$^/)?.[0];
                return (
                  <div key={m.term} className="fd-stat glass rv">
                    <dt>{m.term}</dt>
                    {fig && (
                      <dd className="fd-stat__fig" aria-hidden="true">
                        {fig.startsWith("approximately ") ? (
                          <>
                            <span className="fd-stat__pre">approximately</span>
                            {fig.slice("approximately ".length)}
                          </>
                        ) : (
                          fig
                        )}
                      </dd>
                    )}
                    <dd className="fd-stat__detail">{m.detail}</dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </section>

        {/* ---- What the figures do and do not show --------------------------- */}
        <section className="sec" aria-label={after.map((b) => b.heading).join(", ")}>
          <div className="wrap fd-two">
            {after.map((b, i) => (
              <article key={b.heading} className={`card ${i === 1 ? "card--lit" : "card--soft"} fd-card rv`}>
                <span className="pr-why__ico">
                  <Icon name={AFTER_ICONS[i] ?? "doc"} />
                </span>
                <h2 className="card__title card__title--lg">{b.heading}</h2>
                <p className="card__body">{b.body}</p>
              </article>
            ))}
          </div>
        </section>

        <ReadNext lead={readNext.lead} links={readNext.links} tint />
      </main>

      <Footer />
    </>
  );
}
