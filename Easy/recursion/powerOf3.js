// - Problem link : https://leetcode.com/problems/power-of-three/description/
// - Date : 27/11/2025
// - Difficulty: Easy
// - Approach : recursion

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n <= 0) return false;
    const maxpowerOf3 = 1162261467;
    return maxpowerOf3 % n === 0
};

console.log(isPowerOfThree(29));
