const {
    student,
    updateAge,
    addGPA,
    getDetails
} = require('../src/exercise2');

test('student age can be updated', () => {
    let newAge = 23;
    updateAge(newAge)
    expect(student.age).toBe(newAge);
});

test('student can add new property (GPA)', () => {
    expect(student.GPA).toBe(undefined);
    let newGPA = 3.8;
    addGPA(newGPA);
    expect(student.GPA).toBe(3.8);
});

test('get details of the student object', () => {
    let studentDetails = getDetails();
    let expectedDetails = `${student.name} is ${student.age} years old and has a GPA of ${student.GPA}`;
    expect(studentDetails).toBe(expectedDetails);
});


