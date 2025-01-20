/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {
const position = new Map();

for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            position.set(mat[i][j], [i, j]);
        }
    }

const rowCount = [];
const columnCount = [];

for (let i = 0; i < mat.length; i++) 
{
    rowCount[i] = 0; 
}

for (let i = 0; i < mat[0].length; i++){
    columnCount[i] = 0; 
}

 for (let i = 0; i < arr.length; i++) {
        const [row, col] = position.get(arr[i]);

        // Increment the frequency for the corresponding row and column
        rowCount[row]++;
        columnCount[col]++;

        //Check if row/column is fully painted
        if (rowCount[row] === mat[0].length || columnCount[col] === mat.length) {
            return i;
        }
    }
};

   