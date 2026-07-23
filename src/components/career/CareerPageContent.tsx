import CareerPrograms from "@/components/career/CareerPrograms";
import NoteCta from "@/components/ui/NoteCta";
import PageContactCta from "@/components/ui/PageContactCta";
import SectionHeader from "@/components/ui/SectionHeader";
import { careerPage } from "@/data/career";
import { ctaLabels } from "@/data/seo";

export default function CareerPageContent() {
  const { note, audienceNote } = careerPage;

  return (
    <>
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <SectionHeader
            label={careerPage.label}
            title="다섯 가지 실전 프로그램"
            description="프로그램별 소개, 기대 효과, 추천 대상, 운영 형태를 같은 기준으로 비교할 수 있습니다."
          />
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-500">
            {audienceNote}
          </p>
          <div className="mt-8 sm:mt-10">
            <CareerPrograms />
          </div>
        </div>
      </section>

      <NoteCta
        title={note.title}
        description={note.description}
        primary={{ label: ctaLabels.inquire, href: "/contact" }}
        secondary={{ label: "위탁교육 보기", href: note.cta.href }}
      />

      <PageContactCta
        title="취업역량 프로그램이 필요하시면 문의해 주세요"
        description="개인 상담과 대학·청년기관·취업지원센터 연계 운영을 안내드립니다."
        secondary={{ label: "첨단산업 교육 보기", href: "/education" }}
      />
    </>
  );
}
