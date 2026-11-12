import SAVED from "../glass.json";

/**
 * The site's glass setting, saved in app/v4/glass.json (light angle and
 * strength, refraction, depth, dispersion, frost, splay). GlassFilter draws
 * every `.glass` element from it. To change the look, edit that file.
 */

export type Glass = {
  /** Direction the light comes from, in degrees (-180 to 180). */
  angle: number;
  /** Strength of the light on the edge, 0 to 100. */
  light: number;
  /** How far the edge bends what is behind it, 0 to 100. */
  refraction: number;
  /** How thick the glass edge is, 0 to 100. */
  depth: number;
  /** Colour split at the bent edge, 0 to 100. */
  dispersion: number;
  /** Blur of what is behind, 0 to 100. */
  frost: number;
  /** How far the light spreads across the surface, 0 to 100. */
  splay: number;
};

export const SAVED_GLASS: Glass = { ...(SAVED as Glass) };

export function useGlass(): Glass {
  return SAVED_GLASS;
}
