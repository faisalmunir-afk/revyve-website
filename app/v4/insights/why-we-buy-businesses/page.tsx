import type { Metadata } from "next";
import { ESSAY } from "../../../content/insights";
import { META } from "../../../content/site";
import V4Article from "../../components/V4Article";
import "../../revyve-ai/styles.css";
import "../../pages.css";
import "../../more.css";

export const metadata: Metadata = {
  title: META["/insights/why-we-buy-businesses/"].title,
  description: META["/insights/why-we-buy-businesses/"].description,
  robots: { index: false, follow: false },
};

export default function V4WhyWeBuy() {
  return <V4Article article={ESSAY} path="/insights/" />;
}
