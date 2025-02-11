let bankAccount = require ('./../src/exercise3').bankAccount;


test('deposit and withdrawal works', () => {
    let oldBalance = bankAccount.balance;
    expect(oldBalance).toBe(500);
    bankAccount.deposit(200);
    let newBalance = bankAccount.balance;
    expect(newBalance).toBe(700);

    bankAccount.deposit(2000);
    newBalance = bankAccount.balance;
    expect(newBalance).toBe(2700);
    bankAccount.withdraw(1000);
    newBalance = bankAccount.balance;
    expect(newBalance).toBe(1700);
});