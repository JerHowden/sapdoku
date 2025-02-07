import { Combo } from './types';
import { REQUIREMENT_MAP_GENERIC, REQUIREMENT_MAP_SPECIFIC } from './requirements';

export const COMBO_MAP: Record<number, Combo> = {
  20250206: {
    rows: [
      REQUIREMENT_MAP_SPECIFIC.tier1,
      REQUIREMENT_MAP_SPECIFIC.tier3,
      REQUIREMENT_MAP_SPECIFIC.tier6,
    ],
    columns: [
      REQUIREMENT_MAP_GENERIC.turtlePack,
      REQUIREMENT_MAP_GENERIC.faint,
      REQUIREMENT_MAP_GENERIC.cycle,
    ],
  },
} as const;
