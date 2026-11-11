/**
 * The pictures inside the V4 cards. Each is one idea from its card, drawn
 * with depth (layered glass, gradient spheres, soft shadows) and a motion
 * that says what the card says: data flowing in, a model being picked, a
 * request passing each check in turn, an acquisition feeding the agents.
 *
 * Every word in them is a phrase from the card it sits on. All motion is
 * CSS (stroke offsets, transforms, opacity), so the reduced-motion rule in
 * styles.css stops all of it and leaves each picture finished.
 */

const ICON = {
  ledger: "M4 5h16v14H4zM4 10h16M4 15h16M10 5v14",
  calendar: "M4 6h16v14H4zM4 11h16M9 3v5M15 3v5",
  doc: "M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6",
  inbox: "M4 13l2.5-7h11L20 13v6H4zM4 13h5l1.5 2.5h3L15 13h5",
};

/* ---- Built around your existing systems ---------------------------------- */

export function SystemsArt({ className }: { className?: string }) {
  const W = 380;
  const H = 260;
  const C = { x: 190, y: 130 };
  const T = [
    { x: 58, y: 56, d: ICON.ledger },
    { x: 58, y: 204, d: ICON.calendar },
    { x: 322, y: 56, d: ICON.doc },
    { x: 322, y: 204, d: ICON.inbox },
  ];
  /* Each wire starts at its tile's inner edge, so nothing runs under the glass. */
  const wire = (t: { x: number; y: number }) => {
    const x0 = t.x < C.x ? t.x + 30 : t.x - 30;
    const mx = (x0 + C.x) / 2;
    return `M${x0} ${t.y}C${mx} ${t.y} ${mx} ${C.y} ${C.x} ${C.y}`;
  };
  return (
    <div className={`ga-sys ${className ?? ""}`} aria-hidden="true">
      <svg viewBox={`0 0 ${W} ${H}`}>
        <defs>
          <radialGradient id="gaSysCore" cx="0.35" cy="0.3" r="0.8">
            <stop offset="0" stopColor="#fff" />
            <stop offset="1" stopColor="#e9e2ff" />
          </radialGradient>
        </defs>

        {/* Orbits round the core. */}
        <g className="ga__spin" style={{ transformOrigin: `${C.x}px ${C.y}px` }}>
          <circle cx={C.x} cy={C.y} r="78" className="ga__orbit" />
          <circle cx={C.x + 78} cy={C.y} r="4" className="ga__sat" />
        </g>
        <g className="ga__spin ga__spin--rev" style={{ transformOrigin: `${C.x}px ${C.y}px` }}>
          <circle cx={C.x} cy={C.y} r="112" className="ga__orbit ga__orbit--far" />
          <circle cx={C.x} cy={C.y - 112} r="3" className="ga__sat" />
        </g>

        {/* Wires, and the data running along them into the core. */}
        {T.map((t, i) => (
          <g key={i}>
            <path d={wire(t)} className="ga__wire" />
            <path d={wire(t)} pathLength={100} className="ga__comet" style={{ animationDelay: `${i * 0.55}s` }} />
          </g>
        ))}

        {/* Revyve AI, the check, taking it all in. */}
        <circle cx={C.x} cy={C.y} r="44" className="ga__pulse" />
        <circle cx={C.x} cy={C.y} r="44" fill="url(#gaSysCore)" className="ga__coreShadow" />
        <path d={`M${C.x - 16} ${C.y + 1}l11 11 22-23`} className="ga__coreMark" />
      </svg>

      {/* The systems already in the business, as real glass tiles. */}
      {T.map((t, i) => (
        <span
          key={`t${i}`}
          className="ga-sys__tile glass ga__float"
          style={{
            left: `${((t.x - 30) / W) * 100}%`,
            top: `${((t.y - 30) / H) * 100}%`,
            width: `${(60 / W) * 100}%`,
            animationDelay: `${-i * 1.3}s`,
          }}
        >
          <svg viewBox="0 0 24 24">
            <path d={t.d} className="ga__ico" />
          </svg>
        </span>
      ))}
    </div>
  );
}

