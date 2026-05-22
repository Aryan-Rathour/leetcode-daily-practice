function heapify(arr, n, i) {
    let largest = i;
    
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if(left < n && arr[left] > arr[largest]){
        largest = left;
    }

    if(right < n && arr[right] > arr[largest]){
        largest = right;
    }

    if(largest !== i){
        [arr[i] , arr[largest]] = [arr[largest] , arr[i]]
        heapify(arr , n , largest)
    }
}


const buildHeap = (arr) => {
    let n = arr.length;
    let lastNonLeaf = Math.floor(n/2) - 1;

    for(let i = lastNonLeaf; i >=0 ; i--){
        heapify(arr , n , i)
    }
    return arr;
}
console.log(buildHeap([4, 10, 3, 5, 1]));
