const {adder} = require('./../src/task1.js');
let input1 = [3,4,2];
let input2 = [9,9,9];
let input3 = [3,9,8,9];

test("that adder can perform arithmetic addition on arrays", ()=> {
        let actual1 = adder(input1);
        let expected1 = [3,4,3];
        expect(actual1).toStrictEqual(expected1);

        let actual2 = adder(input2);
        let expected2 = [1,0,0,0];
        expect(actual2).toStrictEqual(expected2);

        let actual3 = adder(input3);
        let expected3 = [3,9,9,0];
        expect(actual3).toStrictEqual(expected3);
});