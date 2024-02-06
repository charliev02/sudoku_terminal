const printBoard = (board: number[][]): void => {
  for (const row of board) {
    console.log('🚀', row.join(' '));
  }
};

export default printBoard;