/* ---- The right model for each task --------------------------------------- */

export function ModelsArt({ className }: { className?: string }) {
  /* A task comes in on the left; the router sends it to the model picked
     for it, one after another: quality, then speed, then cost. */
  const J = { x: 118, y: 110 };
  const M = [
    { y: 34, label: "quality", skel: 52, icon: "M12 3.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 16.9l-5.3 2.7 1-5.8-4.2-4.1 5.9-.9z" },
    { y: 110, label: "speed", skel: 40, icon: "M4.5 17a7.5 7.5 0 1 1 15 0M6.6 11.6l1.2.9M12 7.4v1.5M17.4 11.6l-1.2.9" },
    { y: 186, label: "cost", skel: 46, icon: "M5 7c0-1.4 3.1-2.5 7-2.5s7 1.1 7 2.5-3.1 2.5-7 2.5S5 8.4 5 7zM5 7v5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V7M5 12v5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-5" },
  ];
  const route = (y: number) => `M${J.x} ${J.y}C${J.x + 14} ${J.y} ${J.x + 8} ${y} ${J.x + 22} ${y}H146`;
  const on = (i: number) => `mx__on${i === 0 ? " mx__on--first" : ""}`;
  return (
    <svg className={`mx ${className ?? ""}`} viewBox="0 0 340 220" aria-hidden="true">
      {/* The task: a small stack of work, the front card on top. */}
      <g className="mx__task">
        <rect x="16" y="76" width="76" height="68" rx="12" className="mx__paper mx__paper--back" />
        <rect x="10" y="82" width="80" height="62" rx="12" className="mx__paper mx__paper--mid" />
        <rect x="4" y="88" width="84" height="56" rx="12" className="mx__card" />
        <path d={ICON.doc} transform="translate(12 98) scale(0.75)" className="mx__ico" />
        <text x="35" y="112" className="mx__label">
          task
        </text>
        <rect x="14" y="123" width="56" height="5" rx="2.5" className="mx__skel" />
        <rect x="14" y="132" width="36" height="5" rx="2.5" className="mx__skel" />
      </g>

      {/* The router. */}
      <path d={`M88 ${J.y}H${J.x}`} className="mx__wire" />
      {M.map((m) => (
        <path key={`w${m.label}`} d={route(m.y)} className="mx__wire" />
      ))}
      {M.map((m, i) => (
        <path key={`h${m.label}`} d={route(m.y)} pathLength={100} className={`mx__route ${on(i)}`} style={{ animationDelay: `${i * 2}s` }} />
      ))}
      <circle cx={J.x} cy={J.y} r="9" className="mx__hub" />
      <circle cx={J.x} cy={J.y} r="3.5" className="mx__hubDot" />

      {/* The models, each chosen for one thing. */}
      {M.map((m, i) => (
        <g key={m.label} className="mx__model" style={{ animationDelay: `${i * 2}s` }}>
          <rect x="146" y={m.y - 28} width="188" height="56" rx="14" className="mx__card" />
          <rect x="146" y={m.y - 28} width="188" height="56" rx="14" className={`mx__outline ${on(i)}`} style={{ animationDelay: `${i * 2}s` }} />
          <rect x="156" y={m.y - 18} width="36" height="36" rx="10" className="mx__tile" />
          <g transform={`translate(162 ${m.y - 12})`}>
            <path d={m.icon} className="mx__ico" />
            {m.label === "speed" && <path d="M12 17l3.6-4.4" className="mx__ico mx__needle" />}
          </g>
          <text x="204" y={m.y - 2} className="mx__label">
            {m.label}
          </text>
          <rect x="204" y={m.y + 7} width={m.skel} height="5" rx="2.5" className="mx__skel" />
          <circle cx="312" cy={m.y} r="10" className="mx__slot" />
          <g className={`mx__check ${on(i)}`} style={{ animationDelay: `${i * 2}s` }}>
            <circle cx="312" cy={m.y} r="10" className="mx__checkBg" />
            <path d={`M307.5 ${m.y + 0.5}l3 3 6-6.5`} className="mx__checkMark" />
          </g>
        </g>
      ))}
    </svg>
  );
}

