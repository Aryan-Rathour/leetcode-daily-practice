// - Problem link : https://leetcode.com/problems/longest-palindrome/description/
// - Date : 25/07/2025
// - Difficulty: Easy
// - Approach : Hash Table , String , Greedy

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let map = {};
  lengthofLP = 0;
  let hasOdd = false;
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) map[s[i]] += 1;
    else {
      map[s[i]] = 1;
    }
  }

  for (let key in map) {
    if (map[key] % 2 == 0) lengthofLP += map[key];
    else {
      lengthofLP += map[key] - 1;
      hasOdd = true;
    }
  }

  if (hasOdd) lengthofLP++;

  console.log(lengthofLP);
};

console.log(longestPalindrome("abccccdd"));
