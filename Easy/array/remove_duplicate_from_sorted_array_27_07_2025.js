// - Problem link : https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
// - Date : 27/07/2025
// - Difficulty: Easy
// - Approach :Array , Two Pointers

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i=0;
    for(let j=1; j<nums.length; j++){
        if(nums[j] !==nums[i]){
            i++;
            nums[i] = nums[j];
        }
    }
    return i+1;
};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
