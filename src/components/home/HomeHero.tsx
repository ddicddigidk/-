import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/data/home";

export default function HomeHero() {
  const { hero } = homeContent;

  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/hero-banner.jpg"
        alt="전문 교육 환경의 세미나실"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/88 via-white/82 to-white/92" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-800">
            {hero.badge}
          </p>
          <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            {hero.title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">{hero.description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex items-center rounded-md bg-primary-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-800"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex items-center rounded-md border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-700 transition-colors hover:border-primary-300 hover:bg-primary-50"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {hero.highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-neutral-200 bg-white/80 px-6 py-5 backdrop-blur-sm"
            >
              <dt className="text-sm text-neutral-500">{item.label}</dt>
              <dd className="mt-1 text-2xl font-bold text-primary-800">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
