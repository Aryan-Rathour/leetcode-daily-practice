// - Problem link : https://www.geeksforgeeks.org/problems/level-order-traversal/1
// - Date : 01/04/2026
// - Difficulty: medium
// - Approach :Tree



// A binary tree Node
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}


class Solution {
    levelOrder(root) {
        // code here
       if(!root) return [];

       let queue = [];
       let result = [];

       queue.push(root);
       while(queue.length > 0){

        let node = queue.shift();

        result.push(node.data);

        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
       }

       return result;
    }
}

let root = new Node(10);

root.left = new Node(50);

root.right = new Node(20);

const s = new Solution();

console.log(s.levelOrder(root));
