console.log("Functions")

function AvgTwoNum(a, b){
    return (a + b) / 2
}

let ans = AvgTwoNum(100, 100)
console.log(ans)


function IncrementByFive(a){
    a = a+5;
    console.log(a)
    return a
}

let a = 5
a = IncrementByFive(a)
console.log(a)


const sum = (a, b) => {
    console.log(a + b)
}

sum(100, 101)

const hello = () => {
    return "hello"
}

let v = hello()
console.log(v)