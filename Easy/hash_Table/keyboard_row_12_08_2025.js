// - Problem link : https://leetcode.com/problems/keyboard-row/description/
// - Date : 12/08/2025
// - Difficulty: Easy
// - Approach : Array , Hash Table

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let row1 = "qwertyuiop";
    let row2 = "asdfghjkl";
    let row3 = "zxcvbnm"
    let result = [];

    for(let word of words){
        let lowerWord = word.toLowerCase();

        let targetRow = row1.includes(lowerWord[0]) ? row1 :
            row2.includes(lowerWord[0]) ? row2 :
            row3;

        let allSame = [...lowerWord].every((ch)=> targetRow.includes(ch));

        if(allSame){
            result.push(word);
        }
    }
    return result;
};

console.log(findWords(["Hello","Alaska","Dad","Peace"]));
