// - Problem link : https://leetcode.com/problems/majority-element/description/
// - Date : 31/07/2025
// - Difficulty: Easy
// - Approach :Array , Hash Table , Divide and Conquer , Sorting , Counting

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {};

    let majority = Math.floor(nums.length/2);

   for(const num of nums){
    map[nums] = (num[map])
   }

    
};

console.log(majorityElement([2,2,1,1,1,2,2]));
