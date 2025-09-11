// - Problem link : https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/description/
// - Date : 12/09/2025
// - Difficulty: Easy
// - Approach : Heap

class MaxHeap {
  constructor(compare) {
    this.heap = [];
    this.compare = compare;
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  push(val) {
    this.heap.push(val);
    this.heapifyUp(this.size() - 1);
  }

  heapifyUp(idx) {
    while (idx > 0) {
      let parent = Math.floor((idx -1) / 2);
      if (this.compare(this.heap[parent], this.heap[idx]) > 0) {
        [this.heap[parent], this.heap[idx]] = [
          this.heap[idx],
          this.heap[parent],
        ];
        idx = parent;
      } else break;
    }
  }

  pop() {
    if (this.size() === 0) return null;
    let root = this.peek();
    let last = this.heap.pop();
    if (this.size() > 0) {
      this.heap[0] = last;
      this.heapifyDown(0);
    }
    return root;
  }

  heapifyDown(idx) {
    let n = this.size();
    while (true) {
      let left = 2 * idx + 1;
      let right = 2 * idx + 2;
      let largest = idx;
      if (left < n && this.compare(this.heap[left], this.heap[largest]) > 0)
        largest = left;
      if (right < n && this.compare(this.heap[right], this.heap[largest]) > 0)
        largest = right;

      if (this.heap[largest] !== this.heap[idx]) {
        [this.heap[largest], this.heap[idx]] = [
          this.heap[idx],
          this.heap[largest],
        ];
        idx = largest;
      } else break;
    }
  }
}

/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function (num) {
    let digits = num.toString().split("").map(Number);
    
    let oddHeap = new MaxHeap((a,b) => b-a);
    let evenHeap = new MaxHeap((a,b) => b-a);

    for(let d of digits){
        if(d % 2 ===0) evenHeap.push(d);
        else oddHeap.push(d)
    }

    let result =[];
    for(let d of digits){
        if(d % 2 == 0) result.push(evenHeap.pop())
    else result.push(oddHeap.pop())
    }
    
    return parseInt(result.join("") , 10)

};

console.log(largestInteger(1234));

