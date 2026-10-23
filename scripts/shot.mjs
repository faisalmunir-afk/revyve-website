/**
 * Screenshot a page at a true CSS viewport using CDP device emulation.
 *
 * Chrome's --window-size includes browser chrome and does not give you the
 * CSS viewport you asked for, which silently crops screenshots. This sets
 * Emulation.setDeviceMetricsOverride instead, so 390 really is 390.
 *
 * Usage:
 *   node scripts/shot.mjs <url> <out.png> [width] [height] [dsf] [--full]
 */
import { spawn } from "node:child_process";
import { writeFileSync } from "node:fs";

const [, , URL_, OUT, W = "1440", H = "900", DSF = "2"] = process.argv;
const FULL = process.argv.includes("--full");

if (!URL_ || !OUT) {
  console.error("usage: node scripts/shot.mjs <url> <out.png> [w] [h] [dsf] [--full]");
  process.exit(2);
}

const CHROME =
  process.env.CHROME || "C:/Program Files/Google/Chrome/Application/chrome.exe";
const PORT = 9334 + Math.floor(Math.random() * 60);

const chrome = spawn(
  CHROME,
  [
    "--headless=new",
    "--use-gl=angle",
    "--use-angle=swiftshader",
    "--enable-unsafe-swiftshader",
    "--hide-scrollbars",
    `--remote-debugging-port=${PORT}`,
    "--user-data-dir=" + (process.env.TMP || "/tmp") + "/rv-shot-" + PORT,
    "about:blank",
  ],
  { stdio: "ignore" },
);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  let targets = null;
  for (let i = 0; i < 40; i++) {
    try {
      targets = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
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
    const m = JSON.parse(e.data);
    if (m.id && pending.has(m.id)) {
      const { resolve, reject } = pending.get(m.id);
      pending.delete(m.id);
      m.error ? reject(new Error(JSON.stringify(m.error))) : resolve(m.result);
    }
  };

  await send("Page.enable");
  await send("Emulation.setDeviceMetricsOverride", {
    width: Number(W),
    height: Number(H),
    deviceScaleFactor: Number(DSF),
    mobile: Number(W) < 700,
  });
  await send("Page.navigate", { url: URL_ });
  await sleep(2200);

  const scrollArg = process.argv.find((a) => a.startsWith("--scroll="));
  if (scrollArg) {
    const y = Number(scrollArg.split("=")[1] || 0);
    await send("Runtime.evaluate", { expression: `window.scrollTo(0, ${y})` });
    await sleep(1600);
  }

  const shot = await send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: FULL,
  });
  writeFileSync(OUT, Buffer.from(shot.data, "base64"));
  console.log(`${OUT}  ${W}x${H} @${DSF}x${FULL ? " (full page)" : ""}`);

  ws.close();
  chrome.kill();
  process.exit(0);
}

main().catch((e) => {
  console.error("FAILED:", e.message);
  chrome.kill();
  process.exit(1);
});
