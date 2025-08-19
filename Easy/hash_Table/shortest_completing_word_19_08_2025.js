// - Problem link : https://leetcode.com/problems/shortest-completing-word/description/
// - Date : 19/08/2025
// - Difficulty: Easy
// - Approach : Array , Hash Table


/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    let map ={};
    let cleanedLicensePlate = licensePlate.replace(/[^A-Za-z]/g, "").toLowerCase();
    for(let char of cleanedLicensePlate){
        map[char] = (map[char] || 0) + 1;
    }

    let result = null;
    
    for(let word of words){
        let charFreq = {};
        for(let char of word){
            charFreq[char] = (charFreq[char] || 0)+ 1;
        }
        
        let valid = true;
        for(let char in map){
            if ((charFreq[char] || 0) < map[char]){
                valid=false;
                break;
            }
        }
        if(valid){
            if(result === null || word.length < result.length){
                result = word;
            }
        }
        
    }
    return result;
};

console.log(shortestCompletingWord("1s3 PSt" , ["step","steps","stripe","stepple"]));
