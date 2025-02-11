const {printNameAndQuantity, printTotalNumberOfInventory} = require('./../src/exercise4');

test('printNameAndQuantity works correctly', () => {
    let actual = printNameAndQuantity();
    let expected = "apple 10\nbanana 5\norange 8\nmango 12";
    expect(actual).toBe(expected);
});