"use client";

import ProgramExplorer, { type ExplorerItem } from "@/components/ui/ProgramExplorer";
import { careerPage } from "@/data/career";

const items: ExplorerItem[] = careerPage.programs.map((program) => ({
  id: program.id,
  name: program.name,
  intro: program.intro,
  ctaLabel: `${program.name} 문의하기`,
  blocks: [
    { title: "기대 효과", items: program.outcomes },
    { title: "추천 대상", items: program.audience },
    { title: "운영 형태", items: program.formats },
  ],
}));

export default function CareerPrograms() {
  return (
    <ProgramExplorer
      items={items}
      tablistLabel="취업역량 프로그램"
      summaryColsClassName="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
      footerNote="일정·인원·연계 운영이 필요하시면 상담을 남겨 주세요."
    />
  );
}
