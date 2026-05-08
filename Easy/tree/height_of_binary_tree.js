
// Definition for Node
class Node{
    constructor(val){
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
    height(root) {
        if(root == null) return 0;

        let leftHight = this.height(root.left);
        let rightHeight = this.height(root.right) + 1;
        
        return Math.max(leftHight,rightHeight)
    }
}

let root = new Node(1);

root.left = new Node(2);

root.right = new Node(3);

root.left.left = new Node(4);

root.right.right= new Node(5)

let s = new Solution();

console.log(s.height(root));

