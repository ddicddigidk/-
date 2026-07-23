import EducationFields from "@/components/education/EducationFields";
import NoteCta from "@/components/ui/NoteCta";
import PageContactCta from "@/components/ui/PageContactCta";
import SectionHeader from "@/components/ui/SectionHeader";
import { educationPage } from "@/data/education";
import { ctaLabels } from "@/data/seo";

export default function EducationPageContent() {
  const { note, audienceNote } = educationPage;

  return (
    <>
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <SectionHeader
            label={educationPage.label}
            title="네 가지 핵심 분야"
            description="분야별 목적·주제·대상·운영 형태를 같은 기준으로 비교해 보실 수 있습니다."
          />
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-500">
            {audienceNote}
          </p>
          <div className="mt-8 sm:mt-10">
            <EducationFields />
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
        title="첨단산업 교육이 필요하시면 문의해 주세요"
        description="분야별 과정 구성, 일정, 위탁 연계까지 목적에 맞춰 안내드립니다."
        secondary={{ label: "취업역량 강화 보기", href: "/career" }}
      />
    </>
  );
}
