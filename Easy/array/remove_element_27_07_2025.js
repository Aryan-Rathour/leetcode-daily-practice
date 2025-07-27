// - Problem link : https://leetcode.com/problems/remove-element/description/
// - Date : 27/07/2025
// - Difficulty: Easy
// - Approach :Array , Two Pointers

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i=0;
    for(let j=0; j<nums.length; j++){
        if(nums[j] !== val){
            nums[i]=nums[j]
            i++;
        }
    }
    return i;
};
console.log(removeElement([3,2,2,3] , 3));
