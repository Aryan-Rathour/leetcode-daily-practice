// - Problem link : https://leetcode.com/problems/fibonacci-number/
// - Date : 28/11/2025
// - Difficulty: Easy
// - Approach : recursion

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n<2) return n;
    let a=0 , b=1;
    for(let i=2;i<=n; i++){
        let temp = a+b;
        a=b;
        b=temp;
    }
    return b;
};

console.log(fib(4))