/* ---- One shared intelligence layer --------------------------------------- */

export function LayerArt({ className }: { className?: string }) {
  const L = ["routing", "permissions", "evidence", "approvals"];
  const W = 340;
  const H = 236;
  return (
    <div className={`ga-layer ${className ?? ""}`} aria-hidden="true">
      {/* The request's path down through every check. */}
      <svg viewBox={`0 0 ${W} ${H}`}>
        <path d="M46 6V228" className="ga__spine" />
        <path d="M46 6V228" pathLength={100} className="ga__comet ga__comet--dark ga__comet--slow" />
      </svg>

      {/* The checks, as glass pills; the lit one is the check in progress. */}
      {L.map((l, i) => (
        <span
          key={l}
          className="ga-layer__pill glass"
          style={{
            left: `${(24 / W) * 100}%`,
            top: `${((22 + i * 52) / H) * 100}%`,
            width: `${(292 / W) * 100}%`,
            height: `${(40 / H) * 100}%`,
            animationDelay: `${i * 1.1}s`,
          }}
        >
          <span className="ga-layer__lit" />
          <span className="ga-layer__dot" />
          <span className="ga-layer__text">{l}</span>
          <svg className="ga-layer__tick" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="10" className="ga__bandTickBg" />
            <path d="M5 10.5l3.5 3.5 6.5-7" className="ga__bandTickMark" />
          </svg>
        </span>
      ))}
    </div>
  );
}

/* ---- Built inside operations ------------------------------------------- */

export function OwnershipArt({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 360 460" aria-hidden="true">
      <defs>
        <linearGradient id="gaPanel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.3" />
          <stop offset="1" stopColor="#fff" stopOpacity="0.08" />
        </linearGradient>
        <radialGradient id="gaOwnCore" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#e9e2ff" />
        </radialGradient>
      </defs>

      <g className="ga__float">
        <rect x="40" y="36" width="280" height="132" rx="24" fill="url(#gaPanel)" className="ga__panelEdge" />
        <text x="64" y="76" className="ga__labelLg">Data to train the agents</text>
        {["payer outcomes", "reviewed exceptions", "corrections"].map((t, i) => (
          <g key={t} className="ga__item" style={{ animationDelay: `${i * 0.4}s` }}>
            <rect x="64" y={92 + i * 22} width="16" height="16" rx="5" className="ga__itemBox" />
            <text x="90" y={104.5 + i * 22} className="ga__labelSm">
              {t}
            </text>
          </g>
        ))}
      </g>

      <g className="ga__float" style={{ animationDelay: "-3s" }}>
        <rect x="40" y="292" width="280" height="132" rx="24" fill="url(#gaPanel)" className="ga__panelEdge" />
        <text x="64" y="332" className="ga__labelLg">distribution</text>
        {["practices", "referral networks"].map((t, i) => (
          <g key={t} className="ga__item" style={{ animationDelay: `${1.2 + i * 0.4}s` }}>
            <rect x="64" y={350 + i * 24} width="16" height="16" rx="5" className="ga__itemBox" />
            <text x="90" y={362.5 + i * 24} className="ga__labelSm">
              {t}
            </text>
          </g>
        ))}
      </g>

      {/* Both feed the agents. */}
      <path d="M180 168V198" className="ga__wire ga__wire--solid" />
      <path d="M180 292V262" className="ga__wire ga__wire--solid" />
      <path d="M180 168V198" pathLength={100} className="ga__comet" />
      <path d="M180 292V262" pathLength={100} className="ga__comet" style={{ animationDelay: "0.8s" }} />
      <circle cx="180" cy="230" r="32" className="ga__pulse" />
      <circle cx="180" cy="230" r="32" fill="url(#gaOwnCore)" className="ga__coreShadow" />
      <path d="M168 231l8 8 17-18" className="ga__coreMark ga__coreMark--sm" />
    </svg>
  );
}
