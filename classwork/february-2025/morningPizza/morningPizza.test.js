const numberListToFreqDict = require('./morningPizza');

test('that function transforms a list into a frequency table', () => {
    let input = [2,2,1,5,3,5];
    let actual = numberListToFreqDict(input);
    let expected = { '1': 1, '2': 2, '3': 1, '5': 2 };
    expect(actual).toEqual(expected);
});
