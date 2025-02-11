let bankAccount = require ('./../src/exercise3').bankAccount;
const reset = bankAccount;
beforeEach(() => {
    bankAccount = reset;
    console.log(bankAccount)
});

test('deposit 200 into the account works', () => {
    let oldBalance = bankAccount.balance;
    expect(oldBalance).toBe(500);
    bankAccount.deposit(200);
    let newBalance = bankAccount.balance;
    expect(newBalance).toBe(700);
});

test('withdraw of 1000 is successful', () => {
    bankAccount.deposit(2000);
    let newBalance = bankAccount.balance;
    expect(newBalance).toBe(2500);
    bankAccount.withdraw(1000);
    newBalance = bankAccount.balance;
    expect(newBalance).toBe(1500);
});