const multiply = require("./multiply");

test("Multiply two numbers", ()=> {
    let num1 = 2;
    let num2 = 4; //Arrange
    let actual = multiply(num1, num2); //Act
    let expected = 8;
    expect(actual).toBe(expected);//Assert
})
