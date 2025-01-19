'use client';

import {
  ArrowRightFromLine,
  ArrowRightToLine,
  ArrowUp,
  DiamondPlus,
  Redo,
  RefreshCw,
  Skull,
  Sword,
  Swords,
  X,
} from 'lucide-react';
import { getImageProps } from 'next/image';
import { IMAGE_SRCS } from './imageSrc';
import { Requirement, RequirementKey } from './types';
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

export const REQUIREMENT_MAP: Record<RequirementKey, Requirement> = {
  //
  // --- TIERS ---
  //
  tier1: {
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
  // --- PACKS ---
  //
  turtlePack: {
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
  // --- STATS ---
  //
  healthLow: {
    logic: (pet) => pet.health <= 3,
    display: (
      <RequirementImage
        src={IMAGE_SRCS.health}
        alt="Health"
        baseSize={32}
      />
    ),
    label: 'Low Health (1 - 3)',
  },
  healthMedium: {
    logic: (pet) => pet.health >= 4 && pet.health <= 6,
    display: (
      <RequirementImage
        src={IMAGE_SRCS.health}
        alt="Health"
        baseSize={32}
      />
    ),
    label: 'Medium Health (4 - 6)',
  },
  healthHigh: {
    logic: (pet) => pet.health >= 7,
    display: (
      <RequirementImage
        src={IMAGE_SRCS.health}
        alt="Health"
        baseSize={32}
      />
    ),
    label: 'High Health (7+)',
  },
  attackLow: {
    logic: (pet) => pet.attack <= 3,
    display: (
      <RequirementImage
        src={IMAGE_SRCS.attack}
        alt="Attack"
        baseSize={32}
      />
    ),
    label: 'Low Attack (1 - 3)',
  },
  attackMedium: {
    logic: (pet) => pet.attack >= 4 && pet.attack <= 6,
    display: (
      <RequirementImage
        src={IMAGE_SRCS.attack}
        alt="Attack"
        baseSize={32}
      />
    ),
    label: 'Medium Attack (4 - 6)',
  },
  attackHigh: {
    logic: (pet) => pet.attack >= 7,
    display: (
      <RequirementImage
        src={IMAGE_SRCS.attack}
        alt="Attack"
        baseSize={32}
      />
    ),
    label: 'High Attack (7+)',
  },
  //
  // --- TRIGGER ---
  //
  noAbility: {
    logic: (pet) => pet.abilityTrigger === '',
    display: <X className="w-6 md:w-12 h-auto" />,
    label: 'No Ability Trigger',
  },
  buy: {
    logic: (pet) => pet.abilityTrigger === 'Buy',
    display: (
      <RequirementImage
        src={IMAGE_SRCS.gold}
        alt="Buy"
        baseSize={32}
      />
    ),
    label: 'Buy',
  },
  buyFriend: {
    logic: (pet) => pet.abilityTrigger === 'Buy Friend',
    display: (
      <RequirementImage
        src={IMAGE_SRCS.gold}
        alt="Buy Friend"
        baseSize={32}
      />
    ),
    label: 'Buy Friend',
  },
  buyFood: {
    logic: (pet) => pet.abilityTrigger === 'Buy Food',
    display: (
      <RequirementImage
        src={IMAGE_SRCS.apple}
        alt="Buy Food"
        baseSize={32}
      />
    ),
    label: 'Buy Food',
  },
  sell: {
    logic: (pet) => ['Sell', 'Hurt & Sell', 'Faint & Sell'].includes(pet.abilityTrigger),
    display: (
      <RequirementImage
        src={IMAGE_SRCS.gold}
        alt="Sell"
        baseSize={32}
      />
    ),
    label: 'Sell',
  },
  hurt: {
    logic: (pet) => ['Hurt', 'Hurt & Sell'].includes(pet.abilityTrigger),
    display: <Sword className="w-6 md:w-12 h-auto" />,
    label: 'Hurt',
  },
  faint: {
    logic: (pet) => ['Faint', 'Faint & Sell'].includes(pet.abilityTrigger),
    display: <Skull className="w-6 md:w-12 h-auto" />,
    label: 'Faint',
  },
  levelUp: {
    logic: (pet) => pet.abilityTrigger === 'Level Up',
    display: (
      <RequirementImage
        src={IMAGE_SRCS.experience}
        alt="Friend Level-Up"
        baseSize={32}
      />
    ),
    label: 'Level Up',
  },
  friendSummoned: {
    logic: (pet) => pet.abilityTrigger === 'Friend Summoned',
    display: <DiamondPlus className="w-6 md:w-12 h-auto" />,
    label: 'Friend Summoned',
  },
  summoned: {
    logic: (pet) => pet.abilityTrigger === 'Summoned',
    display: <DiamondPlus className="w-6 md:w-12 h-auto" />,
    label: 'Summoned',
  },
  startOfBattle: {
    logic: (pet) => pet.abilityTrigger === 'Start Of Battle',
    display: <Swords className="w-6 md:w-12 h-auto" />,
    label: 'Start of Battle',
  },
  startOfTurn: {
    logic: (pet) => pet.abilityTrigger === 'Start Of Turn',
    display: <ArrowRightFromLine className="w-6 md:w-12 h-auto" />,
    label: 'Start of Turn',
  },
  endTurn: {
    logic: (pet) => pet.abilityTrigger === 'End Turn',
    display: <ArrowRightToLine className="w-6 md:w-12 h-auto" />,
    label: 'End Turn',
  },
  knockOut: {
    logic: (pet) => pet.abilityTrigger === 'Knock Out',
    display: <Sword className="w-6 md:w-12 h-auto -scale-x-100" />,
    label: 'Knock Out',
  },
  beforeAttack: {
    logic: (pet) => pet.abilityTrigger === 'Before Attack',
    display: <Sword className="w-6 md:w-12 h-auto -scale-x-100" />,
    label: 'Before Attack',
  },
  afterAttack: {
    logic: (pet) => pet.abilityTrigger === 'After Attack',
    display: <Sword className="w-6 md:w-12 h-auto -scale-x-100" />,
    label: 'After Attack',
  },
  eatsFood: {
    logic: (pet) => pet.abilityTrigger === 'Eats Food',
    display: (
      <RequirementImage
        src={IMAGE_SRCS.apple}
        alt="Eats Food"
        baseSize={32}
      />
    ),
    label: 'Eats Food',
  },
  friendlyEatsFood: {
    logic: (pet) => pet.abilityTrigger === 'Friendly Eats Food',
    display: (
      <RequirementImage
        src={IMAGE_SRCS.apple}
        alt="Friendly Eats Food"
        baseSize={32}
      />
    ),
    label: 'Friendly Eats Food',
  },
  friendlyGained: {
    logic: (pet) =>
      ['Friendly Gained Perk', 'Friendly Gained Ailment'].includes(pet.abilityTrigger),
    display: (
      <RequirementImage
        src={IMAGE_SRCS.melon}
        alt="Friendly Gained Perk or Ailment"
        title="Friendly Gained Perk or Ailment"
        baseSize={32}
      />
    ),
    label: 'Friendly Gained ...',
  },
  friendlyAttacked: {
    logic: (pet) => pet.abilityTrigger === 'Friendly Attacked',
    display: <Sword className="w-6 md:w-12 h-auto -scale-x-100" />,
    label: 'Friendly Attacked',
  },
  friendlyLevelUp: {
    logic: (pet) => pet.abilityTrigger === 'Friendly Level-Up',
    display: (
      <RequirementImage
        src={IMAGE_SRCS.experience}
        alt="Friendly Level-Up"
        baseSize={32}
      />
    ),
    label: 'Friendly Level-Up',
  },
  friendAhead: {
    logic: (pet) =>
      ['Friend Ahead Attacks', 'Friend Ahead Hurt', 'Friend Ahead Faints'].includes(
        pet.abilityTrigger
      ),
    display: <Redo className="w-6 md:w-12 h-auto" />,
    label: 'Friend Ahead ...',
  },
  friendLevelUp: {
    logic: (pet) => pet.abilityTrigger === 'Friend Level-Up',
    display: (
      <RequirementImage
        src={IMAGE_SRCS.experience}
        alt="Friend Level-Up"
        baseSize={32}
      />
    ),
    label: 'Friend Level-Up',
  },
  friendHurt: {
    logic: (pet) => pet.abilityTrigger === 'Friend Hurt',
    display: <Sword className="w-6 md:w-12 h-auto" />,
    label: 'Friend Hurt',
  },
  friendFaints: {
    logic: (pet) => pet.abilityTrigger === 'Friend Faints',
    display: <Skull className="w-6 md:w-12 h-auto" />,
    label: 'Friend Faints',
  },
  friendSold: {
    logic: (pet) => pet.abilityTrigger === 'Friend Sold',
    display: (
      <RequirementImage
        src={IMAGE_SRCS.gold}
        alt="Friend Sold"
        baseSize={32}
      />
    ),
    label: 'Friend Sold',
  },
  friendJumped: {
    logic: (pet) => pet.abilityTrigger === 'Friend Jumped',
    display: <Redo className="w-6 md:w-12 h-auto" />,
    label: 'Friend Jumped',
  },
  roll: {
    logic: (pet) => ['Roll', 'Roll 4 Times'].includes(pet.abilityTrigger),
    display: <RefreshCw className="w-6 md:w-12 h-auto" />,
    label: 'Roll',
  },
  shopTierUpgraded: {
    logic: (pet) => pet.abilityTrigger === 'Shop Tier Upgraded',
    display: <ArrowUp className="w-6 md:w-12 h-auto" />,
    label: 'Shop Tier Upgraded',
  },
  gainsMana: {
    logic: (pet) => pet.abilityTrigger === 'Gains Mana',
    display: (
      <RequirementImage
        src={IMAGE_SRCS.mana}
        alt="Gains Mana"
        baseSize={32}
      />
    ),
    label: 'Gains Mana',
  },
  emptyFrontSpace: {
    logic: (pet) => pet.abilityTrigger === 'Empty Front Space',
    display: <Redo className="w-6 md:w-12 h-auto" />,
    label: 'Empty Front Space',
  },
} as const;

export const SPECIFIC_REQUIREMENT_LIST: Requirement[] = [
  REQUIREMENT_MAP.tier1,
  REQUIREMENT_MAP.tier2,
  REQUIREMENT_MAP.tier3,
  REQUIREMENT_MAP.tier4,
  REQUIREMENT_MAP.tier5,
  REQUIREMENT_MAP.tier6,
  REQUIREMENT_MAP.healthLow,
  REQUIREMENT_MAP.healthMedium,
  REQUIREMENT_MAP.healthHigh,
  REQUIREMENT_MAP.attackLow,
  REQUIREMENT_MAP.attackMedium,
  REQUIREMENT_MAP.attackHigh,
] as const;
export const GENERIC_REQUIREMENT_LIST: Requirement[] = [
  REQUIREMENT_MAP.turtlePack,
  REQUIREMENT_MAP.puppyPack,
  REQUIREMENT_MAP.starPack,
  REQUIREMENT_MAP.goldenPack,
  REQUIREMENT_MAP.unicornPack,
  REQUIREMENT_MAP.customPack,
  REQUIREMENT_MAP.noAbility,
  REQUIREMENT_MAP.buy,
  REQUIREMENT_MAP.buyFriend,
  REQUIREMENT_MAP.buyFood,
  REQUIREMENT_MAP.sell,
  REQUIREMENT_MAP.hurt,
  REQUIREMENT_MAP.faint,
  REQUIREMENT_MAP.levelUp,
  REQUIREMENT_MAP.friendSummoned,
  REQUIREMENT_MAP.summoned,
  REQUIREMENT_MAP.startOfBattle,
  REQUIREMENT_MAP.startOfTurn,
  REQUIREMENT_MAP.endTurn,
  REQUIREMENT_MAP.knockOut,
  REQUIREMENT_MAP.beforeAttack,
  REQUIREMENT_MAP.afterAttack,
  REQUIREMENT_MAP.eatsFood,
  REQUIREMENT_MAP.friendlyEatsFood,
  REQUIREMENT_MAP.friendlyGained,
  REQUIREMENT_MAP.friendlyAttacked,
  REQUIREMENT_MAP.friendlyLevelUp,
  REQUIREMENT_MAP.friendAhead,
  REQUIREMENT_MAP.friendLevelUp,
  REQUIREMENT_MAP.friendHurt,
  REQUIREMENT_MAP.friendFaints,
  REQUIREMENT_MAP.friendSold,
  REQUIREMENT_MAP.friendJumped,
  REQUIREMENT_MAP.roll,
  REQUIREMENT_MAP.shopTierUpgraded,
  REQUIREMENT_MAP.gainsMana,
  REQUIREMENT_MAP.emptyFrontSpace,
] as const;
