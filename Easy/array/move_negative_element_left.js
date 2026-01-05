// - Problem link : https://www.geeksforgeeks.org/dsa/move-negative-numbers-beginning-positive-end-constant-extra-space/
// - Date : 05/01/2026
// - Difficulty: Easy
// - Approach :Array 

const negative_element_to_left = (arr)=>{
    let sortedArr = arr.sort((a,b)=> a -b);
    return sortedArr;
};

console.log(negative_element_to_left([-12, 11, -13, -5, 6, -7, 5, -3, -6]));
