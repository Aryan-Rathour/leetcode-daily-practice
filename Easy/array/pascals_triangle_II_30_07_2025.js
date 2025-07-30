// - Problem link : https://leetcode.com/problems/pascals-triangle-ii/description/
// - Date : 30/07/2025
// - Difficulty: Easy
// - Approach : Array , Dynamic Programming

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let triangle = [[1]];
    for(let i=1; i<=rowIndex; i++){
        let prevRow = triangle[i-1];
        let row=[1]
        for(let j=1; j<i; j++){
            row.push(prevRow[j-1]+prevRow[j]);
        }
        row.push(1);
        triangle.push(row);
    }
    return triangle[triangle.length-1]
};
console.log(getRow(5))

