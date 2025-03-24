import { Pet } from '@/db';
import { PetCard } from './PetCard';

type PetsCardsProps = {
  filteredPets: Pet[];
};

export default function PetsCards({ filteredPets }: PetsCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredPets.map((pet) => (
        <PetCard
          key={pet.name}
          pet={pet}
        />
      ))}
    </div>
  );
}
