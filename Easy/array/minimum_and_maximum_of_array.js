// - Problem link : https://www.geeksforgeeks.org/dsa/maximum-and-minimum-in-an-array/
// - Date : 01/01/2026
// - Difficulty: Easy
// - Approach :Array 

// const find_min_max_of_array = (arr)=>{
//     let min= arr[0];
//     let max=arr[0];
//     for(let i=0; i <arr.length; i++){
//         if(arr[i] < min ){
//             min = arr[i]
//         }
//         if(arr[i] > max){
//             max= arr[i]
//         }
//     }
//     return [min , max];
// };

// console.log(find_min_max_of_array([3, 5, 4, 1, 9]));


// version 2

const find_min_max_of_array_V2 = (arr)=>{
    
    let globalMin= arr[0];
    let globalMax= arr[0];

    let i = 0;
    while(i < arr.length - 1){
        
        let localMin , localMax;

        if (arr[i] < arr[i+1]){
            localMin=arr[i];
            localMax=arr[i+1];
        }
        else{
            localMin=arr[i+1];
            localMax=arr[i]
        }
        if(localMin < globalMin) globalMin=localMin;
        if(localMax > globalMax) globalMax=localMax
        i = i+2;

    }

    if(arr.length % 2 !== 0){
            let last = arr[arr.length - 1];
            if(last < globalMin) globalMin=last;
            if(last > globalMax) globalMax=last;
        }
    return [globalMin , globalMax]
}

console.log(find_min_max_of_array_V2([3, 5, 4, 1, 9]));

