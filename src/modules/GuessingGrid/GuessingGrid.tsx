import { GuessingButton } from './GuessingButton';

export function GuessingGrid() {
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
      <div className="[grid-area:col-1]"></div>
      <div className="[grid-area:col-2]"></div>
      <div className="[grid-area:col-3]"></div>
      <div className="[grid-area:row-1]"></div>
      <div className="[grid-area:row-2]"></div>
      <div className="[grid-area:row-3]"></div>
      <div className="[grid-area:box-1]">
        <GuessingButton />
      </div>
      <div className="[grid-area:box-2]">
        <GuessingButton />
      </div>
      <div className="[grid-area:box-3]">
        <GuessingButton />
      </div>
      <div className="[grid-area:box-4]">
        <GuessingButton />
      </div>
      <div className="[grid-area:box-5]">
        <GuessingButton />
      </div>
      <div className="[grid-area:box-6]">
        <GuessingButton />
      </div>
      <div className="[grid-area:box-7]">
        <GuessingButton />
      </div>
      <div className="[grid-area:box-8]">
        <GuessingButton />
      </div>
      <div className="[grid-area:box-9]">
        <GuessingButton />
      </div>
    </div>
  );
}
