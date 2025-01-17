import { Combo, Pet } from '@/db';
import { Category } from './Category';
import { GuessingButton } from './GuessingButton';
import { useCallback, useContext, useMemo, useState } from 'react';
import { SapdokuContext } from '@/app/providers';

type GuessingGridProps = {
  combo: Combo;
};

type Box = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export function GuessingGrid({ combo }: GuessingGridProps) {
  const { hearts, setHearts } = useContext(SapdokuContext);
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

  const reqsMap = useMemo(
    () => ({
      1: [combo?.rows[0], combo?.columns[0]],
      2: [combo?.rows[0], combo?.columns[1]],
      3: [combo?.rows[0], combo?.columns[2]],
      4: [combo?.rows[1], combo?.columns[0]],
      5: [combo?.rows[1], combo?.columns[1]],
      6: [combo?.rows[1], combo?.columns[2]],
      7: [combo?.rows[2], combo?.columns[0]],
      8: [combo?.rows[2], combo?.columns[1]],
      9: [combo?.rows[2], combo?.columns[2]],
    }),
    [combo]
  );

  const makeGuess = useCallback(
    (pet: Pet, box: Box) => {
      setGuesses((guesses) => ({
        ...guesses,
        [box]: pet,
      }));
      if (reqsMap[box].some((req) => !req.logic(pet))) {
        console.log('Oof.');
        setHearts(hearts - 1);
      }
    },
    [hearts, reqsMap, setHearts]
  );

  return (
    <div
      className={`
          grid
          grid-cols-4
          grid-rows-4
          gap-1
          [grid-template-areas:'corner_col-1_col-2_col-3''row-1_box-1_box-2_box-3''row-2_box-4_box-5_box-6''row-3_box-7_box-8_box-9']
          aspect-square
          min-w-64
          max-w-full
          md:min-w-96
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
          reqs={reqsMap[1]}
          guess={guesses[1]}
          makeGuess={makeGuess}
        />
      </div>
      <div className="[grid-area:box-2]">
        <GuessingButton
          box={2}
          reqs={reqsMap[2]}
          guess={guesses[2]}
          makeGuess={makeGuess}
        />
      </div>
      <div className="[grid-area:box-3]">
        <GuessingButton
          box={3}
          reqs={reqsMap[3]}
          guess={guesses[3]}
          makeGuess={makeGuess}
        />
      </div>
      <div className="[grid-area:box-4]">
        <GuessingButton
          box={4}
          reqs={reqsMap[4]}
          guess={guesses[4]}
          makeGuess={makeGuess}
        />
      </div>
      <div className="[grid-area:box-5]">
        <GuessingButton
          box={5}
          reqs={reqsMap[5]}
          guess={guesses[5]}
          makeGuess={makeGuess}
        />
      </div>
      <div className="[grid-area:box-6]">
        <GuessingButton
          box={6}
          reqs={reqsMap[6]}
          guess={guesses[6]}
          makeGuess={makeGuess}
        />
      </div>
      <div className="[grid-area:box-7]">
        <GuessingButton
          box={7}
          reqs={reqsMap[7]}
          guess={guesses[7]}
          makeGuess={makeGuess}
        />
      </div>
      <div className="[grid-area:box-8]">
        <GuessingButton
          box={8}
          reqs={reqsMap[8]}
          guess={guesses[8]}
          makeGuess={makeGuess}
        />
      </div>
      <div className="[grid-area:box-9]">
        <GuessingButton
          box={9}
          reqs={reqsMap[9]}
          guess={guesses[9]}
          makeGuess={makeGuess}
        />
      </div>
    </div>
  );
}
