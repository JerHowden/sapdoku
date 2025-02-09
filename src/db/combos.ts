import { Combo, Pet, Requirement } from './types';
import { REQUIREMENT_MAP_GENERIC, REQUIREMENT_MAP_SPECIFIC } from './requirements';

export const COMBO_MAP: Record<number, Combo> = {
  20250207: {
    rows: [
      REQUIREMENT_MAP_SPECIFIC.tier1,
      REQUIREMENT_MAP_SPECIFIC.statsHealth,
      REQUIREMENT_MAP_SPECIFIC.tier6,
    ],
    columns: [
      REQUIREMENT_MAP_GENERIC.turtlePack,
      REQUIREMENT_MAP_GENERIC.faint,
      REQUIREMENT_MAP_GENERIC.cycle,
    ],
  },
  20250208: {
    rows: [
      REQUIREMENT_MAP_SPECIFIC.tier2,
      REQUIREMENT_MAP_SPECIFIC.tier3,
      REQUIREMENT_MAP_SPECIFIC.tier5,
    ],
    columns: [
      REQUIREMENT_MAP_GENERIC.goldenPack,
      REQUIREMENT_MAP_GENERIC.starPack,
      REQUIREMENT_MAP_GENERIC.disruption,
    ],
  },
  20250209: {
    rows: [
      REQUIREMENT_MAP_SPECIFIC.tier1,
      REQUIREMENT_MAP_SPECIFIC.statsAttack,
      REQUIREMENT_MAP_SPECIFIC.tier5,
    ],
    columns: [
      REQUIREMENT_MAP_GENERIC.goldAndRoll,
      REQUIREMENT_MAP_GENERIC.toys,
      REQUIREMENT_MAP_GENERIC.turn,
    ],
  },
} as const;

const REQUIREMENT_NULL: Requirement = {
  logic: (pet: Pet) => !pet,
  display: null,
  label: '',
};

export const DEFAULT_COMBO: Combo = {
  rows: [REQUIREMENT_NULL, REQUIREMENT_NULL, REQUIREMENT_NULL],
  columns: [REQUIREMENT_NULL, REQUIREMENT_NULL, REQUIREMENT_NULL],
};
