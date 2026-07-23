import Link from "next/link";
import { homeContent } from "@/data/home";
import HomeSection from "@/components/home/HomeSection";
import SectionHeader from "@/components/ui/SectionHeader";

export default function HomePartnershipSection() {
  const { partnership } = homeContent;

  return (
    <HomeSection id="partnership" variant="muted">
      <SectionHeader
        label={partnership.label}
        title={partnership.title}
        description={partnership.description}
        align="center"
        className="max-w-2xl"
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        {partnership.items.map((item) => (
          <article
            key={item.title}
            className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-8"
          >
            <h3 className="text-xl font-bold text-neutral-900">{item.title}</h3>
            <p className="mt-4 flex-1 leading-relaxed text-neutral-600">{item.description}</p>
            <Link
              href={item.href}
              className="mt-6 inline-flex text-sm font-medium text-primary-700 transition-colors hover:text-primary-800"
            >
              {item.cta}
            </Link>
          </article>
        ))}
      </div>
    </HomeSection>
  );
}
