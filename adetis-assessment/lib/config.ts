// Single source of truth for the low-behavior threshold.
// You can override via either:
//  - NEXT_PUBLIC_LOW_BEHAVIOR_THRESHOLD (available client+server)
//  - LOW_BEHAVIOR_THRESHOLD (server only)
// Both must be an integer 0–15. Default is 11.

export const DEFAULT_LOW_BEHAVIOR_THRESHOLD = 11;

export function getLowBehaviorThreshold(): number {
  const raw =
    process.env.NEXT_PUBLIC_LOW_BEHAVIOR_THRESHOLD ??
    process.env.LOW_BEHAVIOR_THRESHOLD;
  const n = raw ? Number(raw) : NaN;
  if (Number.isFinite(n) && n >= 0 && n <= 15) return Math.floor(n);
  return DEFAULT_LOW_BEHAVIOR_THRESHOLD;
}

// Convenience constant (evaluated at runtime during SSR/build).
export const LOW_BEHAVIOR_THRESHOLD = getLowBehaviorThreshold();
