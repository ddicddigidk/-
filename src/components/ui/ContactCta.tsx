import Link from "next/link";

type CtaLink = {
  label: string;
  href: string;
};

type ContactCtaProps = {
  title: string;
  description: string;
  primary: CtaLink;
  secondary: CtaLink;
  id?: string;
};

export default function ContactCta({
  title,
  description,
  primary,
  secondary,
  id,
}: ContactCtaProps) {
  return (
    <section id={id} className="bg-primary-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
          <p className="mt-4 leading-relaxed text-primary-100">{description}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={primary.href}
              className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-medium text-primary-800 transition-colors hover:bg-primary-50"
            >
              {primary.label}
            </Link>
            <Link
              href={secondary.href}
              className="inline-flex items-center rounded-md border border-primary-400 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-800"
            >
              {secondary.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
