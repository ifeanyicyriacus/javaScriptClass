const {Human} = require('./Human');

class Person extends Human{
    #gender;

    constructor(name, age, gender) {
        super(name, age);
        this.#gender = gender;
        // this.speak = () => (`Bonjour, ${this.name}`);
    }

    set gender (gender) {
        this.#gender = gender;
    }

    get gender () {
        return this.#gender;
    }
    speak = () => (`Bonjour, ${this.name}`);
}

let person = new Person("Chuks", 33, "male");
console.log(person.speak());
