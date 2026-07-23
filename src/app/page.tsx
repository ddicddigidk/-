import type { Metadata } from "next";
import HomeCareerSection from "@/components/home/HomeCareerSection";
import HomeContactCta from "@/components/home/HomeContactCta";
import HomeCoreServices from "@/components/home/HomeCoreServices";
import HomeDifferentiators from "@/components/home/HomeDifferentiators";
import HomeEducationSection from "@/components/home/HomeEducationSection";
import HomeHero from "@/components/home/HomeHero";
import HomePartnershipSection from "@/components/home/HomePartnershipSection";
import HomeProcess from "@/components/home/HomeProcess";
import { pageSeo } from "@/data/seo";

export const metadata: Metadata = {
  title: {
    absolute: pageSeo.home.title,
  },
  description: pageSeo.home.description,
  openGraph: {
    title: pageSeo.home.title,
    description: pageSeo.home.description,
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeCoreServices />
      <HomeEducationSection />
      <HomeCareerSection />
      <HomePartnershipSection />
      <HomeDifferentiators />
      <HomeProcess />
      <HomeContactCta />
    </>
  );
}
