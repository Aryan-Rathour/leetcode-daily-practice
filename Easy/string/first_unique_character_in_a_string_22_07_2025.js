// - Problem link : https://leetcode.com/problems/first-unique-character-in-a-string/description/
// - Date : 22/07/2025
// - Difficulty: Easy
// - Approach : Hash Table , String , Queue , Counting

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map();
    for(let char of s){
        map.set(char , (map.get(char) || 0 ) + 1)
    }

    for(let i=0;i<s.length;i++){
        if(map.get(s[i]) === 1){
            return i
        }
    }
    return -1;
};

console.log(firstUniqChar("loveleetcode"));
