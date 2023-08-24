const ashutosh = {
    firstName: "Ashutosh",
    lastName: "Pandey",
    age: 25,
    job: 'Software Developer',
    friends: ['Rupali', 'Dheeraj']
};

console.log(ashutosh)
console.log('---Friends of ashutosh---')
console.log(ashutosh.friends[0])

console.log(ashutosh['firstName'])

//bracket notation -> if we have to calculate a property name
//when we need a property from the user input.(if property is present or not)


let interestedIn = 'salary'

if(ashutosh[interestedIn]){
    console.log(ashutosh[interestedIn])
}else{
    console.log("Not found!!")
}

interestedIn = 'friends'
if(ashutosh[interestedIn]){
    console.log(ashutosh[interestedIn])
}else{
    console.log("Not found!!")
}
//any other case dot notation

ashutosh.location = 'Bangalore'
ashutosh['country'] = 'India'

console.log(ashutosh)