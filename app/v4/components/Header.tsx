import Link from "next/link";
import { NAV } from "../../content/site";
import { v4 } from "./links";

/**
 * The header: the wordmark left, the six routes in one glass pill in the
 * middle, the one action right, as in the reference. It floats over the
 * page and the page shows through the glass. On a narrow screen the pill
 * folds into a menu button (a native <details>, so it works without
 * script).
 */
export default function Header({ current }: { current?: string }) {
  return (
    <header className="hd">
      <div className="hd__in">
        <Link href="/v4/" className="hd__brand" aria-label="Revyve, home">
          <img src="/brand/revyve-wordmark-dark.png" alt="" width={480} height={94} />
        </Link>

        <nav className="hd__nav glass" aria-label="Main">
          {NAV.filter((l) => l.href !== "/contact/").map((l) => (
            <Link key={l.href} href={v4(l.href)} className="hd__link" aria-current={l.href === current ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact/" className="btn btn--solid hd__cta">
          Contact
        </Link>

        <details className="hd__menu">
          <summary className="glass hd__toggle">Menu</summary>
          <div className="glass hd__sheet">
            {NAV.map((l) => (
              <Link key={l.href} href={v4(l.href)} className="hd__sheetLink" aria-current={l.href === current ? "page" : undefined}>
                {l.label}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
