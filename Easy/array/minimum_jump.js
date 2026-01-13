// - Problem link : https://www.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1
// - Date : 13/01/2026
// - Difficulty: Easy
// - Approach :Array 


/**
 * @param {number[]} arr
 * @return {number}
 */

class Solution {
    minJumps(arr) {
        const n = arr.length;
        if(n===1) return 0;
        if(arr[0] === 0) return -1;
        let maxReach = arr[0];
        let step = arr[0];
        let jumps = 1;

        

        for(let i=1; i<n; i++){
            if(i == n-1) return jumps;
            maxReach = Math.max(maxReach , arr[i] + i);
            step--;

            if(step == 0){
                jumps++;

                if(i >= maxReach) return -1;
                step = maxReach - i;
            }

        }
        return -1;
    }
}

const sol = new Solution();

console.log(sol.minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]));
