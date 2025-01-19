import { ReactNode } from 'react';
import {
  ABILITY_TRIGGERS_LIST,
  PACKS_LIST,
  REQUIREMENT_GENERIC_KEYS,
  REQUIREMENT_SPECIFIC_KEYS,
  TAGS_LIST,
  TIERS_LIST,
} from './constants';

export type Pack = (typeof PACKS_LIST)[number];
export type Tier = (typeof TIERS_LIST)[number];
export type AbilityTrigger = (typeof ABILITY_TRIGGERS_LIST)[number];
export type Tag = (typeof TAGS_LIST)[number];

export type Pet = {
  name: string;
  imageSrc: string;
  pack: Pack[];
  tier: Tier;
  attack: number;
  health: number;
  abilityTrigger: AbilityTrigger;
  tags: Tag[];
};

export type RequirementGenericKey = (typeof REQUIREMENT_GENERIC_KEYS)[number];
export type RequirementSpecificKey = (typeof REQUIREMENT_SPECIFIC_KEYS)[number];
export type RequirementKey = RequirementGenericKey | RequirementSpecificKey;

export type Requirement = {
  logic: (pet: Pet) => boolean;
  display: ReactNode;
  label: string;
};

export type Box = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type Combo = {
  rows: [Requirement, Requirement, Requirement];
  columns: [Requirement, Requirement, Requirement];
};

export type Guesses = Record<Box, Pet | undefined>;

export type Run = {
  guesses: Guesses;
  time: number;
  complete: boolean;
  hearts: number;
};
