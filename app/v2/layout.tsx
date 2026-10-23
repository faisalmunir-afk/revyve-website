import type { Metadata } from "next";
import { META } from "../content/site";
import "./v2.css";
import "./nav.css";
import "./hero.css";
import "./backbone.css";
import "./hundred.css";
import "./ai.css";
import "./closing.css";

export const metadata: Metadata = {
  title: META["/"].title,
  description: META["/"].description,
};

export default function V2Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Everything in V2 lives under .v2, so its tokens are scoped and v1's
  // global stylesheet can never reach in.
  return <div className="v2">{children}</div>;
}
