export const lecturesPage = {
  label: "강연 및 특강",
  title: "기관·기업 일정에 맞춘 강연·특강 운영",
  description:
    "교육 목표와 참석 대상에 맞춰 강사진을 구성하고, 단회 특강부터 시리즈 강연까지 안정적으로 운영합니다.",
  audienceNote:
    "대학, 공공기관, 취업지원센터, 기업 HRD 담당자께서 제안·비교하기 쉬운 구조로 정리했습니다.",
  instructors: {
    label: "강사진 공급",
    title: "교육 목적에 맞는 전문 강사진 구성",
    description:
      "주제·대상·난이도에 따라 적합한 강사를 매칭합니다. 단발 특강뿐 아니라 연속 과정, 위탁교육과도 연계할 수 있습니다.",
    points: [
      {
        title: "분야별 강사 매칭",
        description: "첨단산업·취업역량 등 요청 주제에 맞는 강사진을 제안합니다.",
      },
      {
        title: "사전 브리핑",
        description: "기관 목표, 참석자 특성, 전달 메시지를 사전 조율합니다.",
      },
      {
        title: "운영 지원",
        description: "일정 조율, 자료 준비, 현장·온라인 진행을 함께 지원합니다.",
      },
    ],
  },
  topics: {
    label: "제공 분야",
    title: "강연·특강으로 운영 가능한 주제",
    description: "아래 분야를 기준으로 요청 기관의 목적에 맞게 주제를 조정합니다.",
    items: [
      {
        title: "첨단산업 이해",
        description: "반도체, 디스플레이, AI, 이차전지 등 산업 개요와 직무 이해를 다룹니다.",
      },
      {
        title: "취업·진로 특강",
        description: "서류·면접 준비, 직무 탐색, 취업 전략 등 실전 중심 특강을 제공합니다.",
      },
      {
        title: "기관·기업 맞춤 세션",
        description: "신입 온보딩, 재직자 역량 강화, 청년·구직자 지원 프로그램에 맞춰 구성합니다.",
      },
      {
        title: "시리즈·연속 강연",
        description: "단회 특강뿐 아니라 단계별 시리즈로도 설계·운영할 수 있습니다.",
      },
    ],
  },
  formats: {
    title: "운영 형태",
    items: ["오프라인 특강", "온라인·하이브리드", "단회 / 시리즈", "기관·기업 방문 강의"],
  },
  cta: {
    title: "강연·특강 일정을 논의하고 싶으신가요?",
    description:
      "목적, 대상, 희망 일정만 알려주시면 주제 구성과 강사진 운영안을 제안드립니다.",
    primary: { label: "문의하기", href: "/contact" },
    secondary: { label: "위탁교육 보기", href: "/corporate-training" },
  },
} as const;
