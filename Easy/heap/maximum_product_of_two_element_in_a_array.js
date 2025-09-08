// - Problem link : https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
// - Date : 08/09/2025
// - Difficulty: Easy
// - Approach : Heap

/**
 * @param {number[]} nums
 * @return {number}
 */

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this._shiftUp(this.size() - 1);
  }

  size() {
    return this.heap.length;
  }

  _shiftUp(idx) {
    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);
      if (this.heap[parent] >= this.heap[idx]) break;
      else {
        [this.heap[parent], this.heap[idx]] = [
          this.heap[idx],
          this.heap[parent],
        ];
      }
      idx = parent;
    }
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
    return max;
  }

  shiftDown(idx) {
    let n = this.heap.length;
    while (true) {
      let left = Math.floor(2 * idx + 1);
      let right = Math.floor(2 * idx + 2);
      let largest = idx;

      if (left < n && this.heap[left] > this.heap[largest]) largest = left;
      if (right < n && this.heap[right] > this.heap[largest]) largest = right;
      if (this.heap[largest] == this.heap[idx]) break;
      [this.heap[largest], this.heap[idx]] = [
        this.heap[idx],
        this.heap[largest],
      ];
      idx = largest;
    }
  }
}
var maxProduct = function (nums) {
  let heap = new MaxHeap();
  for (let num of nums) {
    heap.push(num)
  }
  let max1 = heap.pop();
  let max2 = heap.pop();
  return (max1 - 1) * (max2 -1);
};

console.log(maxProduct([3, 4, 5, 2]));
