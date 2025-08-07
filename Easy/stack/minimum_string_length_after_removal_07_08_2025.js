// - Problem link : https://leetcode.com/problems/minimum-string-length-after-removing-substrings/description/
// - Date : 07/08/2025
// - Difficulty: Easy
// - Approach :string , Stack

/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    let stack = [];
    for ( let ch of s){
        if ((stack[stack.length -1] == "A" && ch == "B") || (stack[stack.length - 1] == "C" && ch == "D")){
            stack.pop()
        }
        else {
            stack.push(ch)
        }
    }
    return stack.length;
};

console.log(minLength("ABFCACDB"));
