// - Problem link : https://www.techiedelight.com/preorder-tree-traversal-iterative-recursive/
// - Date : 10/05/2026
// - Difficulty: Easy
// - Approach :Binary tree


class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Solution{
    preorder(root){
        if(root == null) return [];

        let ans = [];
        let stack = [];

        stack.push(root);
        while(stack.length > 0){
            

            let node = stack.pop();
            ans.push(node.data);
            if(node.right){
                stack.push(node.right)
            }
            if(node.left){
                stack.push(node.left);
            }
            
        }
        return ans;
    }
}


let s = new Solution();

let root = new Node(1);

root.left = new Node(2);

root.right = new Node(3);

root.left.left = new Node(4);

root.right.right = new Node(5)

console.log(s.preorder(root));
