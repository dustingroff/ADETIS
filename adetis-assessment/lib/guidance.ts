import { LOW_BEHAVIORS } from '@/data/lowBehaviors';
import type { PairingGuidance } from '@/lib/types';

export const GUIDANCE_BY_KEY: Record<string, PairingGuidance> = LOW_BEHAVIORS.reduce(
  (acc, g) => {
    acc[g.key] = g;
    return acc;
  },
  {} as Record<string, PairingGuidance>
);
