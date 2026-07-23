import B2BProcess from "@/components/b2b/B2BProcess";
import ContactCta from "@/components/ui/ContactCta";
import SectionHeader from "@/components/ui/SectionHeader";
import { lecturesPage } from "@/data/lectures";

export default function LecturesPageContent() {
  const { instructors, topics, formats, cta, audienceNote } = lecturesPage;

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <SectionHeader
            label={instructors.label}
            title={instructors.title}
            description={instructors.description}
          />
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-500">
            {audienceNote}
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {instructors.points.map((point) => (
              <article
                key={point.title}
                className="rounded-xl border border-neutral-200 p-6"
              >
                <h3 className="font-semibold text-neutral-900">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {point.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <SectionHeader
            label={topics.label}
            title={topics.title}
            description={topics.description}
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {topics.items.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-neutral-200 bg-neutral-50/60 p-6"
              >
                <h3 className="font-semibold text-neutral-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-neutral-200 bg-white p-6">
            <h3 className="text-sm font-semibold text-neutral-900">{formats.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {formats.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm text-neutral-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <B2BProcess />
      <ContactCta
        title={cta.title}
        description={cta.description}
        primary={cta.primary}
        secondary={cta.secondary}
      />
    </>
  );
}
