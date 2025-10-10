// - Problem link : https://leetcode.com/problems/find-the-town-judge/description/
// - Date : 10/10/2025
// - Difficulty: Easy
// - Approach : Array , Graph

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const trustCount = new Array(n+1).fill(0);
    for(let [a,b] of trust){
        trustCount[a]--;
        trustCount[b]++;
    }

    for(let i=0; i<n; i++){
        if(trustCount[i] === n-1) return i;
    }
    return -1;
};

console.log(findJudge(3, [[1,3],[2,3],[3,1]]));
