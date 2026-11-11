import { DEMO } from "../../content/demo";

/**
 * One scene per door card, each built from the card's own sentence. The
 * chips carry phrases lifted from that sentence; nothing else is written.
 *
 *   practices  a claim list being worked: every row ticked, one flagged to
 *              a biller ("every claim followed up", "every action visible")
 *   sell       the firm, with its people and customers kept in orbit round
 *              it ("the people and customers")
 *   work       two lanes meeting at one desk ("Engineers", "operators")
 *   investors  the client's own product demo, its real poster frame, in
 *              glass (decorative; the button under the text opens it)
 */
export default function DoorScene({ kind }: { kind: "practices" | "sell" | "work" | "investors" }) {
  if (kind === "practices") {
    return (
      <div className="ds ds--practices" aria-hidden="true">
        <div className="ds__sheet glass">
          {[0.8, 0.62, 0.72, 0.54].map((w, i) => (
            <div className="ds__row" key={i} style={{ ["--i" as string]: i }}>
              <span className="ds__doc" />
              <span className="ds__line" style={{ width: `${w * 100}%` }} />
              <span className={i === 2 ? "ds__tick ds__tick--flag" : "ds__tick"} />
            </div>
          ))}
        </div>
        <span className="ds__chip glass ds__chip--a">every claim followed up</span>
        <span className="ds__chip glass ds__chip--b">every action visible</span>
      </div>
    );
  }
  if (kind === "sell") {
    return (
      <div className="ds ds--sell" aria-hidden="true">
        <span className="ds__ring ds__ring--1" />
        <span className="ds__ring ds__ring--2" />
        <div className="ds__orbit">
          <span className="ds__person" />
          <span className="ds__person ds__person--b" />
          <span className="ds__person ds__person--c" />
        </div>
        <div className="ds__firm glass">
          <svg viewBox="0 0 48 48">
            <path d="M9 42V12l15-7 15 7v30M5 42h38M16 19h4M28 19h4M16 26h4M28 26h4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 42v-9a4 4 0 0 1 8 0v9z" fill="currentColor" />
          </svg>
        </div>
        <span className="ds__chip glass ds__chip--c">the people and customers</span>
      </div>
    );
  }
  if (kind === "work") {
    return (
      <div className="ds ds--work" aria-hidden="true">
        <svg className="ds__lanes" viewBox="0 0 300 200">
          <path d="M20 50C120 50 120 110 190 110" className="ds__lane" />
          <path d="M20 170C120 170 120 110 190 110" className="ds__lane" />
          <path d="M20 50C120 50 120 110 190 110" pathLength={100} className="ds__comet" />
          <path d="M20 170C120 170 120 110 190 110" pathLength={100} className="ds__comet" style={{ animationDelay: "1.1s" }} />
        </svg>
        <span className="ds__chip glass ds__chip--d">Engineers</span>
        <span className="ds__chip glass ds__chip--e">operators</span>
        <div className="ds__desk glass">
          <svg viewBox="0 0 48 48">
            <path d="M4 24h40M10 24v16M38 24v16M17 24v-7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v7M22 14V9a2 2 0 0 1 4 0v5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    );
  }
  return (
    <div className="ds ds--investors" aria-hidden="true">
      <div className="ds__frame">
        <img src={DEMO.video.poster} alt="" width={1440} height={900} loading="lazy" decoding="async" />
        <span className="ds__play">
          <svg viewBox="0 0 24 24">
            <path d="M9 6.5v11l9-5.5z" fill="currentColor" />
          </svg>
        </span>
      </div>
    </div>
  );
}
