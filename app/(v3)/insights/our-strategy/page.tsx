import type { Metadata } from "next";
import { STRATEGY } from "../../../content/insights";
import { META } from "../../../content/site";
import ArticlePage from "../../components/ArticlePage";
import { FourSteps } from "../../components/teamDiagrams";

export const metadata: Metadata = {
  title: META["/insights/our-strategy/"].title,
  description: META["/insights/our-strategy/"].description,
};

/**
 * Our strategy, in the shared Insights reading form (components/ArticlePage.tsx).
 * Its four steps are drawn in order right after the paragraph that sets out the plan.
 *
 * Every string comes from app/content/insights.ts, generated from the live
 * page and verbatim.
 */
export default function Page() {
  return (
    <ArticlePage
      article={STRATEGY}
      figure={<FourSteps className="aboutb__draw sd sd--armed lt__draw" />}
      figureAfter="The plan is simple to say and hard to do."
    />
  );
}
