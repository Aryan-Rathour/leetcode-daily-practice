// - Problem link : https://leetcode.com/problems/next-greater-element-i/description/
// - Date : 06/08/2025
// - Difficulty: Easy
// - Approach : Array , Stack

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let result = [];
    for(let num of nums1){
        for(let j=0; j<nums2.length; j++){
            if(num === nums2[j]){
                let found = false;
                for(let k=j+1; k<nums2.length; k++){
                    if (nums2[j] < nums2[k] ){
                        result.push(nums2[k]);
                        found=true;
                        break;
                    }
                }
                if(found === false){
                    result.push(-1);
                }
            }
        }
    }
    return result;
};

console.log(nextGreaterElement([4,1,2] , [1,3,4,2]));
