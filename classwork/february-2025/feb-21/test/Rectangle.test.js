const {Rectangle} = require('./../src/Rectangle')

test("you can get the rectangle name", () =>{
    let rectangle = new Rectangle("Semicolon door",100, 100);
    let actual = rectangle.name;
    let expected = "Semicolon door";
    expect(actual).toBe(expected);
});

test("you can get the rectangle area", () => {
    let rectangle = new Rectangle("cream crackers",100, 100);
    let actual = rectangle.getArea;
    let expected = 10_000;
    expect(actual).toBe(expected);
});

test("rectangle is a square", () => {
    let rectangle = new Rectangle("Floor tiles", 25, 25);
    let actual = rectangle.isSquare;
    let expected = true;
    expect(actual).toBe(expected);
});

test("rectangle is not a square", () => {
    let rectangle = new Rectangle("Floor tiles", 50, 25);
    let actual = rectangle.isSquare;
    let expected = false;
    expect(actual).toBe(expected);
});