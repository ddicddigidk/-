import Link from "next/link";
import { homeContent } from "@/data/home";
import HomeSection from "@/components/home/HomeSection";
import SectionHeader from "@/components/ui/SectionHeader";

export default function HomeCareerSection() {
  const { career } = homeContent;

  return (
    <HomeSection id="career">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <div className="grid gap-3 sm:grid-cols-2">
            {career.programs.map((program) => (
              <div
                key={program.title}
                className="rounded-xl border border-neutral-200 p-5 transition-colors hover:border-primary-200 hover:bg-primary-50/30"
              >
                <h3 className="font-semibold text-neutral-900">{program.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeader
            label={career.label}
            title={career.title}
            description={career.description}
          />
          <Link
            href={career.href}
            className="mt-8 inline-flex items-center rounded-md border border-primary-200 bg-white px-5 py-2.5 text-sm font-medium text-primary-700 transition-colors hover:bg-primary-50"
          >
            {career.cta}
          </Link>
        </div>
      </div>
    </HomeSection>
  );
}
