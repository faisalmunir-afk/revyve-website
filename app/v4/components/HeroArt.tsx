/**
 * The hero's picture: what the headline says, shown as the product would
 * show it. A glass window holds a work queue whose rows get checked one by
 * one, and a report building beside it; three glass chips float around it,
 * each a phrase from the hero's own sentence: "claim-status checks",
 * "reporting", "billers review exceptions". No figures, no names: the rows
 * are bars, as in the reference, so nothing reads as invented data.
 *
 * Built in HTML and SVG so it stays sharp and light. The ticks and the
 * float are CSS animations and stop for reduced motion.
 */
export default function HeroArt() {
  const ROWS = [0.82, 0.64, 0.74, 0.56, 0.7];
  return (
    <div className="ha" aria-hidden="true">
      {/* The dotted grid and the marks behind the window. */}
      <svg className="ha__grid" viewBox="0 0 560 480">
        <path d="M60 70H500V420H60Z" fill="none" stroke="currentColor" strokeDasharray="3 7" opacity="0.5" />
        <path d="M280 20V460M20 250H540" fill="none" stroke="currentColor" strokeDasharray="3 7" opacity="0.35" />
        <path d="M36 120h16M44 112v16M512 360h16M520 352v16M490 52h12M496 46v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      </svg>

      {/* The window. */}
      <div className="ha__win glass">
        <div className="ha__bar">
          <span className="ha__brand">
            <svg viewBox="0 0 24 24" className="ha__check">
              <path d="M4 12.5 9.5 18 20 6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="ha__pill" />
          <span className="ha__dots">
            <i />
            <i />
          </span>
        </div>
        <div className="ha__body">
          <div className="ha__side">
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} className={i === 0 ? "ha__nav is-on" : "ha__nav"} />
            ))}
          </div>
          <div className="ha__queue">
            <span className="ha__h" />
            {ROWS.map((w, i) => (
              <div className="ha__row" key={i} style={{ ["--i" as string]: i }}>
                <span className="ha__doc" />
                <span className="ha__line" style={{ width: `${w * 100}%` }} />
                <span className={i === 3 ? "ha__tick ha__tick--flag" : "ha__tick"}>
                  {i === 3 ? (
                    <svg viewBox="0 0 16 16">
                      <circle cx="8" cy="5.5" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M3.5 13c.6-2.4 2.4-3.6 4.5-3.6s3.9 1.2 4.5 3.6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 16 16">
                      <path d="M3.5 8.4l2.9 2.9 6-6.3" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
              </div>
            ))}
          </div>
          <div className="ha__report">
            <span className="ha__h ha__h--sm" />
            <div className="ha__donut">
              <svg viewBox="0 0 64 64">
                <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeWidth="9" opacity="0.14" />
                <circle className="ha__arc" cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="round" pathLength={100} strokeDasharray="72 100" transform="rotate(-90 32 32)" />
              </svg>
            </div>
            <div className="ha__bars">
              {[0.45, 0.7, 0.55, 0.9, 0.62, 0.8].map((h, i) => (
                <span key={i} style={{ height: `${h * 100}%`, ["--i" as string]: i }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* The three things the hero names, floating. */}
      <span className="ha__chip glass ha__chip--a">
        <i className="ha__pulse" />
        claim-status checks
      </span>
      <span className="ha__chip glass ha__chip--b">
        <svg viewBox="0 0 16 16">
          <path d="M3 13V8M8 13V4M13 13V6.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        reporting
      </span>
      <span className="ha__chip glass ha__chip--c">
        <svg viewBox="0 0 16 16">
          <circle cx="8" cy="5.5" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3.5 13c.6-2.4 2.4-3.6 4.5-3.6s3.9 1.2 4.5 3.6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        billers review exceptions
      </span>
    </div>
  );
}
