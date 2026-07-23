import Link from "next/link";
import { homeContent } from "@/data/home";
import HomeSection from "@/components/home/HomeSection";
import SectionHeader from "@/components/ui/SectionHeader";

export default function HomeCoreServices() {
  const { coreServices } = homeContent;

  return (
    <HomeSection id="core-services">
      <SectionHeader
        label={coreServices.label}
        title={coreServices.title}
        description={coreServices.description}
        align="center"
        className="max-w-2xl"
      />

      <div className="mt-10 grid gap-6 sm:mt-14 lg:grid-cols-2 lg:gap-8">
        {coreServices.services.map((service) => (
          <article
            key={service.id}
            className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-sm font-bold text-primary-700">
                {service.ratio}
              </span>
              <h3 className="text-xl font-bold text-neutral-900">{service.title}</h3>
            </div>
            <p className="mt-4 flex-1 leading-relaxed text-neutral-600">{service.description}</p>
            <ul className="mt-6 space-y-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-neutral-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href={service.href}
              className="mt-8 inline-flex text-sm font-medium text-primary-700 transition-colors hover:text-primary-800"
            >
              {service.cta}
            </Link>
          </article>
        ))}
      </div>
    </HomeSection>
  );
}
