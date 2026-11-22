import { RADAR_FAMILIES, TRAP_IDS } from '../data/taxonomy.ts';
import type {
  BlindspotInsight,
  CategoryStat,
  Locale,
  RadarFamilyId,
  RoundSummary,
  ScenarioContext,
  TrainingMode,
  TrapCategoryId,
  UserProgress,
} from '../types.ts';

const STORAGE_KEY = 'criticue_progress_v1';
const LANG_STORAGE_KEY = 'criticue_lang_v1';

function createEmptyCategoryStats(): Record<TrapCategoryId, CategoryStat> {
  return TRAP_IDS.reduce((acc, id) => {
    acc[id] = { attempts: 0, correct: 0, misses: 0 };
    return acc;
  }, {} as Record<TrapCategoryId, CategoryStat>);
}

export function createInitialProgress(): UserProgress {
  return {
    xp: 0,
    streak: 0,
    lastActiveDate: null,
    totalAnswered: 0,
    totalCorrect: 0,
    counterAnswered: 0,
    counterCorrect: 0,
    categoryStats: createEmptyCategoryStats(),
    recentRounds: [],
  };
}

export function loadProgress(): UserProgress {
  if (typeof window === 'undefined') {
    return createInitialProgress();
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return createInitialProgress();
    }
    const parsed = JSON.parse(raw) as Partial<UserProgress>;
    const base = createInitialProgress();
    const mergedStats = { ...base.categoryStats };
    if (parsed.categoryStats) {
      for (const id of TRAP_IDS) {
        const entry = parsed.categoryStats[id];
        if (entry && typeof entry.attempts === 'number') {
          mergedStats[id] = {
            attempts: Math.max(0, entry.attempts),
            correct: Math.max(0, entry.correct ?? 0),
            misses: Math.max(0, entry.misses ?? 0),
          };
        }
      }
    }
    return {
      xp: typeof parsed.xp === 'number' ? Math.max(0, parsed.xp) : 0,
      streak: typeof parsed.streak === 'number' ? Math.max(0, parsed.streak) : 0,
      lastActiveDate: typeof parsed.lastActiveDate === 'string' ? parsed.lastActiveDate : null,
      totalAnswered: typeof parsed.totalAnswered === 'number' ? Math.max(0, parsed.totalAnswered) : 0,
      totalCorrect: typeof parsed.totalCorrect === 'number' ? Math.max(0, parsed.totalCorrect) : 0,
      counterAnswered: typeof parsed.counterAnswered === 'number' ? Math.max(0, parsed.counterAnswered) : 0,
      counterCorrect: typeof parsed.counterCorrect === 'number' ? Math.max(0, parsed.counterCorrect) : 0,
      categoryStats: mergedStats,
      recentRounds: Array.isArray(parsed.recentRounds) ? parsed.recentRounds.slice(0, 12) : [],
    };
  } catch {
    return createInitialProgress();
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Ignore storage quota errors in restricted browsing modes
  }
}

export function clearProgress(): UserProgress {
  const fresh = createInitialProgress();
  saveProgress(fresh);
  return fresh;
}

