import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  IMAGE_SRCS,
  IMAGE_SRCS_PACK_MAP,
  IMAGE_SRCS_TIER_MAP,
  Pet,
  REQUIREMENT_MAP,
  Tier,
} from '@/db';
import Image from 'next/image';

type PetCardProps = {
  pet: Pet;
};

function PetTier({ tier }: { tier: Tier }) {
  if (tier === 'Token') {
    return REQUIREMENT_MAP.tierToken.display;
  }
  return (
    <Image
      src={IMAGE_SRCS_TIER_MAP[tier]}
      alt={`Tier ${tier}`}
      width={16}
      height={16}
    />
  );
}

export function PetCard({ pet }: PetCardProps) {
  return (
    <Card className="p-4 flex flex-row w-full gap-2">
      <div className="flex-1 flex flex-col justify-center gap-2">
        <div className="flex justify-center h-auto w-auto mt-2">
          <Image
            src={pet.imageSrc ?? 'https://superautopets.wiki.gg/images/0/0b/Rock.png'}
            alt={pet.name}
            width={64}
            height={64}
          />
        </div>
        <div className="flex flex-row justify-center gap-1">
          <div className="grid justify-center items-center">
            <Image
              src={IMAGE_SRCS.attack}
              alt="Attack"
              width={32}
              height={32}
              className="[grid-area:1/1]"
            />
            <div className="[grid-area:1/1] flex justify-center">
              <p className="w-auto font-extrabold text-2xl -mt-1 -mr-1 text-white [-webkit-text-stroke:1px_black]">
                {pet.attack}
              </p>
            </div>
          </div>
          <div className="grid justify-center items-center">
            <Image
              src={IMAGE_SRCS.health}
              alt="Health"
              width={32}
              height={32}
              className="[grid-area:1/1]"
            />
            <div className="[grid-area:1/1] flex justify-center">
              <p className="w-auto font-extrabold text-2xl -mt-1 text-white [-webkit-text-stroke:1px_black]">
                {pet.health}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1.618] flex flex-col w-full gap-1 justify-center">
        <p className="text-lg font-semibold tracking-tight">{pet.name}</p>
        <Separator />
        {pet.pack.map((pack) => (
          <div
            key={pack}
            className="flex flex-row justify-between items-center gap-2"
          >
            <p className="text-sm">{pack}</p>
            <div className="flex flex-row gap-2 items-center flex-wrap">
              <Image
                key={pack}
                src={IMAGE_SRCS_PACK_MAP[pack]}
                alt={pack}
                width={16}
                height={16}
              />
            </div>
          </div>
        ))}
        <Separator />
        <div className="flex flex-row justify-between items-center gap-2">
          <p className="text-sm">{typeof pet.tier === 'number' ? `Tier ${pet.tier}` : pet.tier}</p>
          <PetTier tier={pet.tier} />
        </div>
        <Separator />
        <p className="text-sm">{pet.abilityTrigger}</p>
        {pet.tags.length ? <Separator /> : null}
        <div className="flex flex-row items-center flex-wrap gap-1">
          {pet.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
