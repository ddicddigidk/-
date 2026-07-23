import ContactCta from "@/components/ui/ContactCta";
import { homeContent } from "@/data/home";

export default function HomeContactCta() {
  const { contactCta } = homeContent;

  return (
    <ContactCta
      id="contact-cta"
      title={contactCta.title}
      description={contactCta.description}
      primary={contactCta.primaryCta}
      secondary={contactCta.secondaryCta}
    />
  );
}
