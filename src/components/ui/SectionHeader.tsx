type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h2" | "h3";
};

export default function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className = "",
  as = "h2",
}: SectionHeaderProps) {
  const Heading = as;
  const alignClass = align === "center" ? "mx-auto text-center" : "max-w-3xl";

  return (
    <div className={`${alignClass} ${className}`}>
      {label && (
        <p className="text-sm font-semibold tracking-wide text-primary-700">{label}</p>
      )}
      <Heading className="mt-2 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
        {title}
      </Heading>
      {description && (
        <p className="mt-4 leading-relaxed text-neutral-600">{description}</p>
      )}
    </div>
  );
}
