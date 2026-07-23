import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/breadcrumbs";

type PageHeaderProps = {
  title: string;
  description?: string;
  breadcrumb?: BreadcrumbItem[];
};

export default function PageHeader({ title, description, breadcrumb }: PageHeaderProps) {
  return (
    <section className="border-b border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav aria-label="breadcrumb" className="mb-3 sm:mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-neutral-500">
              {breadcrumb.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  {index > 0 && <span aria-hidden="true">/</span>}
                  {item.href ? (
                    <Link href={item.href} className="hover:text-primary-700">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-neutral-700">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-neutral-600 sm:mt-4 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
