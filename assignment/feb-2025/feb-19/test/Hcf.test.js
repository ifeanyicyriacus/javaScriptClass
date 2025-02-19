const {getHcf} = require("./../src/Hcf");

const sampleInput = [[4, 12, 8], [6, 9, 15], [6, 18, 12]];
const sampleOutput = [[2,2], [3], [2,3]];

test("Hcf", ()=> {
    let actual = getHcf(sampleInput[0]);
    let expected = sampleOutput[0];
    expect(actual).toEqual(expected);

    actual = getHcf(sampleInput[1]); //Act
    expected = sampleOutput[1];
    expect(actual).toEqual(expected);//Assert

    actual = getHcf(sampleInput[2]); //Act
    expected = sampleOutput[2];
    expect(actual).toEqual(expected);//Assert
})