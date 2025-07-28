// - Problem link : https://leetcode.com/problems/plus-one/description/
// - Date : 28/07/2025
// - Difficulty: Easy
// - Approach :Array , Math

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    } else digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};
console.log(plusOne([9, 9, 9]));
