// - Problem link : https://www.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1
// - Date : 09/01/2026
// - Difficulty: Easy
// - Approach :Array

// User function Template for javascript
class Solution {
    rotate(arr) {
        let n = arr.length;
        let last = arr[n - 1];

        for(let i = n-1; i >0; i--){
            arr[i] = arr[i-1];
        }
        arr[0] = last;
        return arr;
        
    }
}

const sol = new Solution();

console.log(sol.rotate([1, 2, 3, 4, 5]));
