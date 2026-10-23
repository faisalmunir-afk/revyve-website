import Link from "next/link";
import { HOME } from "../../content/home";

/**
 * The four routes.
 *
 * Four audiences, four doors — and they are not the same size, because the
 * audiences are not. "Sell your firm" and "Move your billing" are the two
 * things the whole page exists to make happen, so they are the two large
 * doors. "Work with us" and "Investors" are real but secondary, and sit
 * beneath as a quieter pair. Four equal cards would say the page has no
 * idea who it is for.
 *
 * The two big doors answer the hand: hover one and it widens, pushing the
 * other narrower, and in the room that opens on its right its mark draws
 * itself large, landing with a bounce. The mark is drawn twice in the
 * markup — small at rest in the corner, large for the hover — so neither
 * has to move or rescale and the draw-on is a plain stroke offset.
 *
 * Each door carries a mark drawn for it from its own sentence: a firm with
 * its door lit, claims on the move, a seat at a desk in the billing office,
 * a letter. Nothing is a product or a logo.
 *
 * The whole door is the link, through a stretched pseudo-element on the
 * action, so the link's accessible name is its label and not the whole
 * card read aloud.
 *
 * Every string comes from app/content/home.ts, verbatim. The copy gives
 * this section no heading, so none is invented: the four titles are the
 * headings.
 */

const INK = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** One mark per door, each from the sentence beside it. */
function DoorMark({ i, className }: { i: number; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      aria-hidden="true"
      focusable="false"
    >
      {/* A firm, with its door lit. */}
      {i === 0 && (
        <g {...INK}>
          <path className="dm__line" pathLength={1} d="M9 42V12l15-7 15 7v30" />
          <path className="dm__line" pathLength={1} d="M5 42h38" />
          <path
            className="dm__line"
            pathLength={1}
            d="M16 19h4M28 19h4M16 26h4M28 26h4"
          />
          <path
            className="dm__fill"
            d="M20 42v-9a4 4 0 0 1 8 0v9z"
            fill="currentColor"
            stroke="none"
          />
        </g>
      )}

      {/* Claims, on the move. */}
      {i === 1 && (
        <g {...INK}>
          <path className="dm__line" pathLength={1} d="M8 14h18l5 5v15H8z" />
          <path className="dm__line" pathLength={1} d="M26 14v5h5M13 24h10M13 29h7" />
          <path
            className="dm__line"
            pathLength={1}
            d="M12 10h17l5 5M16 6h17l5 5"
            strokeOpacity="0.45"
          />
          <path className="dm__line" pathLength={1} d="M31 39h12m-4-4 4 4-4 4" />
        </g>
      )}

      {/* A seat at a desk in the billing office. */}
      {i === 2 && (
        <g {...INK}>
          <path className="dm__line" pathLength={1} d="M4 24h40M10 24v16M38 24v16" />
          <path
            className="dm__line"
            pathLength={1}
            d="M17 24v-7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v7"
          />
          <path className="dm__line" pathLength={1} d="M22 14V9a2 2 0 0 1 4 0v5" />
          <path
            className="dm__fill"
            d="M15 24h18v3H15z"
            fill="currentColor"
            stroke="none"
          />
        </g>
      )}

      {/* A letter. */}
      {i === 3 && (
        <g {...INK}>
          <path className="dm__line" pathLength={1} d="M6 13h36v24H6z" />
          <path className="dm__line" pathLength={1} d="M6 15l18 12 18-12" />
          <path
            className="dm__line"
            pathLength={1}
            d="M31 41l9-9 3 3-9 9h-3z"
            strokeOpacity="0.75"
          />
        </g>
      )}
    </svg>
  );
}

export default function Routes() {
  const routes = HOME.routes;

  return (
    <section className="doors" data-tone="light">
      <div className="doors__inner">
        {/* The two that matter most. */}
        <div className="doors__pair">
          {routes.slice(0, 2).map((r, i) => (
            <article
              key={r.title}
              className="doors__door doors__door--main"
              style={{ ["--i" as string]: i }}
            >
              <DoorMark i={i} className="doors__mark" />
              <h2 className="doors__title">{r.title}</h2>
              <p className="doors__body">{r.body}</p>
              <Link href={r.link.href} className="doors__go">
                {r.link.label}
                <span className="doors__arrow" aria-hidden="true">
                  →
                </span>
              </Link>
              {/* Drawn large into the room the hover opens. */}
              <DoorMark i={i} className="doors__big" />
            </article>
          ))}
        </div>

        {/* The quieter pair. */}
        <ul className="doors__rest">
          {routes.slice(2).map((r, i) => (
            <li
              key={r.title}
              className="doors__door doors__door--side"
              style={{ ["--i" as string]: i + 2 }}
            >
              <DoorMark i={i + 2} className="doors__mark" />
              <h2 className="doors__title">{r.title}</h2>
              <p className="doors__body">{r.body}</p>
              <Link href={r.link.href} className="doors__go">
                {r.link.label}
                <span className="doors__arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
