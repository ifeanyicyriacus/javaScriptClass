const student = {
    name: 'John Doe',
    age: 22,
    courses: ["Math", "Physics", "Computer Science"],
    address: {
        city: "New York",
        zip: 10001,
    }
}

const updateAge = (age) => {
  student.age = age;
}

const addGPA = (gpa) => {
    student["GPA"] = gpa;
}

const getDetails = () => {
  let name = student.name;
  let age = student.age;
  let gpa = student.GPA;
  return `${name} is ${age} years old and has a GPA of ${gpa}`;
}

module.exports = {student, updateAge, addGPA, getDetails};