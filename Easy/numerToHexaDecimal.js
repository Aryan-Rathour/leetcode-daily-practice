// - Problem : https://leetcode.com/problems/convert-a-number-to-hexadecimal/description/
// - Date of solution : 24/07/2025
// - Difficulty: Easy
// - Approach : Math , String , Bit Manipulation

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if(num === 0) return '0';
    let hex = '0123456789abcdef'
    let result = '';
    for(let i=0 ; i< 8 && num !==0; i++){
        let las4Bits = num & 15;
        result = hex[las4Bits] + result;
        num >>>=4;
    }
    return result;
};
console.log(toHex(24));
