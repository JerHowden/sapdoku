import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Requirement } from '@/db';

function HoverDetails(req: Requirement) {
  switch (req.id) {
    case 'tier1':
    case 'tier2':
    case 'tier3':
    case 'tier4':
    case 'tier5':
    case 'tier6':
      return (
        <div className="flex flex-col gap-1">
          <h4 className="text-sm">Tier Category</h4>
          <p className="text-xs">
            These pets are from <strong>{req.label}</strong>.
          </p>
        </div>
      );
    case 'statsAttack':
      return (
        <div className="flex flex-col gap-1">
          <h4 className="text-sm">Stats Category</h4>
          <p className="text-xs">
            These pets have more <strong>attack</strong> than health.
          </p>
        </div>
      );
    case 'statsHealth':
      return (
        <div className="flex flex-col gap-1">
          <h4 className="text-sm">Stats Category</h4>
          <p className="text-xs">
            These pets have more <strong>health</strong> than attack.
          </p>
        </div>
      );
    case 'statsEven':
      return (
        <div className="flex flex-col gap-1">
          <h4 className="text-sm">Stats Category</h4>
          <p className="text-xs">
            These pets have <strong>equal</strong> attack and health.
          </p>
        </div>
      );
    case 'turtlePack':
    case 'puppyPack':
    case 'starPack':
    case 'goldenPack':
    case 'unicornPack':
    case 'customPack':
      return (
        <div className="flex flex-col gap-1">
          <h4 className="text-sm">Pack Category</h4>
          <p className="text-xs">
            These pets are from the <strong>{req.label}</strong>.
          </p>
        </div>
      );
    case 'ailment':
      return (
        <div className="flex flex-col gap-1">
          <h4 className="text-sm">Tag Category</h4>
          <p className="text-xs">
            These pets have the <strong>Ailment</strong> tag or include the following ability
            triggers:
          </p>
          <ul className="text-xs  list-disc list-inside">
            <li>Gain Perk or Ailment</li>
            <li>Friendly Gained Ailment</li>
            <li>Friend Gained Ailment</li>
            <li>Enemy Gained Ailment</li>
          </ul>
        </div>
      );
    case 'buffs':
      return (
        <div className="flex flex-col gap-1">
          <h4 className="text-sm">Tag Category</h4>
          <p className="text-xs">
            These pets have the <strong>Buffs</strong> tag.
          </p>
        </div>
      );
    case 'cycle':
      return (
        <div className="flex flex-col gap-1">
          <h4 className="text-sm">Tag Category</h4>
          <p className="text-xs">
            These pets have the <strong>Cycle</strong> tag or include the following ability
            triggers:
          </p>
          <ul className="text-xs  list-disc list-inside">
            <li>Buy</li>
            <li>Buy & Sell</li>
            <li>Sell</li>
            <li>Hurt & Sell</li>
            <li>Faint & Sell</li>
            <li>Roll & Sell</li>
            <li>Sell Friend</li>
          </ul>
        </div>
      );
    case 'disruption':
      return (
        <div className="flex flex-col gap-1">
          <h4 className="text-sm">Tag Category</h4>
          <p className="text-xs">
            These pets have the <strong>Disruption</strong> tag or include the following ability
            triggers:
          </p>
          <ul className="text-xs  list-disc list-inside">
            <li>Enemy Summoned or Pushed</li>
            <li>Enemy Hurt or Pushed</li>
          </ul>
        </div>
      );
    case 'faint':
      return (
        <div className="flex flex-col gap-1">
          <h4 className="text-sm">Tag Category</h4>
          <p className="text-xs">
            These pets have the <strong>Faint</strong> tag or include the following ability
            triggers:
          </p>
          <ul className="text-xs  list-disc list-inside">
            <li>Faint</li>
            <li>Faint & Sell</li>
          </ul>
        </div>
      );
    case 'food':
      return (
        <div className="flex flex-col gap-1">
          <h4 className="text-sm">Tag Category</h4>
          <p className="text-xs">
            These pets have the <strong>Food</strong> tag or include the following ability triggers:
          </p>
          <ul className="text-xs  list-disc list-inside">
            <li>Eats Food</li>
            <li>Eats Two Food</li>
            <li>Eats Three Food</li>
            <li>Eats Apple</li>
            <li>Food Bought</li>
            <li>Friendly Eats Food</li>
            <li>Friendly Ate Food</li>
            <li>Friend Ate Corncob</li>
          </ul>
        </div>
      );
    case 'goldAndRoll':
      return (
        <div className="flex flex-col gap-1">
          <h4 className="text-sm">Tag Category</h4>
          <p className="text-xs">
            These pets have the <strong>Gold</strong> tag, the <strong>Rolling</strong> tag, or
            include the following ability triggers:
          </p>
          <ul className="text-xs  list-disc list-inside">
            <li>Food Bought</li>
            <li>Spend 7 Gold</li>
            <li>Roll</li>
            <li>Roll 4 Times</li>
            <li>Roll & Sell</li>
          </ul>
        </div>
      );
    case 'guard':
      return (
        <div className="flex flex-col gap-1">
          <h4 className="text-sm">Tag Category</h4>
          <p className="text-xs">
            These pets have the <strong>Guard</strong> tag or include the following ability
            triggers:
          </p>
          <ul className="text-xs  list-disc list-inside">
            <li>Friend Ahead Attacks</li>
            <li>Friend Ahead Hurt</li>
            <li>Friend Ahead Faints</li>
            <li>Friend Jumped</li>
            <li>Empty Front Space</li>
          </ul>
        </div>
      );
    case 'hurt':
      return (
        <div className="flex flex-col gap-1">
          <h4 className="text-sm">Tag Category</h4>
          <p className="text-xs">
            These pets have the <strong>Hurt</strong> tag or include the following ability triggers:
          </p>
          <ul className="text-xs  list-disc list-inside">
            <li>Hurt</li>
            <li>Hurt & Sell</li>
            <li>Friend Ahead Hurt</li>
            <li>Friend Hurt</li>
            <li>Four Friends Hurt</li>
            <li>Anyone Hurt</li>
          </ul>
        </div>
      );
    case 'levelUp':
      return (
        <div className="flex flex-col gap-1">
          <h4 className="text-sm">Tag Category</h4>
          <p className="text-xs">
            These pets have the <strong>Level-Up</strong> tag or include the following ability
            triggers:
          </p>
          <ul className="text-xs  list-disc list-inside ">
            <li>Level-Up</li>
            <li>Friendly Level-Up</li>
            <li>Friend Level-Up</li>
          </ul>
        </div>
      );
    case 'mana':
      return (
        <div className="flex flex-col gap-1">
          <h4 className="text-sm">Tag Category</h4>
          <p className="text-xs">
            These pets have the <strong>Mana</strong> tag or include the following ability trigger:
          </p>
          <ul className="text-xs  list-disc list-inside">
            <li>Gains Mana</li>
          </ul>
        </div>
      );
    case 'perks':
      return (
        <div className="flex flex-col gap-1">
          <h4 className="text-sm">Tag Category</h4>
          <p className="text-xs">
            These pets have the <strong>Perks</strong> tag or include the following ability
            triggers:
          </p>
          <ul className="text-xs  list-disc list-inside">
            <li>Gain Perk</li>
            <li>Gain Perk or Ailment</li>
            <li>Friend Lost Perk</li>
            <li>Friendly Gained Perk</li>
          </ul>
        </div>
      );
    case 'strawberry':
      return (
        <div className="flex flex-col gap-1">
          <h4 className="text-sm">Tag Category</h4>
          <p className="text-xs">
            These pets have the <strong>Strawberry</strong> tag or include the following ability
            trigger:
          </p>
          <ul className="text-xs  list-disc list-inside">
            <li>Friendly Gained Strawberry</li>
          </ul>
        </div>
      );
    case 'summon':
      return (
        <div className="flex flex-col gap-1">
          <h4 className="text-sm">Tag Category</h4>
          <p className="text-xs">
            These pets have the <strong>Summon</strong> tag or include the following ability
            triggers:
          </p>
          <ul className="text-xs  list-disc list-inside">
            <li>Friend Summoned</li>
            <li>Summoned</li>
            <li>Bee Summoned</li>
          </ul>
        </div>
      );
    case 'toys':
      return (
        <div className="flex flex-col gap-1">
          <h4 className="text-sm">Tag Category</h4>
          <p className="text-xs">
            These pets have the <strong>Toy</strong> tag or include the following ability trigger:
          </p>
          <ul className="text-xs  list-disc list-inside">
            <li>Friendly Toy Broke</li>
          </ul>
        </div>
      );
    case 'trumpets':
      return (
        <div className="flex flex-col gap-1">
          <h4 className="text-sm">Tag Category</h4>
          <p className="text-xs">
            These pets have the <strong>Trumpets</strong> tag.
          </p>
        </div>
      );
    case 'startOfBattle':
      return (
        <div className="flex flex-col gap-1">
          <h4 className="text-sm">Ability Category</h4>
          <p className="text-xs">
            These pets have the <strong>Start of Battle</strong> ability trigger.
          </p>
        </div>
      );
    case 'turn':
      return (
        <div className="flex flex-col gap-1">
          <h4 className="text-sm">Ability Category</h4>
          <p className="text-xs">These pets have one of the following ability triggers:</p>
          <ul className="text-xs  list-disc list-inside">
            <li>Start of Turn</li>
            <li>End Turn</li>
            <li>Shop Tier Upgraded</li>
          </ul>
        </div>
      );
    default:
      return <div>! Missing Hover Details !</div>;
  }
}

export function Category(req: Requirement) {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <div className="flex flex-col w-full items-center gap-2 p-2">
          {req.display}
          <p className="text-xs sm:text-sm md:text-base font-medium text-center">{req.label}</p>
        </div>
      </HoverCardTrigger>
      <HoverCardContent>
        <HoverDetails {...req} />
      </HoverCardContent>
    </HoverCard>
  );
}
