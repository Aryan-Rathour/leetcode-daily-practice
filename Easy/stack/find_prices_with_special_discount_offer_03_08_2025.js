// - Problem link : https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/description/
// - Date : 03/08/2025
// - Difficulty: Easy
// - Approach : String , Stack

/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
   let result =[];
   for(let i=0; i<prices.length; i++){
    let discount =0;
    for(let j=i+1; j<prices.length; j++){
        if(prices[i] >= prices[j]){
            discount=prices[j]
            break
        }
    }
    result.push(prices[i] - discount)
   }
   return result;
};

console.log(finalPrices([8,4,6,2,3]));
