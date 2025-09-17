// - Problem link : https://leetcode.com/problems/take-gifts-from-the-richest-pile/description/
// - Date of solution : 17-09-2025
// - Difficulty: Easy
// - Approach : Array , Maxheap


class MaxHeap{
    constructor(){
        this.heap=[];
    }

    size(){
        return this.heap.length;
    }

    push(val){
        this.heap.push(val)
        this.heapifyUp(this.size() -1);
    }

    heapifyUp(idx){
        while(idx > 0){
            let parent = Math.floor((idx -1)/2);
            if(this.heap[parent] > this.heap[idx]) break;
            [this.heap[parent] , this.heap[idx]] = [this.heap[idx] , this.heap[parent]];
            idx = parent
        }
    }

    pop(){
        if(this.size() ==0) return null;
        if(this.size() == 1) return this.heap.pop();
        let root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return root;
    }

    heapifyDown(idx){
        let n = this.size();
        while(true){
            let left = (2 * idx ) + 1;
            let right = (2 * idx) + 2;
            let largest = idx;
            if(left < n && this.heap[left] > this.heap[largest]) largest = left;
            if(right < n && this.heap[right] > this.heap[largest]) largest = right;
            if(this.heap[largest] !== this.heap[idx]){
                [this.heap[largest] , this.heap[idx]] = [this.heap[idx] , this.heap[largest]];
                idx = largest;
            }
            else break;
        }
    }
}


/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    let heap = new MaxHeap();
    for(let gift of gifts){
        heap.push(gift);
    }

    for(let i=1; i<=k; i++){
        let max= heap.pop();
        let maxRoot = Math.floor(Math.sqrt(max));
        heap.push(maxRoot);
    }

    let sum =  heap.heap.reduce((acc, num) => acc + num , 0 );

    return sum;
};

console.log(pickGifts([25,64,9,4,100] , 4));
