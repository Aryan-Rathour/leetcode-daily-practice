// - Problem link : https://leetcode.com/problems/happy-number/description/?envType=problem-list-v2&envId=hash-table
// - Date : 26/08/2025
// - Difficulty: Easy
// - Approach :Hash Table , Math , Two Pointers


/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
    function getNext(n){
        let sum = 0;
        while(n>0){
            let digit= n % 10;
        sum += digit * digit;
        n = Math.floor(n/10);
        }
        return sum;
    }

    let seen = new Set();

    while(n !==1 && !seen.has(n)){
        seen.add(n);
        n = getNext(n)
    }

    return n ===1;
    
};

console.log(isHappy(19));
