import { Combo } from './types';
import { REQUIREMENT_MAP } from './requirements';

export const COMBO_MAP: Record<number, Combo> = {
  20250101: {
    rows: [REQUIREMENT_MAP.tier1, REQUIREMENT_MAP.tier3, REQUIREMENT_MAP.tier6],
    columns: [REQUIREMENT_MAP.buy, REQUIREMENT_MAP.faint, REQUIREMENT_MAP.sell],
  },
  20250116: {
    rows: [REQUIREMENT_MAP.tier1, REQUIREMENT_MAP.tier3, REQUIREMENT_MAP.tier6],
    columns: [REQUIREMENT_MAP.buy, REQUIREMENT_MAP.hurt, REQUIREMENT_MAP.faint],
  },
  20250117: {
    rows: [REQUIREMENT_MAP.health5Under, REQUIREMENT_MAP.attack6Over, REQUIREMENT_MAP.highTier],
    columns: [REQUIREMENT_MAP.turtlePack, REQUIREMENT_MAP.goldenPack, REQUIREMENT_MAP.unicornPack],
  },
} as const;
