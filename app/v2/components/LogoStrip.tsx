import { TEAM_BACKGROUND, TEAM_BACKGROUND_HEADING } from "../../content/site";

/**
 * The founder-background strip.
 *
 * The reference puts a press row under its hero. Revyve has no press logos,
 * so this is the one real equivalent it does have: the marks already shown
 * on revyveholdings.com/team/ under "Background of the team".
 *
 * The heading is kept verbatim so the strip can never be mistaken for
 * clients, press or endorsement.
 */
export default function LogoStrip() {
  return (
    <section className="strip" aria-labelledby="strip-title">
      <div className="strip__inner">
        <h2 className="strip__label" id="strip-title">
          {TEAM_BACKGROUND_HEADING}
        </h2>
        <ul className="strip__logos">
          {TEAM_BACKGROUND.map((l) => (
            <li
              key={l.src}
              className={[l.h > 50 ? "is-tall" : "", l.solid ? "is-solid" : ""]
                .filter(Boolean)
                .join(" ")}
            >
              <img src={l.src} alt={l.alt} width={l.w} height={l.h} loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
