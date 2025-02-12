
const printNameAndQuantity = (inventory) => {
    let result = "";
    for (const item in inventory) {
        result += `${item} ${inventory[item]}\n`;
    }
    return result.trim();
}

const printTotalNumberOfInventory = (inventory) => {
    let total = 0;
    for (const item in inventory) {
        total += inventory[item];
    }
    return total;
}

module.exports = {printNameAndQuantity, printTotalNumberOfInventory}
