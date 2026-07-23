import type { Metadata } from "next";
import CareerPageContent from "@/components/career/CareerPageContent";
import PageHeader from "@/components/layout/PageHeader";
import { careerPage } from "@/data/career";
import { pageSeo } from "@/data/seo";
import { buildBreadcrumb } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: pageSeo.career.title,
  description: pageSeo.career.description,
  openGraph: {
    title: pageSeo.career.title,
    description: pageSeo.career.description,
  },
};

export default function CareerPage() {
  return (
    <>
      <PageHeader
        title={careerPage.title}
        description={careerPage.description}
        breadcrumb={buildBreadcrumb({ label: careerPage.label })}
      />
      <CareerPageContent />
    </>
  );
}
