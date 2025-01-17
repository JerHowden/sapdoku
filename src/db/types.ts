import { ReactNode } from 'react';
import { ABILITY_TRIGGERS_LIST, PACKS_LIST, TAGS_LIST, TIERS_LIST } from './constants';

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

export type Requirement = {
  logic: (pet: Pet) => boolean;
  display: ReactNode;
  label: string;
};

export type Combo = {
  rows: [Requirement, Requirement, Requirement];
  columns: [Requirement, Requirement, Requirement];
};
