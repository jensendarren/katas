// Runs in O(1) Space | O(1) Time since the board is always a 9x9 shape
function solveSudoku(board) {
    solvePartialSudoku(0,0,board);
    return board;
}

function solvePartialSudoku(row, col, board) {
    let currentRow = row;
    let currentCol = col;

    // if we are at the end of the row then move to the
    // to the first column of the next row
    if (currentCol === board[currentRow].length) {
        currentRow++;
        currentCol = 0;
		// we have no more rows to check so therefore we have solved the board!
        if(currentRow === board.length) return true;
    }

	// if the current position has not been set
    if (board[currentRow][currentCol] === 0) {
        return tryDigitsAtPosition(currentRow, currentCol, board);
    }

    return solvePartialSudoku(currentRow, currentCol + 1, board);
}

function tryDigitsAtPosition(row, col, board) {
    for (let digit = 1; digit < 10; digit++) {
        if (isValidAtPostion(digit, row, col, board)) {
            // if it is valid (for this moment) then
            // update the position with this digit
            board[row][col] = digit;
            if (solvePartialSudoku(row, col + 1, board)) return true;
         }
    }
    // there are no possible values for this position so
    // we need to set the current position back to 0 and return false
    board[row][col] = 0;
    return false;
}

function isValidAtPostion(value, row, col, board) {
    // first check all values in the rows and columns for the
    // current position and the value to check
    const rowIsValid = !board[row].includes(value);
    const colIsValid = !board.map(r => r[col]).includes(value);

    if (!rowIsValid || !colIsValid) return false;

    // check the subgrid constraint
	// calculate the index position of the subgrid
    const subgridRowStart = Math.floor(row/3) * 3;
    const subgridColStart = Math.floor(col/3) * 3;
	// loop all the elemetns of the subgrid
    for(let rowIdx = 0; rowIdx < 3; rowIdx++) {
        for(let colIdx = 0; colIdx < 3; colIdx++) {
			// check each element one by one
            const rowToCheck = subgridRowStart + rowIdx;
            const colToCheck = subgridColStart + colIdx;
            const existingValue = board[rowToCheck][colToCheck];
		    // if any of the elements contain the value then return false
            if (existingValue === value) return false;
        }
    }
    // its valid to place this value at this positon so return true
    return true;
}

module.exports = solveSudoku