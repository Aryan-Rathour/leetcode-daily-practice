// - Problem link : https://leetcode.com/problems/clear-digits/description/
// - Date : 08/08/2025
// - Difficulty: Easy
// - Approach :String , Stack

/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let stack = [];
    for(let char of s){
        if(!isNaN(char)){
            stack.pop();
        }
        else{
            stack.push(char)
        }
    }
    return stack.join();
};

console.log(clearDigits("cb34sfjf4"));
