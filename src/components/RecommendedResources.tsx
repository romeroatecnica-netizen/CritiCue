import { ArrowUpRight, BookOpen } from 'lucide-react';
import type { TranslationDictionary } from '../i18n/translations.ts';

interface RecommendedResourcesProps {
  t: TranslationDictionary;
}

export function RecommendedResources({ t }: RecommendedResourcesProps) {
  return (
    <section aria-labelledby="resources-heading" className="py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                id="resources-heading"
                className="font-display text-xl font-bold text-slate-900 sm:text-2xl headline-balance"
              >
                {t.resources.heading}
              </h2>
              <p className="mt-1 text-sm text-slate-600">{t.resources.subheading}</p>
            </div>
            <p className="text-xs text-slate-500">{t.resources.disclosure}</p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.resources.books.map((book) => (
              <article
                key={book.id}
                className="flex flex-col justify-between rounded-lg border border-slate-200 bg-slate-50/70 p-4"
              >
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-indigo-700">
                    <BookOpen className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <span>{book.focus}</span>
                  </div>
                  <h3 className="mt-2 font-display text-sm font-bold text-slate-900 leading-snug">
                    {book.title}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium text-slate-500">{book.author}</p>
                  <p className="mt-2.5 text-xs leading-relaxed text-slate-600">{book.summary}</p>
                </div>

                <a
                  href={book.affiliateUrl}
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  className="mt-4 inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-800 hover:border-indigo-300 hover:text-indigo-700 transition-colors whitespace-nowrap"
                >
                  <span>{t.resources.viewBook}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
