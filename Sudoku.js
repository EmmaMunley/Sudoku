let puzzle1 = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];

let puzzle2 =  [[ 8,9,5,7,4,2,1,3,6 ],
                [ 8,7,1,9,6,3,4,8,5 ],
                [ 4,6,3,5,8,1,7,9,2 ],
                [ 9,3,4,6,1,7,2,5,8 ],
                [ 5,1,7,2,3,8,9,6,4 ],
                [ 6,8,2,4,5,9,3,7,1 ],
                [ 1,5,9,8,7,4,6,2,3 ],
                [ 7,4,6,3,2,5,8,1,9 ],
                [ 3,2,8,1,9,6,5,4,8 ]];

const isValidSet = [1,2,3,4,5,6,7,8,9];

const getRow = (puzzle, rowIndex) => {
    return puzzle[rowIndex];
}

const getColumn = (puzzle, columnIndex) => {
    let array = [];
    for (i = 0; i < puzzle.length; i++) {
        array.push(puzzle[i][columnIndex]);
    }
    return array;
}

const getSection = (puzzle,x, y) => {
    let startX=x*3;
    let startY=y*3;
    let grid = [];

    for (let i = startX; i < 3 + startX; i++) {
        for (let j = startY; j < 3 + startY; j++) {
        grid.push(puzzle[i][j]);
        }
    }
    return(grid);
}


const getPuzzle = (puzzle) => {
  let gridColumns = [];
  let gridRows = [];
  let gridSections = [];

  for (let i = 0; i < puzzle.length; i++) {
    let column = getColumn(puzzle,i);
    let row = getRow(puzzle, i);

    gridColumns.push(column);
    gridRows.push(row)
  }

  for (let i = 0; i < 3 ; i++) {
    for (let j = 0; j < 3; j++) {
    let section = getSection(puzzle,[i],[j]);
    gridSections.push(section);  
    }
  }
  return [gridColumns, gridRows, gridSections]
}


const includes1to9 = (arr) => {
    let newSet = new Set();
    let isValid = false;
    const isValidSet = [1,2,3,4,5,6,7,8,9];

    for (let k = 0; k< arr.length; k++) {
          let currentNum= arr[k];
          newSet.add(currentNum);
    }
    if (isValidSet.length === newSet.size) {
            isValid = true;
    }
   return isValid;
}


const validatePuzzle = (puzzle) => {
  const allGrids = (getPuzzle(puzzle));
  let isValid = false;

  for (let i = 0; i < allGrids.length; i++) {
    let grid = allGrids[i];
    for (let j = 0; j < grid.length; j++) {
        let currentArray = grid[j];
      if (!includes1to9(currentArray)) {
        return false;
      }
    }
  }
  return true;
}

console.log(validatePuzzle(puzzle1));
console.log(validatePuzzle(puzzle2));


const isSameArray = (puzzle1, puzzle2) => {
    for (let i = 0; i < 9; i++) {
      if (puzzle1[i] !== puzzle2[i]) {
        return false
      }
    }
    return true;
  }
  
  const isSame = (puzzle1, puzzle2) => {
    for (let i = 0; i < 9; i++) {
      let puzzle1Rows = getRow(puzzle1, i);
      let puzzle2Rows = getRow(puzzle2, i);
      let isValid = isSameArray(puzzle1Rows, puzzle2Rows)
      if (!isValid) {
          return false;
      }
    }
      return true;
  }
  
  console.log(isSame(puzzle1,puzzle2));