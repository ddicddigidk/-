type HomeSectionProps = {
  id?: string;
  variant?: "default" | "muted" | "primary";
  children: React.ReactNode;
  className?: string;
};

const variantStyles = {
  default: "bg-white",
  muted: "border-y border-neutral-200 bg-neutral-50",
  primary: "bg-primary-900 text-white",
};

export default function HomeSection({
  id,
  variant = "default",
  children,
  className = "",
}: HomeSectionProps) {
  return (
    <section id={id} className={`${variantStyles[variant]} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {children}
      </div>
    </section>
  );
}
