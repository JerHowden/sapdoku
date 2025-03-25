import {
  EmojiGuessKey,
  RequirementGenericKey,
  RequirementKey,
  RequirementSpecificKey,
} from './types';

export const EMOJIS_GUESSES: Record<EmojiGuessKey, string> = {
  valid: '🟩',
  invalid: '🟥',
  blank: '⬛',
} as const;

export const EMOJIS_SPECIFIC: Record<RequirementSpecificKey, string> = {
  tier1: ' ⚀ ',
  tier2: ' ⚁ ',
  tier3: ' ⚂ ',
  tier4: ' ⚃ ',
  tier5: ' ⚄ ',
  tier6: ' ⚅ ',
  statsHealth: '❤️',
  statsAttack: '🗡️',
  statsEven: '💘',
} as const;

export const EMOJIS_GENERIC: Record<RequirementGenericKey, string> = {
  turtlePack: '🐢',
  puppyPack: '🐶',
  starPack: '⭐',
  goldenPack: '🐕',
  unicornPack: '🦄',
  customPack: '♟️',
  summon: '🍯',
  hurt: '🧄',
  food: '🍎',
  guard: '🛡️',
  perks: '🍈',
  ailment: '💫',
  cycle: '🍙',
  levelUp: '🍫',
  goldAndRoll: '💰',
  toys: '🎾',
  strawberry: '🍓',
  trumpets: '🎺',
  mana: '🥛',
  faint: '💊',
  buffs: '🥕',
  disruption: '🍅',
  startOfBattle: '🥞',
  turn: '🥫',
} as const;

export const EMOJIS: Record<EmojiGuessKey | RequirementKey, string> = {
  ...EMOJIS_GUESSES,
  ...EMOJIS_SPECIFIC,
  ...EMOJIS_GENERIC,
} as const;
