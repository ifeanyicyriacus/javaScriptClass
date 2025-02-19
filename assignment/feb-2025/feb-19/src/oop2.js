function Human(name, age, complexion){
    this.name = name;
    this.age = age;
    this.complexion = complexion;

    this.describe = () => {
        return `My name is ${this.name}, I am ${this.age} years old.`;
    };
}

let personOne = new Human("Ifeanyi", 23, "Fair")
console.log(personOne.describe());