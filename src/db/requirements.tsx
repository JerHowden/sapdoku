'use client';

import { getImageProps } from 'next/image';
import { IMAGE_SRCS } from './imageSrc';
import { Requirement, RequirementGenericKey, RequirementSpecificKey } from './types';
import { JSX } from 'react';

type RequirementImageProps = {
  src: string;
  alt: string;
  baseSize: number;
} & JSX.IntrinsicElements['picture'];

function RequirementImage({ src, alt = '', baseSize, ...paramRest }: RequirementImageProps) {
  const common = { src, alt };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: baseSize * 2,
    height: baseSize * 2,
    quality: 80,
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: baseSize,
    height: baseSize,
    quality: 70,
  });

  return (
    <picture {...paramRest}>
      <source
        media="(min-width: 768px)"
        srcSet={desktop}
      />
      <source srcSet={mobile} />
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img
        {...rest}
        style={{ width: '100%', height: 'auto' }}
      />
    </picture>
  );
}

export const REQUIREMENT_MAP_SPECIFIC: Record<RequirementSpecificKey, Requirement> = {
  //
  // --- TIERS ---
  //
  tier1: {
    id: 'tier1',
    logic: (pet) => pet.tier === 1,
    display: (
      <RequirementImage
        src={IMAGE_SRCS.tier_1}
        alt="Tier 1"
        baseSize={32}
      />
    ),
    label: 'Tier 1',
  },
  tier2: {
    id: 'tier2',
    logic: (pet) => pet.tier === 2,
    display: (
      <RequirementImage
        src={IMAGE_SRCS.tier_2}
        alt="Tier 2"
        baseSize={32}
      />
    ),
    label: 'Tier 2',
  },
  tier3: {
    id: 'tier3',
    logic: (pet) => pet.tier === 3,
    display: (
      <RequirementImage
        src={IMAGE_SRCS.tier_3}
        alt="Tier 3"
        baseSize={32}
      />
    ),
    label: 'Tier 3',
  },
  tier4: {
    id: 'tier4',
    logic: (pet) => pet.tier === 4,
    display: (
      <RequirementImage
        src={IMAGE_SRCS.tier_4}
        alt="Tier 4"
        baseSize={32}
      />
    ),
    label: 'Tier 4',
  },
  tier5: {
    id: 'tier5',
    logic: (pet) => pet.tier === 5,
    display: (
      <RequirementImage
        src={IMAGE_SRCS.tier_5}
        alt="Tier 5"
        baseSize={32}
      />
    ),
    label: 'Tier 5',
  },
  tier6: {
    id: 'tier6',
    logic: (pet) => pet.tier === 6,
    display: (
      <RequirementImage
        src={IMAGE_SRCS.tier_6}
        alt="Tier 6"
        baseSize={32}
      />
    ),
    label: 'Tier 6',
  },
  //
  // --- STATS ---
  //
  statsHealth: {
    id: 'statsHealth',
    logic: (pet) => pet.health > pet.attack,
    display: (
      <RequirementImage
        src={IMAGE_SRCS.health}
        alt="Health Highest Stat"
        baseSize={24}
      />
    ),
    label: 'More Health',
  },
  statsAttack: {
    id: 'statsAttack',
    logic: (pet) => pet.attack > pet.health,
    display: (
      <RequirementImage
        src={IMAGE_SRCS.attack}
        alt="Attack Highest Stat"
        baseSize={24}
      />
    ),
    label: 'More Attack',
  },
  statsEven: {
    id: 'statsEven',
    logic: (pet) => pet.health === pet.attack,
    display: (
      <RequirementImage
        src={IMAGE_SRCS.health}
        alt="Stats Even"
        baseSize={24}
      />
    ),
    label: 'Even Stats',
  },
} as const;

