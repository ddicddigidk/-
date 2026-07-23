"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { companyInfo, mainNavigation } from "@/lib/site-config";

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`px-3 py-2 text-sm font-medium transition-colors ${
        isActive ? "text-primary-700" : "text-neutral-700 hover:text-primary-700"
      }`}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMobileOpen(false);
    }
    if (mobileOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex flex-col gap-0.5">
          <span className="text-lg font-bold tracking-tight text-primary-800">
            {companyInfo.name}
          </span>
          <span className="hidden text-xs text-neutral-500 sm:block">
            {companyInfo.tagline}
          </span>
        </Link>

        <nav className="hidden items-center xl:flex" aria-label="주요 메뉴">
          {mainNavigation.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        <div className="hidden xl:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-primary-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-800"
          >
            문의하기
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-neutral-600 hover:bg-neutral-100 xl:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls={menuId}
          aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <nav
          id={menuId}
          className="border-t border-neutral-200 bg-white xl:hidden"
          aria-label="모바일 메뉴"
        >
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            {mainNavigation.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className="block border-b border-neutral-100 py-3 text-base font-medium text-neutral-800 last:border-b-0"
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-4">
              <Link
                href="/contact"
                className="block w-full rounded-md bg-primary-700 px-4 py-3 text-center text-sm font-medium text-white"
              >
                문의하기
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
