console.log('Remove even elements from array')

function removeEvenElements(arr){
    let oddsArr = []
    for(let a of arr){
        if(a % 2 != 0){
            oddsArr.push(a)
        }
    }
    return oddsArr
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(removeEvenElements(arr))


console.log('using filter')
function removeEvenElementsUsingFilter(arr){
    return arr.filter((v => v % 2 != 0))
}

console.log(removeEvenElementsUsingFilter(arr))