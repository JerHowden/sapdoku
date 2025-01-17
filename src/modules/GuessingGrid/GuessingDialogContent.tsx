import { Button } from '@/components/ui/button';
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Pet, PETS_LIST, Requirement } from '@/db';
import { Fragment, useMemo, useState } from 'react';
import { PetsList } from './PetsList';

type Box = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type GuessingModalProps = {
  box: Box;
  reqs: Requirement[];
  makeGuess: (pet: Pet, box: Box) => void;
};

export function GuessingDialogContent({ box, reqs, makeGuess }: GuessingModalProps) {
  const [searchText, setSearchText] = useState('');
  const [chosenPet, setChosenPet] = useState<Pet>();

  const sortedPets = PETS_LIST.sort((a, b) =>
    a.name === '???' ? -1 : a.name.localeCompare(b.name)
  );
  const searchedPets = useMemo(
    () =>
      sortedPets.filter((pet) =>
        pet.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
      ),
    [sortedPets, searchText]
  );

  function choosePet(pet: Pet) {
    if (pet.name === chosenPet?.name) {
      setChosenPet(undefined);
    } else {
      setChosenPet(pet);
    }
  }

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader className="items-center">
        <DialogTitle>Choose Pet</DialogTitle>
        <DialogDescription className="flex flex-row gap-2 font-semibold">
          {reqs.map((req, index) => {
            if (!index) {
              return <span key={req.label}>{req.label}</span>;
            } else {
              return (
                <Fragment key={req.label}>
                  <span>|</span>
                  <span>{req.label}</span>
                </Fragment>
              );
            }
          })}
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-6">
        <Input
          id="dialog-search"
          type="text"
          placeholder="Search Pets"
          autoFocus
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <PetsList
          pets={searchedPets}
          choosePet={choosePet}
        />
      </div>
      <DialogFooter className="">
        <DialogClose asChild>
          <Button
            type="submit"
            onClick={() => (chosenPet ? makeGuess(chosenPet, box) : {})}
            disabled={!chosenPet}
          >
            {chosenPet ? `Guess ${chosenPet.name}` : 'Guess'}
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}
