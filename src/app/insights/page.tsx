import type { Metadata } from "next";
import PageTemplate from "@/components/layout/PageTemplate";
import { pageSeo } from "@/data/seo";
import { buildBreadcrumb } from "@/lib/breadcrumbs";
import { getPageContent } from "@/lib/pages";

const page = getPageContent("insights");

export const metadata: Metadata = {
  title: pageSeo.insights.title,
  description: pageSeo.insights.description,
  openGraph: {
    title: pageSeo.insights.title,
    description: pageSeo.insights.description,
  },
};

export default function InsightsPage() {
  return (
    <PageTemplate
      page={page}
      breadcrumb={buildBreadcrumb({ label: page.title })}
    />
  );
}
