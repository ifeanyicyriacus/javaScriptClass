const student = {
    name: 'John Doe',
    age: 22,
    courses: ["Math", "Physics", "Computer Science"],
    address: {
        city: "New York",
        zip: 10001,
    }
}
let studentName =()=> {return student.name;}
let secondCourse =()=>{ return student.courses[1];}
let zipCode =() => {return student.address.zip;}
module.exports = {studentName, secondCourse, zipCode};