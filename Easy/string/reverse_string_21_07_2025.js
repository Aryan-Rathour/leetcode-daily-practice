// - Problem link : https://leetcode.com/problems/reverse-string/description/
// - Date : 21/07/2025
// - Difficulty: Easy
// - Approach : Two Pointers , String

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0;
    let right = s.length-1;
    let temp ="";
    while(left<right){
        temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
    return s;
};

console.log(reverseString(["h","e","l","l","o"]));
