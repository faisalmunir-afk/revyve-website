import { Mark } from "./aiDiagrams";

/**
 * Four small drawings for the four cards in "One system under every
 * company we own", each made from its own sentence, in the same hand as
 * the other diagrams. Every label is a word lifted from the card's own
 * copy — encounter, payer evidence, owner, version, review, manual path,
 * work queue — never new copy.
 *
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
  lilac: "#b689f8",
  ice: "#dce6ff",
  signal: "#6fe3d6",
};

const beat = (ms: number) => ({ ["--d" as string]: `${ms}ms` });

function Chip({ x, y, w, label, live }: { x: number; y: number; w: number; label: string; live?: boolean }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={20} rx="10" fill="#1b0f45" stroke={live ? C.signal : C.lilac} strokeOpacity={live ? 0.7 : 0.3} strokeWidth="1.1" />
      <text className="sd__label" x={x + w / 2} y={y + 13.5} textAnchor="middle" fill={live ? C.signal : C.ice} fillOpacity={live ? 0.95 : 0.7}>
        {label}
      </text>
    </g>
  );
}

function Person({ cx, cy, live }: { cx: number; cy: number; live?: boolean }) {
  const c = live ? C.signal : C.ice;
  return (
    <g {...INK} stroke={c} strokeWidth="1.5">
      <circle cx={cx} cy={cy} r="6" fill="#1b0f45" />
      <path d={`M${cx - 11} ${cy + 18}c0-6.1 4.9-11 11-11s11 4.9 11 11`} />
    </g>
  );
}

/* ---- One record of every claim -------------------------------------- */

export function OneRecord({ className }: { className?: string }) {
  const rows = [
    { y: 14, label: "encounter" },
    { y: 42, label: "payer evidence" },
    { y: 70, label: "person responsible" },
    { y: 98, label: "next step", live: true },
  ];
  return (
    <svg className={className} viewBox="0 0 280 132" aria-hidden="true" focusable="false">
      {/* The claim: one record. */}
      <g data-stay="" style={beat(0)}>
        <rect x={16} y={26} width={66} height={80} rx="9" fill="#3d1b8f" stroke={C.lilac} strokeOpacity="0.6" strokeWidth="1.3" />
        <Mark kind="ledger" cx={49} cy={66} size={28} tone="lit" />
      </g>
      {/* Everything it is tied to. */}
      {rows.map((r, i) => (
        <g key={r.label}>
          <path data-draw="" pathLength={1} style={beat(300 + i * 140)} {...INK} stroke={r.live ? C.signal : C.ice} strokeOpacity={r.live ? 0.8 : 0.4} strokeWidth="1.3" d={`M82 66C112 66 108 ${r.y + 10} 136 ${r.y + 10}`} />
          <g data-pop="" style={beat(700 + i * 140)}>
            <Chip x={136} y={r.y} w={128} label={r.label} live={r.live} />
          </g>
        </g>
      ))}
    </svg>
  );
}

/* ---- Agents with owners --------------------------------------------- */

export function AgentsWithOwners({ className }: { className?: string }) {
  /* Widths fitted to each word, so none overruns its pill. */
  const tags = [
    { t: "version", w: 58 },
    { t: "test set", w: 60 },
    { t: "cost", w: 44 },
    { t: "permissions", w: 86 },
  ];
  const xs = tags.reduce<number[]>((acc, tag, i) => {
    acc.push(i === 0 ? 8 : acc[i - 1] + tags[i - 1].w + 8);
    return acc;
  }, []);
  return (
    <svg className={className} viewBox="0 0 280 132" aria-hidden="true" focusable="false">
      {/* The agent. */}
      <g data-stay="" style={beat(0)}>
        <rect x={36} y={18} width={52} height={52} rx="15" fill="#0f0829" stroke={C.lilac} strokeOpacity="0.8" strokeWidth="1.6" />
        <path {...INK} stroke={C.lilac} strokeWidth="1.6" d="M62 18v-9M57 9h10" />
        <circle cx={54} cy={42} r="3.4" fill={C.signal} />
        <circle cx={70} cy={42} r="3.4" fill={C.signal} />
        <path {...INK} stroke={C.lilac} strokeWidth="1.6" d="M54 56h16" />
      </g>
      {/* Its owner. */}
      <path data-draw="" pathLength={1} style={beat(300)} {...INK} stroke={C.ice} strokeOpacity="0.55" strokeWidth="1.4" strokeDasharray="0" d="M92 44H196" />
      <g data-pop="" style={beat(800)}>
        <Person cx={220} cy={34} live />
        <text className="sd__label" x={144} y={36} textAnchor="middle" fill={C.signal} fillOpacity="0.9">owner</text>
      </g>
      {/* What every agent carries. */}
      {tags.map(({ t, w }, i) => (
        <g key={t} data-pop="" style={beat(1000 + i * 120)}>
          <Chip x={xs[i]} y={96} w={w} label={t} />
        </g>
      ))}
    </svg>
  );
}

