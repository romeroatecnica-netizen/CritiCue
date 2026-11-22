import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { TRAP_IDS, TRAPS } from '../data/taxonomy.ts';
import type { TranslationDictionary } from '../i18n/translations.ts';
import type { Locale } from '../types.ts';

interface EditorialSeoSectionProps {
  locale: Locale;
  t: TranslationDictionary;
}

export function EditorialSeoSection({ locale, t }: EditorialSeoSectionProps) {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  return (
    <section id="guide" aria-labelledby="editorial-guide-heading" className="py-8 sm:py-12">
      <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6">
        {/* Guide Lead & Comparison Table */}
        <article className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="max-w-3xl">
            <h2
              id="editorial-guide-heading"
              className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl headline-balance"
            >
              {t.editorial.guideHeading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              {t.editorial.guideLead}
            </p>
          </div>

          <h3 className="mt-8 font-display text-lg font-bold text-slate-900">
            {t.editorial.comparisonHeading}
          </h3>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-semibold text-slate-500">
                  <th className="py-3 pr-4">{t.editorial.comparisonCols.concept}</th>
                  <th className="py-3 pr-4">{t.editorial.comparisonCols.mechanism}</th>
                  <th className="py-3 pr-4">{t.editorial.comparisonCols.example}</th>
                  <th className="py-3">{t.editorial.comparisonCols.fix}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {t.editorial.comparisonRows.map((row) => (
                  <tr key={row.concept} className="align-top">
                    <td className="py-3.5 pr-4 font-semibold text-slate-900 whitespace-nowrap">
                      {row.concept}
                    </td>
                    <td className="py-3.5 pr-4 leading-relaxed text-slate-600">{row.mechanism}</td>
                    <td className="py-3.5 pr-4 leading-relaxed text-slate-700">{row.example}</td>
                    <td className="py-3.5 leading-relaxed text-indigo-800 font-medium">{row.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        {/* 3-Step Clean Counter-Argument Method */}
        <article className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-slate-900 sm:text-2xl headline-balance">
            {t.editorial.counterFrameworkHeading}
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            {t.editorial.counterSteps.map((item) => (
              <div key={item.step} className="rounded-lg border border-slate-200 bg-slate-50/70 p-5">
                <p className="font-mono-tabular text-xs font-semibold text-indigo-700">
                  {item.step}
                </p>
                <h3 className="mt-1.5 font-display text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </article>

        {/* Field Guide to all 14 Fallacies, Biases & Tricks */}
        <article className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="max-w-3xl">
            <h2 className="font-display text-xl font-bold text-slate-900 sm:text-2xl headline-balance">
              {t.editorial.fieldGuideHeading}
            </h2>
            <p className="mt-1.5 text-sm text-slate-600">{t.editorial.fieldGuideSub}</p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {TRAP_IDS.map((trapId) => {
              const trap = TRAPS[trapId];
              const info = trap[locale];
              return (
                <div
                  key={trapId}
                  className="rounded-lg border border-slate-200 bg-slate-50/50 p-4"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-sm font-bold text-slate-900">{info.name}</h3>
                    <span className="text-[11px] font-medium text-slate-500 whitespace-nowrap shrink-0">
                      {t.natures[trap.nature]}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-700">{info.summary}</p>
                  <p className="mt-2 text-xs leading-relaxed text-indigo-800">{info.tell}</p>
                </div>
              );
            })}
          </div>
        </article>

        {/* Interactive FAQ Accordion matching JSON-LD FAQPage */}
        <article id="faq" className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">
            {t.editorial.faqHeading}
          </h2>
          <div className="mt-5 divide-y divide-slate-200">
            {t.editorial.faqItems.map((item, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div key={item.question} className="py-3.5">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="flex w-full min-h-[44px] items-center justify-between gap-4 text-left font-display text-sm font-bold text-slate-900 hover:text-indigo-700 transition-colors sm:text-base"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-slate-500 transition-transform duration-150 ${
                        isOpen ? 'rotate-180 text-indigo-700' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <p className="mt-2 pr-6 text-sm leading-relaxed text-slate-600">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
}
