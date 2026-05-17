// - Problem link : https://www.geeksforgeeks.org/problems/minimum-element-in-bst/1
// - Date : 17/05/2026
// - Difficulty: Easy
// - Approach :Binary Search tree



// Definition for Node
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

/**
 * @param {Node} root
 * @returns {number}
 */

class Solution {
    minValue(root) {
        // code here
       if(root.data == null) return -1;
       while(root.left !== null){
        root = root.left;
       }
       return root.data
    }
}


let s = new Solution()
let root = new Node(5);

root.left = new Node(4);

root.right = new Node(6);

root.left.left = new Node(3);

root.right.right = new Node(7);

root.left.left.left = new Node(1)

console.log(s.minValue(root));
