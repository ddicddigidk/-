import type { Metadata } from "next";
import PageTemplate from "@/components/layout/PageTemplate";
import { pageSeo } from "@/data/seo";
import { buildBreadcrumb } from "@/lib/breadcrumbs";
import { getPageContent } from "@/lib/pages";

const page = getPageContent("courses");

export const metadata: Metadata = {
  title: pageSeo.courses.title,
  description: pageSeo.courses.description,
  openGraph: {
    title: pageSeo.courses.title,
    description: pageSeo.courses.description,
  },
};

export default function CoursesPage() {
  return (
    <PageTemplate
      page={page}
      breadcrumb={buildBreadcrumb({ label: page.title })}
    />
  );
}
