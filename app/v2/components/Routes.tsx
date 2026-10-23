"use client";

import Link from "next/link";
import { HOME } from "../../content/home";
import GhostMark from "./GhostMark";
import {
  Handshake,
  Receipt,
  UsersThree,
  TrendUp,
} from "@phosphor-icons/react/dist/ssr";

/** One mark per route, in the original site's order. */
const ROUTE_ICONS = [Handshake, Receipt, UsersThree, TrendUp];

/**
 * The four routes in.
 *
 * Four equal cards is what this content usually becomes, and it flattens a
 * real difference: two of these routes are the business (a practice moving
 * its billing, an owner selling a firm) and two are not (a job, an investor
 * note). So the first two are doors, full height with the structure's light
 * on their edge; the last two are a quiet pair of lines beneath them.
 *
 * The order is the original site's order. Every string is verbatim from
 * app/content/home.ts.
 */
export default function Routes() {
  const [a, b, ...rest] = HOME.routes;
  const major = [a, b];

  return (
    <section className="rt" aria-labelledby="rt-title">
      <GhostMark id="gc" className="ghost ghost--close" opacity={0.07} />
      <h2 className="visually-hidden" id="rt-title">
        Ways to work with Revyve
      </h2>

      <div className="rt__inner">
        <ul className="rt__major">
          {major.map((r, i) => (
            <li key={r.title} className="rt__door">
              <Link href={r.link.href} className="rt__doorLink">
                <span className="rt__edge" aria-hidden="true" />
                <span className="tile tile--lg rt__icon" aria-hidden="true">
                  {(() => {
                    const Icon = ROUTE_ICONS[i] ?? Handshake;
                    return <Icon size={27} weight="duotone" />;
                  })()}
                </span>
                <h3 className="rt__title">{r.title}</h3>
                <p className="rt__body">{r.body}</p>
                <span className="rt__cta">
                  {r.link.label}
                  <svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true">
                    <path
                      d="M3 8h9.5M8.5 4l4 4-4 4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <ul className="rt__minor">
          {rest.map((r, i) => (
            <li key={r.title} className="rt__line">
              <h3 className="rt__lineTitle">
                <span className="tile rt__lineIcon" aria-hidden="true">
                  {(() => {
                    const Icon = ROUTE_ICONS[i + 2] ?? UsersThree;
                    return <Icon size={20} weight="duotone" />;
                  })()}
                </span>
                {r.title}
              </h3>
              <p className="rt__lineBody">{r.body}</p>
              <Link href={r.link.href} className="rt__lineLink">
                {r.link.label}
                <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true">
                  <path
                    d="M3 8h9.5M8.5 4l4 4-4 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
