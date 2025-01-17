import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Pet, Requirement } from '@/db';
import Image from 'next/image';
import { useMemo } from 'react';
import { GuessingDialogContent } from './GuessingDialogContent';

type Box = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type GuessingButtonProps = {
  box: Box;
  reqs: Requirement[];
  guess?: Pet;
  guessed: Pet[];
  makeGuess: (pet: Pet, box: Box) => void;
};

export function GuessingButton({ box, reqs, guess, guessed, makeGuess }: GuessingButtonProps) {
  const image = useMemo(() => {
    if (guess) {
      return (
        <Image
          src={guess.imageSrc}
          alt={guess.name}
          width={64}
          height={64}
        />
      );
    }
    return null;
  }, [guess]);
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
          disabled={!!guess}
        >
          <span className="sr-only">Choose Pet for Box {box}</span>
          {image}
        </Button>
      </DialogTrigger>
      <GuessingDialogContent
        box={box}
        reqs={reqs}
        guessed={guessed}
        makeGuess={makeGuess}
      />
    </Dialog>
  );
}
