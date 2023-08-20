let age = 19;

if(age < 18){
    console.log("Not eligible for drivers license....")
}

console.log("Now adding calculations to tell how long to wait before voting")

age = 17
if(age > 18){
    console.log("Redirecting for application....")
}else{
    let diff = 18 - age
    console.log("You are ",diff, " years early for drivers license")
}

let fruits = "Apple"

switch(fruits){
    case "Apple" || "apple": console.log("The fruit is apple")
    break
    case "Orange" || "orange":  console.log("The fruit is orange")
    break
    default: console.log("Invalid fruit")
}