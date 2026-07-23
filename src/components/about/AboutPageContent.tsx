import Link from "next/link";
import ContactCta from "@/components/ui/ContactCta";
import { aboutPage } from "@/data/about";

export default function AboutPageContent() {
  const {
    intro,
    founding,
    visionMission,
    values,
    greeting,
    businesses,
    growth,
    cta,
  } = aboutPage;

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wide text-primary-700">{intro.label}</p>
            <p className="mt-4 text-xl font-medium leading-relaxed text-neutral-800 sm:text-2xl">
              {intro.statement}
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wide text-primary-700">
              {founding.label}
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
              {founding.title}
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-neutral-600">
              {founding.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-2xl border border-neutral-200 p-8">
              <p className="text-sm font-semibold tracking-wide text-primary-700">
                {visionMission.vision.label}
              </p>
              <h3 className="mt-3 text-xl font-bold text-neutral-900">
                {visionMission.vision.title}
              </h3>
              <p className="mt-4 leading-relaxed text-neutral-600">
                {visionMission.vision.description}
              </p>
            </article>
            <article className="rounded-2xl border border-neutral-200 p-8">
              <p className="text-sm font-semibold tracking-wide text-primary-700">
                {visionMission.mission.label}
              </p>
              <h3 className="mt-3 text-xl font-bold text-neutral-900">
                {visionMission.mission.title}
              </h3>
              <p className="mt-4 leading-relaxed text-neutral-600">
                {visionMission.mission.description}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wide text-primary-700">{values.label}</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
              {values.title}
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.items.map((value, index) => (
              <article
                key={value.title}
                className="rounded-xl border border-neutral-200 bg-white p-6"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-semibold text-neutral-900">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50/80 p-8 sm:p-10">
            <p className="text-sm font-semibold tracking-wide text-primary-700">
              {greeting.label}
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
              {greeting.title}
            </h2>
            <div className="mt-8 max-w-3xl space-y-4 leading-relaxed text-neutral-600">
              {greeting.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-8 font-medium text-neutral-900">{greeting.signature}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wide text-primary-700">
              {businesses.label}
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
              {businesses.title}
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-600">{businesses.description}</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {businesses.items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-xl border border-neutral-200 bg-white p-6 transition-colors hover:border-primary-200 hover:bg-primary-50/40"
              >
                <div className="flex items-center gap-3">
                  {"ratio" in item && item.ratio && (
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-xs font-bold text-primary-700">
                      {item.ratio}
                    </span>
                  )}
                  <h3 className="font-semibold text-neutral-900">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {item.description}
                </p>
                <p className="mt-4 text-sm font-medium text-primary-700">자세히 보기</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wide text-primary-700">{growth.label}</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
              {growth.title}
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-600">{growth.description}</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {growth.items.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-neutral-200 p-6"
              >
                <h3 className="font-semibold text-neutral-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCta
        title={cta.title}
        description={cta.description}
        primary={cta.primary}
        secondary={cta.secondary}
      />
    </>
  );
}
