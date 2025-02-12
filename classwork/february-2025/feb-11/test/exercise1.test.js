const {studentName, secondCourse, zipCode} = require('./../src/exercise1');

const student = {
    name: 'John Doe',
    age: 22,
    courses: ["Math", "Physics", "Computer Science"],
    address: {
        city: "New York",
        zip: 10001,
    }
}

test('studentName value is correct', () => {
    expect(student.name).toBe(studentName());
});

test('secondCourse value is correct', () => {
    expect(student.courses[1]).toBe(secondCourse());
});

test('zipCode value is correct', () => {
    expect(student.address.zip).toBe(zipCode());
});
