/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    maxSubarraySum(arr) {
        let maxSum=arr[0];
        let currSum=arr[0];
        for(let i=0; i< arr.length; i++){
            currSum = Math.max(arr[i], arr[i] + currSum)
            maxSum = Math.max(maxSum , currSum) 
        }
        return maxSum;
    }
}

const sol = new Solution();

console.log(sol.maxSubarraySum([2, 3, -8, 7, -1, 2, 3]));
