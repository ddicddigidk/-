import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import PageContactCta from "@/components/ui/PageContactCta";
import type { PageContent } from "@/data/pages";
import type { BreadcrumbItem } from "@/lib/breadcrumbs";

type PageTemplateProps = {
  page: PageContent;
  breadcrumb?: BreadcrumbItem[];
  showContactCta?: boolean;
};

export default function PageTemplate({
  page,
  breadcrumb,
  showContactCta = true,
}: PageTemplateProps) {
  return (
    <>
      <PageHeader title={page.title} description={page.description} breadcrumb={breadcrumb} />
      {page.sections.map((section, index) => (
        <Section
          key={section.id}
          id={section.id}
          title={section.title}
          description={section.description}
          variant={index % 2 === 1 ? "muted" : "default"}
        />
      ))}
      {showContactCta && <PageContactCta />}
    </>
  );
}
