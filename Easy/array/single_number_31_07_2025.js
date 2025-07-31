// - Problem link : https://leetcode.com/problems/single-number/
// - Date : 31/07/2025
// - Difficulty: Easy
// - Approach :Array , Bit Manipulation

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result =0;
    for(let i=0; i<nums.length; i++){
        result ^= nums[i]
    }
    return result
};

console.log(singleNumber([4,1,2,1,2]));
