// - Problem link : https://leetcode.com/problems/add-strings/description/
// - Date : 26/07/2025
// - Difficulty: Easy
// - Approach :Math , String , Simulation

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i= num1.length-1;
    let j=num2.length-1;
    let carry = 0;
    let result='';
    while(i >= 0 || j >= 0 || carry > 0){
        let x = i>=0 ? Number(num1[i]) : 0 
        let y = j>=0 ? Number(num2[j]) : 0;
        let sum = x + y + carry;
        carry = Math.floor(sum/10);
        currentDigit = sum%10;
        result = currentDigit + result;

        i--;
        j--;
    }
    return (result);
};

console.log(typeof(addStrings('456','77')));
