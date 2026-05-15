// - Problem link : https://www.geeksforgeeks.org/problems/search-a-node-in-bst/1
// - Date : 15/05/2026
// - Difficulty: Easy
// - Approach :Binary Search Tree


class Node{
    constructor(data){
        this.data= data;
        this.left= null;
        this.right= null;
    }
}

class Solution{
    search(root , key){
        if(root == null) return false;
        while(root !== null){
            if(root.data == key) return true;
            else if(root.data > key){
                root= root.left;
            }
            else{
                root = root.right
            }
        }
        return false
    }
}


let root = new Node(6);

root.left= new Node(2);
root.right = new Node(8);

root.right.left = new Node(7);

root.right.right = new Node(9);

let s = new Solution();

console.log(s.search(root , 9));
