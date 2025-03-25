import { ReactNode } from 'react';
import {
  ABILITY_TRIGGERS_LIST,
  EMOJI_GUESS_KEYS,
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
  id: RequirementKey;
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
export type ReqGuesses = {
  [K in keyof Combo]: [Requirement | undefined, Requirement | undefined, Requirement | undefined];
};

export type Gamemode = 'classic' | 'reverse';

interface BaseRun {
  complete: boolean;
  hearts: number;
  time: number;
  date: string; // ISO8601 YYYY-MM-DD
}

export interface ClassicRun extends BaseRun {
  gamemode: 'classic';
  guesses: Guesses;
}

export interface ReverseRun extends BaseRun {
  gamemode: 'reverse';
  reqGuesses: ReqGuesses;
}

export type Run = {
  time: number;
  complete: boolean;
  hearts: number;
  guesses: Guesses;
};

export type Completion = 'loss' | 'win' | 'perfect' | 'gridbomb';

export type EmojiGuessKey = (typeof EMOJI_GUESS_KEYS)[number];
