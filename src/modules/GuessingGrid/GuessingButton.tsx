import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { ClassicRun, Pet, PETS_LIST, Requirement } from '@/db';
import { useComboSeed, useReqsMap } from '@/lib';
import Image from 'next/image';
import { useMemo } from 'react';
import { GuessingDialogContent } from './GuessingDialogContent';

type Box = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type GuessingButtonProps = {
  run: ClassicRun;
  box: Box;
  reqs: Requirement[];
  makeGuess: (pet: Pet, box: Box) => void;
};

export function GuessingButton({ run, box, reqs, makeGuess }: GuessingButtonProps) {
  const combo = useComboSeed(Number(run.date.replaceAll('-', '')));
  const reqsMap = useReqsMap(combo);

  const guess = useMemo(() => run.guesses[box], [run.guesses, box]);

  const image = useMemo(() => {
    if (guess) {
      return (
        <Image
          src={guess.imageSrc || 'https://superautopets.wiki.gg/images/0/0b/Rock.png'}
          alt={guess.name}
          width={64}
          height={64}
        />
      );
    } else {
      return (
        <p className="sr-only">
          {PETS_LIST.filter((pet) => reqsMap[box].every((req) => req.logic(pet))).length}
        </p>
      );
    }
  }, [box, guess, reqsMap]);
  const guessStyles = useMemo(() => {
    if (!guess) {
      return '';
    }
    for (let i = 0; i < reqs.length; i++) {
      if (!reqs[i].logic(guess)) {
        return 'border-4 border-red-500';
      }
    }
    return 'border-4 border-green-500';
  }, [guess, reqs]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className={`w-full h-full ${guessStyles} disabled:opacity-100`}
          title={guess ? `You chose ${guess}` : `Choose Pet for Box ${box}`}
          disabled={!!guess || run.complete}
        >
          <span className="sr-only">Choose Pet for Box {box}</span>
          {image}
        </Button>
      </DialogTrigger>
      <GuessingDialogContent
        run={run}
        box={box}
        reqs={reqs}
        makeGuess={makeGuess}
      />
    </Dialog>
  );
}
