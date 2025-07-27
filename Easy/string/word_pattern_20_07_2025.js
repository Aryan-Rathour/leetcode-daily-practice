// - Problem link : https://leetcode.com/problems/word-pattern/
// - Date : 20/07/2025
// - Difficulty: Easy
// - Approach : Hash Table , String

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let words = s.split(' ');
    if (pattern.length !== words.length) return false;
    let charToWord = {};
    let wordToChar = {};
    for (let i=0;i<pattern.length;i++){
        let char = pattern[i];
        let word = words[i];
        if(charToWord[char]){
            if (charToWord[char] !== word ) return false;
        }
        else{
            if(wordToChar[word]){
                if (wordToChar[word] !== char ) return false ;
            }
            charToWord[char]=word;
            wordToChar[word]=char;
        }
    }
    return true;
};

console.log(wordPattern("abba", "dog cat cat fish"))