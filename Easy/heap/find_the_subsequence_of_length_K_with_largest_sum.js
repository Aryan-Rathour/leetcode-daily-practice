// - Problem link : https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/description/
// - Date : 09/09/2025
// - Difficulty: Easy
// - Approach : Heap


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */


class MinHeap{
    constructor(compare){
        this.data=[];
        this.compare = compare ;
    }

    size(){
        return this.data.length;
    }

    peek(){
        return this.data[0];
    }

    push(val){
        this.data.push(val);
        this.shiftUp(this.size() -1);
    }

    shiftUp(idx){
        while(idx >0){
            let parent = Math.floor((idx -1) /2);
            if(this.data[parent] < this.data[idx]) break;
            if (this.compare(this.data[idx], this.data[parent]) < 0) {
            [this.data[parent] , this.data[idx]] = [this.data[idx] , this.data[parent]];
            idx=parent;
            }
        }
    }

    pop(){
        if(this.size() == 0) return null;
        if(this.size() == 1 ) return this.pop();
        let root = this.data[0];
        this.data[0] = this.data.pop();
        this.shiftDown(0);
        return root;
    }

    shiftDown(idx){
        let n = this.size();
        while(true){
            let left = (2 * idx) +1;
            let right = (2 * idx) +2;
            let smallest = idx;
            if(left < n && this.compare(this.data[left] , this.data[smallest])<0) smallest= left;
            if(right < n && this.compare(this.data[right] , this.data[smallest])<0) smallest = right;
            if(this.data[smallest] == this.data[idx]) break;
            [this.data[smallest] , this.data[idx]] =[this.data[idx] , this.data[smallest]];
            idx = smallest;
        }
    }
}


var maxSubsequence = function(nums, k) {


    const heap = new MinHeap((a, b) => a[0] - b[0]);

   nums.forEach((val , idx)=>{
    heap.push([val,idx])
    if(heap.size() > k) heap.pop();
   })

   let arr=[];
   while(heap.size() > 0) arr.push(heap.pop());

   arr.sort((a ,b)=> a[1] -b[1]);

   return arr.map(x=> x[0])
};

console.log(maxSubsequence([2,1,3,3] , 2));
