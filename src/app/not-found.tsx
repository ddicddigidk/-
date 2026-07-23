import Link from "next/link";
import { companyInfo } from "@/lib/site-config";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center py-24">
      <div className="mx-auto max-w-lg px-4 text-center">
        <p className="text-sm font-medium text-primary-700">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="mt-4 text-neutral-600">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-md bg-primary-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-800"
        >
          {companyInfo.name} 홈으로
        </Link>
      </div>
    </section>
  );
}
