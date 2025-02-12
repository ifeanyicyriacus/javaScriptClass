const getScoresGreaterThan69 = (scores) => {
    return scores.filter((score) => score > 69);
};

const increaseScoreBy5 = (scores) => {
    return scores.map((score) => score + 5);
}

const getSquareOfNumbers = (numbers) => {
    return numbers.map((number) => (number * number));
}

const distributeBooks = (members, books) => {
    let result = [];
    let index = 0;
    for(let member of members) {
        result.push({member: member, book: books[index++]});
    }
    return result;
}

const getClassAfternoonTiming = (classTimings) => {
    return classTimings
        .filter((time) => time.endsWith("PM"))
        .filter((time) => Number(time.split(":")[0]) < 6);
}

const calculateTotalAmount = (expenses) => {
    let total = 0;
    for(let expense in expenses) {
        total += expenses[expense];
    }
    return total;
}

module.exports = {
    getScoresGreaterThan69,
    increaseScoreBy5,
    getSquareOfNumbers,
    distributeBooks,
    getClassAfternoonTiming,
    calculateTotalAmount
}