export const REQUIREMENT_MAP_GENERIC: Record<RequirementGenericKey, Requirement> = {
  //
  // --- PACKS ---
  //
  turtlePack: {
    id: 'turtlePack',
    logic: (pet) => pet.pack.includes('Turtle Pack'),
    display: (
      <RequirementImage
        src={IMAGE_SRCS.turtle_pack}
        alt="Turtle Pack"
        baseSize={32}
      />
    ),
    label: 'Turtle Pack',
  },
  puppyPack: {
    id: 'puppyPack',
    logic: (pet) => pet.pack.includes('Puppy Pack'),
    display: (
      <RequirementImage
        src={IMAGE_SRCS.puppy_pack}
        alt="Puppy Pack"
        baseSize={32}
      />
    ),
    label: 'Puppy Pack',
  },
  starPack: {
    id: 'starPack',
    logic: (pet) => pet.pack.includes('Star Pack'),
    display: (
      <RequirementImage
        src={IMAGE_SRCS.star_pack}
        alt="Star Pack"
        baseSize={32}
      />
    ),
    label: 'Star Pack',
  },
  goldenPack: {
    id: 'goldenPack',
    logic: (pet) => pet.pack.includes('Golden Pack'),
    display: (
      <RequirementImage
        src={IMAGE_SRCS.golden_pack}
        alt="Golden Pack"
        baseSize={32}
      />
    ),
    label: 'Golden Pack',
  },
  unicornPack: {
    id: 'unicornPack',
    logic: (pet) => pet.pack.includes('Unicorn Pack'),
    display: (
      <RequirementImage
        src={IMAGE_SRCS.unicorn_pack}
        alt="Unicorn Pack"
        baseSize={32}
      />
    ),
    label: 'Unicorn Pack',
  },
  customPack: {
    id: 'customPack',
    logic: (pet) => pet.pack.includes('Custom Pack'),
    display: (
      <RequirementImage
        src={IMAGE_SRCS.custom_pack}
        alt="Custom Pack"
        baseSize={32}
      />
    ),
    label: 'Custom Pack',
  },
  //
  // --- TRIGGER ---
  //
  summon: {
    id: 'summon',
    logic: (pet) =>
      pet.tags.includes('Summon') ||
      pet.abilityTrigger === 'Friend Summoned' ||
      pet.abilityTrigger === 'Summoned' ||
      pet.abilityTrigger === 'Bee Summoned',
    display: (
      <RequirementImage
        src={IMAGE_SRCS.honey}
        alt="Summon"
        baseSize={32}
      />
    ),
    label: 'Summon',
  },
  hurt: {
    id: 'hurt',
    logic: (pet) =>
      pet.tags.includes('Hurt') ||
      pet.abilityTrigger === 'Hurt' ||
      pet.abilityTrigger === 'Hurt & Sell' ||
      pet.abilityTrigger === 'Friend Ahead Hurt' ||
      pet.abilityTrigger === 'Friend Hurt' ||
      pet.abilityTrigger === 'Four Friends Hurt' ||
      pet.abilityTrigger === 'Anyone Hurt',
    display: (
      <RequirementImage
        src={IMAGE_SRCS.garlic}
        alt="Hurt"
        baseSize={32}
      />
    ),
    label: 'Hurt',
  },
  food: {
    id: 'food',
    logic: (pet) =>
      pet.tags.includes('Food') ||
      pet.abilityTrigger === 'Eats Food' ||
      pet.abilityTrigger === 'Eats Two Food' ||
      pet.abilityTrigger === 'Eats Three Food' ||
      pet.abilityTrigger === 'Eats Apple' ||
      pet.abilityTrigger === 'Food Bought' ||
      pet.abilityTrigger === 'Friendly Eats Food' ||
      pet.abilityTrigger === 'Friendly Ate Food' ||
      pet.abilityTrigger === 'Friend Ate Corncob',
    display: (
      <RequirementImage
        src={IMAGE_SRCS.apple}
        alt="Food"
        baseSize={32}
      />
    ),
    label: 'Food',
  },
  guard: {
    id: 'guard',
    logic: (pet) =>
      pet.tags.includes('Guard') ||
      pet.abilityTrigger === 'Friend Ahead Attacks' ||
      pet.abilityTrigger === 'Friend Ahead Hurt' ||
      pet.abilityTrigger === 'Friend Ahead Faints' ||
      pet.abilityTrigger === 'Friend Jumped' ||
      pet.abilityTrigger === 'Empty Front Space',
    display: (
      <RequirementImage
        src={IMAGE_SRCS.fairyDust}
        alt="Guard"
        baseSize={32}
      />
    ),
    label: 'Guard',
  },
  perks: {
    id: 'perks',
    logic: (pet) =>
      pet.tags.includes('Perks') ||
      pet.abilityTrigger === 'Gain Perk' ||
      pet.abilityTrigger === 'Gain Perk or Ailment' ||
      pet.abilityTrigger === 'Friend Lost Perk' ||
      pet.abilityTrigger === 'Friendly Gained Perk',
    display: (
      <RequirementImage
        src={IMAGE_SRCS.melon}
        alt="Perks"
        baseSize={32}
      />
    ),
    label: 'Perks',
  },
  ailment: {
    id: 'ailment',
    logic: (pet) =>
      pet.tags.includes('Ailment') ||
      pet.abilityTrigger === 'Gain Perk or Ailment' ||
      pet.abilityTrigger === 'Friendly Gained Ailment' ||
      pet.abilityTrigger === 'Friend Gained Ailment' ||
      pet.abilityTrigger === 'Enemy Gained Ailment',
    display: (
      <RequirementImage
        src={IMAGE_SRCS.weak}
        alt="Ailment"
        baseSize={32}
      />
    ),
    label: 'Ailment',
  },
  cycle: {
    id: 'cycle',
    logic: (pet) =>
      pet.tags.includes('Cycle') ||
      pet.abilityTrigger === 'Buy' ||
      pet.abilityTrigger === 'Buy & Sell' ||
      pet.abilityTrigger === 'Sell' ||
      pet.abilityTrigger === 'Hurt & Sell' ||
      pet.abilityTrigger === 'Faint & Sell' ||
      pet.abilityTrigger === 'Roll & Sell' ||
      pet.abilityTrigger === 'Sell Friend',
    display: (
      <RequirementImage
        src={IMAGE_SRCS.lovePotion}
        alt="Cycle"
        baseSize={32}
      />
    ),
    label: 'Cycle',
  },
  levelUp: {
    id: 'levelUp',
    logic: (pet) =>
      pet.tags.includes('Level-Up') ||
      pet.abilityTrigger === 'Level-Up' ||
      pet.abilityTrigger === 'Friendly Level-Up' ||
      pet.abilityTrigger === 'Friend Level-Up',
    display: (
      <RequirementImage
        src={IMAGE_SRCS.chocolate}
        alt="Level Up"
        baseSize={32}
      />
    ),
    label: 'Level Up',
  },
  goldAndRoll: {
    id: 'goldAndRoll',
    logic: (pet) =>
      pet.tags.includes('Gold') ||
      pet.tags.includes('Rolling') ||
      pet.abilityTrigger === 'Food Bought' ||
      pet.abilityTrigger === 'Spend 7 Gold' ||
      pet.abilityTrigger === 'Roll' ||
      pet.abilityTrigger === 'Roll 4 Times' ||
      pet.abilityTrigger === 'Roll & Sell',
    display: (
      <RequirementImage
        src={IMAGE_SRCS.gold}
        alt="Gold & Roll"
        baseSize={32}
      />
    ),
    label: 'Gold & Roll',
  },
  toys: {
    id: 'toys',
    logic: (pet) => pet.tags.includes('Toys') || pet.abilityTrigger === 'Friendly Toy Broke',
    display: (
      <RequirementImage
        src={IMAGE_SRCS.tennisBall}
        alt="Toys"
        baseSize={32}
      />
    ),
    label: 'Toys',
  },
  strawberry: {
    id: 'strawberry',
    logic: (pet) =>
      pet.tags.includes('Strawberry') || pet.abilityTrigger === 'Friendly Gained Strawberry',
    display: (
      <RequirementImage
        src={IMAGE_SRCS.strawberry}
        alt="Strawberry"
        baseSize={32}
      />
    ),
    label: 'Strawberry',
  },
  trumpets: {
    id: 'trumpets',
    logic: (pet) => pet.tags.includes('Trumpets'),
    display: (
      <RequirementImage
        src={IMAGE_SRCS.trumpet}
        alt="Trumpets"
        baseSize={32}
      />
    ),
    label: 'Trumpets',
  },
  mana: {
    id: 'mana',
    logic: (pet) => pet.tags.includes('Mana') || pet.abilityTrigger === 'Gains Mana',
    display: (
      <RequirementImage
        src={IMAGE_SRCS.mana}
        alt="Mana"
        baseSize={32}
      />
    ),
    label: 'Mana',
  },
  faint: {
    id: 'faint',
    logic: (pet) =>
      pet.tags.includes('Faint') ||
      pet.abilityTrigger === 'Faint' ||
      pet.abilityTrigger === 'Faint & Sell',
    display: (
      <RequirementImage
        src={IMAGE_SRCS.pill}
        alt="Faint"
        baseSize={32}
      />
    ),
    label: 'Faint',
  },
  buffs: {
    id: 'buffs',
    logic: (pet) => pet.tags.includes('Buffs'),
    display: (
      <RequirementImage
        src={IMAGE_SRCS.carrot}
        alt="Buffs"
        baseSize={32}
      />
    ),
    label: 'Buffs',
  },
  disruption: {
    id: 'disruption',
    logic: (pet) =>
      pet.tags.includes('Disruption') ||
      pet.abilityTrigger === 'Enemy Summoned or Pushed' ||
      pet.abilityTrigger === 'Enemy Hurt or Pushed',
    display: (
      <RequirementImage
        src={IMAGE_SRCS.tomato}
        alt="Disruption"
        baseSize={32}
      />
    ),
    label: 'Disruption',
  },
  startOfBattle: {
    id: 'startOfBattle',
    logic: (pet) => pet.abilityTrigger === 'Start of Battle',
    display: (
      <RequirementImage
        src={IMAGE_SRCS.pancakes}
        alt="Start of Battle"
        baseSize={32}
      />
    ),
    label: 'Start of Battle',
  },
  turn: {
    id: 'turn',
    logic: (pet) =>
      pet.abilityTrigger === 'Start of Turn' ||
      pet.abilityTrigger === 'End Turn' ||
      pet.abilityTrigger === 'Shop Tier Upgraded',
    display: (
      <RequirementImage
        src={IMAGE_SRCS.can}
        alt="Turn"
        baseSize={32}
      />
    ),
    label: 'Turn',
  },
} as const;

export const REQUIREMENT_LIST_SPECIFIC: Requirement[] = Object.values(REQUIREMENT_MAP_SPECIFIC);
export const REQUIREMENT_LIST_GENERIC: Requirement[] = Object.values(REQUIREMENT_MAP_GENERIC);
