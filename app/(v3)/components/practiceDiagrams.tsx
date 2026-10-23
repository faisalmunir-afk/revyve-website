import { Mark } from "./aiDiagrams";

/**
 * Drawings for /for-practices/, in the same hand as the rest of the site.
 *
 *   ClaimGap    the lead: a claim goes out and the line after it would be
 *               a gap; instead it is worked every day — status checked,
 *               reconciled, the next step queued — the exceptions go to a
 *               biller, and the evidence sits at the end for the practice
 *               to see
 *   ReasonMark  one mark per reason: a share of what is collected; the
 *               practice's own system, kept; an aged claim moved on; a
 *               person on what matters; a physician
 *   StartClaims the start: unpaid claims brought in, and for each, the steps
 *               we automate and where a person stays responsible
 *
 * Every label is a phrase lifted from the copy beside it, never new copy.
 * Every stroke that draws itself carries `pathLength="1"`; the data
 * attributes are the contract with the stylesheet. Unarmed, all of it
 * renders finished.
 */

const INK = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const C = {
  violet: "#6420d4",
  lilac: "#b689f8",
  ice: "#dce6ff",
  signal: "#6fe3d6",
};

const beat = (ms: number) => ({ ["--d" as string]: `${ms}ms` });

function Label({ x, y, children, anchor = "middle", live }: { x: number; y: number; children: string; anchor?: "start" | "middle" | "end"; live?: boolean }) {
  return (
    <text className="sd__label" x={x} y={y} textAnchor={anchor} fill={live ? C.signal : C.ice} fillOpacity={live ? 0.92 : 0.66}>
      {children}
    </text>
  );
}

function Person({ cx, cy, live }: { cx: number; cy: number; live?: boolean }) {
  const c = live ? C.signal : C.ice;
  return (
    <g {...INK} stroke={c} strokeWidth="1.5">
      <circle cx={cx} cy={cy} r="7" fill="#1b0f45" />
      <path d={`M${cx - 13} ${cy + 21}c0-7.2 5.8-13 13-13s13 5.8 13 13`} />
    </g>
  );
}

/* ---- The gap, closed --------------------------------------------------- */

export function ClaimGap({ className }: { className?: string }) {
  const Y = 120;
  const ticks = [128, 158, 188, 218, 248, 278, 308, 338];
  const groups = [
    { x: 143, label: "check status" },
    { x: 233, label: "reconcile" },
    { x: 323, label: "queue the next step" },
  ];
  return (
    <svg className={className} viewBox="0 0 504 260" aria-hidden="true" focusable="false">
      {/* The claim going out. */}
      <g data-stay="" style={beat(0)}>
        <rect x={20} y={Y - 34} width={62} height={68} rx="9" fill="#3d1b8f" stroke={C.lilac} strokeOpacity="0.6" strokeWidth="1.3" />
        <Mark kind="doc" cx={51} cy={Y} size={26} tone="lit" />
        <Label x={51} y={Y + 56}>a claim going out</Label>
      </g>

      {/* The gap, as it would be: a dashed span with nothing in it. */}
      <path data-stay="" style={beat(200)} {...INK} stroke={C.lilac} strokeOpacity="0.28" strokeWidth="1.3" strokeDasharray="4 6" d={`M112 ${Y - 52}V${Y - 40}H354V${Y - 52}`} />
      <g data-stay="" style={beat(300)}>
        <Label x={233} y={Y - 60}>the gap</Label>
      </g>

      {/* The line after it, worked. */}
      <path data-draw="" pathLength={1} style={beat(400)} {...INK} stroke={C.ice} strokeWidth="2" d={`M82 ${Y}H430`} />

      {/* Every day: a tick on the line. */}
      {ticks.map((x, i) => (
        <g key={x} data-pop="" style={beat(700 + i * 110)}>
          <circle cx={x} cy={Y} r="6.5" fill="#07041a" stroke={C.signal} strokeWidth="1.3" />
          <path {...INK} stroke={C.signal} strokeWidth="1.6" d={`M${x - 3} ${Y}l2 2 4-4.2`} />
        </g>
      ))}
      {groups.map((g, i) => (
        <g key={g.label} data-stay="" style={beat(1000 + i * 260)}>
          <Label x={g.x} y={Y - 16} live>
            {g.label}
          </Label>
        </g>
      ))}

      {/* The exceptions, to an experienced biller. */}
      <path data-draw="" pathLength={1} style={beat(1700)} {...INK} stroke={C.lilac} strokeOpacity="0.65" strokeWidth="1.5" d={`M248 ${Y + 7}C248 ${Y + 40} 260 ${Y + 52} 284 ${Y + 52}`} />
      <g data-pop="" style={beat(2000)}>
        <Person cx={306} cy={Y + 38} />
        <Label x={306} y={Y + 82}>experienced billers</Label>
        <Label x={232} y={Y + 74} anchor="end">the exceptions</Label>
      </g>

      {/* Every action, and the evidence behind it. */}
      <g data-pop="" style={beat(2200)}>
        <rect x={430} y={Y - 30} width={58} height={60} rx="9" fill="#1b0f45" stroke={C.signal} strokeOpacity="0.7" strokeWidth="1.4" />
        <Mark kind="checklist" cx={459} cy={Y} size={24} tone="lit" />
        <Label x={459} y={Y + 52} live>the evidence</Label>
      </g>
    </svg>
  );
}

