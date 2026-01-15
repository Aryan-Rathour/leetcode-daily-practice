// - Problem link : https://leetcode.com/problems/majority-element/description/
// - Date : 31/07/2025
// - Difficulty: Easy
// - Approach :Array 

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length === 0) return [];
    intervals.sort((a,b)=> a[0]-b[0])
    let result = [];
    result.push(intervals[0])
    for(let i=1; i<intervals.length; i++){
        let currentInterval = intervals[i];
        let previousInterval = result[result.length - 1];
        if(currentInterval[0] <= previousInterval[1]){
            previousInterval[1] = Math.max(previousInterval[1], currentInterval[1])
            
        }else{
            result.push(currentInterval)
        }      
    }
    return result
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));


