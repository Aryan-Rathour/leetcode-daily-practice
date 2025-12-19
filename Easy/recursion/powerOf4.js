// - Problem link : https://leetcode.com/problems/power-of-four/
// - Date : 27/11/2025
// - Difficulty: Easy
// - Approach : recursion


/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
   return n > 0 && 
   (n & (n-1)) === 0 &&
   (n & 0x55555555) !==0;
};


console.log(isPowerOfFour(18));
