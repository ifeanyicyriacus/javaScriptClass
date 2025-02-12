const getStudentAbove20 = (arr) => {
    return arr.filter((element) => (element.age > 20));
}

module.exports = {getStudentAbove20};