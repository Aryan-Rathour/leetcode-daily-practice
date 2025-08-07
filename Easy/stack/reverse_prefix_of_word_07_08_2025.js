// - Problem link : https://leetcode.com/problems/reverse-prefix-of-word/description/
// - Date : 07/08/2025
// - Difficulty: Easy
// - Approach :string , Stack

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let idx = word.indexOf(ch);

    if(idx === -1){
        return word;
    }

    let prefix = word.substring(0, idx+1).split('').reverse().join('');

    let suffix = word.substring(idx+1);

    return prefix + suffix
    
};

console.log(reversePrefix("abcdefd" , "d"));
