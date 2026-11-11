import type { Metadata } from "next";
import { META } from "../content/site";
import GlassFilter from "./components/GlassFilter";
import GlassPanel from "./components/GlassPanel";
import "./styles.css";

export const metadata: Metadata = {
  title: META["/"].title,
  description: META["/"].description,
  /* A design preview: kept out of search until it replaces the home page. */
  robots: { index: false, follow: false },
};

/**
 * V4 — a light, glass, card-led take on the home page, built beside V3 so
 * the two can be compared. Everything lives under .v4, so its styles are
 * scoped and nothing in V3 can reach in, or out.
 */
export default function V4Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="v4">
      {children}
      {/* The glass, drawn from app/v4/glass.json, and its tuning panel (dev only). */}
      <GlassFilter />
      <GlassPanel />
    </div>
  );
}
