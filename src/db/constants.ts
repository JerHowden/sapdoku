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
  'After Attack',
  'Anyone Hurt',
  'Before Attack',
  'Before Friend Attacks',
  'Bee Summoned',
  'Buy',
  'Buy & Sell',
  'Eats Apple',
  'Eats Food',
  'Eats Three Food',
  'Eats Two Food',
  'Empty Front Space',
  'End Turn',
  'Enemy Faints',
  'Enemy Gained Ailment',
  'Enemy Hurt',
  'Enemy Hurt or Pushed',
  'Enemy Summoned',
  'Enemy Summoned or Pushed',
  'Faint',
  'Faint & Sell',
  'Five Friendly Attacks',
  'Food Bought',
  'Four Friends Hurt',
  'Friend Ahead Attacks',
  'Friend Ahead Faints',
  'Friend Ahead Hurt',
  'Friend Ate Corncob',
  'Friend Attacks',
  'Friend Bought',
  'Friend Faints',
  'Friend Gained Ailment',
  'Friend Hurt',
  'Friend Jumped',
  'Friend Level-Up',
  'Friend Lost Perk',
  'Friend Sold',
  'Friend Summoned',
  'Friendly Ate Food',
  'Friendly Attacked',
  'Friendly Eats Food',
  'Friendly Gained Ailment',
  'Friendly Gained Perk',
  'Friendly Gained Strawberry',
  'Friendly Level-Up',
  'Friendly Toy Broke',
  'Gain Perk',
  'Gain Perk or Ailment',
  'Gains Mana',
  'Hurt',
  'Hurt & Sell',
  'Knock Out',
  'Level 3 Friend Sold',
  'Level-Up',
  'Pet Flung',
  'Roll',
  'Roll & Sell',
  'Roll 4 Times',
  'Sell',
  'Sell Friend',
  'Shop Tier Upgraded',
  'Spend 7 Gold',
  'Start of Battle',
  'Start of Turn',
  'Summoned',
  'Three Friends Faint',
  'Three Friends Sold',
  'Two Friends Faint',
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
  'statsHealth',
  'statsAttack',
  'statsEven',
] as const;

/*
  --- UPDATED REQS ---
  Summon: -- 54
    - Tag: Summon
    - AT: Friend Summoned
    - AT: Summoned
    - AT: Bee Summoned
  Hurt: -- 33
    - Tag: Hurt
    - AT: Hurt
    - AT: Hurt & Sell
    - AT: Friend Ahead Hurt
    - AT: Friend Hurt
    - AT: Four Friends Hurt
    - AT: Anyone Hurt
  Food: -- 31
    - Tag: Food
    - AT: Eats Food
    - AT: Eats Two Food
    - AT: Eats Three Food
    - AT: Eats Apple
    - AT: Food Bought
    - AT: Friendly Eats Food
    - AT: Friendly Ate Food
    - AT: Friend Ate Corncob
  Guard: -- 24
    - Tag: Guard
    - AT: Friend Ahead Attacks
    - AT: Friend Ahead Hurt
    - AT: Friend Ahead Faints
    - AT: Friend Jumped
    - AT: Empty Front Space
  Perks: -- 32
    - Tag: Perks
    - AT: Gain Perk
    - AT: Gain Perk or Ailment
    - AT: Friend Lost Perk
    - AT: Friendly Gained Perk
  Ailment: -- 26
    - Tag: Ailment
    - AT: Gain Perk or Ailment
    - AT: Friendly Gained Ailment
    - AT: Friend Gained Ailment
    - AT: Enemy Gained Ailment
  Cycle: -- 68
    - Tag: Cycle
    - AT: Buy
    - AT: Buy & Sell
    - AT: Sell
    - AT: Hurt & Sell
    - AT: Faint & Sell
    - AT: Roll & Sell
    - AT: Sell Friend
  Level-Up: -- 33
    - Tag: Level-Up
    - AT: Level-Up
    - AT: Friendly Level-Up
    - AT: Friend Level-Up
  GoldAndRoll: -- 40
    - Tag: Gold
    - Tag: Rolling
    - AT: Food Bought
    - AT: Spend 7 Gold
    - AT: Roll
    - AT: Roll 4 Times
    - AT: Roll & Sell
  Toys: -- 21
    - Tag: Toys
    - AT: Friendly Toy Broke
  Strawberry: -- 18
    - Tag: Strawberry
    - AT: Friendly Gained Strawberry
  Trumpets: -- 25
    - Tag: Trumpets
  Mana: -- 26
    - Tag: Mana
    - AT: Gains Mana
  Faint: -- 104
    - Tag: Faint
    - AT: Faint
    - AT: Faint & Sell
  Buffs: -- 36
    - Tag: Buffs
  Disruption: -- 47
    - Tag: Disruption
    - AT: Enemy Summoned or Pushed
    - AT: Enemy Hurt or Pushed
  Start of Battle: -- 84
    - AT: Start of Battle
  Turn: -- 67
    - AT: Start of Turn
    - AT: End Turn
    - AT: Shop Tier Upgraded
*/

export const REQUIREMENT_GENERIC_KEYS = [
  'turtlePack',
  'puppyPack',
  'starPack',
  'goldenPack',
  'unicornPack',
  'customPack',
  'summon',
  'hurt',
  'food',
  'guard',
  'perks',
  'ailment',
  'cycle',
  'levelUp',
  'goldAndRoll',
  'toys',
  'strawberry',
  'trumpets',
  'mana',
  'faint',
  'buffs',
  'disruption',
  'startOfBattle',
  'turn',
] as const;

export const EMOJI_SHARE_KEYS = ['valid', 'invalid', 'blank', 'sloth', 'calendar'] as const;
