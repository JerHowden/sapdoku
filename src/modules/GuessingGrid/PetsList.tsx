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
    <ScrollArea className="h-[500px] rounded-md border">
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
            <div className="flex flex-row items-center gap-6">
              <Image
                src={pet.imageSrc}
                alt={pet.name}
                width={80}
                height={80}
              />
              <p className="text-lg">{pet.name}</p>
            </div>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </ScrollArea>
  );
}
