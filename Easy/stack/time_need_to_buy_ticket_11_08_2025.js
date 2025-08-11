// - Problem link : https://leetcode.com/problems/time-needed-to-buy-tickets/description/
// - Date : 11/08/2025
// - Difficulty: Easy
// - Approach : Array , Queue

/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
    let time =0;
    while(tickets[k] > 0){
        for(let i=0; i<tickets.length; i++){
            if (tickets[k] == 0) return time;
            if(tickets[i] !==0){
                tickets[i]--;
                time++;
            }
        }
    }
    return time;
};

console.log(timeRequiredToBuy([5, 1, 1, 1], 0));
