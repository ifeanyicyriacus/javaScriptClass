var prompt = require('prompt-sync')();

function reverse(number){
    let numberStr = String(number);
    let count = numberStr.length - 1;
    let result = "";
    while(count >= 0){
        result += numberStr[count]
        count--;
    }
    return result;
}

function isPalindrome(number){
    return String(number) === reverse(number)
}


let number = prompt("Enter number to reverse and test if palindrome: ");
let reversed = reverse(number);
isPalindrome = isPalindrome(number)? "is a palindrome": "is not a palindrome";

console.log(`(${number}) reversed is ${reversed}`);
console.log(`(${number}) ${isPalindrome}`);
