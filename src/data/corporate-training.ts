export const corporateTrainingPage = {
  label: "기업·기관 위탁교육",
  title: "목표와 일정에 맞춘 맞춤형 위탁교육",
  description:
    "교육 니즈 분석부터 커리큘럼 설계, 강사 구성, 운영, 결과 보고까지 위탁교육 전 과정을 체계적으로 지원합니다.",
  audienceNote:
    "기업 HRD, 공공기관, 대학, 취업지원센터 담당자께서 내부 품의·비교에 활용하기 쉬운 구조로 정리했습니다.",
  overview: {
    label: "맞춤형 위탁교육",
    title: "조직의 교육 목표에 맞게 설계합니다",
    description:
      "표준 과정 제공에 그치지 않고, 참석 대상과 운영 환경에 맞춰 교육 범위와 난이도를 조정합니다.",
    points: [
      {
        title: "니즈 기반 설계",
        description: "직무·역량 목표, 참석자 수준, 운영 제약을 반영해 과정을 구성합니다.",
      },
      {
        title: "강사·운영 일괄 지원",
        description: "강사 매칭, 교안·자료, 일정·장소 조율까지 운영 부담을 줄입니다.",
      },
      {
        title: "결과 공유",
        description: "교육 진행 결과와 피드백을 정리해 내부 보고에 활용할 수 있도록 제공합니다.",
      },
    ],
  },
  scopes: {
    label: "교육 범위",
    title: "연계 가능한 교육 영역",
    description: "첨단산업 교육과 취업역량 강화 프로그램을 단독 또는 혼합 과정으로 운영할 수 있습니다.",
    items: [
      {
        title: "첨단산업 교육",
        description: "반도체, 디스플레이, AI, 이차전지 등 산업 이해와 기초 실무 교육",
        href: "/education",
      },
      {
        title: "취업역량 강화",
        description: "면접, 자소서, 이력서, AI 면접, 포트폴리오 등 취업 준비 프로그램",
        href: "/career",
      },
      {
        title: "강연·특강 연계",
        description: "정규 위탁과정 전후 특강, 오리엔테이션, 동기부여 세션 구성",
        href: "/lectures",
      },
      {
        title: "혼합형 과정",
        description: "이론·실습·코칭을 조합한 단기·중기 맞춤 과정 설계",
        href: "/contact",
      },
    ],
  },
  formats: {
    title: "운영 형태",
    items: ["단기 집중 과정", "중기 정규 과정", "온·오프라인 병행", "방문·위탁 병행 운영"],
  },
  cta: {
    title: "위탁교육 구성을 함께 검토해 보시죠",
    description:
      "교육 목적과 예상 인원, 희망 일정만 공유해 주시면 운영안과 예상 구성을 제안드립니다.",
    primary: { label: "문의하기", href: "/contact" },
    secondary: { label: "강연·특강 보기", href: "/lectures" },
  },
} as const;
