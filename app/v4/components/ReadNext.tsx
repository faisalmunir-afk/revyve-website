import Link from "next/link";
import Arrow from "./Arrow";
import { Icon, type IconName } from "./AiArt";
import { v4 } from "./links";

/**
 * "Read next" as cards: one per link the copy records, each labelled with
 * the exact phrase the sentence wraps. The first is lit.
 */
const ICON_FOR: Record<string, IconName> = {
  "/revyve-ai/": "agents",
  "/revyve-ai/first-deployment/": "chart",
  "/for-practices/": "clinic",
  "/sell-your-firm/": "hand",
  "/about/": "info",
  "/team/": "people",
  "/careers/": "person",
  "/insights/our-thesis/": "doc",
  "/insights/our-strategy/": "doc",
  "/insights/why-we-buy-businesses/": "doc",
};

export default function ReadNext({ lead, links, tint }: { lead: string; links: readonly { phrase: string; href: string }[]; tint?: boolean }) {
  return (
    <section className={tint ? "sec sec--tint" : "sec"} aria-labelledby="rn-title">
      <div className="wrap">
        <h2 className="sec__title rx-next__title" id="rn-title">
          {lead.replace(/:\s*$/, "")}
        </h2>
        <div className={`rx-next rx-next--${links.length}`}>
          {links.map((l, i) => (
            <Link key={l.href} href={v4(l.href)} className={`card ${i === 0 ? "card--lit" : "card--soft"} rx-go rv`}>
              <span className="rx-go__ico">
                <Icon name={ICON_FOR[l.href] ?? "doc"} />
              </span>
              <span className="rx-go__t">{l.phrase}</span>
              <span className="rx-go__arrow">
                <Arrow />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
