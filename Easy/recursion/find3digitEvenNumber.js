// - Problem link : https://leetcode.com/problems/finding-3-digit-even-numbers/
// - Date : 30/11/2025
// - Difficulty: Easy
// - Approach : recursion

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    let freq = Array(10).fill(0)
    for(let d of digits){
        freq[d]++;      
    }
    const result=[];

    for(let A=1; A <=9; A++){
        if(freq[A] === 0) continue;
            freq[A]--;

        for(let B=0; B<=9; B++){
            if(freq[B] ===0) continue;
            freq[B]--;

            for(let C of [0,2,4,6,8]){
                if(freq[C] > 0){
                    result.push(100*A + 10*B + C)
                }
            }
            freq[B]++;
        }
        freq[A]++;
    }
    return result.sort((a,b)=>a-b)

};

console.log(findEvenNumbers([2,1,3,0]));
