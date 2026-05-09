// - Problem link : https://www.geeksforgeeks.org/dsa/create-a-mirror-tree-from-the-given-binary-tree/
// - Date : 09/05/2026
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
    inorderTraversal(root){
        let ans = [];
        let stack = [];

        let curr = root;
        while(curr !== null || stack.length > 0){
            while(curr !== null){
                stack.push(curr);
                curr = curr.left;
            }

            curr = stack.pop();
            ans.push(curr.data)
            curr = curr.right;
        }
        return ans;
    }
}


let s = new Solution();

let root = new Node(1);

root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.right.right = new Node(5);

console.log(s.inorderTraversal(root));
