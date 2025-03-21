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
import { ClassicRun, Pet, PETS_LIST, Requirement } from '@/db';
import { Fragment, useMemo, useState } from 'react';
import { PetsList } from './PetsList';

type Box = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type GuessingModalProps = {
  run: ClassicRun;
  box: Box;
  reqs: Requirement[];
  makeGuess: (pet: Pet, box: Box) => void;
};

export function GuessingDialogContent({ run, box, reqs, makeGuess }: GuessingModalProps) {
  const [searchText, setSearchText] = useState('');
  const [chosenPet, setChosenPet] = useState<Pet>();

  const guessed = useMemo(
    () =>
      Object.values(run.guesses)
        .filter((guess) => !!guess)
        .map((pet) => pet.name),
    [run.guesses]
  );

  const sortedPets = useMemo(
    () =>
      PETS_LIST.filter((pet) => !guessed.includes(pet.name)).sort((a, b) =>
        a.name.localeCompare(b.name)
      ),
    [guessed]
  );

  const searchedPets = useMemo(() => {
    if (!searchText) return sortedPets;

    const lowerSearchText = searchText.toLowerCase();

    // Binary search for the first pet that starts with the search text
    const findStartIndex = () => {
      let low = 0;
      let high = sortedPets.length - 1;

      while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const midName = sortedPets[mid].name.toLowerCase();

        if (midName.startsWith(lowerSearchText)) {
          if (mid === 0 || !sortedPets[mid - 1].name.toLowerCase().startsWith(lowerSearchText)) {
            return mid;
          }
          high = mid - 1;
        } else if (midName < lowerSearchText) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }

      return -1;
    };

    // Binary search for the last pet that starts with the search text
    const findEndIndex = (startIndex: number) => {
      let low = startIndex;
      let high = sortedPets.length - 1;

      while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const midName = sortedPets[mid].name.toLowerCase();

        if (midName.startsWith(lowerSearchText)) {
          if (
            mid === sortedPets.length - 1 ||
            !sortedPets[mid + 1].name.toLowerCase().startsWith(lowerSearchText)
          ) {
            return mid;
          }
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }

      return startIndex;
    };

    const startIndex = findStartIndex();
    if (startIndex === -1) {
      // No pets start with the search text, fall back to includes
      return sortedPets.filter((pet) => pet.name.toLowerCase().includes(lowerSearchText));
    }

    const endIndex = findEndIndex(startIndex);

    // Slice out the pets that start with the search text
    const startsWithPets = sortedPets.slice(startIndex, endIndex + 1);

    // Filter the remaining pets for those that include the search text
    const includesPets = sortedPets.filter((pet, index) =>
      index < startIndex || index > endIndex
        ? pet.name.toLowerCase().includes(lowerSearchText)
        : false
    );

    return [...startsWithPets, ...includesPets];
  }, [sortedPets, searchText]);

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
