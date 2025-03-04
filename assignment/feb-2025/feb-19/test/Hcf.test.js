const {getHcf} = require("./../src/Hcf");

const sampleInput = [
    [4, 12, 8],
    [6, 9, 15],
    [6, 18, 12]
];
const sampleOutput = [
    [2,2],
    [3],
    [2,3]
];

test("Hcf", ()=> {
    for (let i = 0; i < sampleInput.length; i++) {
        let actual = getHcf(sampleInput[i]);
        let expected = sampleOutput[i];
        expect(actual).toEqual(expected);
    }

})