import { homeContent } from "@/data/home";
import HomeSection from "@/components/home/HomeSection";
import SectionHeader from "@/components/ui/SectionHeader";

export default function HomeDifferentiators() {
  const { differentiators } = homeContent;

  return (
    <HomeSection id="differentiators">
      <SectionHeader
        label={differentiators.label}
        title={differentiators.title}
        description={differentiators.description}
        align="center"
        className="max-w-2xl"
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {differentiators.points.map((point, index) => (
          <article
            key={point.title}
            className="rounded-xl border border-neutral-200 p-6 transition-colors hover:border-primary-200"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-semibold text-neutral-900">{point.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{point.description}</p>
          </article>
        ))}
      </div>
    </HomeSection>
  );
}
