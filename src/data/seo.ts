import { companyInfo } from "@/lib/site-config";

export const siteSeo = {
  siteName: companyInfo.name,
  defaultTitle: `${companyInfo.name} | 첨단산업 교육 · 취업역량 강화`,
  defaultDescription: companyInfo.tagline,
} as const;

export const pageSeo = {
  home: {
    title: siteSeo.defaultTitle,
    description: `${companyInfo.name}는 첨단산업 교육과 취업역량 강화 프로그램을 균형 있게 운영하는 ${companyInfo.foundedYear}년 설립 교육기업입니다.`,
  },
  education: {
    title: "첨단산업 교육",
    description:
      "반도체, 디스플레이, AI, 이차전지 분야 실무 교육을 소개합니다. 목적·주제·대상·운영 형태를 비교해 보세요.",
  },
  career: {
    title: "취업역량 강화",
    description:
      "면접, 자소서, 이력서, AI 면접, 포트폴리오 등 취업 준비 프로그램을 안내합니다. 개인·기관 연계 운영이 가능합니다.",
  },
  lectures: {
    title: "강연 및 특강",
    description:
      "강사진 공급과 기관·기업 맞춤 강연·특강 운영을 안내합니다. 상담부터 피드백까지 단계적으로 진행합니다.",
  },
  "corporate-training": {
    title: "기업·기관 위탁교육",
    description:
      "기업 HRD·공공기관·대학·취업지원센터를 위한 맞춤형 위탁교육을 소개합니다. 기획부터 결과 공유까지 지원합니다.",
  },
  courses: {
    title: "교육과정",
    description:
      "첨단산업·취업역량 교육과정의 모집 현황과 수강 안내를 확인할 수 있습니다. 자세한 일정은 문의해 주세요.",
  },
  insights: {
    title: "인사이트",
    description:
      "교육 트렌드, 산업 동향, 취업 정보 등 학습자와 기관 담당자를 위한 인사이트를 제공합니다.",
  },
  about: {
    title: "회사 소개",
    description: `${companyInfo.name}는 ${companyInfo.foundedYear}년 설립된 교육기업입니다. 비전·미션·핵심 가치와 주요 사업영역을 소개합니다.`,
  },
  contact: {
    title: "문의하기",
    description:
      "개인 상담과 기업·기관 문의를 남겨 주세요. 교육·강연·위탁교육 관련 내용을 확인 후 안내드립니다.",
  },
} as const;

/** 사이트 공통 CTA 문구 규칙 */
export const ctaLabels = {
  inquire: "문의하기",
  sendInquiry: "문의 보내기",
  viewCourses: "교육과정 보기",
  viewDetails: "자세히 보기",
} as const;
