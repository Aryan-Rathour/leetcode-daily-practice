// - Problem link : https://leetcode.com/problems/longest-harmonious-subsequence/description/
// - Date : 13/08/2025
// - Difficulty: Easy
// - Approach : Array , Hash Table

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  let map = {};
  for (let num of nums){
    map[num] = (map[num] || 0) + 1;
  }

  let uniqueArray = Object.keys(map).map(Number).sort((a,b)=> a-b);
  let maxArrayLen = 0
  for(let i=0; i< uniqueArray.length -1; i++){
    if(uniqueArray[i+1] - uniqueArray[i] === 1){
        let totalOccurance = map[uniqueArray[i]] + map[uniqueArray[i+1]];
         maxArrayLen = Math.max(maxArrayLen , totalOccurance)
    }
  }
  return maxArrayLen;
};

console.log(findLHS([1,2,3,4]));
