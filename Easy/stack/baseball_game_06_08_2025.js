// - Problem link : https://leetcode.com/problems/baseball-game/
// - Date : 08/08/2025
// - Difficulty: Easy
// - Approach :Array , Stack


/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let stack =[];
    for(let op of operations){
        if(!isNaN(op)){
            stack.push(parseInt(op))
        }
        else if(op === "C"){
            stack.pop();
        }
        else if(op === "D"){
            stack.push(2 * stack[stack.length -1])
        }
        else if(op === "+"){
            stack.push(stack[stack.length - 1] + stack[stack.length -2 ])
        }
    }
    return stack.reduce((a,b)=> a+b , 0);
    
};

console.log(calPoints(["5","2","C","D","+"]));
