import type { Metadata } from "next";
import ContactPageContent from "@/components/contact/ContactPageContent";
import PageHeader from "@/components/layout/PageHeader";
import { contactPage } from "@/data/contact";
import { pageSeo } from "@/data/seo";
import { buildBreadcrumb } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: pageSeo.contact.title,
  description: pageSeo.contact.description,
  openGraph: {
    title: pageSeo.contact.title,
    description: pageSeo.contact.description,
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title={contactPage.title}
        description={contactPage.description}
        breadcrumb={buildBreadcrumb({ label: contactPage.label })}
      />
      <ContactPageContent />
    </>
  );
}
