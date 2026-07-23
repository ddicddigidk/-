import { companyInfo } from "@/lib/site-config";

export const aboutPage = {
  label: "회사 소개",
  title: "산업과 취업을 잇는 교육기업",
  description: `${companyInfo.name}는 첨단산업 교육과 취업역량 강화를 균형 있게 운영하는 ${companyInfo.foundedYear}년 설립 교육기업입니다.`,
  intro: {
    label: "한 줄 소개",
    statement: `${companyInfo.name}는 반도체·디스플레이·AI·이차전지 등 첨단산업 교육과 면접·자소서·이력서 등 취업역량 강화 프로그램을 함께 제공하는 교육기업입니다.`,
  },
  founding: {
    label: "설립 배경",
    title: "왜 교육을 시작했는가",
    paragraphs: [
      "산업 현장에서는 실무 이해도가 높은 인재를 필요로 하고, 취업 준비 과정에서는 서류부터 면접까지 체계적인 준비가 필요합니다. 그러나 두 영역을 균형 있게 다루는 교육은 여전히 충분하지 않습니다.",
      `${companyInfo.name}는 ${companyInfo.foundedYear}년, 첨단산업 교육과 취업역량 강화를 동일한 비중으로 다루기 위해 설립되었습니다. 화려한 실적보다 교육의 설계와 운영 품질을 우선하며, 학습자와 기관 모두가 신뢰할 수 있는 파트너가 되고자 합니다.`,
    ],
  },
  visionMission: {
    vision: {
      label: "비전",
      title: "산업과 취업을 잇는 신뢰할 수 있는 교육 파트너",
      description:
        "첨단산업 역량과 취업 준비 역량이 함께 성장할 수 있도록, 실질적이고 지속 가능한 교육을 제공합니다.",
    },
    mission: {
      label: "미션",
      title: "실무 중심 교육으로 목표 실현을 돕습니다",
      description:
        "현장 수요에 맞춘 커리큘럼과 체계적인 취업 지원을 통해, 개인 학습자와 기업·기관의 교육 목표가 결과로 이어지도록 지원합니다.",
    },
  },
  values: {
    label: "핵심 가치",
    title: "교육을 설계하고 운영하는 기준",
    items: [
      {
        title: "전문성",
        description: "산업과 취업 분야의 전문 지식을 바탕으로 교육을 설계합니다.",
      },
      {
        title: "균형",
        description: "첨단산업 교육과 취업역량 강화를 동등한 비중으로 운영합니다.",
      },
      {
        title: "실무성",
        description: "이론에 그치지 않고, 현장과 취업 준비에 바로 적용할 수 있는 내용을 우선합니다.",
      },
      {
        title: "신뢰",
        description: "과장 없는 안내와 예측 가능한 운영으로 파트너십을 쌓아 갑니다.",
      },
    ],
  },
  greeting: {
    label: "대표 인사말",
    title: "준비된 교육으로, 함께 성장하겠습니다",
    paragraphs: [
      `안녕하세요. ${companyInfo.name} 대표 ${companyInfo.representative}입니다.`,
      "우리는 이제 막 시작한 교육기업입니다. 그렇기에 화려한 연혁을 말하기보다, 무엇을 어떻게 가르칠지 더 신중하게 고민합니다.",
      "첨단산업 교육과 취업역량 강화는 저희의 두 축입니다. 한쪽만 강조하지 않고, 산업 이해와 취업 준비가 함께 이루어지도록 교육 과정을 설계하겠습니다.",
      "대학, 청년기관, 취업지원센터, 기업·기관 담당자분들과 협력하며, 필요한 교육을 명확하고 성실하게 운영하는 조직이 되겠습니다.",
    ],
    signature: `대표 ${companyInfo.representative}`,
  },
  businesses: {
    label: "주요 사업영역",
    title: "두 축을 중심으로 교육을 운영합니다",
    description:
      "핵심 사업은 첨단산업 교육과 취업역량 강화이며, 강연·특강과 위탁교육을 통해 기관·기업과의 협력을 확장합니다.",
    items: [
      {
        ratio: "50%",
        title: "첨단산업 교육",
        description: "반도체, 디스플레이, AI, 이차전지 등 미래 산업 분야의 실무 중심 교육",
        href: "/education",
      },
      {
        ratio: "50%",
        title: "취업역량 강화",
        description: "면접, 자소서, 이력서, AI 면접, 포트폴리오 등 취업 준비 전 과정 지원",
        href: "/career",
      },
      {
        title: "강연 및 특강",
        description: "기관·기업 일정에 맞춘 강사진 공급과 주제별 특강 운영",
        href: "/lectures",
      },
      {
        title: "기업·기관 위탁교육",
        description: "교육 기획부터 운영·피드백까지 맞춤형 위탁교육 지원",
        href: "/corporate-training",
      },
    ],
  },
  growth: {
    label: "향후 성장 방향",
    title: "기반을 다지며 차근차근 확장합니다",
    description:
      "신생 조직으로서 무리한 확장보다, 교육 품질과 협력 관계를 먼저 쌓아 가겠습니다.",
    items: [
      {
        title: "프로그램 고도화",
        description: "첨단산업·취업 프로그램의 커리큘럼과 운영 방식을 지속적으로 보완합니다.",
      },
      {
        title: "기관 협력 확대",
        description: "대학, 청년기관, 취업지원센터, 기업과의 협력 기회를 넓혀 갑니다.",
      },
      {
        title: "운영 품질 강화",
        description: "상담·설계·운영·피드백 과정을 표준화해 안정적인 교육을 제공합니다.",
      },
    ],
  },
  cta: {
    title: "함께 교육을 설계해 보시죠",
    description:
      "교육 프로그램, 강연·특강, 위탁교육 등 협업이 필요하시면 편하게 문의해 주세요. 목적과 일정에 맞춰 제안드리겠습니다.",
    primary: { label: "문의하기", href: "/contact" },
    secondary: { label: "위탁교육 보기", href: "/corporate-training" },
  },
} as const;
