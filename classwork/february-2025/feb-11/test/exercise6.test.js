const {findExpensiveProducts} = require("./../src/exercise6")

const products = [
    {id : 1, name : "Laptop", price : 1200},
    {id : 2, name : "Phone", price : 800},
    {id : 3, name : "Tablet", price : 500},
    {id : 4, name : "Desktop", price : 700}
];

test("that findExpensiveProducts returns items above the threshold",
    () => {
        let actual = findExpensiveProducts(products, 700);
        let expected = [
            {id : 1, name : "Laptop", price : 1200},
            {id : 2, name : "Phone", price : 800}
        ];
        expect(actual).toStrictEqual(expected);
    });
