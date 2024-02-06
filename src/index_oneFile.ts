const boardSize = 9;

function getRandomValue(
  valuesToAvoid: number[] = [],
  arrayValues: number[] = []
) {
  //   console.debug('🚀 ~ valuesToAvoid:', valuesToAvoid);
  const availableValues = arrayValues.filter(
    value => !valuesToAvoid.includes(value)
  );
  //   console.debug('🚀 ~ availableValues:', availableValues);

  const value =
    availableValues[Math.floor(Math.random() * availableValues.length)] || 0;
  //   console.debug('🚀 ~ will return:', value);
  return value;
}

function printBoard(board: number[][]) {
  for (const row of board) {
    console.log('🚀', row.join(' '));
  }
}

function generateBoard() {
  const arrayValues = Array.from({length: boardSize}, (_, index) => index + 1);
  console.debug('🚀 ~ arrayValues:', arrayValues);
  const board = Array.from({length: boardSize}, () =>
    Array.from({length: boardSize}, () => 0)
  );

  const getValue = (board: number[][], rowIndex: number, colIndex: number) => {
    const rowValues = board[rowIndex];
    const columnValues = board
      .map(row => row[colIndex])
      .filter(element => element !== 0);
    const rowColumnValues: number[] = [
      ...new Set(rowValues.concat(columnValues)),
    ];

    // console.log('🚀  ');
    // console.log('🚀 rowValues: ', rowValues);
    // console.log('🚀 columnValues: ', columnValues);
    // console.debug('🚀 ~ rowColumnValues:', rowColumnValues.length);
    const value = getRandomValue(rowColumnValues, arrayValues);

    return value;
  };

  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    const row = board[rowIndex];
    // console.log('🚀 ROW INDEX ----> ', rowIndex);
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      board[rowIndex][colIndex] = getValue(board, rowIndex, colIndex);
    }
  }

  printBoard(board);
  console.log('🚀-----------------');
}

generateBoard();
