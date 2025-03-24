import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { IMAGE_SRCS, IMAGE_SRCS_PACK_MAP, IMAGE_SRCS_TIER_MAP, Pet } from '@/db';
import Image from 'next/image';

type PetCardProps = {
  pet: Pet;
};

export function PetCard({ pet }: PetCardProps) {
  return (
    <Card className="p-4 flex flex-row w-full gap-2">
      <div className="flex-1 flex flex-col justify-center items-center gap-2">
        <div className="relative flex justify-center h-[64px] w-[64px] mt-2">
          <Image
            src={pet.imageSrc || 'https://superautopets.wiki.gg/images/0/0b/Rock.png'}
            alt={pet.name}
            fill
            sizes="64px"
            className="object-contain"
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
              <p className="w-auto font-extrabold text-2xl -mr-1 font-lapsus leading-none text-white [-webkit-text-stroke:1px_black]">
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
              <p className="w-auto font-extrabold text-2xl font-lapsus leading-none text-white [-webkit-text-stroke:1px_black]">
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
          <Image
            src={IMAGE_SRCS_TIER_MAP[pet.tier]}
            alt={`Tier ${pet.tier}`}
            width={16}
            height={16}
          />
        </div>
        <Separator />
        <p className={`text-sm ${pet.abilityTrigger ? '' : 'italic'}`}>
          {pet.abilityTrigger || 'No Trigger'}
        </p>
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
