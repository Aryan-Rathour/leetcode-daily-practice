// - Problem link : https://leetcode.com/problems/reverse-linked-list/description/
// - Date : 28/08/2025
// - Difficulty: Easy
// - Approach : Linked List , Recursion

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val){
    this.val = val;
    this.next = null;
}

const arrToList = (arr) =>{
    let dummy = new ListNode(0);
    let curr = dummy;
    for(let num of arr){
         curr.next = new ListNode(num);
         curr = curr.next;
    }
    return dummy.next;
}

const listToArray = (head)=>{
    let result =[];
    while(head){
        result.push(head.val);
        head = head.next;
    }
    return result;
}
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    let next = null;

    while(curr !== null){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};



console.log(listToArray(reverseList(arrToList([1,2,3,4,5]))));
