// - Problem link : https://leetcode.com/problems/delete-greatest-value-in-each-row/description/
// - Date of solution : 16-09-2025
// - Difficulty: Easy
// - Approach : Array , sorting , Matrix


// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */

var deleteGreatestValue = function(grid) {
    for(let row of grid){
        row.sort((a ,b)=> a - b);
    }

    let answer = 0;
    let cols = grid[0].length;

    for(let col = cols -1; col >=0 ; col--){
        let currentMax = 0;
        for( let row=0 ; row < grid.length; row++){
            currentMax = Math.max(currentMax , grid[row][col])
        }
        answer += currentMax;
    };
    return answer;
};

console.log(deleteGreatestValue([[1,2,4],[3,3,1]]));
