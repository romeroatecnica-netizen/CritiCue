import { useCallback, useEffect, useMemo, useState } from 'react';
import { AdSlot } from './components/AdSlot.tsx';
import { BlindspotRadar } from './components/BlindspotRadar.tsx';
import { EditorialSeoSection } from './components/EditorialSeoSection.tsx';
import { Footer } from './components/Footer.tsx';
import { Header } from './components/Header.tsx';
import { HeroStatsStrip } from './components/HeroStatsStrip.tsx';
import { RecommendedResources } from './components/RecommendedResources.tsx';
import { TrainerWorkspace } from './components/TrainerWorkspace.tsx';
import { SCENARIOS } from './data/scenarios.ts';
import { TRANSLATIONS } from './i18n/translations.ts';
import type {
  Locale,
  Scenario,
  ScenarioContext,
  TrainingMode,
  TrapCategoryId,
  UserProgress,
} from './types.ts';
import { updateDocumentSeo } from './utils/seo.ts';
import {
  clearProgress,
  detectInitialLocale,
  getBlindspotInsights,
  loadProgress,
  parseUrlState,
  persistLocale,
  recordCompletedRound,
  recordCounterAttempt,
  recordSpotterAttempt,
  syncUrlParams,
} from './utils/storage.ts';

function shuffleWithSeed<T>(items: T[], seed: number): T[] {
  const arr = [...items];
  let s = seed || 1;
  for (let i = arr.length - 1; i > 0; i -= 1) {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    const j = s % (i + 1);
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

export default function App() {
  const initialUrl = useMemo(() => parseUrlState(), []);
  const [locale, setLocale] = useState<Locale>(() => detectInitialLocale());
  const [mode, setMode] = useState<TrainingMode>(initialUrl.mode);
  const [contextFilter, setContextFilter] = useState<ScenarioContext | 'all'>(initialUrl.context);
  const [pinnedCaseId, setPinnedCaseId] = useState<string | null>(initialUrl.caseId);
  const [activeCaseId, setActiveCaseId] = useState<string | null>(initialUrl.caseId);
  const [blindspotTraps, setBlindspotTraps] = useState<TrapCategoryId[] | null>(null);
  const [roundSize, setRoundSize] = useState<number>(8);
  const [roundSeed, setRoundSeed] = useState<number>(() => Date.now() % 100000);
  const [progress, setProgress] = useState<UserProgress>(() => loadProgress());

  const t = TRANSLATIONS[locale];
  const blindspots = useMemo(() => getBlindspotInsights(progress), [progress]);
  const topBlindspot = blindspots.find((b) => b.misses > 0) ?? null;

  // Dynamic SEO updates on language or mode change
  useEffect(() => {
    const seoConfig = t.seoByMode[mode];
    updateDocumentSeo(locale, mode, {
      title: seoConfig.title,
      description: seoConfig.description,
      faqItems: t.editorial.faqItems,
    });
  }, [locale, mode, t]);

  // Keep shareable URL params synchronized
  useEffect(() => {
    syncUrlParams(locale, mode, contextFilter, mode === 'radar' ? null : activeCaseId);
  }, [locale, mode, contextFilter, activeCaseId]);

  const handleChangeLocale = useCallback((next: Locale) => {
    setLocale(next);
    persistLocale(next);
  }, []);

  const handleSelectMode = useCallback((nextMode: TrainingMode) => {
    setMode(nextMode);
    setPinnedCaseId(null);
    if (nextMode !== 'spotter') {
      setBlindspotTraps(null);
    }
    if (nextMode !== 'context') {
      setContextFilter('all');
    }
    setRoundSize(8);
    setRoundSeed((s) => s + 1);
  }, []);

  const handleSelectContext = useCallback((ctx: ScenarioContext | 'all') => {
    setContextFilter(ctx);
    setPinnedCaseId(null);
    setBlindspotTraps(null);
    setRoundSize(8);
    setRoundSeed((s) => s + 1);
  }, []);

  const handleSpotterAnswer = useCallback(
    (trapId: TrapCategoryId, isCorrect: boolean, xpDelta: number) => {
      setProgress((prev) => recordSpotterAttempt(prev, trapId, isCorrect, xpDelta));
    },
    [],
  );

  const handleCounterAnswer = useCallback(
    (trapId: TrapCategoryId, isCorrect: boolean, xpDelta: number) => {
      setProgress((prev) => recordCounterAttempt(prev, trapId, isCorrect, xpDelta));
    },
    [],
  );

  const handleCompleteRound = useCallback(
    (
      roundMode: TrainingMode,
      roundCtx: ScenarioContext | 'all',
      correctCount: number,
      totalCount: number,
      xpEarned: number,
    ) => {
      setProgress((prev) =>
        recordCompletedRound(prev, {
          id: `${Date.now()}`,
          mode: roundMode,
          contextFilter: roundCtx,
          correctCount,
          totalCount,
          xpEarned,
          completedAt: new Date().toISOString(),
        }),
      );
    },
    [],
  );

  const handleDrillBlindspots = useCallback((trapIds: TrapCategoryId[]) => {
    setBlindspotTraps(trapIds);
    setPinnedCaseId(null);
    setContextFilter('all');
    setMode('spotter');
    setRoundSize(6);
    setRoundSeed((s) => s + 1);
    document.getElementById('trainer')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleRunDiagnostic = useCallback(() => {
    setBlindspotTraps(null);
    setPinnedCaseId(null);
    setContextFilter('all');
    setMode('spotter');
    setRoundSize(6);
    setRoundSeed((s) => s + 1);
    document.getElementById('trainer')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleResetProgress = useCallback(() => {
    setProgress(clearProgress());
  }, []);

  // Build active scenario deck
  const activeDeck = useMemo<Scenario[]>(() => {
    let pool = SCENARIOS;

    if (blindspotTraps && blindspotTraps.length > 0) {
      const targeted = SCENARIOS.filter((s) => blindspotTraps.includes(s.category));
      if (targeted.length > 0) {
        pool = targeted;
      }
    } else if (mode === 'context' && contextFilter !== 'all') {
      pool = SCENARIOS.filter((s) => s.context === contextFilter);
    }

    const shuffled = shuffleWithSeed(pool, roundSeed);

    if (pinnedCaseId) {
      const pinned = SCENARIOS.find((s) => s.id === pinnedCaseId);
      if (pinned) {
        const rest = shuffled.filter((s) => s.id !== pinned.id);
        return [pinned, ...rest].slice(0, roundSize);
      }
    }

    return shuffled.slice(0, Math.min(roundSize, shuffled.length));
  }, [mode, contextFilter, blindspotTraps, roundSeed, pinnedCaseId, roundSize]);

  const modesList: TrainingMode[] = ['spotter', 'counter', 'context', 'radar'];
  const contextsList: Array<ScenarioContext | 'all'> = [
    'all',
    'debate',
    'article',
    'advertising',
    'everyday',
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <Header
        locale={locale}
        onChangeLocale={handleChangeLocale}
        onSelectMode={handleSelectMode}
        t={t}
      />

      <main>
        <HeroStatsStrip
          locale={locale}
          progress={progress}
          topBlindspot={topBlindspot}
          t={t}
        />

        {/* Core Interactive Trainer Workspace */}
        <section id="trainer" aria-label={t.nav.trainer} className="pb-6">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            {/* Mode Switcher Tabs */}
            <div
              role="tablist"
              aria-label="Training Modes"
              className="flex flex-wrap items-center gap-1.5 rounded-xl border border-slate-200 bg-white p-1.5"
            >
              {modesList.map((m) => {
                const active = mode === m;
                return (
                  <button
                    key={m}
                    role="tab"
                    type="button"
                    aria-selected={active}
                    onClick={() => handleSelectMode(m)}
                    className={`min-h-[42px] flex-1 rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors whitespace-nowrap sm:text-sm ${
                      active
                        ? 'bg-indigo-700 text-white'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {t.modes[m]}
                  </button>
                );
              })}
            </div>

            {/* Context Source Sub-Filter when Context Mode is active */}
            {mode === 'context' && (
              <div
                role="group"
                aria-label={t.modes.context}
                className="mt-3 flex flex-wrap items-center gap-1.5 rounded-xl border border-slate-200 bg-white p-1.5"
              >
                {contextsList.map((ctx) => {
                  const active = contextFilter === ctx;
                  return (
                    <button
                      key={ctx}
                      type="button"
                      aria-pressed={active}
                      onClick={() => handleSelectContext(ctx)}
                      className={`min-h-[38px] rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                        active
                          ? 'bg-slate-900 text-white'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      {t.contexts[ctx]}
                    </button>
                  );
                })}
              </div>
            )}

            <div className="mt-4">
              {mode === 'radar' ? (
                <BlindspotRadar
                  locale={locale}
                  progress={progress}
                  blindspots={blindspots}
                  t={t}
                  onDrillBlindspots={handleDrillBlindspots}
                  onRunDiagnostic={handleRunDiagnostic}
                />
              ) : (
                <TrainerWorkspace
                  locale={locale}
                  mode={mode}
                  contextFilter={contextFilter}
                  deck={activeDeck}
                  roundSeed={roundSeed}
                  blindspotTraps={blindspotTraps}
                  t={t}
                  onSpotterAnswer={handleSpotterAnswer}
                  onCounterAnswer={handleCounterAnswer}
                  onCompleteRound={handleCompleteRound}
                  onExitBlindspotDrill={() => {
                    setBlindspotTraps(null);
                    setRoundSize(8);
                    setRoundSeed((s) => s + 1);
                  }}
                  onOpenRadar={() => handleSelectMode('radar')}
                  onStartNewRound={() => {
                    setPinnedCaseId(null);
                    setRoundSeed((s) => s + 1);
                  }}
                  onActiveCaseChange={setActiveCaseId}
                />
              )}
            </div>
          </div>
        </section>

        {/* Ad Placement 1: Between Main Trainer and Editorial SEO Section */}
        <AdSlot placement="mid-leaderboard" t={t} />

        {/* Rich Editorial SEO Guide + Interactive FAQ */}
        <EditorialSeoSection locale={locale} t={t} />

        {/* Contextual Affiliate Reading Recommendations */}
        <RecommendedResources t={t} />

        {/* Ad Placement 2: End of Page Before Footer */}
        <AdSlot placement="footer-banner" t={t} />
      </main>

      <Footer
        locale={locale}
        onChangeLocale={handleChangeLocale}
        onResetProgress={handleResetProgress}
        t={t}
      />
    </div>
  );
}
