'use client';

import {
  Apple,
  ArrowLeft,
  ArrowRight,
  ArrowRightFromLine,
  ArrowRightToLine,
  BadgePlus,
  Beef,
  Coins,
  DiamondPlus,
  Milk,
  Redo,
  RefreshCw,
  Skull,
  SquarePlus,
  Sword,
  Swords,
  X,
} from 'lucide-react';
import { getImageProps } from 'next/image';
import { IMAGE_SRCS } from './imageSrc';
import { Requirement } from './types';

type RequirementImageProps = {
  src: string;
  alt: string;
  baseSize: number;
};

function RequirementImage({ src, alt = '', baseSize }: RequirementImageProps) {
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
    <picture>
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

export const REQUIREMENT_MAP: Record<string, Requirement> = {
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
  summonedTier: {
    logic: (pet) => pet.tier === 'Summoned',
    display: <SquarePlus className="w-6 md:w-12 h-auto" />,
    label: 'Summoned',
  },
  lowTier: {
    logic: (pet) => typeof pet.tier === 'number' && pet.tier <= 3,
    display: (
      <div className="flex flex-row gap-1 items-center">
        <ArrowLeft className="w-6 md:w-12 h-auto" />
        <RequirementImage
          src={IMAGE_SRCS.tier_3}
          alt="Tier 3"
          baseSize={24}
        />
      </div>
    ),
    label: 'Tiers 1 - 3',
  },
  highTier: {
    logic: (pet) => typeof pet.tier === 'number' && pet.tier >= 4,
    display: (
      <div className="flex flex-row gap-1 items-center">
        <RequirementImage
          src={IMAGE_SRCS.tier_4}
          alt="Tier 4"
          baseSize={24}
        />
        <ArrowRight className="w-6 md:w-12 h-auto" />
      </div>
    ),
    label: 'Tiers 4 - 6',
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
  health5Under: {
    logic: (pet) => pet.health <= 5,
    display: (
      <RequirementImage
        src={IMAGE_SRCS.health}
        alt="Health"
        baseSize={32}
      />
    ),
    label: 'Health 5 or Less',
  },
  health6Over: {
    logic: (pet) => pet.health >= 6,
    display: (
      <RequirementImage
        src={IMAGE_SRCS.health}
        alt="Health"
        baseSize={32}
      />
    ),
    label: 'Health 6 or More',
  },
  attack5Under: {
    logic: (pet) => pet.attack <= 5,
    display: (
      <RequirementImage
        src={IMAGE_SRCS.attack}
        alt="Attack"
        baseSize={32}
      />
    ),
    label: 'Attack 5 or Less',
  },
  attack6Over: {
    logic: (pet) => pet.attack >= 6,
    display: (
      <RequirementImage
        src={IMAGE_SRCS.attack}
        alt="Attack"
        baseSize={32}
      />
    ),
    label: 'Attack 6 or More',
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
    display: <Coins className="w-6 md:w-12 h-auto" />,
    label: 'Buy',
  },
  buyFriend: {
    logic: (pet) => pet.abilityTrigger === 'Buy Friend',
    display: <Coins className="w-6 md:w-12 h-auto" />,
    label: 'Buy Friend',
  },
  buyFood: {
    logic: (pet) => pet.abilityTrigger === 'Buy Food',
    display: <Coins className="w-6 md:w-12 h-auto" />,
    label: 'Buy Food',
  },
  sell: {
    logic: (pet) => ['Sell', 'Hurt & Sell'].includes(pet.abilityTrigger),
    display: <Coins className="w-6 md:w-12 h-auto" />,
    label: 'Sell',
  },
  hurt: {
    logic: (pet) => ['Hurt', 'Hurt & Sell'].includes(pet.abilityTrigger),
    display: <Sword className="w-6 md:w-12 h-auto" />,
    label: 'Hurt',
  },
  faint: {
    logic: (pet) => pet.abilityTrigger === 'Faint',
    display: <Skull className="w-6 md:w-12 h-auto" />,
    label: 'Faint',
  },
  levelUp: {
    logic: (pet) => pet.abilityTrigger === 'Level Up',
    display: <BadgePlus className="w-6 md:w-12 h-auto" />,
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
    display: <Sword className="w-6 md:w-12 h-auto" />,
    label: 'Knock Out',
  },
  beforeAttack: {
    logic: (pet) => pet.abilityTrigger === 'Before Attack',
    display: <Sword className="w-6 md:w-12 h-auto" />,
    label: 'Before Attack',
  },
  afterAttack: {
    logic: (pet) => pet.abilityTrigger === 'After Attack',
    display: <Sword className="w-6 md:w-12 h-auto" />,
    label: 'After Attack',
  },
  eatsFood: {
    logic: (pet) => pet.abilityTrigger === 'Eats Food',
    display: <Apple className="w-6 md:w-12 h-auto" />,
    label: 'Eats Food',
  },
  friendlyEatsFood: {
    logic: (pet) => pet.abilityTrigger === 'Friendly Eats Food',
    display: <Apple className="w-6 md:w-12 h-auto" />,
    label: 'Friendly Eats Food',
  },
  friendlyGained: {
    logic: (pet) =>
      ['Friendly Gained Perk', 'Friendly Gained Ailment'].includes(pet.abilityTrigger),
    display: <Beef className="w-6 md:w-12 h-auto" />,
    label: 'Friendly Gained ...',
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
    display: <BadgePlus className="w-6 md:w-12 h-auto" />,
    label: 'Friend Level-Up',
  },
  friendHurt: {
    logic: (pet) => pet.abilityTrigger === 'Friend Hurt',
    display: <Sword className="w-6 md:w-12 h-auto" />,
    label: 'Friend Hurt',
  },
  roll: {
    logic: (pet) => pet.abilityTrigger === 'Roll',
    display: <RefreshCw className="w-6 md:w-12 h-auto" />,
    label: 'Roll',
  },
  shopTierUpgraded: {
    logic: (pet) => pet.abilityTrigger === 'Shop Tier Upgraded',
    display: <ArrowRight className="w-6 md:w-12 h-auto" />,
    label: 'Shop Tier Upgraded',
  },
  gainsMana: {
    logic: (pet) => pet.abilityTrigger === 'Gains Mana',
    display: <Milk className="w-6 md:w-12 h-auto" />,
    label: 'Gains Mana',
  },
} as const;

export const REQUIREMENT_LIST_TIERS: Requirement[] = [
  REQUIREMENT_MAP.tier1,
  REQUIREMENT_MAP.tier2,
  REQUIREMENT_MAP.tier3,
  REQUIREMENT_MAP.tier4,
  REQUIREMENT_MAP.tier5,
  REQUIREMENT_MAP.tier6,
  REQUIREMENT_MAP.summonedTier,
  REQUIREMENT_MAP.lowTier,
  REQUIREMENT_MAP.highTier,
] as const;
export const REQUIREMENT_LIST_PACKS: Requirement[] = [
  REQUIREMENT_MAP.turtlePack,
  REQUIREMENT_MAP.puppyPack,
  REQUIREMENT_MAP.starPack,
  REQUIREMENT_MAP.goldenPack,
  REQUIREMENT_MAP.unicornPack,
  REQUIREMENT_MAP.customPack,
] as const;
export const REQUIREMENT_LIST_STATS: Requirement[] = [
  REQUIREMENT_MAP.health5Under,
  REQUIREMENT_MAP.health6Over,
  REQUIREMENT_MAP.attack5Under,
  REQUIREMENT_MAP.attack6Over,
] as const;
export const REQUIREMENT_LIST_TRIGGERS: Requirement[] = [
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
  REQUIREMENT_MAP.friendAhead,
  REQUIREMENT_MAP.friendLevelUp,
] as const;
