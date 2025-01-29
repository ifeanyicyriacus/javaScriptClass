const person = {
    firstName: "John",
    lastName: "Doe",
    age: 25
}


function toString(person){
    return `First Name: ${person["firstName"]}, Last Name: ${person["lastName"]}, Age: ${person["age"]}`
}

console.log(toString(person))
