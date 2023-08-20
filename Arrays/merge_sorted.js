console.log("Merge two sorted arrays")

function mergeSort(arr1, arr2){
    let sortedArr = []
    let i = 0, j = 0
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] <= arr2[j]){
            sortedArr.push(arr1[i])
            i++
        }else{
            sortedArr.push(arr2[j])
            j++
        }
    }
    while(i < arr1.length){
        sortedArr.push(arr1[i])
        i++
    }
    while(j < arr2.length){
        sortedArr.push(arr2[j])
        j++
    }
    console.log(sortedArr.length)
    return sortedArr
}

let arr1 = [1, 5, 6, 10]
let arr2 = [2, 11, 12, 15]

console.log(mergeSort(arr1, arr2))

// let arr = [7, -1, 0, -100, 100, 3]
// arr.sort()
// console.log(arr)