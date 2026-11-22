import type { TranslationDictionary } from '../i18n/translations.ts';

interface AdSlotProps {
  placement: 'mid-leaderboard' | 'footer-banner';
  t: TranslationDictionary;
}

/**
 * Media.net Preconfigured Ad Container (Zero-CLS + Print-Safe)
 *
 * Production integration instructions:
 * 1. Add your Media.net contextual head tag in index.html using your assigned `cid` (Customer ID).
 * 2. Replace the placeholder inner container ID (`medianet-slot-*`) with your live `crid`
 *    (Creative ID) and invoke `window._mNHandle.queue.push(...)` inside a useEffect hook.
 * 3. Reserved `min-h` classes below prevent Cumulative Layout Shift (CLS) while ads load.
 * 4. The `ad-slot-container` class ensures all ad placements stay hidden in @media print.
 */
export function AdSlot({ placement, t }: AdSlotProps) {
  const isLeaderboard = placement === 'mid-leaderboard';

  return (
    <aside
      aria-label={t.ads.label}
      className="ad-slot-container no-print mx-auto max-w-6xl px-4 py-4 sm:px-6"
    >
      <div
        id={isLeaderboard ? 'medianet-slot-leaderboard' : 'medianet-slot-bottom'}
        data-ad-provider="media.net"
        data-ad-placement={placement}
        data-medianet-cid="YOUR_MEDIANET_CID"
        data-medianet-crid={isLeaderboard ? 'YOUR_LEADERBOARD_CRID' : 'YOUR_BOTTOM_CRID'}
        className={`flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white px-4 py-4 text-center ${
          isLeaderboard ? 'min-h-[100px]' : 'min-h-[250px]'
        }`}
      >
        <span className="text-[11px] font-medium tracking-wide text-slate-400">
          {t.ads.label}
        </span>
        <p className="mt-1 text-xs font-semibold text-slate-600">
          {isLeaderboard ? t.ads.leaderboardFallbackTitle : t.ads.bottomFallbackTitle}
        </p>
        <p className="mt-0.5 max-w-md text-[11px] text-slate-400">
          {isLeaderboard ? t.ads.leaderboardFallbackSub : t.ads.bottomFallbackSub}
        </p>
      </div>
    </aside>
  );
}
