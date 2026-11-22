import { useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  Check,
  CheckCircle2,
  Clock,
  HelpCircle,
  RotateCcw,
  Share2,
  ShieldCheck,
  Target,
  XCircle,
} from 'lucide-react';
import { TRAPS } from '../data/taxonomy.ts';
import type { TranslationDictionary } from '../i18n/translations.ts';
import type {
  CounterOption,
  Locale,
  Scenario,
  ScenarioContext,
  TrainingMode,
  TrapCategoryId,
} from '../types.ts';
import { CANONICAL_ORIGIN } from '../utils/seo.ts';

interface TrainerWorkspaceProps {
  locale: Locale;
  mode: TrainingMode;
  contextFilter: ScenarioContext | 'all';
  deck: Scenario[];
  roundSeed: number;
  blindspotTraps: TrapCategoryId[] | null;
  t: TranslationDictionary;
  onSpotterAnswer: (trapId: TrapCategoryId, isCorrect: boolean, xpDelta: number) => void;
  onCounterAnswer: (trapId: TrapCategoryId, isCorrect: boolean, xpDelta: number) => void;
  onCompleteRound: (
    mode: TrainingMode,
    contextFilter: ScenarioContext | 'all',
    correctCount: number,
    totalCount: number,
    xpEarned: number,
  ) => void;
  onExitBlindspotDrill: () => void;
  onOpenRadar: () => void;
  onStartNewRound: () => void;
  onActiveCaseChange: (caseId: string | null) => void;
}

