// - Problem link : https://leetcode.com/problems/minimum-number-game/description/
// - Date : 18/09/2025
// - Difficulty: Easy
// - Approach : Array , Sorting , Heap



/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let count = new Array(101).fill(0);
    for(let num of nums){
        count[num]++;
    };

    let arr = [];
    let i=1;
    while(arr.length < nums.length){

        while(count[i] === 0) i++;
        let alice = i;
        count[i]--;

        while(count[i] ===0) i++;
        let bob = i;
        count[i]--;

        arr.push(bob);
        arr.push(alice);
    }
    return arr;
};

console.log(numberGame([5,4,2,3]));
