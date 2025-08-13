// - Problem link : https://leetcode.com/problems/distribute-candies/
// - Date : 13/08/2025
// - Difficulty: Easy
// - Approach : Array , Hash Table

/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let candyTypeLen = candyType.length;
    let halfOfCandies = candyTypeLen/2;
    let uniqueCandies = [... new Set(candyType)]
    let uniqueCandiesLen = uniqueCandies.length;
    console.log(halfOfCandies , uniqueCandiesLen);
    
    return Math.min(halfOfCandies , uniqueCandiesLen)
};

console.log(distributeCandies([6,6,6,6]));
