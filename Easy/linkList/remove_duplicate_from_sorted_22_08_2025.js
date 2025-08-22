// - Problem link : https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
// - Date : 22/08/2025
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

function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

let arrToList = (arr)=>{
    let dummy = new ListNode(0);
    let curr = dummy;
    for(let num of arr){
         curr.next = new ListNode(num);
         curr = curr.next;
    }
    return dummy.next
}

let listToArr = (head) =>{
    let arr =[];
    while(head){
        arr.push(head.val);
        head = head.next;
    }
    return arr;
}

var deleteDuplicates = function(head) {
    if(!head || !head.next) return head;

    head.next= deleteDuplicates(head.next);
    return head.val === head.next.val ? head.next : head;
};

let head = arrToList([1,1,2]);
let newHead = deleteDuplicates(head)

console.log(listToArr(newHead));
