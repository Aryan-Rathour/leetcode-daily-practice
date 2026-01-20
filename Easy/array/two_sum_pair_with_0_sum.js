// - Problem link : https://www.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1
// - Date : 21/01/2026
// - Difficulty: Easy
// - Approach :Array 

// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number[][]}
 */
class Solution {
    getPairs(arr) {
        arr.sort((a,b)=> a - b);
        let result = [];
        let left = 0 ; let right = arr.length - 1;

        while(left < right){
            let sum = arr[left] + arr[right];

            if(sum == 0){
                result.push([arr[left] , arr[right]]);

                while(left < right && arr[left] === arr[left+1]) left++;
                while(left < right && arr[right] === arr[right -1]) right--;
                left++;
                right--;
            }
            else if(sum < 0){
                left++;
            }
            else{
                right--;
            }
        }
        return result;
    }
}

const sol = new Solution();
console.log(sol.getPairs([-1, 0, 1, 2, -1, -4]));
