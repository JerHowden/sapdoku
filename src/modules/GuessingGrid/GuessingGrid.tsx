import { ClassicRun, Combo, Pet } from '@/db';
import { useReqsMap } from '@/lib';
import { Category } from './Category';
import { GuessingButton } from './GuessingButton';

type GuessingGridProps = {
  run: ClassicRun;
  combo: Combo;
  makeGuess: (pet: Pet, box: Box) => void;
};

type Box = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export function GuessingGrid({ run, combo, makeGuess }: GuessingGridProps) {
  const reqsMap = useReqsMap(combo);

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
          run={run}
          box={1}
          reqs={reqsMap[1]}
          makeGuess={makeGuess}
        />
      </div>
      <div className="[grid-area:box-2]">
        <GuessingButton
          run={run}
          box={2}
          reqs={reqsMap[2]}
          makeGuess={makeGuess}
        />
      </div>
      <div className="[grid-area:box-3]">
        <GuessingButton
          run={run}
          box={3}
          reqs={reqsMap[3]}
          makeGuess={makeGuess}
        />
      </div>
      <div className="[grid-area:box-4]">
        <GuessingButton
          run={run}
          box={4}
          reqs={reqsMap[4]}
          makeGuess={makeGuess}
        />
      </div>
      <div className="[grid-area:box-5]">
        <GuessingButton
          run={run}
          box={5}
          reqs={reqsMap[5]}
          makeGuess={makeGuess}
        />
      </div>
      <div className="[grid-area:box-6]">
        <GuessingButton
          run={run}
          box={6}
          reqs={reqsMap[6]}
          makeGuess={makeGuess}
        />
      </div>
      <div className="[grid-area:box-7]">
        <GuessingButton
          run={run}
          box={7}
          reqs={reqsMap[7]}
          makeGuess={makeGuess}
        />
      </div>
      <div className="[grid-area:box-8]">
        <GuessingButton
          run={run}
          box={8}
          reqs={reqsMap[8]}
          makeGuess={makeGuess}
        />
      </div>
      <div className="[grid-area:box-9]">
        <GuessingButton
          run={run}
          box={9}
          reqs={reqsMap[9]}
          makeGuess={makeGuess}
        />
      </div>
    </div>
  );
}
