import getValue from './getValue';
import printBoard from './printBoard';

const boardSize = 5;
const arrayValues = Array.from({length: boardSize}, (_, index) => index + 1);

const board = Array.from({length: boardSize}, () =>
  Array.from({length: boardSize}, () => 0)
);

for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
  const row = board[rowIndex];
  //   console.log('🚀 ROW INDEX ----> ', rowIndex);
  for (let colIndex = 0; colIndex < row.length; colIndex++) {
    board[rowIndex][colIndex] = getValue(
      board,
      rowIndex,
      colIndex,
      arrayValues
    );
  }
}

// console.log('🚀-----------------');
printBoard(board);
