// - Problem link : https://leetcode.com/problems/find-the-difference/description/?envType=problem-list-v2&envId=string
// - Date : 23/07/2025
// - Difficulty: Easy
// - Approach : Hash Table , String , Bit Manipulation , Sorting

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let result =0;
    for(let char of s){
        result ^= char.charCodeAt(0);
    }
    for(let char of t){
        result ^= char.charCodeAt(0);
    }
    return String.fromCharCode(result);
};

console.log(findTheDifference('abcde','abcdef'));
