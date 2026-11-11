import Link from "next/link";
import { HOME } from "../content/home";
import { TEAM_BACKGROUND, TEAM_BACKGROUND_HEADING } from "../content/site";
import Linked from "../(v3)/components/Linked";
import DemoDialog from "../(v3)/components/DemoDialog";
import FacetField from "../(v3)/components/FacetField";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import GlassFilter from "./components/GlassFilter";
import GlassPanel from "./components/GlassPanel";
import HeroArt from "./components/HeroArt";
import HeroFacets3D from "./components/HeroFacets3D";
import { ModelsArt, LayerArt, OwnershipArt, SystemsArt } from "./components/CardArt";
import DoorScene from "./components/DoorScene";

/**
 * V4 home.
 *
 * Light and clean, in the manner of the references: a glass pill header;
 * the claim on the left with, on the right, a picture of exactly what it
 * says (a work queue being checked by agents, a report produced, an
 * exception handed to a biller), built in HTML and SVG, not a stock photo;
 * the two figures as glass cards under it; then the platform as a bento of
 * soft cards, two lit in the brand's violet; how it is built inside
 * operations; the team; the four doors as cards with their own pictures
 * and pill buttons; the questions; a footer with the name set huge.
 *
 * Every string comes from app/content/home.ts and site.ts, verbatim. The
 * figures are the client's own, always with the note that limits them.
 */
