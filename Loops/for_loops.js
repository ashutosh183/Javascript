console.log("for loop")

for(let i=1; i<6; i++){
    console.log(i)
}

let obj = {
    ashutosh: 99,
    shiv: 100,
    ganesh: 97,
    krishna: 100
}

for(let a in obj){
    console.log(a)
}

console.log("For Of loop works for iterables")
for(let b of "ashutosh"){
    console.log(b)
}