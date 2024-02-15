function isValidSudoku(grid) {
  const gridLenth = grid.length;
  const rootLength = Math.sqrt(gridLenth);

  const hasDuplicates = arr => new Set(arr).size !== arr.length;

  // For checking rows and columns
  for (let i = 0; i < gridLenth; i++) {
    const row = [];
    const col = [];
    for (let j = 0; j < gridLenth; j++) {
      row.push(grid[i][j]);
      col.push(grid[j][i]);
    }
    if (hasDuplicates(row) || hasDuplicates(col)) {
      return false;
    }
  }

  // For checking little squares
  for (let i = 0; i < gridLenth; i += rootLength) {
    for (let j = 0; j < gridLenth; j += rootLength) {
      const littleSquare = [];
      for (let k = i; k < i + rootLength; k++) {
        for (let l = j; l < j + rootLength; l++) {
          littleSquare.push(grid[k][l]);
        }
      }
      if (hasDuplicates(littleSquare)) {
        return false;
      }
    }
  }

  return true;
}

const goodSudoku1 = [
  [7, 8, 4, 1, 5, 9, 3, 2, 6],
  [5, 3, 9, 6, 7, 2, 8, 4, 1],
  [6, 1, 2, 4, 3, 8, 7, 5, 9],
  [9, 2, 8, 7, 1, 5, 4, 6, 3],
  [3, 5, 7, 8, 4, 6, 1, 9, 2],
  [4, 6, 1, 9, 2, 3, 5, 8, 7],
  [8, 7, 6, 3, 9, 4, 2, 1, 5],
  [2, 4, 3, 5, 6, 1, 9, 7, 8],
  [1, 9, 5, 2, 8, 7, 6, 3, 4]
];

const goodSudoku2 = [
  [1, 4, 2, 3],
  [3, 2, 4, 1],
  [4, 1, 3, 2 ],
  [2, 3, 1, 4]
];

const badSudoku1 = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
];

const badSudoku2 = [
  [1, 2, 3, 4, 5]
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1],
];

console.log(isValidSudoku(goodSudoku1));
console.log(isValidSudoku(goodSudoku2));
console.log(isValidSudoku(badSudoku1));
console.log(isValidSudoku(badSudoku2));