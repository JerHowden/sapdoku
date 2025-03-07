import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Pet, PETS_LIST, Requirement, Run } from '@/db';
import Image from 'next/image';
import { useContext, useMemo } from 'react';
import { GuessingDialogContent } from './GuessingDialogContent';
import { DEFAULT_RUN, isoDateKey, useComboSeed, useLocalStorage, useReqsMap } from '@/lib';
import { SapdokuContext } from '@/app/providers';

type Box = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type GuessingButtonProps = {
  box: Box;
  reqs: Requirement[];
  makeGuess: (pet: Pet, box: Box) => void;
};

export function GuessingButton({ box, reqs, makeGuess }: GuessingButtonProps) {
  const { date } = useContext(SapdokuContext);
  const [run] = useLocalStorage<Run>(isoDateKey(date), DEFAULT_RUN);
  const combo = useComboSeed(isoDateKey(date));
  const reqsMap = useReqsMap(combo);

  const guess = useMemo(() => run.guesses[box], [run, box]);

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
      return <p>{PETS_LIST.filter((pet) => reqsMap[box].every((req) => req.logic(pet))).length}</p>;
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
        box={box}
        reqs={reqs}
        makeGuess={makeGuess}
      />
    </Dialog>
  );
}
