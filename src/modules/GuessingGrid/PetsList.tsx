import { Card } from '@/components/ui/card';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Pet } from '@/db';
import memoize from 'memoize-one';
import Image from 'next/image';
import { CSSProperties, memo } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List, areEqual } from 'react-window';

type PetsListProps = {
  pets: Pet[];
  choosePet: (pet: Pet) => void;
};

type PetSelectButtonProps = {
  data: PetsListProps;
  index: number;
  style: CSSProperties;
};

const PetSelectButton = memo(function PetSelectButton({
  data,
  index,
  style,
}: PetSelectButtonProps) {
  const { pets, choosePet } = data;
  const pet = pets[index];
  return (
    <ToggleGroupItem
      key={pet.name}
      value={pet.name}
      size="auto"
      onClick={() => choosePet(pet)}
      className="py-3 px-6 w-full justify-start data-[state=on]:text-primary"
      style={style}
    >
      <div className="flex flex-row items-center gap-6">
        <div
          className={`
            relative
            h-[32px] 
            sm:h-[48px] 
            md:h-[80px]
            w-[32px] 
            sm:w-[48px] 
            md:w-[80px]
          `}
        >
          <Image
            src={pet.imageSrc || 'https://superautopets.wiki.gg/images/0/0b/Rock.png'}
            alt={pet.name}
            fill
            sizes="(max-width: 640px) 32px, (max-width: 768px) 48px, 80px"
            className="object-contain"
          />
        </div>
        <span className="text-sm sm:text-base md:text-lg">{pet.name}</span>
      </div>
    </ToggleGroupItem>
  );
},
areEqual);

const createPetData = memoize((pets, choosePet) => ({
  pets,
  choosePet,
}));

export function PetsList({ pets, choosePet }: PetsListProps) {
  const petData = createPetData(pets, choosePet);

  return (
    <Card className="rounded-md">
      <ToggleGroup
        type="single"
        className="h-[250px] flex sm:hidden flex-col"
      >
        <AutoSizer>
          {({ width, height }) => (
            <List
              height={height}
              itemCount={pets.length}
              itemData={petData}
              itemSize={56}
              width={width}
              style={{
                left: -width / 2,
                top: -height / 2,
                scrollbarColor: 'hsl(var(--border)) transparent',
              }}
            >
              {PetSelectButton}
            </List>
          )}
        </AutoSizer>
      </ToggleGroup>
      <ToggleGroup
        type="single"
        className="h-[350px] hidden sm:flex md:hidden flex-col"
      >
        <AutoSizer>
          {({ width, height }) => (
            <List
              height={height}
              itemCount={pets.length}
              itemData={petData}
              itemSize={72}
              width={width}
              style={{
                left: -width / 2,
                top: -height / 2,
                scrollbarColor: 'hsl(var(--border)) transparent',
              }}
            >
              {PetSelectButton}
            </List>
          )}
        </AutoSizer>
      </ToggleGroup>
      <ToggleGroup
        type="single"
        className="h-[500px] hidden md:flex flex-col"
      >
        <AutoSizer>
          {({ width, height }) => (
            <List
              height={height}
              itemCount={pets.length}
              itemData={petData}
              itemSize={104}
              width={width}
              style={{
                left: -width / 2,
                top: -height / 2,
                scrollbarColor: 'hsl(var(--border)) transparent',
              }}
            >
              {PetSelectButton}
            </List>
          )}
        </AutoSizer>
      </ToggleGroup>
    </Card>
  );
}
