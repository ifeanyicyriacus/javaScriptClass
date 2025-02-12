function multiply(num1, num2){
    return num1 * num2
}

const addTwoNumbers = (num1, num2) => {
    return num1 + num2
}

const divideTwoNumber = (num1, num2) => {
    return num1 / num2
}

const getOddNumbers = (arrayOfNumbers) => {
    let result = [];
    for(let number of arrayOfNumbers){
        if (number % 2 != 0)
            result.push(number);
    }
    return result;
}

console.log(getOddNumbers([1,2,3,4,5,6]));
module.exports = {multiply, addTwoNumbers, divideTwoNumber, getOddNumbers};
