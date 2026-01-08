// - Problem link : https://www.geeksforgeeks.org/problems/union-of-two-arrays3538/1
// - Date : 08/01/2026
// - Difficulty: Easy
// - Approach :Array 


/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */
class Solution {
    findUnion(a, b) {
        const set = new Set();

        for(let x of a) set.add(x);
        for(let x of b) set.add(x);

        return Array.from(set);
    }
}


const sol = new Solution()

console.log(sol.findUnion([1, 2, 3, 2, 1], [3, 2, 2, 3, 3, 2]));
