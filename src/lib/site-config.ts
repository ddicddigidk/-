export const companyInfo = {
  name: "JDKC미디어",
  representative: "[대표자명]",
  phone: "[연락처]",
  email: "[이메일]",
  address: "[주소]",
  foundedYear: 2026,
  tagline: "첨단산업 교육과 취업역량 강화를 균형 있게 운영하는 교육기업",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const mainNavigation: NavItem[] = [
  { label: "첨단산업 교육", href: "/education" },
  { label: "취업역량 강화", href: "/career" },
  { label: "강연 및 특강", href: "/lectures" },
  { label: "위탁교육", href: "/corporate-training" },
  { label: "교육과정", href: "/courses" },
  { label: "인사이트", href: "/insights" },
  { label: "회사 소개", href: "/about" },
];

export const footerNavigation = {
  services: [
    { label: "첨단산업 교육", href: "/education" },
    { label: "취업역량 강화", href: "/career" },
    { label: "강연 및 특강", href: "/lectures" },
    { label: "위탁교육", href: "/corporate-training" },
  ],
  resources: [
    { label: "교육과정", href: "/courses" },
    { label: "인사이트", href: "/insights" },
  ],
  company: [
    { label: "회사 소개", href: "/about" },
    { label: "문의하기", href: "/contact" },
  ],
} as const;

export const routeMap = {
  "/": "home",
  "/education": "education",
  "/career": "career",
  "/lectures": "lectures",
  "/corporate-training": "corporate-training",
  "/courses": "courses",
  "/insights": "insights",
  "/about": "about",
  "/contact": "contact",
} as const;
