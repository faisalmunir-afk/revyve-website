import type { Metadata } from "next";
import { META } from "../content/site";
import "./styles.css";

export const metadata: Metadata = {
  title: META["/"].title,
  description: META["/"].description,
};

export default function V3Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Everything in V3 lives under .v3, so its styles are scoped and neither
  // v1's nor v2's global stylesheet can reach in.
  return <div className="v3">{children}</div>;
}
