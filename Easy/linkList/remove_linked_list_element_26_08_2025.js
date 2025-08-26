// - Problem link : https://leetcode.com/problems/remove-linked-list-elements/
// - Date : 26/08/2025
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
 * @param {number} val
 * @return {ListNode}
 */

function ListNode(val){
    this.val=val;
    this.next=null;
}

let ArrayToList = (arr)=>{
    let dummy = new ListNode(0);
    let curr = dummy;
    for(let num of arr){
        curr.next = new ListNode(num);
        curr = curr.next;
    }
    return dummy.next;
}

var removeElements = function(head, val) {

    let dummy = new ListNode(0 , head);
    let curr = dummy;

    while(curr.next !== null){
        if(curr.next.val == val){
            curr.next = curr.next.next;
        }
        else{
            curr = curr.next;
        }
    }
    return dummy.next;
};

let printResult = (head)=>{
    let result =[];
    while(head){
        result.push(head.val);
        head = head.next;
    }
    return result;
}

let head = ArrayToList([1,2,6,3,4,5,6])

console.log(printResult(removeElements(head , 6)));


