"use client";

import Link from "next/link";
import { FOOTER_NAV, CONTACT } from "../../content/site";

/**
 * The footer.
 *
 * The Backbone closes: a last band of the structure's light along the top
 * edge, the mark, the full navigation, and the one address the company
 * actually publishes.
 *
 * Every string is verbatim from app/content/site.ts. The year is computed,
 * not written, so it never goes stale.
 */
export default function SiteFooter() {
  return (
    <footer className="ft">
      <span className="ft__beam" aria-hidden="true" />

      <div className="ft__inner">
        <div className="ft__brand">
          <img
            src="/brand/revyve-wordmark.png"
            alt="Revyve"
            width={760}
            height={150}
            className="ft__wordmark"
          />
          <p className="ft__legal">{CONTACT.legal}</p>
        </div>

        <nav className="ft__nav" aria-label="Footer">
          {FOOTER_NAV.map((l) => (
            <Link key={l.href} href={l.href} className="ft__link">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ft__say">
          <a className="ft__mail" href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>
        </div>
      </div>

      <div className="ft__base">
        <span className="ft__year">
          &copy; {new Date().getFullYear()} Revyve, Inc.
        </span>
      </div>
    </footer>
  );
}
