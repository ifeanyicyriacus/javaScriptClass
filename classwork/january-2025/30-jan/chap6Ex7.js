function futureInvestmentValue(investmentAmount, monthlyInterestRate, years){
    return investmentAmount * Math.pow((1 + monthlyInterestRate), years);
}

var input = require("prompt-sync")();
investmentAmount = Number(input("Enter the investment amount: "));
monthlyInterestRate =  Number(input("Enter the yearly interest rate: "));
years = Number(input("Enter the number of years: "));

let values = [investmentAmount];

for(let i = 1; i <= years; i++){
    values[i] = futureInvestmentValue(values[i-1], (monthlyInterestRate/12), 1);
}


console.log("Years\t\tFuture Value");
for(let i = 0; i < values.length; i++){
    console.log(`${i}\t\t${values[i]}`);
}
