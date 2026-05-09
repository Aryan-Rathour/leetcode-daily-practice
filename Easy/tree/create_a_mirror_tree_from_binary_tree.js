// - Problem link : https://www.geeksforgeeks.org/dsa/create-a-mirror-tree-from-the-given-binary-tree/
// - Date : 09/05/2026
// - Difficulty: medium
// - Approach :Binary tree

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Solution {
  mirror(root) {
    if (root == null) return;

   this.mirror(root.left);
   this.mirror(root.right);

    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    return root;
  }
}

let s = new Solution();

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.right.right = new Node(5);

console.log(s.mirror(root));
