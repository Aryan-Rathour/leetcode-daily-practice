// - Problem link : https://leetcode.com/problems/linked-list-cycle/
// - Date : 23/08/2025
// - Difficulty: Easy
// - Approach : Linked List , Recursion

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

function ListNode(val){
    this.val = val;
    this.next=null;
};

let arrToList =(arr)=>{
    let dummy = new ListNode(0);
    let curr = dummy;
    for(let num of arr){
        curr.next = new ListNode(num);
        curr = curr.next
    }
    return dummy.next;
}

var hasCycle = function(head) {

    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast){
            return true;
        }
    }
    return false;
};

let linkedList = arrToList([3,2,0,-4])

console.log(hasCycle(linkedList));
