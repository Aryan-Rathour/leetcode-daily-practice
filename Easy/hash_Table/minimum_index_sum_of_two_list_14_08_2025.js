// - Problem link : https://leetcode.com/problems/minimum-index-sum-of-two-lists/description/
// - Date : 14/08/2025
// - Difficulty: Easy
// - Approach : Array , Hash Table

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let map = {};
  for (let i = 0; i < list1.length; i++) {
    map[list1[i]] = i;
  }

  let minSum = Infinity;
  let result = [];

  for (let j = 0; j < list2.length; j++) {
    if (map.hasOwnProperty(list2[j])) {
      let sum = j + map[list2[j]];
    

    if (sum < minSum) {
      minSum = sum;
      result = [list2[j]];
    }
    else if(sum === minSum){
        result.push(list2[j])
    }
  }
}
  return result
};

console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    [
      "Piatti",
      "The Grill at Torrey Pines",
      "Hungry Hunter Steakhouse",
      "Shogun",
    ]
  )
);
