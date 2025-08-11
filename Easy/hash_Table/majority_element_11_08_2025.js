// - Problem link : https://leetcode.com/problems/majority-element/description/
// - Date : 11/08/2025
// - Difficulty: Easy
// - Approach : Array , Hash Table

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map={};
    let arrLength = nums.length;
    for(let num of nums){
         map[num] = (map[num] || 0 ) + 1;
    }
    for(let num in map){
        if (map[num] > arrLength/2 ){
            return Number(num)
        }
    }
};

console.log(majorityElement([2,2,1,1,1,2,2]));
