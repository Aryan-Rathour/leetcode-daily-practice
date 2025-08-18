// - Problem link : https://leetcode.com/problems/degree-of-an-array/description/
// - Date : 18/08/2025
// - Difficulty: Easy
// - Approach : Array , Hash Table

/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let map = {};
    for(let num of nums){
        map[num] = (map[num] || 0) + 1;
    }

    let degree = Math.max(...Object.values(map));

    let highestElement = Object.keys(map).filter(val => map[val] == degree);

    let minLength = nums.length;

    for(let val of highestElement){
        let numVal = Number(val);
        let firstIndex = nums.indexOf(numVal);
        let lastIndex = nums.lastIndexOf(numVal);
        let length = (lastIndex - firstIndex) + 1;
        minLength = Math.min(minLength, length)
    }

    return minLength;
    
};

console.log(findShortestSubArray([1,2,2,3,1,4,2]));
