console.log("Two sum")

let arr = [1,21,3,14,5,60,7,6]
let val = 81

function findTwoSum(arr, val){
    arr.sort(function(a, b){
        return a - b
    })

    let i = 0
    let j = arr.length - 1
    while(i < j){
        if(arr[i] + arr[j] === val){
            return [arr[i], arr[j]]
        }else if(arr[i] + arr[j] > val){
            j--
        }else{
            i++
        }
    }
    return false
}

console.log(findTwoSum(arr, val))
console.log(findTwoSum(arr, val+val))