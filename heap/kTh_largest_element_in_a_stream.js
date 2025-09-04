// - Problem link : https://leetcode.com/problems/kth-largest-element-in-a-stream/description/
// - Date : 04/09/2025
// - Difficulty: Easy
// - Approach : Heap


/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.minHeap = [];

    this._heapifyUp = function(){
        let idx = this.minHeap.length - 1;
        while(idx > 0){
            let parent = Math.floor((idx -1)/2);
            if(this.minHeap[parent] > this.minHeap[idx]){
                [this.minHeap[parent] , this.minHeap[idx]] = [this.minHeap[idx] , this.minHeap[parent]];
                idx = parent;
            }
            else{
                break;
            }
        }
    }

    this._heapifyDown = function(){
        let idx =0;
        while(2 * idx + 1 < this.minHeap.length){
            let left = 2 * idx +1;
            let right = 2 * idx +2;
            let smallest = left;

            if(right < this.minHeap.length && this.minHeap[right] < this.minHeap[left]){
                smallest = right;
            }

            if(this.minHeap[idx] > this.minHeap[smallest]){
                [this.minHeap[idx] , this.minHeap[smallest]] = [this.minHeap[smallest] , this.minHeap[idx]];
                idx = smallest;
            }
            else break;
        }
    }

    this._push = function(val){
        this.minHeap.push(val);
        this._heapifyUp();
    }

    this._pop = function(){
        if(this.minHeap.length === 1) return this.minHeap.pop();
        const root = this.minHeap[0];
        this.minHeap[0] = this.minHeap.pop();
        this._heapifyDown();
        return root;
    }

    this._peek = function(){
        return this.minHeap[0];
    }

    for(let num of nums){
        this.add(num);
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if(this.minHeap.length < this.k){
        this._push(val);
    }
    else if (val > this._peek()){
        this._pop();
        this._push(val);
    }
    return this._peek();
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

let obj = new KthLargest(3, [4, 5, 8, 2]);
console.log(obj.add(3));  // 4
console.log(obj.add(5));  // 5
console.log(obj.add(10)); // 5
console.log(obj.add(9));  // 8
console.log(obj.add(4));  // 8