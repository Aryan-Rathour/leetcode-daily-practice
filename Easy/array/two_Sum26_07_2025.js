/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
   for(let i=0 ; i<nums.length ; i++){
    for(let j=i+1 ; j<nums.length ; j++){
        if(nums[i] + nums[j] == target) return [i , j]
    }
   }
   return 'Not any of two numbers is present to become target'
};

console.log(twoSum([3,2,4] , 6));
