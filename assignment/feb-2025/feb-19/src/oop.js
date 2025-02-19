let animal = {
    name : "unknown",
    color : "",
    sound: function (sound){
        return `The ${this.color} ${this.name} makes a ${sound} sound`
    }
};

let dog = Object.create(animal);
console.log(dog);
dog.name = "Dog";
dog.color = "Black";
console.log(dog);
console.log(dog.sound("bark"));

let cat = {};
Object.setPrototypeOf(cat, dog);
console.log(cat);
cat.name = "pussycat";
console.log(cat.sound("meow"));
console.log(cat);
