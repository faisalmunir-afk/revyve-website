// The glass panel's Save helper. Run it beside `npm run dev`:
//
//   node scripts/glass-save.mjs
//
// It listens on 127.0.0.1:3311 only, accepts one POST from the dev site,
// checks the seven settings, and writes them to app/v4/glass.json, which
// the site reads as its glass setting. Nothing else is written.
import { createServer } from "node:http";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const OUT = fileURLToPath(new URL("../app/v4/glass.json", import.meta.url));
const PORT = 3311;
const RANGES = {
  angle: [-180, 180],
  light: [0, 100],
  refraction: [0, 100],
  depth: [0, 100],
  dispersion: [0, 100],
  frost: [0, 100],
  splay: [0, 100],
};
const ORIGIN = /^http:\/\/(localhost|127\.0\.0\.1):\d+$/;

createServer((req, res) => {
  const origin = req.headers.origin || "";
  if (ORIGIN.test(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  }
  if (req.method === "OPTIONS") return res.writeHead(204).end();
  if (req.method !== "POST" || req.url !== "/glass" || !ORIGIN.test(origin)) return res.writeHead(404).end();

  let body = "";
  req.on("data", (c) => {
    body += c;
    if (body.length > 4096) req.destroy();
  });
  req.on("end", () => {
    try {
      const o = JSON.parse(body);
      const clean = {};
      for (const [k, [lo, hi]] of Object.entries(RANGES)) {
        const v = Number(o[k]);
        if (!Number.isFinite(v)) throw new Error(`bad ${k}`);
        clean[k] = Math.max(lo, Math.min(hi, Math.round(v)));
      }
      writeFileSync(OUT, JSON.stringify(clean, null, 2) + "\n");
      console.log("saved", JSON.stringify(clean));
      res.writeHead(200, { "Content-Type": "application/json" }).end(JSON.stringify({ ok: true }));
    } catch (e) {
      res.writeHead(400).end(String(e.message || e));
    }
  });
}).listen(PORT, "127.0.0.1", () => console.log(`glass save helper on http://127.0.0.1:${PORT}/glass -> ${OUT}`));
