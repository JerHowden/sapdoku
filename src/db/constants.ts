export const PACKS_LIST = [
  'Turtle Pack',
  'Puppy Pack',
  'Star Pack',
  'Golden Pack',
  'Unicorn Pack',
  'Custom Pack',
] as const;

export const TIERS_LIST = [1, 2, 3, 4, 5, 6] as const;

export const ABILITY_TRIGGERS_LIST = [
  '',
  'Buy',
  'Buy Friend',
  'Buy Food',
  'Buy & Sell', // natrk
  'Sell',
  'Hurt',
  'Hurt & Sell',
  'Faint',
  'Faint & Sell',
  'Level Up',
  'Friend Summoned',
  'Summoned',
  'Start of Battle',
  'Start of Turn',
  'End Turn',
  'Knock Out',
  'Before Attack',
  'Before Friend Attacks', // nrk
  'After Attack',
  'Eats Food',
  'Eats Two Food', // natrk
  'Eats Three Food', // natrk
  'Eats Apple', // natrk
  'Food Bought', // natrk
  'Gain Perk', // nrk
  'Gain Perk or Ailment', // nrk or natrk
  'Friend Lost Perk', // natrk
  'Friendly Eats Food',
  'Friendly Ate Food', // natrk
  'Friend Ate Corncob', // natrk
  'Friendly Gained Perk',
  'Friendly Gained Ailment',
  'Friendly Gained Strawberry', // natrk
  'Friendly Attacked',
  'Five Friendly Attacks', // natrk
  'Friendly Level-Up',
  'Friendly Toy Broke', // nrk
  'Friend Attacks', // natrk
  'Friend Ahead Attacks',
  'Friend Ahead Hurt',
  'Friend Ahead Faints',
  'Friend Bought', // nrk
  'Friend Gained Ailment',
  'Friend Faints',
  'Two Friends Faint', // natrk
  'Three Friends Faint', // natrk
  'Friend Level-Up',
  'Friend Hurt',
  'Four Friends Hurt', // natrk
  'Friend Sold',
  'Three Friends Sold', // natrk
  'Level 3 Friend Sold', // natrk
  'Sell Friend', // natrk
  'Friend Jumped',
  'Spend 7 Gold', // nrk
  'Roll',
  'Roll 4 Times',
  'Roll & Sell', // nrk
  'Shop Tier Upgraded',
  'Gains Mana',
  'Enemy Summoned', // nrk
  'Enemy Summoned or Pushed', // nrk
  'Enemy Hurt', // nrk
  'Enemy Hurt or Pushed', // natrk
  'Enemy Faints', // nrk
  'Empty Front Space',
  'Enemy Gained Ailment', // natrk
  'Anyone Hurt', // nrk
  'Bee Summoned', // natrk
  'Pet Flung', // idek dude
] as const;

export const TAGS_LIST = [
  'Summon',
  'Hurt',
  'Food',
  'Guard',
  'Perks',
  'Ailment',
  'Cycle',
  'Rolling',
  'Level-Up',
  'Gold',
  'Toys',
  'Strawberry',
  'Trumpets',
  'Mana',
  'Faint',
  'Buffs',
  'Disruption',
] as const;

export const REQUIREMENT_SPECIFIC_KEYS = [
  'tier1',
  'tier2',
  'tier3',
  'tier4',
  'tier5',
  'tier6',
  'healthLow',
  'healthMedium',
  'healthHigh',
  'attackLow',
  'attackMedium',
  'attackHigh',
] as const;

export const REQUIREMENT_GENERIC_KEYS = [
  'turtlePack',
  'puppyPack',
  'starPack',
  'goldenPack',
  'unicornPack',
  'customPack',
  'noAbility',
  'buy',
  'buyFriend',
  'buyFood',
  'sell',
  'hurt',
  'faint',
  'levelUp',
  'friendSummoned',
  'summoned',
  'startOfBattle',
  'startOfTurn',
  'endTurn',
  'knockOut',
  'beforeAttack',
  'afterAttack',
  'eatsFood',
  'friendlyEatsFood',
  'friendlyGained',
  'friendlyAttacked',
  'friendlyLevelUp',
  'friendAhead',
  'friendLevelUp',
  'friendHurt',
  'friendFaints',
  'friendSold',
  'friendJumped',
  'roll',
  'shopTierUpgraded',
  'gainsMana',
  'emptyFrontSpace',
] as const;