export default function V4Home() {
  const { hero, evidence, revyveAI, operations, team, routes, faq } = HOME;
  const [practices, sell, work, investors] = routes;
  /* The headline's last two words carry the brand's ink, as the live site sets them. */
  const cut = hero.headline.lastIndexOf("independent medicine.");

  return (
    <>
      <a className="v4-skip" href="#main">
        Skip to content
      </a>
      <Header />

      <main id="main">
        {/* ---- Hero ---------------------------------------------------- */}
        <section className="hx" aria-labelledby="hx-title">
          <div className="hx__glow" aria-hidden="true" />
          <div className="wrap hx__grid">
            <div className="hx__say">
              <h1 className="hx__title" id="hx-title">
                {hero.headline.slice(0, cut)}
                <span className="hx__ink">{hero.headline.slice(cut)}</span>
              </h1>
              <p className="hx__lede">{hero.lede}</p>
              <p className="hx__lede">{hero.more}</p>
              <p className="hx__tag">{hero.tagline}</p>
              <div className="hx__actions">
                <Link href={hero.primary.href} className="btn btn--solid">
                  {hero.primary.label}
                </Link>
                <Link href={hero.secondary.href} className="btn btn--ghost">
                  {hero.secondary.label}
                  <Arrow />
                </Link>
              </div>
            </div>
            <div className="hx__art">
              <div className="hx__facets" aria-hidden="true">
                <HeroFacets3D className="hx__canvas" />
              </div>
              <HeroArt />
            </div>
          </div>

        </section>

        {/* ---- The two figures, as glass on the brand, with their limits ---- */}
        <section className="evx" aria-labelledby="hx-ev">
          {/* Revyve's own facet field, from the live site, drifting behind. */}
          <div className="evx__facets evx__facets--a" aria-hidden="true">
            <FacetField variant="web" />
          </div>
          <div className="evx__facets evx__facets--b" aria-hidden="true">
            <FacetField variant="web" />
          </div>
          <div className="wrap hx__evidence">
            <div className="hx__evHead">
              <h2 className="hx__evTitle" id="hx-ev">
                {evidence.heading}
              </h2>
              <p className="hx__evNote">{evidence.note}</p>
              <Link href={evidence.link.href} className="tlink">
                {evidence.link.label}
                <Arrow />
              </Link>
            </div>
            <ul className="hx__stats">
              {evidence.stats.map((s, i) => (
                <li className="glass stat rv" key={s.figure}>
                  <p className="stat__fig">{s.figure}</p>
                  <StatMark i={i} />
                  <p className="stat__cap">{s.caption}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---- The platform, as a bento -------------------------------- */}
        <section className="sec" aria-labelledby="bx-title">
          <div className="wrap">
            <header className="sec__head sec__head--split rv">
              <h2 className="sec__title" id="bx-title">
                {revyveAI.heading}
              </h2>
              <p className="sec__lede">{revyveAI.lede}</p>
            </header>

            <div className="bento">
              <article className="card card--lit bento__a rv">
                <div className="card__text">
                  <h3 className="card__title">{revyveAI.points[0].title}</h3>
                  <p className="card__body">{revyveAI.points[0].body}</p>
                </div>
                <SystemsArt className="card__art card__art--right" />
              </article>

              <article className="card card--soft bento__b rv">
                <div className="card__text">
                  <h3 className="card__title">{revyveAI.points[1].title}</h3>
                  <p className="card__body">{revyveAI.points[1].body}</p>
                </div>
                <ModelsArt className="card__art" />
              </article>

              <article className="card card--soft bento__c rv">
                <div className="card__text">
                  <h3 className="card__title">{revyveAI.points[2].title}</h3>
                  <p className="card__body">{revyveAI.points[2].body}</p>
                </div>
                <LayerArt className="card__art" />
              </article>

              <article className="card card--lit bento__d rv">
                <div className="card__text">
                  <p className="card__statement">{revyveAI.close}</p>
                </div>
                <Link href={revyveAI.closeLink.href} className="btn btn--onlit">
                  {revyveAI.closeLink.label}
                  <Arrow />
                </Link>
                {/* Revyve's own facet field, from the live site, set into the corner. */}
                <div className="bento__facets" aria-hidden="true">
                  <FacetField variant="web" />
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ---- Built inside operations -------------------------------- */}
        <section className="sec sec--tint" aria-labelledby="op-title">
          <div className="wrap ops">
            <div className="ops__say">
              <h2 className="sec__title" id="op-title">
                {operations.heading}
              </h2>
              <p className="ops__lead">{operations.lead}</p>
              <div className="ops__prose">
                {operations.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <p className="ops__note">
                <Linked text={operations.note.text} links={operations.note.links} className="tlink tlink--inline" />
              </p>
            </div>
            <div className="card card--lit ops__card rv">
              <OwnershipArt className="ops__art" />
            </div>
          </div>
        </section>

        {/* ---- The team -------------------------------------------------- */}
        <section className="sec" aria-labelledby="tm-title">
          <div className="wrap tmx">
            <h2 className="sec__title sec__title--center" id="tm-title">
              {team.heading}
            </h2>
            <p className="sec__lede sec__lede--center">{team.body}</p>
            <div className="glass tmx__logos rv" aria-label={TEAM_BACKGROUND_HEADING}>
              <div className="tmx__track">
                {[0, 1].map((copy) => (
                  <ul className="tmx__row" key={copy} aria-hidden={copy === 1 || undefined}>
                    {TEAM_BACKGROUND.map((l) => (
                      <li key={l.src} className={l.solid ? "tmx__logo tmx__logo--solid" : "tmx__logo"}>
                        <img src={l.src} alt={copy ? "" : l.alt} width={l.w} height={l.h} loading="lazy" decoding="async" />
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
            <Link href={team.link.href} className="btn btn--ghost tmx__go">
              {team.link.label}
              <Arrow />
            </Link>
          </div>
        </section>

        {/* ---- The four doors ------------------------------------------ */}
        <section className="sec sec--tint" aria-label="Where to start">
          <div className="wrap doorsx">
            {([
              [practices, "practices"],
              [sell, "sell"],
              [work, "work"],
            ] as const).map(([r, kind]) => (
              <article className="card card--soft door rv" key={r.title}>
                <div className="card__text">
                  <h2 className="card__title card__title--lg">{r.title}</h2>
                  <p className="card__body">{r.body}</p>
                </div>
                <DoorScene kind={kind} />
                {r.link && (
                  <Link href={r.link.href} className="btn btn--ghost door__go">
                    {r.link.label}
                    <Arrow />
                  </Link>
                )}
              </article>
            ))}
            <article className="card card--lit door rv">
              <div className="card__text">
                <h2 className="card__title card__title--lg">{investors.title}</h2>
                <p className="card__body">
                  <Linked text={investors.body} links={investors.bodyLinks} className="tlink tlink--inline" />
                </p>
              </div>
              <DoorScene kind="investors" />
              <DemoDialog className="door__demo" />
            </article>
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

      {/* The glass, drawn from app/v4/glass.json, and its tuning panel (dev only). */}
      <GlassFilter />
      <GlassPanel />
    </>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" className="arrow" aria-hidden="true">
      <path d="M4 10h11M11 5.5 15.5 10 11 14.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * A small mark per figure, each with its own quiet loop: the practices as a
 * row of bars that ripple in a wave; the workflow cost as a line stepping
 * down that draws itself and lands on its last point.
 */
function StatMark({ i }: { i: number }) {
  return (
    <svg viewBox="0 0 200 40" className="stat__mark" preserveAspectRatio="xMinYMid meet" aria-hidden="true">
      {i === 0 ? (
        Array.from({ length: 24 }, (_, k) => (
          <rect
            key={k}
            className="stat__bar"
            x={k * 8.3}
            y={6}
            width={4.2}
            height={28}
            rx={2.1}
            fill="currentColor"
            opacity={0.25 + (k / 24) * 0.75}
            style={{ ["--k" as string]: k }}
          />
        ))
      ) : (
        <>
          <path d="M4 10h44l14 6h40l14 8h40l14 6h26" className="stat__ghost" />
          <path d="M4 10h44l14 6h40l14 8h40l14 6h26" pathLength={100} className="stat__line" />
          <circle cx="196" cy="30" r="4.5" className="stat__end" />
        </>
      )}
    </svg>
  );
}
