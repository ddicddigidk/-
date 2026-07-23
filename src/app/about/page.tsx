import type { Metadata } from "next";
import AboutPageContent from "@/components/about/AboutPageContent";
import PageHeader from "@/components/layout/PageHeader";
import { aboutPage } from "@/data/about";
import { pageSeo } from "@/data/seo";
import { buildBreadcrumb } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: pageSeo.about.title,
  description: pageSeo.about.description,
  openGraph: {
    title: pageSeo.about.title,
    description: pageSeo.about.description,
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title={aboutPage.title}
        description={aboutPage.description}
        breadcrumb={buildBreadcrumb({ label: aboutPage.label })}
      />
      <AboutPageContent />
    </>
  );
}
