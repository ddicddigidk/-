import Link from "next/link";

type CtaLink = {
  label: string;
  href: string;
};

type NoteCtaProps = {
  title: string;
  description: string;
  primary: CtaLink;
  secondary: CtaLink;
};

export default function NoteCta({ title, description, primary, secondary }: NoteCtaProps) {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="rounded-2xl border border-neutral-200 bg-white px-6 py-10 sm:px-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-xl font-bold text-neutral-900">{title}</h2>
              <p className="mt-3 leading-relaxed text-neutral-600">{description}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={secondary.href}
                className="inline-flex items-center rounded-md border border-primary-200 px-5 py-2.5 text-sm font-medium text-primary-700 transition-colors hover:bg-primary-50"
              >
                {secondary.label}
              </Link>
              <Link
                href={primary.href}
                className="inline-flex items-center rounded-md bg-primary-700 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-800"
              >
                {primary.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
