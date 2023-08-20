console.log("Product of all elements except the self")

let arr = [1, 2, 3, 4]

function ProductExceptSelf(arr){
    let temp = 1
    let ans = []
    for(let i=0; i<arr.length; i++){
        ans[i] = temp
        temp = temp * arr[i]
    }

    temp = 1
    for(let i=arr.length-1; i>=0; i--){
        ans[i] = ans[i] * temp
        temp = temp * arr[i]
    }
    return ans
}

console.log(ProductExceptSelf(arr))