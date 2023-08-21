console.log("Finding minimum element in array")

let arr = [40, 32, 6, 43, -6]

function FindMinimum(arr){
    let currMin = arr[0]
    for(let i=1; i<arr.length; i++){
        currMin = Math.min(arr[i], currMin)
    }
    return currMin
}


console.log(FindMinimum(arr))


function maxMin(arr) {
    var maxIdx = arr.length-1
    var minIdx = 0
    var maxElem = arr[maxIdx] + 1; // store any element that is greater than the maximum element in the array 
    for( var i = 0; i < (arr.length); i++) {
      // at even indices we will store maximum elements
      if (i % 2 == 0){  
        arr[i] += Math.floor((arr[maxIdx] % maxElem ) * maxElem)
        maxIdx -= 1
      }
      else { // at odd indices we will store minimum elements
        arr[i] += Math.floor((arr[minIdx] % maxElem ) * maxElem)
        minIdx += 1
      }
    }
    // dividing with maxElem to get original values.
    for( var i = 0; i < (arr.length); i++) {
      arr[i] = Math.floor(arr[i] / maxElem)
    }
    return arr
}

arr = [1,2,3,4,5,6,7,8,9];
console.log("Array before min/max:")
console.log(arr)
console.log("Array after min/max: ")
console.log(maxMin(arr))