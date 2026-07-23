import { companyInfo } from "@/lib/site-config";
import { ctaLabels } from "@/data/seo";

export const contactPage = {
  label: "문의하기",
  title: "교육·협업 문의를 남겨 주세요",
  description:
    "개인 상담부터 기업·기관 위탁·강연 문의까지, 목적에 맞는 안내를 드립니다.",
  lead: {
    title: "궁금한 점을 남겨 주시면 확인 후 연락드리겠습니다",
    description:
      "교육 프로그램, 취업역량 과정, 강연·특강, 위탁교육 등 문의 유형을 선택해 주시면 더 빠르게 안내할 수 있습니다.",
  },
  contactInfo: {
    label: "기본 연락 정보",
    items: [
      { label: "대표자", value: companyInfo.representative },
      { label: "연락처", value: companyInfo.phone },
      { label: "이메일", value: companyInfo.email },
      { label: "주소", value: companyInfo.address },
    ],
  },
  faq: {
    label: "자주 묻는 문의 예시",
    title: "이런 내용을 문의하실 수 있습니다",
    items: [
      {
        title: "개인 · 취업 준비",
        examples: [
          "면접·자소서 프로그램 일정과 수강 방법을 알고 싶습니다.",
          "AI 면접 대비 과정이 있는지 문의드립니다.",
        ],
      },
      {
        title: "기업 · 기관",
        examples: [
          "대학/취업지원센터 대상 특강 진행이 가능한지 문의드립니다.",
          "기업 재직자 대상 위탁교육 커리큘럼 제안이 필요합니다.",
        ],
      },
    ],
  },
  form: {
    inquiryTypes: [
      { value: "individual", label: "개인 문의" },
      { value: "organization", label: "기업·기관 문의" },
    ],
    interestAreas: [
      { value: "education", label: "첨단산업 교육" },
      { value: "career", label: "취업역량 강화" },
      { value: "lectures", label: "강연 및 특강" },
      { value: "corporate-training", label: "기업·기관 위탁교육" },
      { value: "courses", label: "교육과정 안내" },
      { value: "other", label: "기타" },
    ],
    submitLabel: ctaLabels.sendInquiry,
    successTitle: "문의가 접수되었습니다",
    successDescription:
      "남겨 주신 내용을 확인한 뒤 연락드리겠습니다. 추가 문의가 있으시면 아래 연락처로도 연락해 주세요.",
  },
} as const;
