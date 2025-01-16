export function GuessingGrid() {
  return (
    <div
      className="grid grid-cols-4 grid-rows-4 gap-1 
      [grid-template-areas:'corner_col 1_col 2_col 3'
    'row_1 box_1 box_2 box_3'
    'row_2 box_4 box_5 box_6'
    'row_3 box_7 box_8 box_9']"
    >
      <div className="corner"></div>
      <div className="col 1"></div>
      <div className="col 2"></div>
      <div className="col 3"></div>
      <div className="row 1"></div>
      <div className="row 2"></div>
      <div className="row 3"></div>
      <div className="box 1"></div>
      <div className="box 2"></div>
      <div className="box 3"></div>
      <div className="box 4"></div>
      <div className="box 5"></div>
      <div className="box 6"></div>
      <div className="box 7"></div>
      <div className="box 8"></div>
      <div className="box 9"></div>
    </div>
  );
}
