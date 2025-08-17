// - Problem link : https://leetcode.com/problems/set-mismatch/description/
// - Date : 17/08/2025
// - Difficulty: Easy
// - Approach : Array , Hash Table


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let j = 1;
    let result = [];
    for(let i=0; i<nums.length; i++){
        if (nums[i] !== j){
            result.push(nums[i])
            result.push(j)
        }
        j++;
    }
    return result;
};

console.log(findErrorNums([1,2,2,4]));
