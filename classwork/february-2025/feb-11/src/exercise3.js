const bankAccount = {
    owner: "Alice",
    balance: 500,
    deposit: (amount) => {
        bankAccount.balance += amount;
    },
    withdraw: (amount) => {
        if (amount < bankAccount.balance) {
            throw new Error('Account balance is insufficient');
        }
        bankAccount.balance -= amount;
    },
}

module.exports = {bankAccount}