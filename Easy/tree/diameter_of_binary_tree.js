// Definition for Node
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


/**
 * @param {Node} root
 * @returns {number}
 */
let ans = 0;
const height = (root) => {
    if(root == null) return 0;

    let leftHeight = height(root.left);
    let rightHeight = height(root.right) ;

    ans = Math.max(leftHeight + rightHeight , ans)
    return Math.max(leftHeight , rightHeight) + 1;
}

class Solution {
    diameter(root) {
        
        height(root);

        return ans;
    }
}


let root = new Node(1);
root.left = new Node(2);

root.right = new Node(3);

root.left.left = new Node(4);

root.right.right = new Node(5);

let s = new Solution();

console.log(s.diameter(root));
