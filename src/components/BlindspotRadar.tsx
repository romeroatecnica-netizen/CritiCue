import { AlertTriangle, Play, Target } from 'lucide-react';
import { RADAR_FAMILIES, TRAPS } from '../data/taxonomy.ts';
import type { TranslationDictionary } from '../i18n/translations.ts';
import type { BlindspotInsight, Locale, TrapCategoryId, UserProgress } from '../types.ts';
import { getRadarFamilyScores } from '../utils/storage.ts';

interface BlindspotRadarProps {
  locale: Locale;
  progress: UserProgress;
  blindspots: BlindspotInsight[];
  t: TranslationDictionary;
  onDrillBlindspots: (trapIds: TrapCategoryId[]) => void;
  onRunDiagnostic: () => void;
}

export function BlindspotRadar({
  locale,
  progress,
  blindspots,
  t,
  onDrillBlindspots,
  onRunDiagnostic,
}: BlindspotRadarProps) {
  const familyScores = getRadarFamilyScores(progress);
  const topBlindspot = blindspots.find((b) => b.misses > 0) ?? null;
  const weakestTrapIds = blindspots
    .filter((b) => b.misses > 0)
    .slice(0, 3)
    .map((b) => b.trapId);

  // Pure SVG Radar Geometry (7 axes)
  const cx = 210;
  const cy = 165;
  const maxRadius = 104;
  const rings = [25, 50, 75, 100];
  const axisCount = RADAR_FAMILIES.length;

  const pointFor = (axisIndex: number, pct: number) => {
    const angle = -Math.PI / 2 + (axisIndex * 2 * Math.PI) / axisCount;
    const r = (Math.max(0, Math.min(100, pct)) / 100) * maxRadius;
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
      angle,
    };
  };

  const polygonPoints = familyScores
    .map((score, i) => {
      const effectivePct = score.attempts > 0 ? Math.max(12, score.accuracy) : 0;
      const pt = pointFor(i, effectivePct);
      return `${pt.x.toFixed(1)},${pt.y.toFixed(1)}`;
    })
    .join(' ');

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">
              {t.radar.title}
            </h2>
            <p className="mt-1 text-sm text-slate-600">{t.radar.subtitle}</p>
          </div>

          {weakestTrapIds.length > 0 ? (
            <button
              type="button"
              onClick={() => onDrillBlindspots(weakestTrapIds)}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-indigo-700 px-4 py-2.5 text-xs font-semibold text-white hover:bg-indigo-800 transition-colors whitespace-nowrap shrink-0"
            >
              <Target className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{t.radar.drillBlindspotsBtn}</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={onRunDiagnostic}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-indigo-700 px-4 py-2.5 text-xs font-semibold text-white hover:bg-indigo-800 transition-colors whitespace-nowrap shrink-0"
            >
              <Play className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{t.radar.runDiagnosticBtn}</span>
            </button>
          )}
        </div>

        <div className="mt-6 grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
          {/* SVG Spider Chart */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50/50 p-3 sm:p-4">
              <svg
                viewBox="0 0 420 330"
                role="img"
                aria-label={t.radar.chartAriaLabel}
                className="h-auto w-full max-w-[440px]"
              >
                {/* Concentric grid polygons */}
                {rings.map((ringPct) => {
                  const pts = RADAR_FAMILIES.map((_, idx) => {
                    const p = pointFor(idx, ringPct);
                    return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
                  }).join(' ');
                  return (
                    <polygon
                      key={ringPct}
                      points={pts}
                      fill="none"
                      stroke="#E2E8F0"
                      strokeWidth={ringPct === 100 ? 1.4 : 1}
                    />
                  );
                })}

                {/* Radial spokes */}
                {RADAR_FAMILIES.map((fam, idx) => {
                  const outer = pointFor(idx, 100);
                  return (
                    <line
                      key={fam.id}
                      x1={cx}
                      y1={cy}
                      x2={outer.x}
                      y2={outer.y}
                      stroke="#E2E8F0"
                      strokeWidth={1}
                    />
                  );
                })}

                {/* Scale ticks on top vertical axis */}
                {[50, 100].map((val) => {
                  const pt = pointFor(0, val);
                  return (
                    <text
                      key={val}
                      x={pt.x + 6}
                      y={pt.y + 4}
                      fontSize="10"
                      fill="#94A3B8"
                      fontFamily="IBM Plex Mono, monospace"
                    >
                      {val}%
                    </text>
                  );
                })}

                {/* User accuracy polygon */}
                {progress.totalAnswered > 0 && (
                  <>
                    <polygon
                      points={polygonPoints}
                      fill="#4338CA"
                      fillOpacity={0.16}
                      stroke="#4338CA"
                      strokeWidth={2.2}
                      strokeLinejoin="round"
                    />
                    {familyScores.map((score, idx) => {
                      const effectivePct = score.attempts > 0 ? Math.max(12, score.accuracy) : 0;
                      const pt = pointFor(idx, effectivePct);
                      const isLow = score.attempts > 0 && score.accuracy < 60;
                      return (
                        <circle
                          key={score.familyId}
                          cx={pt.x}
                          cy={pt.y}
                          r={4.2}
                          fill={isLow ? '#D97706' : '#4338CA'}
                          stroke="#FFFFFF"
                          strokeWidth={1.5}
                        />
                      );
                    })}
                  </>
                )}

                {/* Axis labels + tabular accuracy */}
                {RADAR_FAMILIES.map((fam, idx) => {
                  const labelPos = pointFor(idx, 123);
                  const score = familyScores[idx];
                  const cos = Math.cos(labelPos.angle);
                  const anchor = Math.abs(cos) < 0.25 ? 'middle' : cos > 0 ? 'start' : 'end';
                  const pctText = score && score.attempts > 0 ? `${score.accuracy}%` : '—';

                  return (
                    <g key={fam.id}>
                      <text
                        x={labelPos.x}
                        y={labelPos.y - 2}
                        textAnchor={anchor}
                        fontSize="11.5"
                        fontWeight="600"
                        fill="#1E293B"
                        fontFamily="Plus Jakarta Sans, sans-serif"
                      >
                        {fam[locale].shortLabel}
                      </text>
                      <text
                        x={labelPos.x}
                        y={labelPos.y + 12}
                        textAnchor={anchor}
                        fontSize="10.5"
                        fontWeight="600"
                        fill={
                          score && score.attempts > 0 && score.accuracy < 60
                            ? '#B45309'
                            : '#4338CA'
                        }
                        fontFamily="IBM Plex Mono, monospace"
                      >
                        {pctText}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Top Blindspot / Empty State Panel */}
          <div className="lg:col-span-5 space-y-4">
            {progress.totalAnswered === 0 ? (
              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5">
                <h3 className="font-display text-base font-bold text-slate-900">
                  {t.radar.noDataTitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{t.radar.noDataBody}</p>
                <button
                  type="button"
                  onClick={onRunDiagnostic}
                  className="mt-4 inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-indigo-700 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-800 transition-colors"
                >
                  <Play className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>{t.radar.runDiagnosticBtn}</span>
                </button>
              </div>
            ) : topBlindspot ? (
              <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-5">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-800">
                  <AlertTriangle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{t.radar.topBlindspotHeading}</span>
                </div>
                <h3 className="mt-2 font-display text-lg font-bold text-slate-900">
                  {TRAPS[topBlindspot.trapId][locale].name}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-700">
                  {TRAPS[topBlindspot.trapId][locale].tell}
                </p>

                <div className="mt-4 grid grid-cols-3 gap-2 border-t border-amber-200/70 pt-3">
                  <div>
                    <p className="text-[11px] font-medium text-slate-500">
                      {t.radar.errorRateLabel}
                    </p>
                    <p className="font-mono-tabular text-base font-bold text-red-700">
                      {topBlindspot.errorRate}%
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-slate-500">{t.radar.missesLabel}</p>
                    <p className="font-mono-tabular text-base font-bold text-slate-900">
                      {topBlindspot.misses} / {topBlindspot.attempts}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-slate-500">
                      {t.radar.accuracyLabel}
                    </p>
                    <p className="font-mono-tabular text-base font-bold text-emerald-700">
                      {topBlindspot.accuracy}%
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onDrillBlindspots(weakestTrapIds)}
                  className="mt-4 inline-flex w-full min-h-[42px] items-center justify-center gap-2 rounded-lg bg-indigo-700 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-800 transition-colors"
                >
                  <Target className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{t.radar.drillBlindspotsBtn}</span>
                </button>
              </div>
            ) : (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5">
                <p className="text-xs font-semibold text-emerald-800">
                  {t.radar.accuracyLabel}: 100%
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  {progress.totalAnswered} / {progress.totalAnswered} ({t.hero.stats.xp}:{' '}
                  <span className="tabular-nums font-semibold">{progress.xp}</span>)
                </p>
              </div>
            )}

            {/* Recent Rounds */}
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="font-display text-sm font-bold text-slate-900">
                {t.radar.recentRoundsTitle}
              </h3>
              {progress.recentRounds.length === 0 ? (
                <p className="mt-2 text-xs text-slate-500">{t.radar.noRoundsYet}</p>
              ) : (
                <ul className="mt-2.5 divide-y divide-slate-100">
                  {progress.recentRounds.slice(0, 4).map((round) => (
                    <li
                      key={round.id}
                      className="flex items-center justify-between py-2 text-xs text-slate-700"
                    >
                      <span className="font-medium truncate pr-2">
                        {t.modes[round.mode]}
                        {round.contextFilter !== 'all'
                          ? ` · ${t.contexts[round.contextFilter]}`
                          : ''}
                      </span>
                      <span className="font-mono-tabular shrink-0 text-slate-900">
                        {round.correctCount}/{round.totalCount} · +{round.xpEarned} XP
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Per-Trap Performance Table */}
        {blindspots.length > 0 && (
          <div className="mt-7 border-t border-slate-100 pt-6">
            <h3 className="font-display text-base font-bold text-slate-900">
              {t.radar.tableTitle}
            </h3>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[540px] border-collapse text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500">
                    <th className="py-2.5 pr-4 font-semibold">{t.radar.colTrap}</th>
                    <th className="py-2.5 pr-4 font-semibold">{t.radar.colNature}</th>
                    <th className="py-2.5 pr-4 font-semibold text-right">{t.radar.colAccuracy}</th>
                    <th className="py-2.5 pr-4 font-semibold text-right">
                      {t.radar.colErrorRate}
                    </th>
                    <th className="py-2.5 font-semibold text-right">{t.radar.colMissed}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {blindspots.map((row) => {
                    const trap = TRAPS[row.trapId];
                    return (
                      <tr key={row.trapId} className="hover:bg-slate-50/70">
                        <td className="py-2.5 pr-4 font-semibold text-slate-900">
                          {trap[locale].name}
                        </td>
                        <td className="py-2.5 pr-4 text-slate-600">{t.natures[trap.nature]}</td>
                        <td className="py-2.5 pr-4 text-right font-mono-tabular font-semibold text-emerald-700">
                          {row.accuracy}%
                        </td>
                        <td
                          className={`py-2.5 pr-4 text-right font-mono-tabular font-semibold ${
                            row.errorRate >= 40 ? 'text-red-600' : 'text-slate-700'
                          }`}
                        >
                          {row.errorRate}%
                        </td>
                        <td className="py-2.5 text-right font-mono-tabular text-slate-600">
                          {row.misses} / {row.attempts}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
