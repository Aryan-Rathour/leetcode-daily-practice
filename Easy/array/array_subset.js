// - Problem link : https://www.geeksforgeeks.org/problems/array-subset-of-another-array2317/1
// - Date : 21/01/2025
// - Difficulty: Easy
// - Approach :Array 

// User function Template for javascript

/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {boolean}
 */

class Solution {
    isSubset(a, b) {
        for(let i=0; i<b.length; i++){
            let found = false;
            for(let j=0; j<a.length; j++){
                if(b[i] === a[j]){
                    found = true;
                    break;
                }
            }
            if(!found) return false;
        }
        return true;
    }
}

const sol1 = new Solution();

console.log(sol1.isSubset([11, 7, 1, 13, 21, 3, 7, 3], [11, 3, 7, 1, 7 ]));


class Solution2 {
    isSubset(a, b) {
        let freq = new Map();
        for(let x of a){
            freq.set(x , (freq.get(x) || 0) + 1);
        }
        for(let x of b){
            if(!freq.has(x) || freq.get(x) == 0){
                return false;
            }
            freq.set(x , (freq.get(x) || 0) - 1)
        }
        return true;
    }
}

const sol2 = new Solution2();

console.log(sol2.isSubset([11, 7, 1, 13, 21, 3, 7, 3], [11, 3, 7, 1, 7 , 15 ]));