/* ---- Work that moves on its own ------------------------------------- */

export function WorkMoves({ className }: { className?: string }) {
  const Y = 66;
  const nodes = [24, 74, 124, 174, 224, 262];
  const people = [124, 224];
  return (
    <svg className={className} viewBox="0 0 280 132" aria-hidden="true" focusable="false">
      {/* The routine steps run along one line. */}
      <path data-draw="" pathLength={1} style={beat(0)} {...INK} stroke={C.ice} strokeOpacity="0.6" strokeWidth="2" d={`M16 ${Y}H266`} />
      {nodes.map((x, i) => (
        <circle key={x} data-pop="" style={beat(200 + i * 110)} cx={x} cy={Y} r={people.includes(x) ? 6 : 4} fill={people.includes(x) ? C.signal : C.lilac} />
      ))}
      {/* People at the right points. */}
      {people.map((x, i) => (
        <g key={`p${x}`} data-pop="" style={beat(900 + i * 220)}>
          <Person cx={x} cy={22} live />
        </g>
      ))}
      <g data-stay="" style={beat(1300)}>
        <text className="sd__label" x={174} y={30} textAnchor="middle" fill={C.signal} fillOpacity="0.9">review</text>
      </g>
      {/* There is always a manual path. */}
      <path data-draw="" pathLength={1} style={beat(1100)} {...INK} stroke={C.lilac} strokeOpacity="0.5" strokeWidth="1.4" strokeDasharray="4 5" d={`M74 ${Y}C74 ${Y + 34} 124 ${Y + 40} 174 ${Y + 40}S224 ${Y + 34} 224 ${Y}`} />
      <g data-stay="" style={beat(1500)}>
        <text className="sd__label" x={150} y={Y + 58} textAnchor="middle" fill={C.ice} fillOpacity="0.65">manual path</text>
      </g>
    </svg>
  );
}

/* ---- Tools the team actually uses ----------------------------------- */

export function TeamTools({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 280 132" aria-hidden="true" focusable="false">
      {/* The screen. */}
      <g data-stay="" style={beat(0)}>
        <rect x={12} y={8} width={256} height={116} rx="10" fill="#0f0829" stroke={C.lilac} strokeOpacity="0.4" strokeWidth="1.3" />
        <path {...INK} stroke={C.lilac} strokeOpacity="0.3" strokeWidth="1.1" d="M12 28H268" />
        <circle cx={26} cy={18} r="2.6" fill={C.lilac} fillOpacity="0.5" />
        <circle cx={36} cy={18} r="2.6" fill={C.lilac} fillOpacity="0.35" />
      </g>
      {/* The work queue. */}
      <g data-stay="" style={beat(200)}>
        <text className="sd__label" x={24} y={46} fill={C.ice} fillOpacity="0.65">work queue</text>
      </g>
      {[0, 1, 2, 3].map((i) => (
        <g key={i} data-pop="" style={beat(400 + i * 120)}>
          <rect x={22} y={56 + i * 16} width={112} height={11} rx="3" fill={i === 1 ? "#3d1b8f" : "#1b0f45"} stroke={C.lilac} strokeOpacity={i === 1 ? 0.6 : 0.2} strokeWidth="1" />
          <circle cx={30} cy={61.5 + i * 16} r="2.2" fill={i === 1 ? C.signal : C.lilac} fillOpacity={i === 1 ? 1 : 0.5} />
          <rect x={38} y={59.5 + i * 16} width={i % 2 ? 50 : 70} height={4} rx="2" fill={C.ice} fillOpacity={i === 1 ? 0.75 : 0.35} />
        </g>
      ))}
      {/* The evidence panel, and the review. */}
      <g data-pop="" style={beat(900)}>
        <text className="sd__label" x={150} y={46} fill={C.ice} fillOpacity="0.65">evidence</text>
        <rect x={148} y={56} width={108} height={36} rx="6" fill="#1b0f45" stroke={C.lilac} strokeOpacity="0.3" strokeWidth="1" />
        <Mark kind="doc" cx={166} cy={74} size={18} tone="base" />
        <rect x={182} y={67} width={60} height={4} rx="2" fill={C.ice} fillOpacity="0.4" />
        <rect x={182} y={77} width={42} height={4} rx="2" fill={C.ice} fillOpacity="0.3" />
      </g>
      <g data-pop="" style={beat(1200)}>
        <Chip x={148} y={100} w={108} label="review" live />
      </g>
    </svg>
  );
}
