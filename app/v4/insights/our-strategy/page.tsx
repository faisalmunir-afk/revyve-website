import type { Metadata } from "next";
import { STRATEGY } from "../../../content/insights";
import { META } from "../../../content/site";
import V4Article from "../../components/V4Article";
import "../../revyve-ai/styles.css";
import "../../pages.css";
import "../../more.css";

export const metadata: Metadata = {
  title: META["/insights/our-strategy/"].title,
  description: META["/insights/our-strategy/"].description,
  robots: { index: false, follow: false },
};

export default function V4OurStrategy() {
  return <V4Article article={STRATEGY} path="/insights/" />;
}
