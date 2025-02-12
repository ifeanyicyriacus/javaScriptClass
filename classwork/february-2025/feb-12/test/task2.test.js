const {
    getScoresGreaterThan69,
    increaseScoreBy5,
    getSquareOfNumbers,
    distributeBooks,
    getClassAfternoonTiming,
    calculateTotalAmount
} = require("./../src/task2")

let testScores = [45, 56, 76, 86, 65, 34, 54, 65, 32, 46];
test("test that getScoresGreaterThan69 returns correct value", () => {
    let actual = getScoresGreaterThan69(testScores);
    let expected = [76, 86];
    expect(actual).toStrictEqual(expected);
});

let examGrade = [85, 92, 78, 88, 95];
test("test that increaseScoreBy5 returns correct value", () => {
    let actual = increaseScoreBy5(examGrade);
    let expected = [90, 97, 83, 93, 100];
    expect(actual).toStrictEqual(expected);
});

let listOfInteger = [2, 4, 6, 8, 10];
test("test that getSquareOfNumbers returns correct value", () => {
    let actual = getSquareOfNumbers(listOfInteger);
    let expected = [4, 16, 36, 64, 100];
    expect(actual).toStrictEqual(expected);
})

let members = ["Emily", "Jack", "Sophia", "Daniel"];
let books = [
    "Things fall apart",
    "Tales by moonlight",
    "Zero to one",
    "Sales book by Eti"
];
test("test that distributeBooks return correct value", () => {
    let actual = distributeBooks(members, books);
    let expected = [
        {member:"Emily", book:"Things fall apart",},
        {member:"Jack", book:"Tales by moonlight",},
        {member:"Sophia", book:"Zero to one",},
        {member:"Daniel", book:"Sales book by Eti"}
    ]
    expect(actual).toStrictEqual(expected);
});

let classTimings = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM", "9: 00 PM"];
test("test that getClassAfternoonTiming returns correct value", () => {
    let actual = getClassAfternoonTiming(classTimings);
    let expected = ["1:00 PM", "3:00 PM", "5:00 PM"];
    expect(actual).toStrictEqual(expected);
});

let expenses = {
    "groceries": 150,
    "drinking out": 100,
    "transportation": 50,
    "entertainment": 80
};
test("test that calculateTotalAmount returns correct value", () => {
    let actual = calculateTotalAmount(expenses);
    let expected = 380;
    expect(actual).toStrictEqual(expected);
});