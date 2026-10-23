/**
 * Guard against invented figures.
 *
 * Any number on a client's page implies a factual claim. This prints every
 * numeric string in the page's visible text so each one can be traced back
 * to Revyve's own copy before launch.
 */
import { readFileSync } from "node:fs";

const file = process.argv[2];
if (!file) {
  console.error("usage: node scripts/check-figures.mjs <saved-html>");
  process.exit(2);
}

const text = readFileSync(file, "utf8")
  .replace(/<script[\s\S]*?<\/script>/g, " ")
  .replace(/<style[\s\S]*?<\/style>/g, " ")
  .replace(/<[^>]+>/g, " ")
  .replace(/&[a-z#0-9]+;/gi, " ")
  .replace(/\s+/g, " ");

const hits = [...text.matchAll(/\S*\d\S*/g)].map((m) => m[0]);
const unique = [...new Set(hits)];

console.log(`visible numeric strings: ${unique.length}`);
for (const h of unique) console.log("  " + h);
