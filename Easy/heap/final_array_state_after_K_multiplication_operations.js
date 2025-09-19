// - Problem link : https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/description/
// - Date of solution : 19-09-2025
// - Difficulty: Easy
// - Approach : Heap (Priority Queue)

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  compare(a, b) {
    if (a[0] === b[0]) return a[1] < b[1];
    return a[0] < b[0];
  }

  push(val) {
    this.heap.push(val);
    this.heapifyUp(this.size() - 1);
  }

  heapifyUp(idx) {
    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);
      if (this.compare(this.heap[idx], this.heap[parent])) {
        [this.heap[parent], this.heap[idx]] = [
          this.heap[idx],
          this.heap[parent],
        ];
        idx = parent;
      } else break;
    }
  }

  pop() {
    if (this.size() == 0) return null;
    let root = this.heap[0];
    let last = this.heap.pop();
    if (this.size() > 0) {
      this.heap[0] = last;
      this.heapifyDown(0);
    }

    return root;
  }

  heapifyDown(idx) {
    let n = this.heap.length;
    while (true) {
      let left = 2 * idx + 1;
      let right = 2 * idx + 2;
      let smallest = idx;
      if (left < n && this.compare(this.heap[left], this.heap[smallest]))
        smallest = left;
      if (right < n && this.compare(this.heap[right], this.heap[smallest]))
        smallest = right;
      if (this.heap[smallest] !== this.heap[idx]) {
        [this.heap[smallest], this.heap[idx]] = [
          this.heap[idx],
          this.heap[smallest],
        ];
        idx = smallest;
      } else break;
    }
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {
  const heap = new MinHeap();

  for (let i = 0; i < nums.length; i++) {
    heap.push([nums[i], i]);
  }

  for (let i = 0; i < k; i++) {
    let [val, idx] = heap.pop();
    val = val * multiplier;
    nums[idx] = val;
    heap.push([val, idx]);
  }

  return nums;
};
