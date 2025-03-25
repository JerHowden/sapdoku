'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Box, ClassicRun, Combo, Pet, PETS_LIST } from '@/db';
import { useReqsMap } from '@/lib';
import { Columns3, Table2 } from 'lucide-react';
import Image from 'next/image';
import { Fragment, useCallback, useMemo, useState } from 'react';
import { Category } from '../GuessingGrid';
import { PetsCards, PetsTable } from '../PetsDisplay';

type GuessDetailsProps = {
  run: ClassicRun;
  combo: Combo;
};

type PetSquareProps = {
  pet?: Pet;
  valid: boolean | null;
  selected: boolean;
  onSelect: () => void;
};

function PetSquare({ pet, valid, selected, onSelect }: PetSquareProps) {
  return (
    <Button
      className={`
        flex
        flex-col
        w-full
        h-full
        justify-center
        items-center
        gap-2
        p-2
        rounded-sm
        border-4
        ${valid ? 'border-green-500' : valid === false ? 'border-red-500' : 'border-0'}
        ${selected ? 'bg-muted' : ''}
      `}
      onClick={onSelect}
      variant="secondary"
    >
      {pet ? (
        <>
          <div className="relative flex justify-center w-[24px] h-[24px] md:w-[48px] md:h-[48px] mt-2">
            <Image
              src={pet.imageSrc || 'https://superautopets.wiki.gg/images/0/0b/Rock.png'}
              alt={pet.name}
              fill
              sizes="(max-width: 768px) 24px, 48px"
              className="object-contain"
            />
          </div>
          <p className="text-[0.5rem] !leading-tight sm:text-xs md:text-base font-medium text-center whitespace-normal">
            {pet.name}
          </p>
        </>
      ) : (
        ''
      )}
    </Button>
  );
}

