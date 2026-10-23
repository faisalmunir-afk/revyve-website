import Link from "next/link";
import { CONTACT, FOOTER_NAV } from "../../content/site";
import MarkStep from "./MarkStep";

/**
 * The footer.
 *
 * Its own band: a step up from the abyss, with one plane of light along
 * its top edge — the layer from Revyve AI, as the floor the page stands
 * on — so it is never mistaken for the section above it.
 *
 * Compact, and in the order a reader needs: the wordmark, then the
 * address large in the serif, then the legal line, all down the left; the
 * nine routes in three short columns on the right; and on the base, the
 * Revyve mark complete — it assembled face by face through the first
 * hundred days, and here at the end it lays its faces one more time as
 * the footer arrives. Nothing else — no newsletter, no social row, no
 * invented copyright year.
 *
 * Every string comes from app/content/site.ts, verbatim.
 */
export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot__edge" aria-hidden="true" />

      <div className="foot__inner">
        <div className="foot__say">
          <Link href="/" className="foot__brand" aria-label="Revyve, home">
            <img
              src="/brand/revyve-wordmark.png"
              alt=""
              width={760}
              height={150}
              loading="lazy"
              decoding="async"
              className="foot__wordmark"
            />
          </Link>

          <a className="foot__mail" href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>

          <p className="foot__legal">{CONTACT.legal}</p>
        </div>

        <nav className="foot__nav" aria-label="Footer">
          <ul className="foot__list">
            {FOOTER_NAV.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="foot__link">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MarkStep done={10} className="foot__mark" />
      </div>
    </footer>
  );
}
