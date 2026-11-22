import type { Locale, TrainingMode } from '../types.ts';
import type { TranslationDictionary } from '../i18n/translations.ts';

interface HeaderProps {
  locale: Locale;
  onChangeLocale: (next: Locale) => void;
  onSelectMode: (mode: TrainingMode) => void;
  t: TranslationDictionary;
}

export function Header({ locale, onChangeLocale, onSelectMode, t }: HeaderProps) {
  return (
    <header className="border-b border-slate-200 bg-white no-print">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-3.5 sm:px-6">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          onClick={() => onSelectMode('spotter')}
          className="font-display text-xl font-extrabold tracking-tight text-slate-900 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-700"
        >
          CritiCue
        </a>

        {/* Zone 2: 4 concise single-line navigation links */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600"
        >
          <a
            href="#trainer"
            onClick={() => onSelectMode('spotter')}
            className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.trainer}
          </a>
          <a
            href="#trainer"
            onClick={(e) => {
              e.preventDefault();
              onSelectMode('radar');
              document.getElementById('trainer')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.radar}
          </a>
          <a
            href="#guide"
            className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.guide}
          </a>
          <a
            href="#faq"
            className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.faq}
          </a>
        </nav>

        {/* Zone 3: 1 compact Language Selector */}
        <div className="flex items-center shrink-0">
          <div
            role="group"
            aria-label={t.nav.langToggleAria}
            className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 p-0.5"
          >
            <button
              type="button"
              onClick={() => onChangeLocale('en')}
              aria-pressed={locale === 'en'}
              className={`min-h-[36px] rounded-md px-2.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-indigo-700 ${
                locale === 'en'
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => onChangeLocale('es')}
              aria-pressed={locale === 'es'}
              className={`min-h-[36px] rounded-md px-2.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-indigo-700 ${
                locale === 'es'
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              ES
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
