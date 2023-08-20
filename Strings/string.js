console.log("Learning Strings!!!")

let name = "Ashutosh"
console.log(name)
console.log("Length of my name is"+" "+name.length)

let b1 = "Ashutosh"
let b2 = "Virat"

let sentence = `${b1} is fan of ${b2}`
console.log(sentence)

console.log("Escape Sequences")

let fruit = 'banana\'s'
console.log(fruit)


console.log("Strings are immutable")
let friend = 'Rupali'
friend[friend.lengthv-1] = 'y'
console.log(friend) 