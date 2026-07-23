export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function buildBreadcrumb(...items: BreadcrumbItem[]): BreadcrumbItem[] {
  return [{ label: "홈", href: "/" }, ...items];
}
