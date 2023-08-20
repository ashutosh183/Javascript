console.log('length of a string')

let myName = 'Ashutosh'
console.log(myName.length)
console.log()

console.log('string in uppercase')
console.log(myName.toLocaleUpperCase())
console.log('string in lowercase')
console.log(myName.toLowerCase())
console.log()

console.log("Slice a string")
console.log("End index is exclusive i.e is [,)")
console.log(myName.slice(1, 6))
console.log(myName.slice(2)) //this traverses from index 2 to till the end of character
console.log()

console.log("Replace in a string")
myName = 'Ashutosh Kumar'
myName = myName.replace('Kumar', 'Pandey')
console.log(myName)
console.log()

console.log("Concatenation in a string")
let myCrushName = 'Pritha'
myCrushName = myCrushName.concat(' Sri')
console.log(myCrushName)
console.log()

console.log("Trim spaces")
let gameName = "                                                 Cricket"
console.log(gameName)
gameName = gameName.trim()
console.log(gameName)


for(let ch of myName){
    console.log(ch)
}

console.log(myCrushName.indexOf('y'))
console.log(myCrushName.includes('y'))


let str = "Please give me a amount of 10000"
let amount = str.slice("Please give me a amount of ".length)
console.log(amount)
amount = parseInt(amount)
console.log(typeof amount)