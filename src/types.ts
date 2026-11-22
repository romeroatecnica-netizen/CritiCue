export type Locale = 'en' | 'es';

export type TrainingMode = 'spotter' | 'counter' | 'context' | 'radar';

export type ScenarioContext = 'debate' | 'article' | 'advertising' | 'everyday';

export type ScenarioDifficulty = 'core' | 'nuanced';

export type TrapNature = 'fallacy' | 'bias' | 'rhetoric';

export type TrapCategoryId =
  | 'strawman'
  | 'false_dichotomy'
  | 'appeal_to_authority'
  | 'slippery_slope'
  | 'post_hoc'
  | 'ad_hominem'
  | 'circular_reasoning'
  | 'false_equivalence'
  | 'confirmation_bias'
  | 'sunk_cost'
  | 'framing_anchoring'
  | 'appeal_to_fear'
  | 'hasty_generalization'
  | 'red_herring';

export type RadarFamilyId =
  | 'distortion'
  | 'binary_slope'
  | 'messenger_authority'
  | 'false_cause_sample'
  | 'emotional_framing'
  | 'cognitive_bias'
  | 'diversion_circular';

export interface CounterOption {
  id: string;
  text: string;
  isCorrect: boolean;
  flawLabel?: string;
  feedback: string;
}

export interface LocalizedScenarioContent {
  speakerOrSource: string;
  excerpt: string;
  subtleHint: string;
  whyItFails: string;
  rhetoricalTrick: string;
  howToDisarm: string;
  counterOptions: CounterOption[];
}

export interface Scenario {
  id: string;
  context: ScenarioContext;
  category: TrapCategoryId;
  radarFamily: RadarFamilyId;
  difficulty: ScenarioDifficulty;
  distractors: [TrapCategoryId, TrapCategoryId, TrapCategoryId];
  en: LocalizedScenarioContent;
  es: LocalizedScenarioContent;
}

export interface TrapDefinition {
  id: TrapCategoryId;
  nature: TrapNature;
  radarFamily: RadarFamilyId;
  en: {
    name: string;
    shortName: string;
    summary: string;
    tell: string;
  };
  es: {
    name: string;
    shortName: string;
    summary: string;
    tell: string;
  };
}

export interface RadarFamilyDefinition {
  id: RadarFamilyId;
  traps: TrapCategoryId[];
  en: {
    label: string;
    shortLabel: string;
    description: string;
  };
  es: {
    label: string;
    shortLabel: string;
    description: string;
  };
}

export interface CategoryStat {
  attempts: number;
  correct: number;
  misses: number;
}

export interface RoundSummary {
  id: string;
  mode: TrainingMode;
  contextFilter: ScenarioContext | 'all';
  correctCount: number;
  totalCount: number;
  xpEarned: number;
  completedAt: string;
}

export interface UserProgress {
  xp: number;
  streak: number;
  lastActiveDate: string | null;
  totalAnswered: number;
  totalCorrect: number;
  counterAnswered: number;
  counterCorrect: number;
  categoryStats: Record<TrapCategoryId, CategoryStat>;
  recentRounds: RoundSummary[];
}

export interface BlindspotInsight {
  trapId: TrapCategoryId;
  attempts: number;
  misses: number;
  correct: number;
  errorRate: number;
  accuracy: number;
}
