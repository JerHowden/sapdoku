import { ReactNode } from 'react';

export type Pack =
  | 'Turtle Pack'
  | 'Puppy Pack'
  | 'Star Pack'
  | 'Golden Pack'
  | 'Unicorn Pack'
  | 'Custom Pack';

export type Tier = 1 | 2 | 3 | 4 | 5 | 6 | 'Token';

export type AbilityTrigger =
  | ''
  | 'Buy'
  | 'Buy Friend'
  | 'Buy Food'
  | 'Sell'
  | 'Hurt'
  | 'Hurt & Sell'
  | 'Faint'
  | 'Level Up'
  | 'Friend Summoned'
  | 'Summoned'
  | 'Start Of Battle'
  | 'Start Of Turn'
  | 'End Turn'
  | 'Knock Out'
  | 'Before Attack'
  | 'After Attack'
  | 'Eats Food'
  | 'Friendly Eats Food'
  | 'Friendly Gained Perk'
  | 'Friendly Gained Ailment'
  | 'Friend Ahead Attacks'
  | 'Friend Ahead Hurt'
  | 'Friend Ahead Faints'
  | 'Friend Level-Up'
  | 'Friend Hurt'
  | 'Roll'
  | 'Shop Tier Upgraded'
  | 'Gains Mana';

export type Tag =
  | 'Summon'
  | 'Hurt'
  | 'Food'
  | 'Guard'
  | 'Perks'
  | 'Ailment'
  | 'Cycle'
  | 'Rolling'
  | 'Level-Up'
  | 'Gold'
  | 'Toys'
  | 'Strawberry'
  | 'Trumpets'
  | 'Mana'
  | 'Faint'
  | 'Buffs'
  | 'Disruption';

export type Pet = {
  name: string;
  imageSrc: string;
  pack: Pack[];
  tier: Tier;
  attack: number;
  health: number;
  abilityTrigger: AbilityTrigger;
  tag: Tag[];
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
