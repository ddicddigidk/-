import { companyInfo } from "@/lib/site-config";

export const homeContent = {
  hero: {
    badge: "2026년 설립 · 전문 교육기업",
    title: "첨단산업 교육과 취업역량 강화,\n균형 있는 성장을 설계합니다",
    description: `${companyInfo.name}는 반도체·디스플레이·AI·이차전지 등 첨단산업 교육과 면접·자소서·이력서 등 취업역량 강화 프로그램을 동등한 비중으로 운영하는 교육기업입니다.`,
    primaryCta: { label: "첨단산업 교육 보기", href: "/education" },
    secondaryCta: { label: "취업역량 강화 보기", href: "/career" },
    highlights: [
      { label: "핵심 사업", value: "2개 영역" },
      { label: "첨단산업 교육", value: "50%" },
      { label: "취업역량 강화", value: "50%" },
    ],
  },
  coreServices: {
    label: "핵심 서비스",
    title: "두 축으로 구성된 교육 서비스",
    description:
      "산업 현장 역량과 취업 준비 역량을 균형 있게 강화하여, 학습자와 기관 모두에게 실질적인 성과를 제공합니다.",
    services: [
      {
        id: "education",
        ratio: "50%",
        title: "첨단산업 교육",
        description:
          "반도체, 디스플레이, AI, 이차전지 등 미래 산업 분야의 실무 중심 교육 프로그램을 운영합니다.",
        features: ["산업별 맞춤 커리큘럼", "현장 중심 실습 구성", "기업·기관 위탁 연계"],
        href: "/education",
        cta: "자세히 보기",
      },
      {
        id: "career",
        ratio: "50%",
        title: "취업역량 강화",
        description:
          "면접, 자소서, 이력서, AI 면접, 포트폴리오 등 취업 준비 전 과정을 체계적으로 지원합니다.",
        features: ["단계별 취업 코칭", "1:1 피드백 제공", "AI 면접 대비 프로그램"],
        href: "/career",
        cta: "자세히 보기",
      },
    ],
  },
  education: {
    label: "첨단산업 교육",
    title: "산업 현장에 맞춘 실무 교육",
    description:
      "산업 수요에 맞춘 커리큘럼으로 기초 이론부터 현장 적용까지 단계별 학습을 제공합니다.",
    fields: [
      {
        title: "반도체",
        description: "공정, 설계, 품질 관리 등 반도체 산업 핵심 역량 교육",
      },
      {
        title: "디스플레이",
        description: "패널, OLED, LCD 등 디스플레이 기술 실무 교육",
      },
      {
        title: "AI",
        description: "인공지능 기초부터 머신러닝·딥러닝 실무 교육",
      },
      {
        title: "이차전지",
        description: "소재, 셀 설계, 공정 등 이차전지 산업 역량 교육",
      },
    ],
    href: "/education",
    cta: "자세히 보기",
  },
  career: {
    label: "취업역량 강화",
    title: "취업 준비 단계별 실전 지원",
    description:
      "서류 작성부터 면접 실전까지, 취업 준비 각 단계에 필요한 역량을 체계적으로 강화합니다.",
    programs: [
      {
        title: "면접",
        description: "기업별 면접 유형 분석 및 모의 면접 실습",
      },
      {
        title: "자소서",
        description: "직무별 자기소개서 작성법 및 첨삭 코칭",
      },
      {
        title: "이력서",
        description: "채용 담당자 관점의 이력서 작성 및 피드백",
      },
      {
        title: "AI 면접",
        description: "AI 면접 환경에 맞춘 실전 대비 프로그램",
      },
      {
        title: "포트폴리오",
        description: "직무별 포트폴리오 기획 및 제작 지원",
      },
    ],
    href: "/career",
    cta: "자세히 보기",
  },
  partnership: {
    label: "기관·기업 연계",
    title: "강사진 공급과 위탁교육",
    description:
      "현장 경험이 풍부한 강사진과 맞춤형 위탁교육 운영을 바탕으로, 기관과 기업의 교육 목표 달성을 지원합니다.",
    items: [
      {
        title: "강사진 공급",
        description:
          "첨단산업 및 취업 분야 전문 강사진을 매칭하여, 강연·특강·정규 교육에 활용할 수 있도록 지원합니다.",
        href: "/lectures",
        cta: "자세히 보기",
      },
      {
        title: "기업·기관 위탁교육",
        description:
          "교육 니즈 분석부터 커리큘럼 설계, 운영, 성과 평가까지 위탁교육 전 과정을 지원합니다.",
        href: "/corporate-training",
        cta: "자세히 보기",
      },
    ],
  },
  differentiators: {
    label: "차별화 포인트",
    title: `${companyInfo.name}가 지향하는 교육의 기준`,
    description:
      "화려한 마케팅보다 교육의 본질에 집중합니다. 학습자와 기관 모두가 신뢰할 수 있는 운영 체계를 갖추고 있습니다.",
    points: [
      {
        title: "실무 중심 커리큘럼",
        description: "현장 수요를 반영한 교육 설계로 학습 내용이 곧바로 적용 가능하도록 구성합니다.",
      },
      {
        title: "균형 잡힌 사업 구조",
        description: "첨단산업 교육과 취업역량 강화를 50:50 비중으로 운영하여 양쪽 역량을 함께 키웁니다.",
      },
      {
        title: "전문 강사진 운영",
        description: "분야별 현장 경험을 보유한 강사진이 일관된 품질의 교육을 제공합니다.",
      },
      {
        title: "맞춤형 교육 기획",
        description: "기관·기업의 목표와 일정에 맞춘 위탁교육 및 프로그램 기획이 가능합니다.",
      },
    ],
  },
  process: {
    label: "교육 운영 프로세스",
    title: "기획부터 평가까지, 체계적인 교육 운영",
    description:
      "교육의 각 단계를 명확히 정의하고 운영하여, 예측 가능하고 신뢰할 수 있는 교육 경험을 제공합니다.",
    steps: [
      {
        step: "01",
        title: "니즈 분석",
        description: "학습자·기관의 목표와 현재 수준을 파악합니다.",
      },
      {
        step: "02",
        title: "커리큘럼 설계",
        description: "분석 결과를 바탕으로 맞춤형 교육 과정을 설계합니다.",
      },
      {
        step: "03",
        title: "교육 운영",
        description: "강사 매칭, 수업 진행, 학습 관리를 체계적으로 수행합니다.",
      },
      {
        step: "04",
        title: "성과 평가",
        description: "만족도 조사와 역량 향상도를 측정하여 결과를 공유합니다.",
      },
    ],
  },
  contactCta: {
    title: "교육 프로그램 상담이 필요하신가요?",
    description:
      "첨단산업 교육, 취업역량 강화, 위탁교육, 강연 의뢰 등 궁금하신 사항을 남겨 주시면 담당자가 확인 후 연락드리겠습니다.",
    primaryCta: { label: "문의하기", href: "/contact" },
    secondaryCta: { label: "교육과정 보기", href: "/courses" },
  },
} as const;
