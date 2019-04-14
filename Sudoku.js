const { puzzle1, puzzle2, puzzle3, puzzle4, puzzle5} = require('./puzzleExamples');

const getRow = (puzzle, rowIndex) => {
    return puzzle[rowIndex];
}

const getColumn = (puzzle, columnIndex) => {
    let array = [];
    for (let i = 0; i < puzzle.length; i++) {
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
    const newSet = new Set();
    for (let i = 0; i < arr.length; i++) {
      const currentNum = arr[i];
      if (currentNum === '') {
        continue;
      }
      if (typeof currentNum !== 'number'
          || currentNum <1 || currentNum >9
          || !Number.isInteger(currentNum) )  {
        return false
      }
      if (newSet.has(currentNum)){
        return false
      }

      newSet.add(currentNum)
    }
    return true;
}

const validatePuzzle = (puzzle) => {
  const allGrids = (getPuzzle(puzzle));

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
/* console.log(validatePuzzle(puzzle1));
console.log(validatePuzzle(puzzle2));
console.log(validatePuzzle(puzzle3));
console.log(validatePuzzle(puzzle4));
console.log(validatePuzzle(puzzle5)); */

const isSameArray = (array1, array2) => {
    if (array1.length !== array2.length) {
      return false
    }
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
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
  console.log(isSame(puzzle4,puzzle5));