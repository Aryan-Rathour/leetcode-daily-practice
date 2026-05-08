// - Problem link : https://www.geeksforgeeks.org/problems/reverse-level-order-traversal/1
// - Date : 03/04/2026
// - Difficulty: easy
// - Approach :Tree


class Node
{
    constructor(x){
        this.data=x;
        this.left=null;
        this.right=null;
    }
}

/**
 * @param {Node} root
 * @return {number[]}
 */
class Solution {
    reverseLevelOrder(root) {
        // code here
        if(!root) return [];

        let result = [];
        let queue = [];

        queue.push(root);
        while(queue.length > 0){
            let node = queue.shift();\.05454544444444444
            result.push(node.data)

            if(node.right) queue.push(node.right);
            if(node.left) queue.push(node.left)
        }

        return result.reverse()
    }
}


let root = new Node(1);
let left = new Node(2);
let right = new Node(3) ;

root.left=left;
root.right=right;

let s = new Solution();

console.log(s.reverseLevelOrder(root));
