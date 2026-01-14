// - Problem link : https://leetcode.com/problems/find-the-duplicate-number/description/
// - Date : 14/01/2026
// - Difficulty: Easy
// - Approach :Array 

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = nums[0];
    let fast = nums[0];

    do{
        slow = nums[slow];
        fast = nums[nums[fast]];
    }while(slow !== fast);

    slow = nums[0];
    while(slow !== fast){
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
};

console.log(findDuplicate([3,1,3,4,2]));
