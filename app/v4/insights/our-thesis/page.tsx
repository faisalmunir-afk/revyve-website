import type { Metadata } from "next";
import { THESIS } from "../../../content/insights";
import { META } from "../../../content/site";
import V4Article from "../../components/V4Article";
import "../../revyve-ai/styles.css";
import "../../pages.css";
import "../../more.css";

export const metadata: Metadata = {
  title: META["/insights/our-thesis/"].title,
  description: META["/insights/our-thesis/"].description,
  robots: { index: false, follow: false },
};

export default function V4OurThesis() {
  return <V4Article article={THESIS} path="/insights/" />;
}
