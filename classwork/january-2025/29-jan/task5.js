const person = {
    firstName: "Ifeanyi",
    lastName: "Cyriacus",
    fullName: function (){return (person["firstName"] + " " + person["lastName"])}
}


console.log(person.fullName())
