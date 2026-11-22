import { TRAPS } from '../data/taxonomy.ts';
import type { TranslationDictionary } from '../i18n/translations.ts';
import type { BlindspotInsight, Locale, UserProgress } from '../types.ts';

interface HeroStatsStripProps {
  locale: Locale;
  progress: UserProgress;
  topBlindspot: BlindspotInsight | null;
  t: TranslationDictionary;
}

export function HeroStatsStrip({ locale, progress, topBlindspot, t }: HeroStatsStripProps) {
  const accuracyPct =
    progress.totalAnswered > 0
      ? Math.round((progress.totalCorrect / progress.totalAnswered) * 100)
      : null;

  const blindspotName =
    topBlindspot && topBlindspot.misses > 0
      ? TRAPS[topBlindspot.trapId][locale].shortName
      : t.hero.stats.noneYet;

  return (
    <section id="top" aria-labelledby="main-heading" className="pt-8 pb-6 sm:pt-10 sm:pb-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-wide text-indigo-700">
            {t.hero.kicker}
          </p>
          <h1
            id="main-heading"
            className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl headline-balance"
          >
            {t.hero.h1}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-[17px]">
            {t.hero.subtitle}
          </p>
        </div>

        {/* 4-column KPI strip below hero intro */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          <div className="rounded-xl border border-slate-200 bg-white px-4 py-3.5">
            <p className="text-xs font-medium text-slate-500">{t.hero.stats.streak}</p>
            <p className="mt-1 font-display text-2xl font-bold text-slate-900 tabular-nums">
              {progress.streak}
              <span className="ml-0.5 text-sm font-semibold text-slate-500">
                {t.hero.stats.streakUnit}
              </span>
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white px-4 py-3.5">
            <p className="text-xs font-medium text-slate-500">{t.hero.stats.xp}</p>
            <p className="mt-1 font-display text-2xl font-bold text-indigo-700 tabular-nums">
              {progress.xp}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white px-4 py-3.5">
            <p className="text-xs font-medium text-slate-500">{t.hero.stats.accuracy}</p>
            <p className="mt-1 font-display text-2xl font-bold text-slate-900 tabular-nums">
              {accuracyPct !== null ? `${accuracyPct}%` : '—'}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white px-4 py-3.5">
            <p className="text-xs font-medium text-slate-500">{t.hero.stats.topBlindspot}</p>
            <p
              className={`mt-1.5 truncate font-display text-base font-bold ${
                topBlindspot && topBlindspot.misses > 0 ? 'text-amber-700' : 'text-slate-500'
              }`}
              title={blindspotName}
            >
              {blindspotName}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
