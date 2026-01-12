// - Problem link : https://www.geeksforgeeks.org/problems/minimize-the-heights3351/1
// - Date : 12/01/2026
// - Difficulty: Easy
// - Approach :Array 


/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
    getMinDiff(arr, k) {
        const n = arr.length;
        arr.sort((a,b)=> a - b);
        
        let ans = arr[n - 1] - arr[0];

        for(let i=1; i< n; i++){
            if(arr[i] -k < 0) continue;

            const minH = Math.min(arr[0] + k , arr[i] - k);
            const maxH = Math.max(arr[n-1] -k , arr[i-1] + k );

            ans = Math.min(ans , maxH - minH);
        }
        return ans;
    }
}

const sol = new Solution();

console.log(sol.getMinDiff([1, 5, 8, 10], 2));
