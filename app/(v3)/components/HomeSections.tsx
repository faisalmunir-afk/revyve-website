import Link from "next/link";
import { HOME } from "../../content/home";
import { TEAM_BACKGROUND, TEAM_BACKGROUND_HEADING } from "../../content/site";
import Linked from "./Linked";

/**
 * Three home sections added in the client's November 2026 rewrite.
 *
 *   Evidence    the two figures, on paper, set large like a report; each
 *               keeps its caption, and the note on what they do not cover
 *               sits directly under them, never apart
 *   Operations  built inside operations: the claim in bold on the left,
 *               the three paragraphs on the right, on the brand
 *   TeamBand    the four founders in one sentence, with the founders'
 *               background logos running as the About page has them
 *
 * Every string comes from app/content/home.ts and site.ts, verbatim. The
 * figures are the client's own.
 */

export function Evidence() {
  const { heading, stats, note, link } = HOME.evidence;
  return (
    <section className="ev" data-tone="light" aria-labelledby="ev-title">
      <div className="fp__inner">
        <h2 className="ev__title" id="ev-title">
          {heading}
        </h2>
        <ul className="ev__stats">
          {stats.map((s) => (
            <li className="ev__stat" key={s.figure}>
              <p className="ev__fig">{s.figure}</p>
              <p className="ev__cap">{s.caption}</p>
            </li>
          ))}
        </ul>
        <p className="ev__note">{note}</p>
        <Link href={link.href} className="ev__link">
          {link.label}
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </section>
  );
}

export function Operations() {
  const { heading, lead, paragraphs, note } = HOME.operations;
  return (
    <section className="sy__people op" aria-labelledby="op-title">
      <div className="fp__inner sy__peopleGrid">
        <div className="op__say">
          <h2 className="fp__h2 op__title" id="op-title">
            {heading}
          </h2>
          <p className="op__lead">{lead}</p>
        </div>
        <div className="op__prose">
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="op__note">
            <Linked text={note.text} links={note.links} className="about__link" />
          </p>
        </div>
      </div>
    </section>
  );
}

export function TeamBand() {
  const { heading, body, link } = HOME.team;
  return (
    <section className="tb" aria-labelledby="tb-title">
      <div className="fp__inner tb__head">
        <h2 className="fp__h2 tb__title" id="tb-title">
          {heading}
        </h2>
        <p className="tb__body">{body}</p>
      </div>
      {/* The founders' background, right to left, laid twice for a seamless
          loop; the copy is hidden from assistive tech. */}
      <div className="about__marquee tb__marquee" aria-label={TEAM_BACKGROUND_HEADING}>
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
      <div className="fp__inner">
        <Link href={link.href} className="rai__link tb__link">
          {link.label}
        </Link>
      </div>
    </section>
  );
}
