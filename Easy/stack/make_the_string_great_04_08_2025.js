// - Problem link : https://leetcode.com/problems/make-the-string-great/description/
// - Date : 04/08/2025
// - Difficulty: Easy
// - Approach : String , Stack

/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let stack = [];
    for(let char of s){
        let last = stack[stack.length-1]
        if(last && Math.abs(char.charCodeAt(0) - last.charCodeAt(0) ) == 32){
            stack.pop();
            char++
        }
        else{
            stack.push(char)
        }
    }
    return stack.join('')
};

console.log(makeGood("abBAcC"));
