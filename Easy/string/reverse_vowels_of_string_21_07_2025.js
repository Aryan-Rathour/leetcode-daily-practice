// - Problem link : https://leetcode.com/problems/reverse-vowels-of-a-string/description/
// - Date : 21/07/2025
// - Difficulty: Easy
// - Approach : Two Pointers , String

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowel = 'aeiouAEIOU';
  let left=0;
      let arr = s.split('');

  let right=s.length-1;
  let temp='';

  while(left<right){
    while(left<right && !vowel.includes(arr[left])) left++; 
    while(left<right && !vowel.includes(arr[right])) right--;

    temp=arr[left];
    arr[left] = arr[right];
    arr[right]= temp;
    left++;
    right--;
  }
  return arr.join('');

};

console.log(reverseVowels("IceCreAm"));

