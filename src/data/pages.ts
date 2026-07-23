export type PageSection = {
  id: string;
  title: string;
  description: string;
};

export type PageContent = {
  slug: string;
  title: string;
  description: string;
  sections: PageSection[];
};

/** Placeholder content for routes not yet fully built out */
export const pageContents = {
  courses: {
    slug: "courses",
    title: "교육과정",
    description: "현재 운영 중인 교육과정과 수강 안내 정보를 확인할 수 있습니다.",
    sections: [
      {
        id: "open-courses",
        title: "모집 중 과정",
        description: "첨단산업 및 취업역량 분야의 현재 모집 중인 교육과정 목록입니다.",
      },
      {
        id: "schedule",
        title: "교육 일정",
        description: "과정별 교육 기간, 수업 방식, 모집 마감일 등 상세 일정 정보를 제공합니다.",
      },
      {
        id: "application",
        title: "수강 신청",
        description: "과정별 수강 신청 방법과 문의 절차를 안내합니다.",
      },
    ],
  },
  insights: {
    slug: "insights",
    title: "인사이트",
    description: "교육 트렌드, 산업 동향, 취업 정보 등 유용한 콘텐츠를 공유합니다.",
    sections: [
      {
        id: "articles",
        title: "아티클",
        description: "첨단산업과 취업 시장의 최신 동향을 분석한 전문 콘텐츠입니다.",
      },
      {
        id: "news",
        title: "소식",
        description: "교육 프로그램 개설, 강연 일정, 기업 협력 등 회사의 주요 소식입니다.",
      },
      {
        id: "resources",
        title: "자료실",
        description: "취업 준비 및 학습에 도움이 되는 가이드와 자료를 제공합니다.",
      },
    ],
  },
} as const satisfies Record<string, PageContent>;

export type PageSlug = keyof typeof pageContents;
