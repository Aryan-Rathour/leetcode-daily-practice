// - Problem link : https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/description/
// - Date : 31/08/2025
// - Difficulty: Easy
// - Approach : Linked List , Math

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

function ListNode(val){
    this.val = val;
    this.next = null;
}

const arrToList = (arr)=>{
    let dummy = new ListNode(0);
    let curr = dummy;
    for(let num of arr){
        curr.next = new ListNode(num);
        curr = curr.next;
    }
    return dummy.next;
}

var getDecimalValue = function(head) {
    let decimal = 0;
    let curr = head;
    while(curr !== null){
        decimal = decimal * 2 + curr.val;
        curr = curr.next;
    };
    return decimal;
};

console.log(getDecimalValue(arrToList([1,0,1])));
