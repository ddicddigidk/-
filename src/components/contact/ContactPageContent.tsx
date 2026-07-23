import ContactForm from "@/components/contact/ContactForm";
import { contactPage } from "@/data/contact";

export default function ContactPageContent() {
  const { lead, contactInfo, faq } = contactPage;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            {lead.title}
          </h2>
          <p className="mt-4 leading-relaxed text-neutral-600">{lead.description}</p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-12">
          <ContactForm />

          <aside className="space-y-8">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-neutral-900">{contactInfo.label}</h3>
              <dl className="mt-6 space-y-4">
                {contactInfo.items.map((item) => (
                  <div key={item.label}>
                    <dt className="text-sm text-neutral-500">{item.label}</dt>
                    <dd className="mt-1 text-base font-medium text-neutral-800">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
              <p className="text-sm font-semibold tracking-wide text-primary-700">{faq.label}</p>
              <h3 className="mt-2 text-lg font-bold text-neutral-900">{faq.title}</h3>
              <div className="mt-6 space-y-6">
                {faq.items.map((group) => (
                  <div key={group.title}>
                    <h4 className="text-sm font-semibold text-neutral-900">{group.title}</h4>
                    <ul className="mt-3 space-y-2">
                      {group.examples.map((example) => (
                        <li
                          key={example}
                          className="rounded-lg border border-neutral-100 bg-neutral-50 px-3 py-2.5 text-sm leading-relaxed text-neutral-600"
                        >
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
