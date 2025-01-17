import { Combo, Pet } from '@/db';
import { Category } from './Category';
import { GuessingButton } from './GuessingButton';
import { useCallback, useState } from 'react';

type GuessingGridProps = {
  combo: Combo;
};

type Box = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export function GuessingGrid({ combo }: GuessingGridProps) {
  const [guesses, setGuesses] = useState<Record<Box, Pet | undefined>>({
    1: undefined,
    2: undefined,
    3: undefined,
    4: undefined,
    5: undefined,
    6: undefined,
    7: undefined,
    8: undefined,
    9: undefined,
  });

  const makeGuess = useCallback((pet: Pet, box: Box) => {
    setGuesses((guesses) => ({
      ...guesses,
      [box]: pet,
    }));
  }, []);

  return (
    <div
      className={`
          grid
          grid-cols-4
          grid-rows-4
          gap-1
          [grid-template-areas:'corner_col-1_col-2_col-3''row-1_box-1_box-2_box-3''row-2_box-4_box-5_box-6''row-3_box-7_box-8_box-9']
          aspect-square
          min-w-96
        `}
    >
      <div className="[grid-area:corner]"></div>
      <div className="[grid-area:col-1] flex flex-col items-center justify-center">
        <Category {...combo?.columns[0]} />
      </div>
      <div className="[grid-area:col-2] flex flex-col items-center justify-center">
        <Category {...combo?.columns[1]} />
      </div>
      <div className="[grid-area:col-3] flex flex-col items-center justify-center">
        <Category {...combo?.columns[2]} />
      </div>
      <div className="[grid-area:row-1] flex flex-col items-center justify-center">
        <Category {...combo?.rows[0]} />
      </div>
      <div className="[grid-area:row-2] flex flex-col items-center justify-center">
        <Category {...combo?.rows[1]} />
      </div>
      <div className="[grid-area:row-3] flex flex-col items-center justify-center">
        <Category {...combo?.rows[2]} />
      </div>
      <div className="[grid-area:box-1]">
        <GuessingButton
          box={1}
          reqs={[combo?.rows[0], combo?.columns[0]]}
          guess={guesses[1]}
          makeGuess={makeGuess}
        />
      </div>
      <div className="[grid-area:box-2]">
        <GuessingButton
          box={2}
          reqs={[combo?.rows[0], combo?.columns[1]]}
          guess={guesses[2]}
          makeGuess={makeGuess}
        />
      </div>
      <div className="[grid-area:box-3]">
        <GuessingButton
          box={3}
          reqs={[combo?.rows[0], combo?.columns[2]]}
          guess={guesses[3]}
          makeGuess={makeGuess}
        />
      </div>
      <div className="[grid-area:box-4]">
        <GuessingButton
          box={4}
          reqs={[combo?.rows[1], combo?.columns[0]]}
          guess={guesses[4]}
          makeGuess={makeGuess}
        />
      </div>
      <div className="[grid-area:box-5]">
        <GuessingButton
          box={5}
          reqs={[combo?.rows[1], combo?.columns[1]]}
          guess={guesses[5]}
          makeGuess={makeGuess}
        />
      </div>
      <div className="[grid-area:box-6]">
        <GuessingButton
          box={6}
          reqs={[combo?.rows[1], combo?.columns[2]]}
          guess={guesses[6]}
          makeGuess={makeGuess}
        />
      </div>
      <div className="[grid-area:box-7]">
        <GuessingButton
          box={7}
          reqs={[combo?.rows[2], combo?.columns[0]]}
          guess={guesses[7]}
          makeGuess={makeGuess}
        />
      </div>
      <div className="[grid-area:box-8]">
        <GuessingButton
          box={8}
          reqs={[combo?.rows[2], combo?.columns[1]]}
          guess={guesses[8]}
          makeGuess={makeGuess}
        />
      </div>
      <div className="[grid-area:box-9]">
        <GuessingButton
          box={9}
          reqs={[combo?.rows[2], combo?.columns[2]]}
          guess={guesses[9]}
          makeGuess={makeGuess}
        />
      </div>
    </div>
  );
}
