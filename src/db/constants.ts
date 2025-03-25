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
  'Buy & Sell', // natrk
  'Sell',
  'Hurt',
  'Hurt & Sell',
  'Faint',
  'Faint & Sell',
  'Level-Up',
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

export const EMOJI_GUESS_KEYS = ['valid', 'invalid', 'blank'] as const;
