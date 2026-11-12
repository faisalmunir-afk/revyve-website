/**
 * The hero's picture, told as the hero's own sentence, in five scenes on
 * one 12-second loop:
 *
 *   1  Revyve AI docks onto a practice's own work queue
 *      ("works inside the systems practices already use")
 *   2  an agent moves down the claims, checking each; one is an exception
 *      ("claim-status checks")
 *   3  the report builds beside the queue ("reporting")
 *   4  the exception lifts out and goes to a biller
 *      ("experienced billers review exceptions")
 *   5  the biller signs it off and the queue is done
 *      ("stay accountable for the result")
 *
 * A caption under the window names the scene in the hero's words, with the
 * five steps filling as it plays. Rows are bars, so nothing reads as
 * invented data. All motion is CSS; for reduced motion the picture shows
 * the finished state, still.
 */
const ROWS = [0.8, 0.62, 0.72, 0.55, 0.68];
const EXC = 3;

function Tick() {
  return (
    <svg viewBox="0 0 16 16">
      <path d="M3.5 8.4l2.9 2.9 6-6.3" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Person({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className}>
      <circle cx="8" cy="5.5" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 13c.6-2.4 2.4-3.6 4.5-3.6s3.9 1.2 4.5 3.6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function V() {
  return (
    <span className="hs__v">
      <img src="/brand/revyve-logo.png" alt="" width={600} height={359} />
    </span>
  );
}

export default function HeroStory({ steps }: { steps: readonly string[] }) {
  return (
    <div className="hs" aria-hidden="true">
      <svg className="hs__grid" viewBox="0 0 560 520">
        <path d="M70 60H510V440H70Z" fill="none" stroke="currentColor" strokeDasharray="3 7" opacity="0.45" />
        <path d="M290 16V500M24 250H548" fill="none" stroke="currentColor" strokeDasharray="3 7" opacity="0.3" />
        <path d="M40 130h16M48 122v16M516 380h16M524 372v16M496 40h12M502 34v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
      </svg>

      {/* 1. Revyve AI, docking onto the practice's own system. */}
      <span className="hs__plug glass">
        <V />
        Revyve AI
      </span>

      <div className="hs__win glass">
        <div className="hs__bar">
          <i />
          <i />
          <i />
          <span className="hs__title" />
        </div>
        <div className="hs__body">
          {/* 2. The work queue, checked claim by claim. */}
          <div className="hs__queue">
            <span className="hs__h" />
            <span className="hs__scan">
              <V />
            </span>
            {ROWS.map((w, i) => (
              <div className={`hs__row hs__row--${i}`} key={i}>
                <span className="hs__doc" />
                <span className="hs__line" style={{ width: `${w * 100}%` }} />
                <span className={`hs__st hs__st--${i}`}>
                  <Tick />
                </span>
                {i === EXC && (
                  <span className="hs__flag">
                    <Person />
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* 3. The report, building. */}
          <div className="hs__report">
            <span className="hs__h hs__h--sm" />
            <svg viewBox="0 0 64 64" className="hs__donut">
              <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeWidth="9" opacity="0.14" />
              <circle className="hs__arc" cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="round" pathLength={100} transform="rotate(-90 32 32)" />
            </svg>
            <div className="hs__bars">
              {[0.45, 0.7, 0.55, 0.9, 0.62, 0.8].map((h, k) => (
                <span key={k} className={`hs__b hs__b--${k}`} style={{ height: `${h * 100}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. The exception, lifted out and handed over. */}
      <div className="hs__exc glass">
        <span className="hs__doc" />
        <span className="hs__line" style={{ width: "54%" }} />
        <span className="hs__flag hs__flag--on">
          <Person />
        </span>
      </div>

      {/* 5. The biller, who signs it off. */}
      <div className="hs__biller glass">
        <span className="hs__avatar">
          <Person />
        </span>
        <span className="hs__who">
          <span className="hs__skel" />
          <span className="hs__skel hs__skel--s" />
        </span>
        <span className="hs__stamp">
          <Tick />
        </span>
      </div>

      {/* The caption: the scene, in the hero's words. */}
      <div className="hs__cap glass">
        <ol className="hs__steps">
          {steps.map((s, i) => (
            <li key={s} className={`hs__seg hs__seg--${i}`}>
              <i />
            </li>
          ))}
        </ol>
        <div className="hs__labels">
          {steps.map((s, i) => (
            <span key={s} className={`hs__label hs__label--${i}`}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
