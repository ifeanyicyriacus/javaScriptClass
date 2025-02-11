const inventory = {
    apple: 10,
    banana: 5,
    orange: 8,
    mango: 12
};

const printNameAndQuantity = () => {
    let result = "";
    for (const item in inventory) {
        result += `${item} ${inventory[item]}\n`;
    }
    return result.trim();
}

const printTotalNumberOfInventory = () => {
    let total = 0;
    for (const item in inventory) {
        total += inventory[item];
    }
    return total;
}

module.exports = {printNameAndQuantity, printTotalNumberOfInventory}
