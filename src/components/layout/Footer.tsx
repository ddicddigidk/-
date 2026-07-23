import Link from "next/link";
import { companyInfo, footerNavigation } from "@/lib/site-config";
import { ctaLabels } from "@/data/seo";

type FooterLinkGroupProps = {
  title: string;
  links: readonly { label: string; href: string }[];
};

function FooterLinkGroup({ title, links }: FooterLinkGroupProps) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-white">{title}</h2>
      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-neutral-300 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="text-lg font-bold text-white">{companyInfo.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-400">
              {companyInfo.tagline}
            </p>
            <p className="mt-4 text-sm text-neutral-500">
              {companyInfo.foundedYear}년 설립
            </p>
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
                <dt className="shrink-0 text-neutral-500">대표자</dt>
                <dd>{companyInfo.representative}</dd>
              </div>
              <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
                <dt className="shrink-0 text-neutral-500">연락처</dt>
                <dd>
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="transition-colors hover:text-white"
                  >
                    {companyInfo.phone}
                  </a>
                </dd>
              </div>
              <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
                <dt className="shrink-0 text-neutral-500">이메일</dt>
                <dd>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="transition-colors hover:text-white"
                  >
                    {companyInfo.email}
                  </a>
                </dd>
              </div>
              <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
                <dt className="shrink-0 text-neutral-500">주소</dt>
                <dd className="leading-relaxed">{companyInfo.address}</dd>
              </div>
            </dl>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center rounded-md bg-primary-700 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-800"
            >
              {ctaLabels.inquire}
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-3">
            <FooterLinkGroup title="서비스" links={footerNavigation.services} />
            <FooterLinkGroup title="리소스" links={footerNavigation.resources} />
            <FooterLinkGroup title="회사" links={footerNavigation.company} />
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-800 pt-8">
          <p className="text-center text-sm text-neutral-500">
            © {currentYear} {companyInfo.name}. 모든 권리 보유.
          </p>
        </div>
      </div>
    </footer>
  );
}
