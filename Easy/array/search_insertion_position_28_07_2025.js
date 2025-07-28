// - Problem link : https://leetcode.com/problems/search-insert-position/description/
// - Date : 28/07/2025
// - Difficulty: Easy
// - Approach :Array , Binary Search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
   let left =0;
   let right = nums.length-1
   while(left<=right){
    let mid = Math.floor(left+(right - left)/2)
   
   if(nums[mid] === target) return mid;
   else if(nums[mid] > target){
    right=mid-1
   }
   else{
    left=mid+1
   }
   }
    return left;
};
console.log(searchInsert([2,3,5,6] , 7));
