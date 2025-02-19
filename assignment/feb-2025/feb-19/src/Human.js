class Human {
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    set name (name) {
        this.#name = name;
    }
    get name () {
        return this.#name;
    }
    set age (age) {
        this.#age = age;
    }
    get age () {
        return this.#age;
    }

    speak = () => (`Terve, Mina ${this.#name}`);
}

// let personOne = new Human("Chinedu", 12);
// console.log(personOne.name);
// console.log(personOne.name);
// console.log(personOne.age);

// console.log(personOne.getName());
// console.log(personOne.getAge());
// console.log(personOne.speak());

module.exports = {Human};