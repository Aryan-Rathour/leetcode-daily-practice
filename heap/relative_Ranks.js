// - Problem link : https://leetcode.com/problems/relative-ranks/description/
// - Date : 02/09/2025
// - Difficulty: Easy
// - Approach : Heap

/**
 * @param {number[]} score
 * @return {string[]}
 */

class MaxHeap {
    constructor() {
        this.data = [];
    }

    push(val){
        this.data.push(val);
        this._heapifyUp()
    }

    pop(){
        if(this.size() === 0) return null;
        if(this.size() === 1) return this.data.pop();

        const max = this.data[0];
        this.data[0] = this.data.pop();
        this._heapifyDown();
        return max;
    }

    peek(){
        return this.size() > 0 ? this.data[0] : null;
    }

    size(){
        return this.data.length;
    }

    _heapifyUp(){
        let index = this.size() -1;
        while(index > 0){
            let parent = Math.floor((index - 1) / 2);
            if(this.data[parent][0] >= this.data[index][0]) break;
            [this.data[parent] , this.data[index]] = [this.data[index] , this.data[parent]];
            index = parent;
        }
    }

    _heapifyDown(){
        let index=0;
        const length = this.size();

        while(true){
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let largest = index;

            if(left < length && this.data[left][0] > this.data[largest][0]){
                largest = left;
            }
            if(right < length && this.data[right][0] > this.data[largest][0]){
                largest = right;
            }
            if (largest === index) break;
            [this.data[index] , this.data[largest]] = [this.data[largest] , this.data[index]];
            index = largest;
        }
    }
}

var findRelativeRanks = function(score) {
    const n = score.length;
    const heap = new MaxHeap();
    for(let i=0; i<n; i++){
        heap.push([score[i] , i]);
    }

    const result = Array(n);
    let rank = 1;
    while(heap.size() > 0){
        let [val , idx] = heap.pop();

        if(rank === 1) result[idx]= "Gold Medal";
        else if(rank === 2) result[idx]= "Silver Medal";
        else if(rank === 3) result[idx] = "Bronze Medal";
        else result[idx] = rank.toString();

        rank++;
    }
    return result;
};

console.log(findRelativeRanks([5,4,3,2,1]));
