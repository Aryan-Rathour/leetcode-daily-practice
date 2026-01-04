// - Problem link : https://www.geeksforgeeks.org/problems/kth-smallest-element5635/1
// - Date : 04/01/2026
// - Difficulty: Easy
// - Approach : Array

const kTh_smallest = (arr , k)=>{
     let SortedArr = arr.sort((a,b)=> a-b);
     return SortedArr[k-1];
};

console.log(kTh_smallest([10, 5, 4, 3, 48, 6, 2, 33, 53, 10], 4));