function getLocalDateKey(date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getPreviousDateKey(dateKey: string): string {
  const [y, m, d] = dateKey.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  dt.setDate(dt.getDate() - 1);
  return getLocalDateKey(dt);
}

export function updateStreakOnActivity(progress: UserProgress): { streak: number; lastActiveDate: string } {
  const today = getLocalDateKey();
  if (progress.lastActiveDate === today) {
    return { streak: Math.max(1, progress.streak), lastActiveDate: today };
  }
  const yesterday = getPreviousDateKey(today);
  if (progress.lastActiveDate === yesterday) {
    return { streak: progress.streak + 1, lastActiveDate: today };
  }
  return { streak: 1, lastActiveDate: today };
}

export function recordSpotterAttempt(
  prev: UserProgress,
  trapId: TrapCategoryId,
  isCorrect: boolean,
  xpDelta: number,
): UserProgress {
  const { streak, lastActiveDate } = updateStreakOnActivity(prev);
  const currentStat = prev.categoryStats[trapId] ?? { attempts: 0, correct: 0, misses: 0 };
  const next: UserProgress = {
    ...prev,
    xp: prev.xp + xpDelta,
    streak,
    lastActiveDate,
    totalAnswered: prev.totalAnswered + 1,
    totalCorrect: prev.totalCorrect + (isCorrect ? 1 : 0),
    categoryStats: {
      ...prev.categoryStats,
      [trapId]: {
        attempts: currentStat.attempts + 1,
        correct: currentStat.correct + (isCorrect ? 1 : 0),
        misses: currentStat.misses + (isCorrect ? 0 : 1),
      },
    },
  };
  saveProgress(next);
  return next;
}

export function recordCounterAttempt(
  prev: UserProgress,
  trapId: TrapCategoryId,
  isCorrect: boolean,
  xpDelta: number,
): UserProgress {
  const { streak, lastActiveDate } = updateStreakOnActivity(prev);
  const currentStat = prev.categoryStats[trapId] ?? { attempts: 0, correct: 0, misses: 0 };
  const next: UserProgress = {
    ...prev,
    xp: prev.xp + xpDelta,
    streak,
    lastActiveDate,
    counterAnswered: prev.counterAnswered + 1,
    counterCorrect: prev.counterCorrect + (isCorrect ? 1 : 0),
    // Counter accuracy also refines trap mastery slightly if missed
    categoryStats: isCorrect
      ? prev.categoryStats
      : {
          ...prev.categoryStats,
          [trapId]: {
            attempts: currentStat.attempts + 1,
            correct: currentStat.correct,
            misses: currentStat.misses + 1,
          },
        },
  };
  saveProgress(next);
  return next;
}

export function recordCompletedRound(prev: UserProgress, round: RoundSummary): UserProgress {
  const next: UserProgress = {
    ...prev,
    recentRounds: [round, ...prev.recentRounds].slice(0, 12),
  };
  saveProgress(next);
  return next;
}

export function getBlindspotInsights(progress: UserProgress): BlindspotInsight[] {
  return TRAP_IDS.map((trapId) => {
    const stat = progress.categoryStats[trapId] ?? { attempts: 0, correct: 0, misses: 0 };
    const errorRate = stat.attempts > 0 ? Math.round((stat.misses / stat.attempts) * 100) : 0;
    const accuracy = stat.attempts > 0 ? Math.round((stat.correct / stat.attempts) * 100) : 0;
    return {
      trapId,
      attempts: stat.attempts,
      misses: stat.misses,
      correct: stat.correct,
      errorRate,
      accuracy,
    };
  })
    .filter((item) => item.attempts > 0)
    .sort((a, b) => {
      if (b.errorRate !== a.errorRate) return b.errorRate - a.errorRate;
      if (b.misses !== a.misses) return b.misses - a.misses;
      return b.attempts - a.attempts;
    });
}

export function getRadarFamilyScores(
  progress: UserProgress,
): Array<{ familyId: RadarFamilyId; accuracy: number; attempts: number; misses: number }> {
  return RADAR_FAMILIES.map((family) => {
    let attempts = 0;
    let correct = 0;
    let misses = 0;
    for (const trapId of family.traps) {
      const stat = progress.categoryStats[trapId];
      if (stat) {
        attempts += stat.attempts;
        correct += stat.correct;
        misses += stat.misses;
      }
    }
    const accuracy = attempts > 0 ? Math.round((correct / attempts) * 100) : 0;
    return {
      familyId: family.id,
      accuracy,
      attempts,
      misses,
    };
  });
}

export function detectInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'en';
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get('lang');
  if (urlLang === 'en' || urlLang === 'es') {
    return urlLang;
  }
  try {
    const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (saved === 'en' || saved === 'es') {
      return saved;
    }
  } catch {
    // ignore
  }
  const navLang = (window.navigator.language || 'en').toLowerCase();
  if (navLang.startsWith('es')) {
    return 'es';
  }
  return 'en';
}

export function persistLocale(locale: Locale): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(LANG_STORAGE_KEY, locale);
  } catch {
    // ignore
  }
}

export interface InitialUrlState {
  mode: TrainingMode;
  context: ScenarioContext | 'all';
  caseId: string | null;
}

export function parseUrlState(): InitialUrlState {
  if (typeof window === 'undefined') {
    return { mode: 'spotter', context: 'all', caseId: null };
  }
  const params = new URLSearchParams(window.location.search);
  const rawMode = params.get('mode');
  const mode: TrainingMode =
    rawMode === 'spotter' || rawMode === 'counter' || rawMode === 'context' || rawMode === 'radar'
      ? rawMode
      : 'spotter';

  const rawCtx = params.get('ctx');
  const context: ScenarioContext | 'all' =
    rawCtx === 'debate' || rawCtx === 'article' || rawCtx === 'advertising' || rawCtx === 'everyday'
      ? rawCtx
      : 'all';

  const caseId = params.get('case');
  return { mode, context, caseId };
}

export function syncUrlParams(
  locale: Locale,
  mode: TrainingMode,
  context: ScenarioContext | 'all',
  caseId?: string | null,
): void {
  if (typeof window === 'undefined') return;
  try {
    const url = new URL(window.location.href);
    url.searchParams.set('mode', mode);
    if (locale === 'en') {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', locale);
    }
    if (mode === 'context' && context !== 'all') {
      url.searchParams.set('ctx', context);
    } else {
      url.searchParams.delete('ctx');
    }
    if (caseId) {
      url.searchParams.set('case', caseId);
    } else {
      url.searchParams.delete('case');
    }
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
  } catch {
    // ignore history API failures in restricted sandbox frames
  }
}
