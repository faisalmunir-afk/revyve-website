import { Mark } from "./aiDiagrams";

/**
 * Drawings for /sell-your-firm/, in the same hand as the rest of the site.
 *
 *   TheBusiness  the lead: what most buyers want — the book of business, a
 *                list, dimmed — beside what we want: the business, lit, with
 *                the customers, the people who know them and the years of
 *                knowing which payer does what inside it
 *   LookForMark  one mark per thing we look for: customers who stayed; a
 *                manager who keeps running it; documented work; clean books
 *
 * Every label is a phrase lifted from the copy beside it. Every stroke that
 * draws itself carries `pathLength="1"`; unarmed, all of it renders
 * finished.
 */

const INK = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const C = {
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

function Person({ cx, cy, live, s = 1 }: { cx: number; cy: number; live?: boolean; s?: number }) {
  const c = live ? C.signal : C.ice;
  return (
    <g {...INK} stroke={c} strokeWidth="1.4">
      <circle cx={cx} cy={cy} r={6 * s} fill="#1b0f45" />
      <path d={`M${cx - 11 * s} ${cy + 18 * s}c0-6.1 4.9-11 ${11 * s}-11s${11 * s} 4.9 ${11 * s} 11`} />
    </g>
  );
}

/* ---- The business, not the book of business ------------------------- */

export function TheBusiness({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 504 280" aria-hidden="true" focusable="false">
      {/* What most buyers want: the book of business. A list, dimmed. */}
      <g data-stay="" style={beat(0)}>
        <rect x={20} y={70} width={110} height={140} rx="9" fill="#140b36" stroke={C.lilac} strokeOpacity="0.16" strokeWidth="1.2" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect key={i} x={34} y={90 + i * 18} width={i % 2 ? 60 : 82} height={5} rx="2.5" fill={C.lilac} fillOpacity="0.2" />
        ))}
        <Label x={75} y={234}>the book of business</Label>
      </g>

      {/* What we want: the business. */}
      <path data-draw="" pathLength={1} style={beat(400)} {...INK} stroke={C.ice} strokeOpacity="0.4" strokeWidth="1.4" strokeDasharray="4 6" d="M140 140H176" />
      <g data-pop="" style={beat(600)}>
        <rect x={180} y={22} width={304} height={224} rx="14" fill="#3d1b8f" fillOpacity="0.55" stroke={C.lilac} strokeOpacity="0.6" strokeWidth="1.4" />
        <Label x={332} y={268} live>the business</Label>
      </g>

      {/* The customers. */}
      <g data-pop="" style={beat(900)}>
        {[0, 1, 2, 3, 4].map((i) => (
          <Person key={i} cx={214 + i * 30} cy={52} s={0.8} />
        ))}
        <Label x={420} y={64} anchor="middle">the customers</Label>
      </g>

      {/* The people who know them. */}
      <g data-pop="" style={beat(1200)}>
        <Person cx={214} cy={118} live />
        <Person cx={250} cy={118} live />
        <path {...INK} stroke={C.signal} strokeOpacity="0.5" strokeWidth="1.2" strokeDasharray="3 4" d="M230 104C250 86 270 86 290 76" />
        <Label x={380} y={130} anchor="middle" live>the people who know them</Label>
      </g>

      {/* The years of knowing which payer does what. */}
      <g data-pop="" style={beat(1500)}>
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={200 + i * 56} y={170} width={46} height={44} rx="7" fill="#1b0f45" stroke={C.lilac} strokeOpacity="0.4" strokeWidth="1.1" />
            <Mark kind={(["doc", "ledger", "checklist"] as const)[i]} cx={223 + i * 56} cy={192} size={20} tone="base" />
          </g>
        ))}
        <Label x={412} y={196} anchor="middle">which payer does what</Label>
      </g>
    </svg>
  );
}

/* ---- What we look for ------------------------------------------------- */

export function LookForMark({ i, className }: { i: number; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <g {...INK} stroke={C.lilac} strokeWidth="1.6">
        {i === 0 && (
          <>
            {/* Customers who have stayed for years. */}
            <circle cx="22" cy="24" r="6" stroke={C.ice} />
            <path d="M10 44c0-6.6 5.4-12 12-12s12 5.4 12 12" stroke={C.ice} />
            <circle cx="42" cy="24" r="6" stroke={C.ice} />
            <path d="M30 44c0-6.6 5.4-12 12-12s12 5.4 12 12" stroke={C.ice} />
            <path d="M10 52h44" stroke={C.signal} />
          </>
        )}
        {i === 1 && (
          <>
            {/* A manager who keeps running it. */}
            <circle cx="28" cy="22" r="8" stroke={C.ice} />
            <path d="M13 50c0-8.3 6.7-15 15-15s15 6.7 15 15" stroke={C.ice} />
            <path d="M46 26a10 10 0 1 1-2.9 7" stroke={C.signal} />
            <path d="M42 22l1.4 4.6 4.6-1.4" stroke={C.signal} />
          </>
        )}
        {i === 2 && (
          <>
            {/* Real, documented work. */}
            <path d="M18 10h20l10 10v34H18z" />
            <path d="M38 10v10h10" />
            <path d="M24 30h4M24 38h4M24 46h4" stroke={C.signal} />
            <path d="M32 30h10M32 38h10M32 46h8" strokeOpacity="0.6" />
          </>
        )}
        {i === 3 && (
          <>
            {/* Clean books and clear contracts. */}
            <rect x="10" y="14" width="34" height="38" rx="4" />
            <path d="M10 24h34M10 34h34M22 14v38" strokeOpacity="0.6" />
            <circle cx="46" cy="44" r="9" fill="#07041a" stroke={C.signal} />
            <path d="M42 44l3 3 5.5-5.5" stroke={C.signal} />
          </>
        )}
      </g>
    </svg>
  );
}
