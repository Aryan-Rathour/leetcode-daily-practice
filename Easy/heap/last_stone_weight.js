// - Problem link : https://leetcode.com/problems/last-stone-weight/description/
// - Date : 06/09/2025
// - Difficulty: Easy
// - Approach : Heap

/**
 * @param {number[]} stones
 * @return {number}
 */


class MaxHeap{
    constructor(){
        this.heap = [];
    }

    size(){
        return this.heap.length;
    }

    peek(){
        return this.size() ? this.heap[0] : null;
    }

    push(val){
        this.heap.push(val);
        this._shiftUp(this.size() - 1)
    }

    pop(){
        let n = this.heap.length;
        if(n == 0) return null;
        if(n == 1) return this.heap.pop();

        let max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._shiftDown(0);
        return max;
    }

    _shiftUp(idx){
        while(idx > 0){
            let parent = Math.floor((idx - 1) /2);
            if(this.heap[parent] >= this.heap[idx]) break;
            [this.heap[parent] , this.heap[idx]] = [this.heap[idx] , this.heap[parent]];
            idx = parent;
        }
    }

    _shiftDown(idx){
        let n = this.size();
        while(true){
            let left = (2 * idx) + 1;
            let right = (2 * idx) + 2;
            let largest = idx;

            if(left < n && this.heap[left] > this.heap[largest]){
                largest = left;
            }
            if(right < n && this.heap[right] > this.heap[largest]){
                largest = right;
            }

            if(largest == idx) break;

            [this.heap[idx] , this.heap[largest]] = [this.heap[largest] , this.heap[idx]]
            idx = largest;
        }
    }
}

var lastStoneWeight = function(stones) {
    let heap = new MaxHeap();

    for(let s of stones){
        heap.push(s)
    }

    while(heap.size() > 1){
        let y = heap.pop();
        let x = heap.pop();

        if(y !== x){
            heap.push(y -x);
        }

    }
    return heap.size() ? heap.peek() : 0;
};

console.log(lastStoneWeight([2,7,4,1,8,1]));