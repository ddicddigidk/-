import type { Metadata } from "next";
import EducationPageContent from "@/components/education/EducationPageContent";
import PageHeader from "@/components/layout/PageHeader";
import { educationPage } from "@/data/education";
import { pageSeo } from "@/data/seo";
import { buildBreadcrumb } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: pageSeo.education.title,
  description: pageSeo.education.description,
  openGraph: {
    title: pageSeo.education.title,
    description: pageSeo.education.description,
  },
};

export default function EducationPage() {
  return (
    <>
      <PageHeader
        title={educationPage.title}
        description={educationPage.description}
        breadcrumb={buildBreadcrumb({ label: educationPage.label })}
      />
      <EducationPageContent />
    </>
  );
}
