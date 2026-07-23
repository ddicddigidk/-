import type { Metadata } from "next";
import CorporateTrainingPageContent from "@/components/corporate-training/CorporateTrainingPageContent";
import PageHeader from "@/components/layout/PageHeader";
import { corporateTrainingPage } from "@/data/corporate-training";
import { pageSeo } from "@/data/seo";
import { buildBreadcrumb } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: pageSeo["corporate-training"].title,
  description: pageSeo["corporate-training"].description,
  openGraph: {
    title: pageSeo["corporate-training"].title,
    description: pageSeo["corporate-training"].description,
  },
};

export default function CorporateTrainingPage() {
  return (
    <>
      <PageHeader
        title={corporateTrainingPage.title}
        description={corporateTrainingPage.description}
        breadcrumb={buildBreadcrumb({ label: corporateTrainingPage.label })}
      />
      <CorporateTrainingPageContent />
    </>
  );
}
