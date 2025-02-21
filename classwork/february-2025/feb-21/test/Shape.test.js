const {Shape} = require('./../src/Shape');

test("test that you can get the shape name", () =>{
    let shape = new Shape("Spongebob");
    let expected = "Spongebob";
    let actual = shape.name;
    expect(actual).toEqual(expected);
})
