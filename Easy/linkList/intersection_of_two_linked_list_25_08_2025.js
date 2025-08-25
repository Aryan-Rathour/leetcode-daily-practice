// - Problem link : https://leetcode.com/problems/intersection-of-two-linked-lists/
// - Date : 25/08/2025
// - Difficulty: Easy
// - Approach : Linked List , Two Pointer

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

function ListNode(val){
    this.val = val;
    this.next = null;
}

function ArrayToList(arr){
    let dummy = new ListNode(0);
    let curr = dummy;
    for( let num of arr){
        curr.next = new ListNode(num);
        curr = curr.next;
    }
    return dummy.next;
}

var getIntersectionNode = function(headA, headB) {
    let pA = headA;
    let pB = headB;
    while(pA !== pB){
        pA = (pA == null) ? headB : pA.next;
        pB = (pB == null) ? headA : pB.next;     

    }
    return pA;
};

let common = ArrayToList([8,4,5])

let headA = ArrayToList([4 , 1]);
let tempA = headA;
while (tempA.next) tempA = tempA.next;
tempA.next = common;

let headB = ArrayToList([5, 6, 1]);
let tempB = headB;
while(tempB.next) tempB = tempB.next;
tempB.next = common;

let result = getIntersectionNode(headA , headB)

if(result){
    console.log("intersection at" , result.val);
    
}else{
    console.log(null)
}