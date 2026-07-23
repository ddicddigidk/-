"use client";

import Link from "next/link";
import { useId, useState } from "react";

export type ExplorerItem = {
  id: string;
  name: string;
  intro: string;
  blocks: {
    title: string;
    items?: readonly string[];
    text?: string;
  }[];
  ctaLabel: string;
};

type ProgramExplorerProps = {
  items: readonly ExplorerItem[];
  tablistLabel: string;
  summaryColsClassName?: string;
  footerNote: string;
};

function ItemList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ProgramExplorer({
  items,
  tablistLabel,
  summaryColsClassName = "sm:grid-cols-2 lg:grid-cols-4",
  footerNote,
}: ProgramExplorerProps) {
  const baseId = useId();
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const activeItem = items.find((item) => item.id === activeId) ?? items[0];

  if (!activeItem) return null;

  const panelId = `${baseId}-panel`;

  return (
    <div>
      <div
        className="flex gap-2 overflow-x-auto pb-2"
        role="tablist"
        aria-label={tablistLabel}
      >
        {items.map((item) => {
          const isActive = item.id === activeId;
          const tabId = `${baseId}-tab-${item.id}`;
          return (
            <button
              key={item.id}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveId(item.id)}
              className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-primary-700 text-white"
                  : "border border-neutral-200 bg-white text-neutral-700 hover:border-primary-200 hover:bg-primary-50"
              }`}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      <p className="mt-1 text-xs text-neutral-500 sm:hidden">좌우로 밀어 분야를 선택하세요</p>

      <div className={`mt-4 grid gap-3 ${summaryColsClassName}`}>
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              aria-pressed={isActive}
              className={`rounded-xl border p-4 text-left transition-colors ${
                isActive
                  ? "border-primary-300 bg-primary-50"
                  : "border-neutral-200 bg-white hover:border-primary-200"
              }`}
            >
              <span className="font-semibold text-neutral-900">{item.name}</span>
              <p className="mt-2 line-clamp-2 text-sm text-neutral-600">{item.intro}</p>
            </button>
          );
        })}
      </div>

      <div
        id={panelId}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${activeItem.id}`}
        className="mt-8"
      >
        <article className="rounded-2xl border border-neutral-200 bg-neutral-50/80 p-5 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-primary-700">{activeItem.name}</p>
              <h3 className="mt-2 text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
                {activeItem.intro}
              </h3>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center rounded-md bg-primary-700 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-800"
            >
              {activeItem.ctaLabel}
            </Link>
          </div>

          <div
            className={`mt-8 grid gap-4 ${
              activeItem.blocks.length === 3 ? "lg:grid-cols-3" : "sm:grid-cols-2"
            }`}
          >
            {activeItem.blocks.map((block) => (
              <div
                key={block.title}
                className="rounded-xl border border-neutral-200 bg-white p-5 sm:p-6"
              >
                <h4 className="text-sm font-semibold text-neutral-900">{block.title}</h4>
                <div className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {block.text && <p>{block.text}</p>}
                  {block.items && <ItemList items={block.items} />}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-neutral-200 pt-6">
            <p className="mr-auto text-sm text-neutral-600">{footerNote}</p>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md border border-primary-200 bg-white px-4 py-2.5 text-sm font-medium text-primary-700 transition-colors hover:bg-primary-50"
            >
              문의하기
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center rounded-md px-4 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100"
            >
              교육과정 보기
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
