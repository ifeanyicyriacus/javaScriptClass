function reverse(number){
    result = "";
    count = String(number).length - 1;
    let numberStr = String(number);
    while (count >= 0){
        result += numberStr[count]
        count--;
    }
    return Number(result);
}

var input = require('prompt-sync')();
let number = input("Enter a number to reverse: ");
console.log(reverse(number))
