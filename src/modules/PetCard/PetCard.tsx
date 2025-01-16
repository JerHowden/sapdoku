import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Pet } from '@/db';
import Image from 'next/image';

type PetCardProps = {
  pet: Pet;
};
export function PetCard({ pet }: PetCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{pet.name}</CardTitle>
        <CardDescription>{pet.tag.map((tag) => `${tag} `)}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Image
          src={pet.imageSrc ?? 'https://superautopets.wiki.gg/images/0/0b/Rock.png'}
          alt={pet.name}
          width={32}
          height={32}
        />
        <div>
          <p>Pack: {pet.pack.join(', ')}</p>
          <p>Tier: {pet.tier}</p>
          <p>Ability Trigger: {pet.abilityTrigger}</p>
          <p>Health: {pet.health}</p>
          <p>Attack: {pet.attack}</p>
        </div>
      </CardContent>
    </Card>
  );
}
