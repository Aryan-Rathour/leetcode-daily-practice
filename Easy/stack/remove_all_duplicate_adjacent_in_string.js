// - Problem link : https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/
// - Date : 03/08/2025
// - Difficulty: Easy
// - Approach : String , Stack

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = [];
    for(char of s){
        if(stack[stack.length -1] == char){
            stack.pop();
        }
        else{
            stack.push(char)
        }
    }
    return stack.join("");
};

console.log(removeDuplicates("abbaca"));
