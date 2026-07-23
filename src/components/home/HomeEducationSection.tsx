import Link from "next/link";
import { homeContent } from "@/data/home";
import HomeSection from "@/components/home/HomeSection";
import SectionHeader from "@/components/ui/SectionHeader";

export default function HomeEducationSection() {
  const { education } = homeContent;

  return (
    <HomeSection id="education" variant="muted">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <SectionHeader
          label={education.label}
          title={education.title}
          description={education.description}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {education.fields.map((field) => (
            <div
              key={field.title}
              className="rounded-xl border border-neutral-200 bg-white p-6 transition-colors hover:border-primary-200"
            >
              <h3 className="font-semibold text-neutral-900">{field.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {field.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 lg:mt-12">
        <Link
          href={education.href}
          className="inline-flex items-center rounded-md border border-primary-200 bg-white px-5 py-2.5 text-sm font-medium text-primary-700 transition-colors hover:bg-primary-50"
        >
          {education.cta}
        </Link>
      </div>
    </HomeSection>
  );
}
