import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteSeo } from "@/data/seo";
import { companyInfo } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: siteSeo.defaultTitle,
    template: `%s | ${companyInfo.name}`,
  },
  description: siteSeo.defaultDescription,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: companyInfo.name,
    title: siteSeo.defaultTitle,
    description: siteSeo.defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteSeo.defaultTitle,
    description: siteSeo.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="flex min-h-screen flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-800 focus:shadow"
        >
          본문으로 건너뛰기
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
