import Link from "next/link";
import { CONTACT, FOOTER_NAV } from "../../content/site";
import { HOME } from "../../content/home";

/**
 * The footer, as in the reference: one block in the brand's violet, the
 * wordmark and the company's own line on the left, the routes in three
 * columns on the right, and the name set huge and faint along the bottom
 * edge. No invented column headings, no copyright year.
 */
export default function Footer() {
  const cols = [FOOTER_NAV.slice(0, 3), FOOTER_NAV.slice(3, 6), FOOTER_NAV.slice(6)];
  return (
    <footer className="ft">
      <div className="wrap ft__in">
        <div className="ft__say">
          <Link href="/v4/" className="ft__brand" aria-label="Revyve, home">
            <img src="/brand/revyve-wordmark.png" alt="" width={480} height={94} loading="lazy" />
          </Link>
          <p className="ft__line">{HOME.hero.tagline}</p>
          <a className="ft__mail" href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>
        </div>
        <nav className="ft__nav" aria-label="Footer">
          {cols.map((c, i) => (
            <ul key={i} className="ft__col">
              {c.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="ft__link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </nav>
        <p className="ft__legal">{CONTACT.legal}</p>
      </div>
      <p className="ft__giant" aria-hidden="true">
        Revyve
      </p>
    </footer>
  );
}
