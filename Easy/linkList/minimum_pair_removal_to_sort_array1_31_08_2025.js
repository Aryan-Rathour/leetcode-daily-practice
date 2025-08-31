/**
 * @param {number[]} nums
 * @return {number}
 */

function ListNode(val){
   this.val=val;
   this.next=null;
}

const arrToList = (arr)=>{
    let dummy = new ListNode(0);
    let curr = dummy;
    for(let num of arr){
        curr.next=new ListNode(num);
        curr = curr.next
    }
    return dummy.next;
}

var minimumPairRemoval = function(nums) {
    const head = arrToList(nums);
    let ops =0;
    while(!isNonDecreasing(head)){
        let [node , nextNode ] = findMinPair(head);
         node.val = node.val + nextNode.val;
        node.next= nextNode.next
        ops++
    }
    return ops;
};  

const findMinPair = (head) =>{
    let curr = head;
    let minPair = Infinity; minNode =null;
    while(curr && curr.next){
        let sum = curr.val + curr.next.val;
        if(sum<minPair){
            minPair = sum;
            minNode=curr;
        }
        curr = curr.next;
    }
    return [minNode , minNode.next]
};

const isNonDecreasing =(head)=>{
    let curr = head;
    while(curr && curr.next){
        if(curr.val > curr.next.val) return false;
        curr = curr.next;
    }
    return true;
}