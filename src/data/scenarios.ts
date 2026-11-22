import { SCENARIOS_DEBATE_ARTICLE } from './scenariosPart1.ts';
import { SCENARIOS_AD_EVERYDAY } from './scenariosPart2.ts';
import type { Scenario } from '../types.ts';

export const SCENARIOS: Scenario[] = [...SCENARIOS_DEBATE_ARTICLE, ...SCENARIOS_AD_EVERYDAY];
