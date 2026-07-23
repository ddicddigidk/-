import { homeContent } from "@/data/home";
import HomeSection from "@/components/home/HomeSection";
import ProcessSteps from "@/components/ui/ProcessSteps";
import SectionHeader from "@/components/ui/SectionHeader";

export default function HomeProcess() {
  const { process } = homeContent;

  return (
    <HomeSection id="process" variant="muted">
      <SectionHeader
        label={process.label}
        title={process.title}
        description={process.description}
        align="center"
        className="max-w-2xl"
      />
      <div className="mt-14">
        <ProcessSteps steps={process.steps} />
      </div>
    </HomeSection>
  );
}
