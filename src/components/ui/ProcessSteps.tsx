export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

type ProcessStepsProps = {
  steps: readonly ProcessStep[];
  className?: string;
};

export default function ProcessSteps({ steps, className = "" }: ProcessStepsProps) {
  return (
    <ol className={`relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ${className}`}>
      {steps.map((step, index) => (
        <li key={step.step} className="relative">
          {index < steps.length - 1 && (
            <span
              className="absolute left-1/2 top-8 hidden h-px w-full bg-neutral-200 lg:block"
              aria-hidden="true"
            />
          )}
          <div className="relative rounded-xl border border-neutral-200 bg-white p-6">
            <span className="text-sm font-bold text-primary-700">{step.step}</span>
            <h3 className="mt-2 font-semibold text-neutral-900">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
