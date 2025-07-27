// - Problem link : https://leetcode.com/problems/fizz-buzz/
// - Date : 25/07/2025
// - Difficulty: Easy
// - Approach :Math , String , Simulation

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let result =[];

    for(let i=1; i<=n; i++){
        console.log("hbhjabj");
        
        if(i % 3 == 0 && i % 5 == 0) result.push('FizzBuzz')
        else if(i % 3 == 0) result.push('Fizz')
        else if(i % 5 == 0) result.push('Buzz')
        else result.push(i.toString())
    }
    return result;
};

console.log(fizzBuzz(15));
