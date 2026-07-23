import type { Metadata } from "next";
import LecturesPageContent from "@/components/lectures/LecturesPageContent";
import PageHeader from "@/components/layout/PageHeader";
import { lecturesPage } from "@/data/lectures";
import { pageSeo } from "@/data/seo";
import { buildBreadcrumb } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: pageSeo.lectures.title,
  description: pageSeo.lectures.description,
  openGraph: {
    title: pageSeo.lectures.title,
    description: pageSeo.lectures.description,
  },
};

export default function LecturesPage() {
  return (
    <>
      <PageHeader
        title={lecturesPage.title}
        description={lecturesPage.description}
        breadcrumb={buildBreadcrumb({ label: lecturesPage.label })}
      />
      <LecturesPageContent />
    </>
  );
}
