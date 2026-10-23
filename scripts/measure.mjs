/**
 * Measure real layout boxes in headless Chrome over CDP.
 * Usage: node scripts/measure.mjs <url> <width> <height> "<selector>,<selector>"
 */
import { spawn } from "node:child_process";

const URL_ = process.argv[2] || "http://localhost:3000/v2/";
const W = Number(process.argv[3] || 390);
const H = Number(process.argv[4] || 844);
const SELS = (process.argv[5] || ".v2,.hero,.hero__inner,.hero__say,.hero__headline,.hero__lede,.nav,.nav__inner,.nav__toggle")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const CHROME =
  process.env.CHROME ||
  "C:/Program Files/Google/Chrome/Application/chrome.exe";
const PORT = 9333;

const chrome = spawn(
  CHROME,
  [
    "--headless=new",
    "--use-gl=angle",
    "--use-angle=swiftshader",
    "--enable-unsafe-swiftshader",
    "--hide-scrollbars",
    `--remote-debugging-port=${PORT}`,
    `--window-size=${W},${H}`,
    "--user-data-dir=" + (process.env.TMP || "/tmp") + "/rv-measure-profile",
    "about:blank",
  ],
  { stdio: "ignore" },
);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  let targets = null;
  for (let i = 0; i < 40; i++) {
    try {
      const r = await fetch(`http://127.0.0.1:${PORT}/json/list`);
      targets = await r.json();
      if (targets.length) break;
    } catch {}
    await sleep(250);
  }
  if (!targets?.length) throw new Error("no CDP target");

  const page = targets.find((t) => t.type === "page") || targets[0];
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  let id = 0;
  const pending = new Map();

  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const msgId = ++id;
      pending.set(msgId, { resolve, reject });
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });

  await new Promise((r) => (ws.onopen = r));
  ws.onmessage = (e) => {
    const msg = JSON.parse(e.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result);
    }
  };

  await send("Page.enable");
  await send("Runtime.enable");
  await send("Page.navigate", { url: URL_ });
  await sleep(3000);

  const expr = `
    (() => {
      const out = {
        viewport: innerWidth + "x" + innerHeight,
        docScrollWidth: document.documentElement.scrollWidth,
        bodyScrollWidth: document.body.scrollWidth,
        nodes: [],
        overflowing: [],
      };
      for (const sel of ${JSON.stringify(SELS)}) {
        const el = document.querySelector(sel);
        if (!el) { out.nodes.push({ sel, missing: true }); continue; }
        const r = el.getBoundingClientRect();
        const cs = getComputedStyle(el);
        out.nodes.push({
          sel,
          x: Math.round(r.x), w: Math.round(r.width),
          right: Math.round(r.right),
          display: cs.display,
          maxWidth: cs.maxWidth,
          gridCols: cs.gridTemplateColumns,
          fontSize: cs.fontSize,
          fontFamily: cs.fontFamily.slice(0, 48),
        });
      }
      // anything sticking out past the viewport
      for (const el of document.querySelectorAll("*")) {
        const r = el.getBoundingClientRect();
        if (r.width > 0 && r.right > innerWidth + 1) {
          out.overflowing.push({
            tag: el.tagName.toLowerCase(),
            cls: (el.className && el.className.baseVal !== undefined ? el.className.baseVal : el.className || "").toString().slice(0, 48),
            right: Math.round(r.right),
            w: Math.round(r.width),
          });
        }
      }
      out.overflowing = out.overflowing.slice(0, 12);
      return JSON.stringify(out, null, 1);
    })()
  `;

  const res = await send("Runtime.evaluate", {
    expression: expr,
    returnByValue: true,
  });
  console.log(res.result.value);
  ws.close();
  chrome.kill();
  process.exit(0);
}

main().catch((e) => {
  console.error("FAILED:", e.message);
  chrome.kill();
  process.exit(1);
});
