import ProcessSteps from "@/components/ui/ProcessSteps";
import SectionHeader from "@/components/ui/SectionHeader";
import { operationProcess } from "@/data/b2b-process";

export default function B2BProcess() {
  return (
    <section className="border-y border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <SectionHeader
          label={operationProcess.label}
          title={operationProcess.title}
          description={operationProcess.description}
        />
        <div className="mt-12">
          <ProcessSteps steps={operationProcess.steps} />
        </div>
      </div>
    </section>
  );
}
