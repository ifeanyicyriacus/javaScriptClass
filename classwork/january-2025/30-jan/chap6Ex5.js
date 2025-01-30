function displaySortedNumbers(num1, num2, num3){
    let numbers = [Number(num1), Number(num2), Number(num3)]
    
    for(let i = 0; i < numbers.length; i++){
        for(let j = i+1; j < numbers.length; j++){
            if (numbers[i] > numbers[j]){
                let temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
                i--;
                break;
            }
        }
    }
    return `${numbers[0]}, ${numbers[1]}, ${numbers[2]}`
    
}


var input = require('prompt-sync')();
let numbers = input("Enter numbers (separated by ','): ");
numbers = numbers.split(",");
[num1, num2, num3] = numbers;
console.log(`The sorted number are: ${displaySortedNumbers(num1, num2, num3)}`)
