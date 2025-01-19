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
  damage: 'https://superautopets.wiki.gg/images/4/42/Damage_Icon.png',
  // Food, Perks, and Ailments
  apple: 'https://superautopets.wiki.gg/images/7/7d/Apple.png',
  melon: 'https://superautopets.wiki.gg/images/1/19/Melon.png',
  weak: 'https://superautopets.wiki.gg/images/e/e9/Weak.png',
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
