import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Pet } from '@/db';
import Image from 'next/image';

type PetsTableProps = {
  filteredPets: Pet[];
};

export default function PetsTable({ filteredPets }: PetsTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Tier</TableHead>
          <TableHead>Pack</TableHead>
          <TableHead className="text-right">Attack</TableHead>
          <TableHead className="text-right">Health</TableHead>
          <TableHead>Ability Trigger</TableHead>
          <TableHead>Tags</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredPets.map((pet) => (
          <TableRow key={pet.name}>
            <TableCell>
              <Image
                src={pet.imageSrc || 'https://superautopets.wiki.gg/images/0/0b/Rock.png'}
                alt={pet.name}
                width={32}
                height={32}
              />
            </TableCell>
            <TableCell>{pet.name}</TableCell>
            <TableCell>{pet.tier}</TableCell>
            <TableCell>{pet.pack.join(', ')}</TableCell>
            <TableCell className="text-right">{pet.attack}</TableCell>
            <TableCell className="text-right">{pet.health}</TableCell>
            <TableCell>{pet.abilityTrigger}</TableCell>
            <TableCell>{pet.tags.join(', ')}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
