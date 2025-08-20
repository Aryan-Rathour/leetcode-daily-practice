// - Problem link : https://leetcode.com/problems/merge-two-sorted-lists/description/
// - Date : 20/08/2025
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(value , next = null){
        this.value=value;
        this.next=next;
    }

function arrToLinkList(arr){
    let dummy = new ListNode(-1);
    let current = dummy;
    for(let num of arr){
        current.next= new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

function listToArray(head){
    let result=[];
    let current = head;
    while(current){
        result.push(current.value);
        current = current.next;
    }
    return result;
}

var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1);
    let current = dummy;
    while(list1 !== null && list2 !== null){
        if(list1.value <= list2.value){
            current.next = list1;
            list1 = list1.next;
        }
        else{
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    if (list1 !== null) current.next = list1;
    if (list2 !== null) current.next = list2;
    return dummy.next;
};

console.log(listToArray(mergeTwoLists(arrToLinkList([1,2,4]) , arrToLinkList([1,3,4]))));
