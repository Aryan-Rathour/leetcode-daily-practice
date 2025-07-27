// - Problem link : https://leetcode.com/problems/is-subsequence/description/
// - Date : 24/07/2025
// - Difficulty: Easy
// - Approach : Two Pointers , String , Dynamic Programming

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i=0;
    let j=0;
    while(i<s.length && j<t.length){
        if(s[i] == t[j]) i++;
        j++;
    }
    return i===s.length;
};

console.log(isSubsequence('abc','ahbgdc'));
