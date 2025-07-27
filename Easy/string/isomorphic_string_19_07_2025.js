// - Problem : https://leetcode.com/problems/isomorphic-strings/description/
// - Date of solution : 19/07/2025
// - Difficulty: Easy
// - Approach : Hash table , String

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let sLen = s.length;
  let tLen = t.length;
  if (sLen !== tLen) return false;
  sMap = {};
  tMap = {};

  for (let i = 0; i < sLen ; i++) {
    let charS = s[i];
    let charT = t[i];
    if (sMap.hasOwnProperty(charS)) {
      if (sMap[charS] !== charT) return false;
    } else {
      sMap[charS] = charT;
    }
    if (tMap.hasOwnProperty(charT)) {
      if (tMap[charT] !== charS) return false;
    } else {
      tMap[charT] = charS;
    }
  }
  return true;
};

console.log(isIsomorphic("foo", "bar"));
