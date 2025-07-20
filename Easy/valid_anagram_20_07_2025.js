// - Problem link : https://leetcode.com/problems/valid-anagram/
// - Date : 20/07/2025
// - Difficulty: Easy
// - Approach : String , Hash table

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
   if (s.length !== t.length) return false;
   let map = {};
   for (let char of s){
    map[char] = (map[char] || 0) +1 ;
   }
   for (let char of t){
    if(!map[char]){
        return false;
    }
    map[char]--;
   }
   return true;
};

console.log(isAnagram("rat","car"));
