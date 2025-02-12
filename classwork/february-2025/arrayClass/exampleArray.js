
let [firstName, lastName] = ["firstName", "lastName"];

const array = [1, "egg", {firstName, lastName}, null, []];//Literal method

const arrayOfNumbers = new Array(2);//array constructor
[arrayOfNumbers[0], arrayOfNumbers[1]] = [34, 54];
arrayOfNumbers.push(1);
arrayOfNumbers.push(3);
arrayOfNumbers.push(4);
//[ 34, 54, 1, 3, 4 ]


let a = Array.of('name', 1);
//[ 'name', 1 ]

let d = Array.from(["asdfgh", 23,33]);
//[ 'asdfgh', 23, 33 ]

d = [ 'a', 89, 899, 9899 ];
d.shift();
//'a'
d
//[ 89, 899, 9899 ]
d.unshift("a")
//4
d
//[ 'a', 89, 899, 9899 ]

console.log(arrayOfNumbers);
console.log(array);
console.log(a);
// console.log(b);

let animals = ["dog", "cat", "fish", "rat", "sheep", "bird"];
let animals2 = animals.splice(0, 2, "giraff", "duck", "lion");
console.log(animals);
console.log(animals2);
console.log(animals.concat((animals2)));