export function CompletedGridDetails({ run, combo }: GuessDetailsProps) {
  const reqsMap = useReqsMap(combo);
  const [selectedBox, setSelectedBox] = useState<Box | null>(null);
  const [view, setView] = useState<'cards' | 'table'>('cards');

  const onSelect = useCallback(
    (box: Box) => {
      setSelectedBox(selectedBox === box ? null : box);
    },
    [selectedBox]
  );

  const checkValid = useCallback(
    (box: Box) => {
      const guess = run.guesses[box];
      if (!guess) return null;
      for (let i = 0; i < reqsMap[box].length; i++) {
        if (!reqsMap[box][i].logic(guess)) {
          return false;
        }
      }
      return true;
    },
    [reqsMap, run.guesses]
  );

  const guessDetailPets = useMemo(() => {
    if (!selectedBox) {
      return [];
    }
    const validOptions = PETS_LIST.filter((pet) =>
      reqsMap[selectedBox].every((req) => req.logic(pet))
    );
    if (run.guesses[selectedBox] && checkValid(selectedBox)) {
      return [
        run.guesses[selectedBox],
        ...validOptions.filter((pet) => pet.name !== run.guesses[selectedBox]?.name),
      ];
    } else if (run.guesses[selectedBox] && checkValid(selectedBox) === false) {
      return [run.guesses[selectedBox], ...validOptions];
    }
    return validOptions;
  }, [checkValid, reqsMap, run.guesses, selectedBox]);

  const reqsLabels = useMemo(
    () =>
      selectedBox
        ? reqsMap[selectedBox].map((req, index) => {
            if (!index) {
              return (
                <span
                  key={req.label}
                  className="whitespace-nowrap"
                >
                  {req.label}
                </span>
              );
            } else {
              return (
                <Fragment key={req.label}>
                  <span>|</span>
                  <span className="whitespace-nowrap">{req.label}</span>
                </Fragment>
              );
            }
          })
        : null,
    [reqsMap, selectedBox]
  );

  return (
    <>
      <div className="h-full w-full flex flex-col">
        <div
          className={`
          grid
          grid-cols-4
          grid-rows-4
          gap-1
          aspect-square
        `}
        >
          <div />
          <div className="flex flex-col items-center justify-center">
            <Category {...combo?.columns[0]} />
          </div>
          <div className="flex flex-col items-center justify-center">
            <Category {...combo?.columns[1]} />
          </div>
          <div className="flex flex-col items-center justify-center">
            <Category {...combo?.columns[2]} />
          </div>
          <div className="flex flex-col items-center justify-center">
            <Category {...combo?.rows[0]} />
          </div>
          <PetSquare
            pet={run.guesses[1]}
            selected={selectedBox === 1}
            onSelect={() => onSelect(1)}
            valid={checkValid(1)}
          />
          <PetSquare
            pet={run.guesses[2]}
            selected={selectedBox === 2}
            onSelect={() => onSelect(2)}
            valid={checkValid(2)}
          />
          <PetSquare
            pet={run.guesses[3]}
            selected={selectedBox === 3}
            onSelect={() => onSelect(3)}
            valid={checkValid(3)}
          />
          <div className="flex flex-col items-center justify-center">
            <Category {...combo?.rows[1]} />
          </div>
          <PetSquare
            pet={run.guesses[4]}
            selected={selectedBox === 4}
            onSelect={() => onSelect(4)}
            valid={checkValid(4)}
          />
          <PetSquare
            pet={run.guesses[5]}
            selected={selectedBox === 5}
            onSelect={() => onSelect(5)}
            valid={checkValid(5)}
          />
          <PetSquare
            pet={run.guesses[6]}
            selected={selectedBox === 6}
            onSelect={() => onSelect(6)}
            valid={checkValid(6)}
          />
          <div className="flex flex-col items-center justify-center">
            <Category {...combo?.rows[2]} />
          </div>
          <PetSquare
            pet={run.guesses[7]}
            selected={selectedBox === 7}
            onSelect={() => onSelect(7)}
            valid={checkValid(7)}
          />
          <PetSquare
            pet={run.guesses[8]}
            selected={selectedBox === 8}
            onSelect={() => onSelect(8)}
            valid={checkValid(8)}
          />
          <PetSquare
            pet={run.guesses[9]}
            selected={selectedBox === 9}
            onSelect={() => onSelect(9)}
            valid={checkValid(9)}
          />
        </div>
      </div>
      <Separator />
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <h4 className="font-lapsus text-lg md:text-xl">Guess Details</h4>
          {selectedBox ? (
            <div className="flex flex-col sm:flex-row gap-1 text-xs text-muted-foreground">
              <span>{run.guesses[selectedBox] ? 'Your Guess and ' : ''}Valid Options for:</span>
              <span className="flex flex-row gap-1">{reqsLabels}</span>
            </div>
          ) : (
            <div className="text-xs text-muted-foreground">Select a Guess to see other options</div>
          )}
        </div>
        <ToggleGroup
          type="single"
          className="border rounded-md p-1"
          value={view}
          onValueChange={(newView: 'cards' | 'table') => (newView ? setView(newView) : null)}
          disabled={!selectedBox}
        >
          <ToggleGroupItem
            value="cards"
            className="rounded-sm h-full py-1"
          >
            <Columns3 />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="table"
            className="rounded-sm h-full py-1"
          >
            <Table2 />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      {selectedBox ? (
        <div
          className={`
            [&>div]:!grid-cols-1
            overflow-auto
            ${
              checkValid(selectedBox)
                ? '[&_tbody_tr:first-child]:bg-green-500 [&_tbody_tr:first-child]:bg-opacity-25 [&_.bg-card:first-child]:border-green-500 [&_.bg-card:first-child]:border-2'
                : checkValid(selectedBox) === false
                ? '[&_tbody_tr:first-child]:bg-red-500 [&_tbody_tr:first-child]:bg-opacity-25 [&_.bg-card:first-child]:border-red-500 [&_.bg-card:first-child]:border-2'
                : ''
            }
          `}
        >
          {view === 'table' ? (
            <PetsTable filteredPets={guessDetailPets} />
          ) : (
            <PetsCards filteredPets={guessDetailPets} />
          )}
        </div>
      ) : null}
    </>
  );
}
