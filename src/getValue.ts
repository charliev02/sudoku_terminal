import getRandomValue from './getRandomValue';

const getValue = (
  board: number[][],
  rowIndex: number,
  colIndex: number,
  arrayValues: number[]
): number => {
  const rowValues: number[] = board[rowIndex];
  const columnValues: number[] = [];

  for (let index = 0; index < rowValues.length; index++) {
    const element = board[index][colIndex];
    if (element !== 0) columnValues.push(element);
  }

  const rowColumnValues = [...new Set(rowValues.concat(columnValues))];
  // console.log('🚀  ');
  // console.log('🚀 rowValues: ', rowValues);
  // console.log('🚀 columnValues: ', columnValues);

  const value = getRandomValue(rowColumnValues, arrayValues);
  return value;
};

export default getValue;
