import { useState } from 'react';
import type { TranslationDictionary } from '../i18n/translations.ts';
import type { Locale } from '../types.ts';

interface FooterProps {
  locale: Locale;
  onChangeLocale: (locale: Locale) => void;
  onResetProgress: () => void;
  t: TranslationDictionary;
}

export function Footer({ locale, onChangeLocale, onResetProgress, t }: FooterProps) {
  const [confirmReset, setConfirmReset] = useState(false);
  const [resetMessage, setResetMessage] = useState(false);

  const handleConfirmReset = () => {
    onResetProgress();
    setConfirmReset(false);
    setResetMessage(true);
    window.setTimeout(() => setResetMessage(false), 2400);
  };

  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="space-y-1">
          <p className="text-xs font-medium text-slate-700">{t.footer.disclaimer}</p>
          <p className="text-xs text-slate-500">{t.footer.localPrivacy}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 no-print">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <button
              type="button"
              onClick={() => onChangeLocale('en')}
              className={`min-h-[36px] px-1.5 font-semibold hover:text-indigo-700 ${
                locale === 'en' ? 'text-indigo-700 underline underline-offset-4' : ''
              }`}
            >
              English
            </button>
            <span aria-hidden="true" className="text-slate-300">
              /
            </span>
            <button
              type="button"
              onClick={() => onChangeLocale('es')}
              className={`min-h-[36px] px-1.5 font-semibold hover:text-indigo-700 ${
                locale === 'es' ? 'text-indigo-700 underline underline-offset-4' : ''
              }`}
            >
              Español
            </button>
          </div>

          {resetMessage ? (
            <span className="text-xs font-semibold text-emerald-700">{t.footer.resetDone}</span>
          ) : confirmReset ? (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleConfirmReset}
                className="min-h-[36px] rounded-lg bg-red-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-700 transition-colors whitespace-nowrap"
              >
                {t.footer.resetConfirm}
              </button>
              <button
                type="button"
                onClick={() => setConfirmReset(false)}
                className="min-h-[36px] rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap"
              >
                {t.footer.resetCancel}
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setConfirmReset(true)}
              className="min-h-[36px] rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 hover:border-red-200 hover:text-red-700 transition-colors whitespace-nowrap"
            >
              {t.footer.resetData}
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}
