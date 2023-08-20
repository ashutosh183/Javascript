console.log("Operators in JS!!!")

let a = 100
let b = 3
console.log("Arithmetic Operators ===> ")
console.log(a + b)
console.log(a * b)
console.log(a ** b)
console.log(a - b)
console.log(Math.ceil(a / b))
console.log(b % a)
console.log(++a)
console.log(a++)
console.log(a)
console.log(a--)
console.log(a)
console.log(--a)

console.log("Assignment Operators ===> ")
let x
x = 5
console.log(x)
x += 5
console.log(x)
x -= 5
console.log(x)
x *= 2
console.log(x)
x /= 3
console.log(x)
x = Math.floor(x)
console.log(x)


let val_a = 6
let val_b = "6"

console.log("val_a == val_b", val_a == val_b)
console.log("val_a != val_b", val_a != val_b)
console.log("val_a === val_b", val_a === val_b)
console.log("val_a !== val_b", val_a !== val_b)

console.log(" == compares values whereas === compares type and values ")


console.log("Comparison operators")
console.log(" 5 > 7 ",5 > 7)
console.log(" 5 < 7 ",5 < 7)
console.log(" 7 >= 7 ",7 >= 7)
console.log(" 8 <= 7 ",8 <= 7)

console.log("Logical Operators")
console.log(" 5 < 7 && 6 < 7 ", 5  < 7 && 6 < 7)
console.log(" 5 >= 7 || 6 <= 7 ", 5 >= 7 || 6 <= 7)
console.log("!false", !false)
console.log("!true", !true)


//ternary operator
age = 21

console.log("You", age >= 21 ? "can participate in the election." : "cannot participate in the election.")
