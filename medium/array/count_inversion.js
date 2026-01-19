// - Problem link : https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1
// - Date : 19/01/2026
// - Difficulty: medium
// - Approach :Array 


/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    inversionCount(arr) {
        let temp = Array(arr.length)
        return mergeSort(arr, temp , 0 , arr.length -1)
    }
}

const mergeSort = (arr , temp , left , right)=>{
    let invCount = 0;
    if(left < right){
        let mid = Math.floor((left+right)/2);
        invCount += mergeSort(arr , temp , left , mid);
        invCount += mergeSort(arr, temp , mid+1 , right);
        invCount += merge(arr , temp , left , mid , right);
    }
    return invCount;
}

const merge = (arr , temp , left , mid , right)=>{
    let i = left;
    let j = mid+1;
    let k = left;
    let invCount = 0;

    while(i <= mid && j<= right){
        if(arr[i] <= arr[j]){
            temp[k++] = arr[i++];
        }
        else{
            temp[k++] = arr[j++];
            invCount += (mid -i +1);
        }
    }

    while (i <= mid) temp[k++] = arr[i++];
    while (j <= right) temp[k++] = arr[j++];
    for(let x = left; x<=right; x++){
        arr[x] = temp[x];
    }
    return invCount;
}

const sol = new Solution();

console.log(sol.inversionCount([10, 10, 10]));