/* ---- The five reasons ------------------------------------------------- */

export function ReasonMark({ i, className }: { i: number; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <g {...INK} stroke={C.lilac} strokeWidth="1.6">
        {i === 0 && (
          <>
            {/* What we collect, and our share of it. */}
            <circle cx="32" cy="32" r="20" stroke={C.ice} strokeOpacity="0.5" />
            <path d="M32 32V12A20 20 0 0 1 50.4 24.2Z" fill={C.signal} fillOpacity="0.18" stroke={C.signal} />
          </>
        )}
        {i === 1 && (
          <>
            {/* Their system, kept: the window, and a tick on it. */}
            <rect x="10" y="14" width="44" height="34" rx="5" />
            <path d="M10 22h44" strokeOpacity="0.6" />
            <path d="M16 31h14M16 38h10" strokeOpacity="0.5" />
            <circle cx="44" cy="40" r="9" fill="#07041a" stroke={C.signal} />
            <path d="M40 40l3 3 5.5-5.5" stroke={C.signal} />
          </>
        )}
        {i === 2 && (
          <>
            {/* Aged, and moved on: the clock, and the next action. */}
            <circle cx="26" cy="32" r="16" />
            <path d="M26 23v9l6 4" />
            <path d="M44 32h14m-5-5 5 5-5 5" stroke={C.signal} />
          </>
        )}
        {i === 3 && (
          <>
            {/* A person on what matters. */}
            <circle cx="28" cy="22" r="8" stroke={C.ice} />
            <path d="M13 50c0-8.3 6.7-15 15-15s15 6.7 15 15" stroke={C.ice} />
            <circle cx="46" cy="44" r="9" fill="#07041a" stroke={C.signal} />
            <path d="M42 44l3 3 5.5-5.5" stroke={C.signal} />
          </>
        )}
        {i === 4 && (
          <>
            {/* A physician. */}
            <rect x="12" y="12" width="40" height="40" rx="11" />
            <path d="M32 21v22M21 32h22" stroke={C.signal} strokeWidth="2.4" />
          </>
        )}
      </g>
    </svg>
  );
}

/* ---- How to start ----------------------------------------------------- */

export function StartClaims({ className }: { className?: string }) {
  const rows = [
    { y: 34, person: false },
    { y: 92, person: true },
    { y: 150, person: false },
  ];
  return (
    <svg className={className} viewBox="0 0 504 220" aria-hidden="true" focusable="false">
      <g data-stay="" style={beat(0)}>
        <Label x={66} y={18}>your unpaid claims</Label>
      </g>
      {rows.map((r, i) => (
        <g key={i}>
          {/* The claim, brought in. */}
          <g data-stay="" style={beat(100 + i * 140)}>
            <rect x={26} y={r.y} width={80} height={40} rx="8" fill="#1b0f45" stroke={C.lilac} strokeOpacity="0.4" strokeWidth="1.2" />
            <Mark kind="doc" cx={46} cy={r.y + 20} size={18} tone="base" />
            <rect x={60} y={r.y + 14} width={32} height={4} rx="2" fill={C.ice} fillOpacity="0.4" />
            <rect x={60} y={r.y + 23} width={22} height={4} rx="2" fill={C.ice} fillOpacity="0.3" />
          </g>
          {/* What we would do with it. */}
          <path data-draw="" pathLength={1} style={beat(600 + i * 200)} {...INK} stroke={r.person ? C.signal : C.ice} strokeOpacity={r.person ? 0.8 : 0.45} strokeWidth="1.5" d={`M106 ${r.y + 20}H300`} />
          {/* Each step: automated, or a person stays responsible. */}
          {[0, 1, 2, 3].map((k) => {
            const x = 140 + k * 42;
            const human = r.person && k === 2;
            return (
              <g key={k} data-pop="" style={beat(800 + i * 200 + k * 80)}>
                {human ? (
                  <>
                    <circle cx={x} cy={r.y + 20} r="9" fill="#07041a" stroke={C.signal} strokeWidth="1.4" />
                    <circle cx={x} cy={r.y + 17} r="2.6" fill="none" stroke={C.signal} strokeWidth="1.2" />
                    <path {...INK} stroke={C.signal} strokeWidth="1.2" d={`M${x - 4.5} ${r.y + 25}c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5`} />
                  </>
                ) : (
                  <circle cx={x} cy={r.y + 20} r="4" fill={C.lilac} />
                )}
              </g>
            );
          })}
          <g data-pop="" style={beat(1400 + i * 200)}>
            <rect x={300} y={r.y} width={120} height={40} rx="8" fill={r.person ? "#1b0f45" : "#3d1b8f"} stroke={r.person ? C.signal : C.lilac} strokeOpacity={r.person ? 0.7 : 0.5} strokeWidth="1.3" />
            <path {...INK} stroke={C.signal} strokeWidth="1.8" d={`M318 ${r.y + 20}l4 4 8-8.5`} />
            <rect x={340} y={r.y + 18} width={64} height={4} rx="2" fill={C.ice} fillOpacity="0.55" />
          </g>
        </g>
      ))}
      <g data-stay="" style={beat(1800)}>
        <Label x={202} y={208}>which steps we automate</Label>
      </g>
      <g data-stay="" style={beat(2000)}>
        <Label x={432} y={124} anchor="start" live>where a person</Label>
        <Label x={432} y={138} anchor="start" live>stays responsible</Label>
      </g>
    </svg>
  );
}
