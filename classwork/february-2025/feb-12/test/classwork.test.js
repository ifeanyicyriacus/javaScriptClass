const {getStudentAbove20} = require('./../src/classwork');

test("Return Object with age greater than 20", () => {
    const students = [
        {name: "John", age: 20},
        {name: "Joe", age: 21},
        {name: "Alice", age: 19},
        {name : "Dan", age: 22},
    ];

    let actual = getStudentAbove20(students);
    let expected = [
        {name: "Joe", age: 21},
        {name: "Dan", age: 22}
    ]
    expect(actual).toStrictEqual(expected);
})