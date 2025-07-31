// - Problem link : https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
// - Date : 31/07/2025
// - Difficulty: Easy
// - Approach :Array , Dynamic Programming

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxPrice = 0;
    for(let i=0; i<prices.length; i++){
        if(prices[i] < minPrice){
            minPrice = prices[i];
        }else{
            let profit = prices[i] - minPrice;
            if(profit>maxPrice){
                maxPrice=profit
            }
        }
    }
    return maxPrice;
};

console.log(maxProfit([7,1,5,3,6,4]));
