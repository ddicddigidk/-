import ContactCta from "@/components/ui/ContactCta";
import { ctaLabels } from "@/data/seo";

type PageContactCtaProps = {
  title?: string;
  description?: string;
  secondary?: { label: string; href: string };
};

export default function PageContactCta({
  title = "교육·협업이 필요하시면 문의해 주세요",
  description = "첨단산업 교육, 취업역량 강화, 강연·특강, 위탁교육 등 목적에 맞는 안내를 드립니다.",
  secondary = { label: ctaLabels.viewCourses, href: "/courses" },
}: PageContactCtaProps) {
  return (
    <ContactCta
      title={title}
      description={description}
      primary={{ label: ctaLabels.inquire, href: "/contact" }}
      secondary={secondary}
    />
  );
}
