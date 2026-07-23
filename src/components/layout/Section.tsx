type SectionProps = {
  id?: string;
  title: string;
  description: string;
  variant?: "default" | "muted";
  children?: React.ReactNode;
};

export default function Section({
  id,
  title,
  description,
  variant = "default",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={variant === "muted" ? "border-y border-neutral-200 bg-neutral-50" : undefined}
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900">{title}</h2>
          <p className="mt-3 leading-relaxed text-neutral-600 sm:mt-4">{description}</p>
        </div>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
