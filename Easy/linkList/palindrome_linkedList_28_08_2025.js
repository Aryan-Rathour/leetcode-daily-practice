// - Problem link : https://leetcode.com/problems/palindrome-linked-list/
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
 * @return {boolean}
 */

function ListNode(val){
    this.val = val;
    this.next = null;
}

const arrLinked_list = (arr)=>{
    let dummy = new ListNode(0);
    let curr = dummy;
    for(let num of arr){
         curr.next = new ListNode(num);
         curr = curr.next;
    }
    return dummy.next;
}
var isPalindrome = function(head) {
    if(!head || !head.next) return true;
    let slow = head ,  fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    let secondHalf = reverseList(slow);

    let p1 = head , p2=secondHalf;

    while(p2){
        if(p1.val !== p2.val) return false;
        p1 = p1.next;
        p2 = p2.next;
    }

    return true;


    function reverseList(head){
        let prev = null , curr = head;
        while(curr){
            let next = curr.next;
            curr.next=prev;
            prev=curr;
            curr = next
        }
        return prev;
    }


};


console.log(isPalindrome(arrLinked_list([1,2,2])));
