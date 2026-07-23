"use client";

import ProgramExplorer, { type ExplorerItem } from "@/components/ui/ProgramExplorer";
import { educationPage } from "@/data/education";

const items: ExplorerItem[] = educationPage.fields.map((field) => ({
  id: field.id,
  name: field.name,
  intro: field.intro,
  ctaLabel: `${field.name} 문의하기`,
  blocks: [
    { title: "교육 목적", text: field.purpose },
    { title: "주요 주제", items: field.topics },
    { title: "추천 대상", items: field.audience },
    { title: "운영 형태", items: field.formats },
  ],
}));

export default function EducationFields() {
  return (
    <ProgramExplorer
      items={items}
      tablistLabel="교육 분야"
      summaryColsClassName="sm:grid-cols-2 lg:grid-cols-4"
      footerNote="과정 일정·맞춤 구성이 필요하시면 상담을 남겨 주세요."
    />
  );
}
