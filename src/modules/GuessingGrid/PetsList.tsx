import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Pet } from '@/db';
import Image from 'next/image';

type PetsListProps = {
  pets: Pet[];
  choosePet: (pet: Pet) => void;
};

export function PetsList({ pets, choosePet }: PetsListProps) {
  return (
    <Card className="rounded-md">
      <ScrollArea className="h-[250px] sm:h-[350px] md:h-[500px]">
        <ToggleGroup
          type="single"
          className="flex-col gap-2 p-6"
        >
          {pets.map((pet) => (
            <ToggleGroupItem
              key={pet.name}
              value={pet.name}
              size="auto"
              onClick={() => choosePet(pet)}
              className="py-3 px-6 w-full justify-start data-[state=on]:text-primary"
            >
              <div className="flex flex-row items-center gap-6 text-sm sm:text-base md:text-lg">
                <Image
                  src={pet.imageSrc}
                  alt={pet.name}
                  width={80}
                  height={80}
                  className="w-[32px] sm:w-[48px] md:w-[80px]"
                />
                {pet.name}
              </div>
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </ScrollArea>
    </Card>
  );
}
