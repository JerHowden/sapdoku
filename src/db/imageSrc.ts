import { Pack } from './types';

export const IMAGE_SRCS = {
  // Tiers
  tier_1: 'https://superautopets.wiki.gg/images/6/66/Tier_1_Icon.png',
  tier_2: 'https://superautopets.wiki.gg/images/e/e9/Tier_2_Icon.png',
  tier_3: 'https://superautopets.wiki.gg/images/4/42/Tier_3_Icon.png',
  tier_4: 'https://superautopets.wiki.gg/images/a/ab/Tier_4_Icon.png',
  tier_5: 'https://superautopets.wiki.gg/images/e/e0/Tier_5_Icon.png',
  tier_6: 'https://superautopets.wiki.gg/images/9/91/Tier_6_Icon.png',
  // Packs
  turtle_pack: 'https://superautopets.wiki.gg/images/e/e9/Turtle.png',
  puppy_pack: 'https://superautopets.wiki.gg/images/0/05/Puppy.png',
  star_pack: 'https://superautopets.wiki.gg/images/5/52/Starfish.png',
  golden_pack: 'https://superautopets.wiki.gg/images/a/a2/Golden_Retriever.png',
  unicorn_pack: 'https://superautopets.wiki.gg/images/7/7e/Unicorn.png',
  custom_pack: 'https://superautopets.wiki.gg/images/1/1c/Custom_Packs_Icon.png',
  // Stats
  attack: 'https://superautopets.wiki.gg/images/a/aa/Attack_Icon.png',
  health: 'https://superautopets.wiki.gg/images/4/44/Health_Icon.png',
  experience: 'https://superautopets.wiki.gg/images/0/0f/Experience_Icon.png',
  trophy: 'https://superautopets.wiki.gg/images/c/cb/TrophyHat.png',
  gold: 'https://superautopets.wiki.gg/images/1/10/Gold.png',
  mana: 'https://superautopets.wiki.gg/images/8/80/Mana_Potion.png',
  trumpet: 'https://superautopets.wiki.gg/images/6/62/Trumpet.png',
  damage: 'https://superautopets.wiki.gg/images/4/42/Damage_Icon.png',
  // Food, Perks, and Ailments
  honey: 'https://superautopets.wiki.gg/images/c/c6/Honey.png',
  garlic: 'https://superautopets.wiki.gg/images/c/cc/Garlic.png',
  apple: 'https://superautopets.wiki.gg/images/7/7d/Apple.png',
  fairyDust: 'https://superautopets.wiki.gg/images/f/fc/Fairy_Dust.png',
  melon: 'https://superautopets.wiki.gg/images/1/19/Melon.png',
  weak: 'https://superautopets.wiki.gg/images/e/e9/Weak.png',
  lovePotion: 'https://superautopets.wiki.gg/images/3/3b/Love_Potion.png',
  chocolate: 'https://superautopets.wiki.gg/images/d/df/Chocolate.png',
  grapes: 'https://superautopets.wiki.gg/images/3/39/Grapes.png',
  strawberry: 'https://superautopets.wiki.gg/images/6/6d/Strawberry.png',
  pill: 'https://superautopets.wiki.gg/images/2/2b/Sleeping_Pill.png',
  carrot: 'https://superautopets.wiki.gg/images/c/c3/Carrot.png',
  tomato: 'https://superautopets.wiki.gg/images/9/9d/Tomato.png',
  pancakes: 'https://superautopets.wiki.gg/images/6/6b/Pancakes.png',
  can: 'https://superautopets.wiki.gg/images/c/c3/Canned_Food.png',
  // Toys
  tennisBall: 'https://superautopets.wiki.gg/images/2/23/Tennis_Ball.png',
  // Reactions
  fishPog: 'https://superautopets.wiki.gg/images/e/e8/FishPog.png',
  monkeyThumbsUp: 'https://superautopets.wiki.gg/images/4/4e/MonkeyThumbsUp.png',
  blowfishBible: 'https://superautopets.wiki.gg/images/9/9b/BlowfishBible.png',
  // Ribbons
  ribbon: 'https://superautopets.wiki.gg/images/8/8c/Ribbon.png',
  hardRibbon: 'https://superautopets.wiki.gg/images/2/27/Hard_Ribbon.png',
} as const;

export const IMAGE_SRCS_TIER_MAP = {
  1: IMAGE_SRCS.tier_1,
  2: IMAGE_SRCS.tier_2,
  3: IMAGE_SRCS.tier_3,
  4: IMAGE_SRCS.tier_4,
  5: IMAGE_SRCS.tier_5,
  6: IMAGE_SRCS.tier_6,
} as const;

export const IMAGE_SRCS_PACK_MAP: Record<Pack, string> = {
  'Turtle Pack': IMAGE_SRCS.turtle_pack,
  'Puppy Pack': IMAGE_SRCS.puppy_pack,
  'Star Pack': IMAGE_SRCS.star_pack,
  'Golden Pack': IMAGE_SRCS.golden_pack,
  'Unicorn Pack': IMAGE_SRCS.unicorn_pack,
  'Custom Pack': IMAGE_SRCS.custom_pack,
};
