// - Problem link : https://leetcode.com/problems/set-mismatch/description/
// - Date : 17/08/2025
// - Difficulty: Easy
// - Approach : Array , Hash Table


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let n = nums.length;
    let count = new Array(n+1).fill(0);
    
    for(let num of nums){
        count[num]++;
    }

    let duplicate ; let missing;
    for(let i=1; i<=n; i++){
        if(count[i] == 2) duplicate = i;
        if(count[i] == 0) missing = i;
    }
    return [duplicate , missing]
};

console.log(findErrorNums([2,2,3,4]));
