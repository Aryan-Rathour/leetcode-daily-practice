// - Problem link : https://leetcode.com/problems/middle-of-the-linked-list/description/
// - Date : 31/08/2025
// - Difficulty: Easy
// - Approach : Linked List , Two Pointers



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
    this.val=val;
    this.next=this.null;
}

const arrToList = (arr)=>{
    let dummy = new ListNode(0);
    let curr = dummy;
    for(let num of arr){
        curr.next = new ListNode(num);
        curr = curr.next;
    }
    return dummy.next;
};



var middleNode = function(head) {
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
    
};

console.log(middleNode(arrToList([1,2,3,4,5])));
