const {multiply, addTwoNumbers, divideTwoNumber, getOddNumbers} = require("./multiply");

    const num1 = 10;
    const num2 = 2; //Arrange
    
test("Multiply two numbers", ()=> {
    let actual = multiply(num1, num2); //Act
    let expected = 20;
    expect(actual).toBe(expected);//Assert
})

test('add two numbers', () =>{
    let actual = addTwoNumbers(num1, num2);
    let expected = 12;
    expect(actual).toBe(expected);
})

test("divides a number by secend number", () => {
    let actual = divideTwoNumber(num1, num2);
    let expected = 5;
    expect(actual).toBe(expected);
})

test("return odd numbers", () => {
    let arrayOfNumbers = [1,2,3,4,8,5];
    let actual = getOddNumbers(arrayOfNumbers);
    let expected = [1, 3, 5];
    expect(actual).toStrictEqual(expected);
})