function hashString(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function deterministicShuffle<T>(items: T[], seedStr: string): T[] {
  const arr = [...items];
  let seed = hashString(seedStr) || 1;
  for (let i = arr.length - 1; i > 0; i -= 1) {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    const j = seed % (i + 1);
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

export function TrainerWorkspace({
  locale,
  mode,
  contextFilter,
  deck,
  roundSeed,
  blindspotTraps,
  t,
  onSpotterAnswer,
  onCounterAnswer,
  onCompleteRound,
  onExitBlindspotDrill,
  onOpenRadar,
  onStartNewRound,
  onActiveCaseChange,
}: TrainerWorkspaceProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<'spotter' | 'counter'>(mode === 'counter' ? 'counter' : 'spotter');
  const [selectedTrap, setSelectedTrap] = useState<TrapCategoryId | null>(null);
  const [selectedCounterId, setSelectedCounterId] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [timedEnabled, setTimedEnabled] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(30);
  const [timeExpired, setTimeExpired] = useState(false);
  const [roundCorrect, setRoundCorrect] = useState(0);
  const [roundXp, setRoundXp] = useState(0);
  const [roundFinished, setRoundFinished] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  // Reset round state when deck, mode, or seed changes
  useEffect(() => {
    setCurrentIndex(0);
    setPhase(mode === 'counter' ? 'counter' : 'spotter');
    setSelectedTrap(null);
    setSelectedCounterId(null);
    setShowHint(false);
    setSecondsLeft(30);
    setTimeExpired(false);
    setRoundCorrect(0);
    setRoundXp(0);
    setRoundFinished(false);
  }, [deck, mode, roundSeed]);

  const currentScenario = deck[currentIndex] ?? null;

  useEffect(() => {
    onActiveCaseChange(currentScenario && !roundFinished ? currentScenario.id : null);
  }, [currentScenario, roundFinished, onActiveCaseChange]);

  const isAnswered =
    phase === 'spotter' ? selectedTrap !== null || timeExpired : selectedCounterId !== null || timeExpired;

  // Optional 30s countdown timer
  useEffect(() => {
    if (!timedEnabled || isAnswered || roundFinished || !currentScenario) return;
    if (secondsLeft <= 0) {
      setTimeExpired(true);
      if (phase === 'spotter') {
        onSpotterAnswer(currentScenario.category, false, 0);
      } else {
        onCounterAnswer(currentScenario.category, false, 0);
      }
      return;
    }
    const timer = window.setTimeout(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);
    return () => window.clearTimeout(timer);
  }, [
    timedEnabled,
    secondsLeft,
    isAnswered,
    roundFinished,
    currentScenario,
    phase,
    onSpotterAnswer,
    onCounterAnswer,
  ]);

  const spotterOptions = useMemo<TrapCategoryId[]>(() => {
    if (!currentScenario) return [];
    const unique = Array.from(new Set([currentScenario.category, ...currentScenario.distractors]));
    return deterministicShuffle(unique, `${currentScenario.id}-${roundSeed}-spot`);
  }, [currentScenario, roundSeed]);

  const counterOptions = useMemo<CounterOption[]>(() => {
    if (!currentScenario) return [];
    const localized = currentScenario[locale];
    return deterministicShuffle(localized.counterOptions, `${currentScenario.id}-${roundSeed}-cnt`);
  }, [currentScenario, locale, roundSeed]);

  const handleSelectSpotter = (trapId: TrapCategoryId) => {
    if (!currentScenario || isAnswered) return;
    setSelectedTrap(trapId);
    const isCorrect = trapId === currentScenario.category;
    const xpDelta = isCorrect ? (showHint ? 15 : 25) : 5;
    if (isCorrect) setRoundCorrect((c) => c + 1);
    setRoundXp((x) => x + xpDelta);
    onSpotterAnswer(currentScenario.category, isCorrect, xpDelta);
  };

  const handleSelectCounter = (option: CounterOption) => {
    if (!currentScenario || isAnswered) return;
    setSelectedCounterId(option.id);
    const isCorrect = option.isCorrect;
    const xpDelta = isCorrect ? 30 : 5;
    // In standalone counter mode, track round score on counter choices
    if (mode === 'counter' && isCorrect) {
      setRoundCorrect((c) => c + 1);
    }
    setRoundXp((x) => x + xpDelta);
    onCounterAnswer(currentScenario.category, isCorrect, xpDelta);
  };

  const handleEnterCounterFollowUp = () => {
    setPhase('counter');
    setSelectedCounterId(null);
    setTimeExpired(false);
    setSecondsLeft(30);
  };

  const handleNextScenario = () => {
    if (!currentScenario) return;
    if (currentIndex + 1 >= deck.length) {
      setRoundFinished(true);
      onCompleteRound(mode, contextFilter, roundCorrect, deck.length, roundXp);
      return;
    }
    setCurrentIndex((idx) => idx + 1);
    setPhase(mode === 'counter' ? 'counter' : 'spotter');
    setSelectedTrap(null);
    setSelectedCounterId(null);
    setShowHint(false);
    setTimeExpired(false);
    setSecondsLeft(30);
  };

  // Keyboard shortcuts 1-4 to pick options, Enter to advance
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (roundFinished || !currentScenario) return;
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

      if (!isAnswered && (e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4')) {
        const idx = Number(e.key) - 1;
        if (phase === 'spotter' && spotterOptions[idx]) {
          e.preventDefault();
          handleSelectSpotter(spotterOptions[idx]);
        } else if (phase === 'counter' && counterOptions[idx]) {
          e.preventDefault();
          handleSelectCounter(counterOptions[idx]);
        }
      } else if (isAnswered && e.key === 'Enter') {
        e.preventDefault();
        handleNextScenario();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  });

  const handleShareExercise = async () => {
    if (!currentScenario || typeof window === 'undefined') return;
    const langParam = locale === 'en' ? '' : `&lang=${locale}`;
    const shareUrl = `${CANONICAL_ORIGIN}/?mode=${mode}${langParam}&case=${currentScenario.id}`;
    try {
      await window.navigator.clipboard.writeText(shareUrl);
      setCopiedShare(true);
      window.setTimeout(() => setCopiedShare(false), 2000);
    } catch {
      setCopiedShare(false);
    }
  };

  if (deck.length === 0) {
    return null;
  }

  if (roundFinished) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
            <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
          </div>
          <h2 className="mt-4 font-display text-2xl font-bold text-slate-900">
            {t.trainer.roundCompleteTitle}
          </h2>
          <p className="mt-2 text-sm text-slate-600">{t.trainer.roundCompleteSubtitle}</p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-medium text-slate-500">{t.trainer.scoreLabel}</p>
              <p className="mt-1 font-display text-2xl font-bold text-slate-900 tabular-nums">
                {roundCorrect} / {deck.length}
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-medium text-slate-500">{t.trainer.xpEarnedLabel}</p>
              <p className="mt-1 font-display text-2xl font-bold text-indigo-700 tabular-nums">
                +{roundXp} XP
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onStartNewRound}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-indigo-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-800 transition-colors whitespace-nowrap"
            >
              <RotateCcw className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{t.trainer.newRoundBtn}</span>
            </button>
            <button
              type="button"
              onClick={onOpenRadar}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors whitespace-nowrap"
            >
              <Target className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{t.trainer.reviewRadarBtn}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!currentScenario) return null;

  const localized = currentScenario[locale];
  const trapMeta = TRAPS[currentScenario.category];
  const trapLocalized = trapMeta[locale];
  const selectedCounterObj =
    selectedCounterId !== null
      ? counterOptions.find((opt) => opt.id === selectedCounterId) ?? null
      : null;
  const winningCounterObj = counterOptions.find((opt) => opt.isCorrect) ?? counterOptions[0];

  const isSpotterCorrect = selectedTrap === currentScenario.category;
  const isCounterCorrect = selectedCounterObj?.isCorrect === true;

  return (
    <div className="space-y-4">
      {blindspotTraps && blindspotTraps.length > 0 && (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-amber-200 bg-amber-50/70 px-4 py-3">
          <div className="flex items-center gap-2.5 text-sm font-medium text-amber-900">
            <Target className="h-4 w-4 shrink-0 text-amber-700" aria-hidden="true" />
            <span>
              {t.trainer.blindspotBannerTitle}:{' '}
              <strong className="font-semibold">
                {blindspotTraps.map((id) => TRAPS[id][locale].shortName).join(' · ')}
              </strong>
            </span>
          </div>
          <button
            type="button"
            onClick={onExitBlindspotDrill}
            className="min-h-[36px] rounded-lg border border-amber-300 bg-white px-3 py-1.5 text-xs font-semibold text-amber-900 hover:bg-amber-50 transition-colors whitespace-nowrap shrink-0"
          >
            {t.trainer.blindspotBannerExit}
          </button>
        </div>
      )}

      <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-7">
        {/* Card Header Metadata & Utility Controls (Zero-Pill Rule) */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
            <span className="font-semibold text-indigo-700">
              {t.contexts[currentScenario.context]}
            </span>
            <span aria-hidden="true">·</span>
            <span>{t.difficulties[currentScenario.difficulty]}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">
              {t.trainer.roundProgress} {currentIndex + 1} / {deck.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setTimedEnabled((prev) => !prev);
                setSecondsLeft(30);
              }}
              aria-pressed={timedEnabled}
              className={`inline-flex min-h-[36px] items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                timedEnabled
                  ? 'border-amber-300 bg-amber-50 text-amber-800'
                  : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900'
              }`}
            >
              <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span className="tabular-nums">
                {timedEnabled && !isAnswered
                  ? `${secondsLeft}${t.trainer.secondsLeft}`
                  : timedEnabled
                    ? t.trainer.timedMode
                    : t.trainer.untimedMode}
              </span>
            </button>

            <button
              type="button"
              onClick={handleShareExercise}
              className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
            >
              {copiedShare ? (
                <>
                  <Check className="h-3.5 w-3.5 shrink-0 text-emerald-700" aria-hidden="true" />
                  <span className="text-emerald-700">{t.trainer.copiedLink}</span>
                </>
              ) : (
                <>
                  <Share2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span className="hidden sm:inline">{t.trainer.shareCase}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Scenario Excerpt Stage */}
        <div className="mt-5">
          <p className="text-xs font-medium text-slate-500">{localized.speakerOrSource}</p>
          <blockquote className="mt-2 rounded-lg border border-slate-200 bg-slate-50/80 p-4 sm:p-5">
            <p className="text-base leading-relaxed text-slate-900 sm:text-[17px] font-medium">
              {localized.excerpt}
            </p>
          </blockquote>
        </div>

        {/* Active Prompt & Optional Hint */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-1">
            {phase === 'counter' && (
              <p className="text-xs font-semibold text-amber-800">
                {t.trainer.trapIdentified}: {trapLocalized.name} ({t.natures[trapMeta.nature]})
              </p>
            )}
            <p className="text-sm font-semibold text-slate-800">
              {phase === 'spotter' ? t.trainer.spotterPrompt : t.trainer.counterPrompt}
            </p>
          </div>

          {!isAnswered && (
            <button
              type="button"
              onClick={() => setShowHint((h) => !h)}
              className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-indigo-700 transition-colors whitespace-nowrap shrink-0"
            >
              <HelpCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>{showHint ? t.trainer.hideHint : t.trainer.showHint}</span>
            </button>
          )}
        </div>

        {showHint && !isAnswered && (
          <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50/70 px-4 py-3 text-xs leading-relaxed text-amber-900">
            <span className="font-semibold">{t.trainer.hintLabel}: </span>
            {localized.subtleHint}
          </div>
        )}

        {/* Answer Options */}
        {phase === 'spotter' ? (
          <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {spotterOptions.map((optionId, index) => {
              const def = TRAPS[optionId][locale];
              const isCorrectChoice = optionId === currentScenario.category;
              const isSelectedChoice = optionId === selectedTrap;

              let styleClasses =
                'border-slate-200 bg-white text-slate-900 hover:border-indigo-300 hover:bg-indigo-50/30';
              if (isAnswered) {
                if (isCorrectChoice) {
                  styleClasses = 'border-emerald-300 bg-emerald-50/70 text-emerald-950';
                } else if (isSelectedChoice) {
                  styleClasses = 'border-red-300 bg-red-50/70 text-red-950';
                } else {
                  styleClasses = 'border-slate-200 bg-slate-50/50 text-slate-500';
                }
              }

              return (
                <button
                  key={optionId}
                  type="button"
                  disabled={isAnswered}
                  onClick={() => handleSelectSpotter(optionId)}
                  className={`flex min-h-[54px] items-start gap-3 rounded-lg border p-3.5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-indigo-700 ${styleClasses}`}
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded border border-slate-200 bg-slate-50 font-mono-tabular text-xs font-semibold text-slate-600">
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold leading-snug">{def.name}</p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      {t.natures[TRAPS[optionId].nature]}
                    </p>
                  </div>
                  {isAnswered && isCorrectChoice && (
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" aria-hidden="true" />
                  )}
                  {isAnswered && isSelectedChoice && !isCorrectChoice && (
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" aria-hidden="true" />
                  )}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="mt-4 space-y-2.5">
            {counterOptions.map((option, index) => {
              const isSelectedChoice = option.id === selectedCounterId;
              let styleClasses =
                'border-slate-200 bg-white text-slate-900 hover:border-indigo-300 hover:bg-indigo-50/30';
              if (isAnswered) {
                if (option.isCorrect) {
                  styleClasses = 'border-emerald-300 bg-emerald-50/70 text-emerald-950';
                } else if (isSelectedChoice) {
                  styleClasses = 'border-red-300 bg-red-50/70 text-red-950';
                } else {
                  styleClasses = 'border-slate-200 bg-slate-50/50 text-slate-600';
                }
              }

              return (
                <button
                  key={option.id}
                  type="button"
                  disabled={isAnswered}
                  onClick={() => handleSelectCounter(option)}
                  className={`flex w-full min-h-[54px] items-start gap-3 rounded-lg border p-3.5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-indigo-700 ${styleClasses}`}
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded border border-slate-200 bg-slate-50 font-mono-tabular text-xs font-semibold text-slate-600">
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium leading-relaxed">{option.text}</p>
                    {isAnswered && (
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                        <span className="font-semibold">
                          {option.isCorrect
                            ? t.trainer.winningLogic
                            : option.flawLabel || t.trainer.flawInOption}
                          :{' '}
                        </span>
                        {option.feedback}
                      </p>
                    )}
                  </div>
                  {isAnswered && option.isCorrect && (
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" aria-hidden="true" />
                  )}
                  {isAnswered && isSelectedChoice && !option.isCorrect && (
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" aria-hidden="true" />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Keyboard hint on desktop before answer */}
        {!isAnswered && (
          <p className="mt-3 hidden text-xs text-slate-400 sm:block">{t.trainer.keyboardTip}</p>
        )}

        {/* Immediate Feedback Panel */}
        {isAnswered && (
          <div
            aria-live="polite"
            className={`mt-5 rounded-xl border p-4 sm:p-5 ${
              (phase === 'spotter' && isSpotterCorrect) || (phase === 'counter' && isCounterCorrect)
                ? 'border-emerald-200 bg-emerald-50/50'
                : 'border-red-200 bg-red-50/40'
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                {timeExpired ? (
                  <>
                    <AlertTriangle className="h-5 w-5 shrink-0 text-amber-700" aria-hidden="true" />
                    <span className="font-display text-sm font-bold text-amber-900">
                      {t.trainer.timeExpired}
                    </span>
                  </>
                ) : (phase === 'spotter' && isSpotterCorrect) ||
                  (phase === 'counter' && isCounterCorrect) ? (
                  <>
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700" aria-hidden="true" />
                    <span className="font-display text-sm font-bold text-emerald-900">
                      {phase === 'spotter' ? t.trainer.correctSpot : t.trainer.correctCounter}
                    </span>
                  </>
                ) : (
                  <>
                    <XCircle className="h-5 w-5 shrink-0 text-red-600" aria-hidden="true" />
                    <span className="font-display text-sm font-bold text-red-900">
                      {phase === 'spotter' ? t.trainer.missedSpot : t.trainer.weakCounter}
                    </span>
                  </>
                )}
              </div>

              <span className="text-xs font-semibold text-slate-700">
                {trapLocalized.name} · {t.natures[trapMeta.nature]}
              </span>
            </div>

            {phase === 'spotter' ? (
              <div className="mt-3 grid grid-cols-1 gap-3 border-t border-slate-200/70 pt-3 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold text-slate-900">{t.trainer.whyItFails}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-700">
                    {localized.whyItFails}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-900">{t.trainer.rhetoricalTrick}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-700">
                    {localized.rhetoricalTrick}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-900">{t.trainer.howToDisarm}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-700">
                    {localized.howToDisarm}
                  </p>
                </div>
              </div>
            ) : (
              <div className="mt-3 border-t border-slate-200/70 pt-3 text-xs leading-relaxed text-slate-700">
                <span className="font-semibold text-slate-900">{t.trainer.howToDisarm}: </span>
                {localized.howToDisarm}
                {selectedCounterObj && !selectedCounterObj.isCorrect && winningCounterObj && (
                  <p className="mt-1.5 text-emerald-900">
                    <span className="font-semibold">{t.trainer.winningLogic}: </span>
                    {winningCounterObj.feedback}
                  </p>
                )}
              </div>
            )}

            <div className="mt-4 flex flex-wrap items-center justify-end gap-2.5">
              {phase === 'spotter' && (
                <button
                  type="button"
                  onClick={handleEnterCounterFollowUp}
                  className="inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-indigo-200 bg-white px-4 py-2 text-xs font-semibold text-indigo-700 hover:bg-indigo-50 transition-colors whitespace-nowrap"
                >
                  <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{t.trainer.practiceCounterBtn}</span>
                </button>
              )}

              <button
                type="button"
                onClick={handleNextScenario}
                className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-indigo-700 px-5 py-2 text-xs font-semibold text-white hover:bg-indigo-800 transition-colors whitespace-nowrap"
              >
                <span>
                  {currentIndex + 1 >= deck.length
                    ? t.trainer.finishRoundBtn
                    : t.trainer.nextScenarioBtn}
                </span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
