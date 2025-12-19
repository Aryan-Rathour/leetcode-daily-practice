// - Problem link : https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/
// - Date : 19/12/2025
// - Difficulty: Easy
// - Approach :Array 


const reverseArray = (arr)=>{
    let left = 0;
    let right = arr.length -1;

    while(left < right){
        let temp = arr[left]
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }
    return arr;
};

console.log(reverseArray([1, 4, 3, 2, 6, 5] ))
