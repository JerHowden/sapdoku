export type Pack =
  | 'Turtle Pack'
  | 'Puppy Pack'
  | 'Star Pack'
  | 'Golden Pack'
  | 'Unicorn Pack'
  | 'Custom Pack';

export type Tier = 1 | 2 | 3 | 4 | 5 | 6 | 'Summoned';

export type AbilityTrigger =
  | 'Buy'
  | 'Buy Friend'
  | 'Buy Food'
  | 'Sell'
  | 'Hurt'
  | 'Faint'
  | 'Level Up'
  | 'Friend Summoned'
  | 'Summoned'
  | 'Start Of Battle'
  | 'Start Of Turn'
  | 'End Of Turn'
  | 'Knock Out'
  | 'Before Attack'
  | 'After Attack'
  | 'Eats Food'
  | 'Friendly Eats Food'
  | 'Friendly Gained Perk'
  | 'Friendly Gained Ailment'
  | 'Friend Ahead' // attacks, hurt, faints
  | 'Friend Hurt'
  | 'Roll';

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
  health: number;
  attack: number;
  abilityTrigger: AbilityTrigger;
  tag: Tag[];
};
