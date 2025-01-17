import { Card } from '@/components/ui/card';
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
      width={24}
      height={24}
    />
  );
}

export function PetCard({ pet }: PetCardProps) {
  return (
    <Card className="p-4 flex flex-col justify-between items-center gap-2">
      <div className="w-full flex flex-row flex-nowrap justify-between items-center">
        <PetTier tier={pet.tier} />
        <p className="scroll-m-20 text-lg font-semibold tracking-tight">{pet.name}</p>
        <div className="flex flex-row gap-2 items-center">
          {pet.pack.map((pack) => (
            <Image
              key={pack}
              src={IMAGE_SRCS_PACK_MAP[pack]}
              alt={pack}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center h-auto w-auto mt-2">
        <Image
          src={pet.imageSrc ?? 'https://superautopets.wiki.gg/images/0/0b/Rock.png'}
          alt={pet.name}
          width={64}
          height={64}
        />
      </div>
      <div className="flex flex-row gap-1">
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
      <p className="text-sm font-semibold">{pet.abilityTrigger}</p>
    </Card>
  );
}
