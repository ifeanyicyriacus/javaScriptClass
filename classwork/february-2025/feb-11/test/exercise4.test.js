const {printNameAndQuantity, printTotalNumberOfInventory} = require('./../src/exercise4');
const inventory = {
    apple: 10,
    banana: 5,
    orange: 8,
    mango: 12
};

test('printNameAndQuantity works correctly', () => {
    let actual = printNameAndQuantity(inventory);
    let expected = "apple 10\nbanana 5\norange 8\nmango 12";
    expect(actual).toBe(expected);
});

test('that printTotalNumberOfInventory returns correct value',
    () => {
        let actual = printTotalNumberOfInventory(inventory);
        let expected = 35;
        expect(actual).toBe(expected);
    });