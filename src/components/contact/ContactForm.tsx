"use client";

import { FormEvent, useId, useState } from "react";
import { contactPage } from "@/data/contact";

type FormState = {
  name: string;
  organization: string;
  phone: string;
  email: string;
  interest: string;
  inquiryType: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  organization: "",
  phone: "",
  email: "",
  interest: "",
  inquiryType: "individual",
  message: "",
};

const fieldClassName =
  "mt-2 block w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200";

export default function ContactForm() {
  const formId = useId();
  const [values, setValues] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (
      !values.name.trim() ||
      !values.phone.trim() ||
      !values.email.trim() ||
      !values.interest ||
      !values.inquiryType ||
      !values.message.trim()
    ) {
      setError("필수 항목을 모두 입력해 주세요.");
      return;
    }

    // 백엔드 연동 전: 클라이언트에서 접수 완료 상태로 전환
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-2xl border border-primary-200 bg-primary-50 p-6 sm:p-8"
        role="status"
        aria-live="polite"
      >
        <h2 className="text-xl font-bold text-neutral-900">
          {contactPage.form.successTitle}
        </h2>
        <p className="mt-3 leading-relaxed text-neutral-600">
          {contactPage.form.successDescription}
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setValues(initialState);
          }}
          className="mt-6 inline-flex items-center rounded-md border border-primary-200 bg-white px-4 py-2.5 text-sm font-medium text-primary-700 transition-colors hover:bg-primary-50"
        >
          새 문의 작성
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-8"
      aria-labelledby={`${formId}-title`}
    >
      <h3 id={`${formId}-title`} className="text-xl font-bold text-neutral-900">
        문의 양식
      </h3>
      <p className="mt-2 text-sm text-neutral-600">
        필수 항목은 <span className="font-medium text-neutral-800">*</span> 표시되어 있습니다.
      </p>

      <fieldset className="mt-8">
        <legend className="text-sm font-semibold text-neutral-900">
          문의 유형 <span aria-hidden="true">*</span>
        </legend>
        <p id={`${formId}-type-help`} className="mt-1 text-sm text-neutral-500">
          개인 문의와 기업·기관 문의를 구분해 주시면 안내가 더 정확합니다.
        </p>
        <div
          className="mt-3 grid gap-3 sm:grid-cols-2"
          role="radiogroup"
          aria-required="true"
          aria-describedby={`${formId}-type-help`}
        >
          {contactPage.form.inquiryTypes.map((type) => {
            const inputId = `${formId}-type-${type.value}`;
            const selected = values.inquiryType === type.value;
            return (
              <label
                key={type.value}
                htmlFor={inputId}
                className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition-colors ${
                  selected
                    ? "border-primary-300 bg-primary-50"
                    : "border-neutral-200 bg-white hover:border-primary-200"
                }`}
              >
                <input
                  id={inputId}
                  type="radio"
                  name="inquiryType"
                  value={type.value}
                  checked={selected}
                  onChange={() => updateField("inquiryType", type.value)}
                  className="h-4 w-4 border-neutral-300 text-primary-700 focus:ring-primary-500"
                />
                <span className="text-sm font-medium text-neutral-800">{type.label}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor={`${formId}-name`} className="block text-sm font-semibold text-neutral-900">
            이름 <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={(e) => updateField("name", e.target.value)}
            placeholder="홍길동"
            className={fieldClassName}
          />
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor={`${formId}-organization`}
            className="block text-sm font-semibold text-neutral-900"
          >
            소속 또는 기관명
          </label>
          <input
            id={`${formId}-organization`}
            name="organization"
            type="text"
            autoComplete="organization"
            value={values.organization}
            onChange={(e) => updateField("organization", e.target.value)}
            placeholder="예: ○○대학교 / ○○기업 / 개인"
            className={fieldClassName}
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor={`${formId}-phone`} className="block text-sm font-semibold text-neutral-900">
            연락처 <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            value={values.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            placeholder="010-0000-0000"
            className={fieldClassName}
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor={`${formId}-email`} className="block text-sm font-semibold text-neutral-900">
            이메일 <span aria-hidden="true">*</span>
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            value={values.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder="name@example.com"
            className={fieldClassName}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor={`${formId}-interest`} className="block text-sm font-semibold text-neutral-900">
          관심 분야 <span aria-hidden="true">*</span>
        </label>
        <select
          id={`${formId}-interest`}
          name="interest"
          required
          value={values.interest}
          onChange={(e) => updateField("interest", e.target.value)}
          className={fieldClassName}
        >
          <option value="">관심 분야를 선택해 주세요</option>
          {contactPage.form.interestAreas.map((area) => (
            <option key={area.value} value={area.value}>
              {area.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor={`${formId}-message`} className="block text-sm font-semibold text-neutral-900">
          문의 내용 <span aria-hidden="true">*</span>
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          required
          rows={6}
          value={values.message}
          onChange={(e) => updateField("message", e.target.value)}
          placeholder="문의하시고 싶은 내용, 희망 일정, 예상 인원 등을 적어 주세요."
          className={`${fieldClassName} resize-y min-h-[140px]`}
        />
      </div>

      {error && (
        <p className="mt-4 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-neutral-500">
          제출하신 정보는 문의 응대 목적으로만 사용됩니다.
        </p>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-md bg-primary-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-800 sm:w-auto"
        >
          {contactPage.form.submitLabel}
        </button>
      </div>
    </form>
  );
}
